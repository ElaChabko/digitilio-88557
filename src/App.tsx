import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Index from "./pages/Index";
import Blog from "./pages/Blog";
import BlogPost from "./pages/Blog/BlogPost";
import Wspolprace from "./pages/Wspolprace";
import CaseStudy from "./pages/CaseStudies/CaseStudy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiesPolicy from "./pages/CookiesPolicy";
import NotFound from "./pages/NotFound";

import { CookieConsent } from "@/components/CookieConsent";
import { LazyGtag } from "@/components/LazyGtag";
import { ScrollToTop } from "@/components/ScrollToTop";

const queryClient = new QueryClient();

/**
 * Trasy aplikacji – używane zarówno w przeglądarce (BrowserRouter),
 * jak i przy prerenderingu (StaticRouter w entry-server.tsx).
 */
export const AppRoutes = () => (
  <>
    <ScrollToTop />
    <CookieConsent />

    <Routes>
      <Route path="/" element={<Index />} />

      {/* BAZA WIEDZY */}
      <Route path="/baza-wiedzy" element={<Blog />} />

      {/* STARY /BLOG PRZEKIEROWUJEMY DO BAZY WIEDZY */}
      <Route
        path="/blog"
        element={<Navigate to="/baza-wiedzy" replace />}
      />

      {/* ISTNIEJĄCE ARTYKUŁY ZOSTAJĄ POD /BLOG/:SLUG */}
      <Route path="/blog/:slug" element={<BlogPost />} />

      {/* WSPÓŁPRACE */}
      <Route path="/wspolprace" element={<Wspolprace />} />
      <Route path="/wspolprace/:slug" element={<CaseStudy />} />

      {/* POLITYKI */}
      <Route
        path="/polityka-prywatnosci"
        element={<PrivacyPolicy />}
      />

      <Route
        path="/polityka-cookies"
        element={<CookiesPolicy />}
      />

      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);

export const AppProviders = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <LazyGtag />
      {children}
    </TooltipProvider>
  </QueryClientProvider>
);

const App = () => (
  <AppProviders>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </AppProviders>
);

export default App;
