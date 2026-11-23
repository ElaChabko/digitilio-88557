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
  useParams,
} from "react-router-dom";

import Index from "./pages/Index";
import English from "./pages/English";
import Blog from "./pages/Blog";
import BlogPost from "./pages/Blog/BlogPost";
import Realizacje from "./pages/Realizacje";
import Marketing from "./pages/Marketing";
import CaseStudy from "./pages/CaseStudies/CaseStudy";
import Systems from "./pages/Systems";
import SystemExamplePage from "./pages/SystemExamplePage";
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
/** /wspolprace/:slug → /realizacje/:slug */
const LegacyCaseStudyRedirect = () => {
  const { slug } = useParams();
  return <Navigate to={`/realizacje/${slug ?? ""}`} replace />;
};

export const AppRoutes = () => (
  <>
    <ScrollToTop />
    <CookieConsent />

    <Routes>
      <Route path="/" element={<Index />} />

      {/* WERSJA ANGIELSKA (jedna podstrona) */}
      <Route path="/en" element={<English />} />

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
      {/* MARKETING (filar 1) */}
      <Route path="/marketing" element={<Marketing />} />

      {/* REALIZACJE: case studies marketingowe + przykłady systemów */}
      <Route path="/realizacje" element={<Realizacje />} />
      <Route path="/realizacje/:slug" element={<CaseStudy />} />

      {/* STARE ADRESY WSPÓŁPRAC (na serwerze też 301 w public/_redirects) */}
      <Route path="/wspolprace" element={<Navigate to="/realizacje" replace />} />
      <Route path="/wspolprace/:slug" element={<LegacyCaseStudyRedirect />} />

      {/* SYSTEMY DLA FIRM (drugi filar: aplikacje, automatyzacje, AI) */}
      <Route path="/systemy-dla-firm" element={<Systems />} />
      <Route path="/systemy-dla-firm/:slug" element={<SystemExamplePage />} />

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
