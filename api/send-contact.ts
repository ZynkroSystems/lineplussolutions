import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:4173",
  process.env.PUBLIC_SITE_URL,
].filter(Boolean);

const getOrigin = (req: VercelRequest) => req.headers.origin || "";

const setCors = (req: VercelRequest, res: VercelResponse) => {
  const origin = getOrigin(req);
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
};

const sendContact = async (req: VercelRequest, res: VercelResponse) => {
  setCors(req, res);

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ ok: false, error: "Method not allowed" });
    return;
  }

  const toEmail = process.env.LEAD_EMAIL;
  const fromEmail = process.env.FROM_EMAIL || "Lineplus Leads <onboarding@resend.dev>";

  if (!process.env.RESEND_API_KEY || !toEmail) {
    res.status(500).json({ ok: false, error: "Email configuration missing" });
    return;
  }

  const {
    fullName,
    companyName,
    email,
    phone,
    serviceNeeded,
    message,
    source,
  } = req.body || {};

  if (!fullName || !message) {
    res.status(400).json({ ok: false, error: "Missing required fields" });
    return;
  }

  const subject = `New Mechanical Inquiry${source ? ` (${source})` : ""}`;
  const html = `
    <h2>New Lineplus Inquiry</h2>
    <p><strong>Name:</strong> ${fullName}</p>
    ${companyName ? `<p><strong>Company:</strong> ${companyName}</p>` : ""}
    ${email ? `<p><strong>Email:</strong> ${email}</p>` : ""}
    ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
    ${serviceNeeded ? `<p><strong>Service:</strong> ${serviceNeeded}</p>` : ""}
    <p><strong>Message:</strong></p>
    <p>${String(message).replace(/\n/g, "<br />")}</p>
  `;

  try {
    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject,
      html,
    });

    res.status(200).json({ ok: true });
  } catch (error) {
    res.status(500).json({ ok: false, error: "Email send failed" });
  }
};

export default sendContact;
