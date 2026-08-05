import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import ProjectDetail from "./pages/ProjectDetail.tsx";
import Projects from "./pages/Projects.tsx";
import Testimonials from "./pages/Testimonials.tsx";
import Admin from "./pages/Admin.tsx";

// Temmora Imports
import { TemmoraLayout } from "./components/temmora/TemmoraLayout.tsx";
import { TemmoraHome } from "./pages/temmora/TemmoraHome.tsx";
import { TemplateDetail } from "./pages/temmora/TemplateDetail.tsx";
import { ProfessionalSetup } from "./pages/temmora/ProfessionalSetup.tsx";
import { CustomWebsite } from "./pages/temmora/CustomWebsite.tsx";
import { ConsultationOnboarding } from "./pages/temmora/ConsultationOnboarding.tsx";
import { Templates } from "./pages/temmora/Templates.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/work/:slug" element={<ProjectDetail kind="work" />} />
          <Route path="/products/:slug" element={<ProjectDetail kind="product" />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/admin/*" element={<Admin />} />
          
          {/* Temmora Experience Routes */}
          <Route path="/temmora" element={<TemmoraLayout />}>
            <Route index element={<TemmoraHome />} />
            <Route path="templates" element={<Templates />} />
            <Route path="templates/:slug" element={<TemplateDetail />} />
            <Route path="services/setup" element={<ProfessionalSetup />} />
            <Route path="services/custom" element={<CustomWebsite />} />
            <Route path="onboarding" element={<ConsultationOnboarding />} />
          </Route>

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
