import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, Feather } from "lucide-react"; // Changed Flamingo to Feather
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/navbar"; // updated to use navbar layout
import Index from "./pages/Index.jsx";
import Flamingos from "./pages/Flamingos.jsx"; // new import for Flamingos page
const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home", // Feel free to change this to your liking
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Flamingos", // New navigation item
    to: "/flamingos",
    icon: <Feather className="h-4 w-4" />, // Changed Flamingo to Feather
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="flamingos" element={<Flamingos />} /> {/* New route */}
              {/* Add more routes here as needed */}
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
