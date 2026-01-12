import { useEffect } from "react";

type PageMeta = {
  title: string;
  description: string;
  canonical?: string;
};

const ensureMetaTag = (name: string) => {
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  return tag as HTMLMetaElement;
};

const ensureCanonical = () => {
  let link = document.querySelector("link[rel=\"canonical\"]");
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  return link as HTMLLinkElement;
};

const usePageMeta = ({ title, description, canonical }: PageMeta) => {
  useEffect(() => {
    document.title = title;
    ensureMetaTag("description").setAttribute("content", description);
    if (canonical) {
      ensureCanonical().setAttribute("href", canonical);
    }
  }, [title, description, canonical]);
};

export default usePageMeta;
