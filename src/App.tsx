
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes"; // Import ThemeProvider

import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import CallPage from "./pages/CallPage";
import PostCallPage from "./pages/PostCallPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner /> {/* Sonner uses useTheme, so ThemeProvider should be an ancestor */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} /> 
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/call" element={<CallPage />} />
            <Route path="/post-call" element={<PostCallPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
