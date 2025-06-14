import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./hooks/useLanguage";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Welcome from "./pages/Welcome";
import LanguageSelection from "./pages/LanguageSelection";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import EmailVerification from "./pages/EmailVerification";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import PersonalInfo from "./pages/PersonalInfo";
import LegalTutor from "./pages/LegalTutor";
import ContactDetails from "./pages/ContactDetails";
import SpecificInfo from "./pages/SpecificInfo";
import OtherDocs from "./pages/OtherDocs";
import Chatbot from "./pages/Chatbot";
import NotFound from "./pages/NotFound";
import Blog from '@/pages/Blog';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Router>
            <Layout>
              <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/language" element={<LanguageSelection />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/email-verification" element={<EmailVerification />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/home" element={<Home />} />
                <Route path="/personal-info" element={<PersonalInfo />} />
                <Route path="/legal-tutor" element={<LegalTutor />} />
                <Route path="/contact-details" element={<ContactDetails />} />
                <Route path="/specific-info" element={<SpecificInfo />} />
                <Route path="/other-docs" element={<OtherDocs />} />
                <Route path="/chatbot" element={<Chatbot />} />
                <Route path="/original" element={<Index />} />
                <Route path="/blog" element={<Layout><Blog /></Layout>} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          </Router>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
