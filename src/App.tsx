import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import ScrollToTop from "./components/ScrollToTop";
import ChatWidget from "./components/ChatWidget";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Insights from "./pages/Insights";
import OvenChainManagement from "./pages/insights/OvenChainManagement";
import PneumaticMaintenance from "./pages/insights/PneumaticMaintenance";
import SpiralProverReliability from "./pages/insights/SpiralProverReliability";
import CoolingConveyorAlignment from "./pages/insights/CoolingConveyorAlignment";
import StackerTimingControl from "./pages/insights/StackerTimingControl";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/oven-chain-management" element={<OvenChainManagement />} />
          <Route path="/insights/pneumatic-maintenance" element={<PneumaticMaintenance />} />
          <Route path="/insights/spiral-prover-reliability" element={<SpiralProverReliability />} />
          <Route path="/insights/cooling-conveyor-alignment" element={<CoolingConveyorAlignment />} />
          <Route path="/insights/stacker-timing-control" element={<StackerTimingControl />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ChatWidget />
      </BrowserRouter>
      <Analytics />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
