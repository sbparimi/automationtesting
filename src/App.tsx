import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FrameworkDetails from "./pages/FrameworkDetails";
import CourseDetails from "./pages/CourseDetails";
import BeginnerGuide from "./pages/BeginnerGuide";
import MasterTypeScript from "./pages/MasterTypeScriptNew";
import TypeScriptLesson from "./pages/TypeScriptLesson";
import PlaywrightCourse from "./pages/PlaywrightCourse";
import CypressCourse from "./pages/CypressCourse";
import CypressLesson from "./pages/CypressLesson";
import JobSearch from "./pages/JobSearch";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/beginner-guide" element={<BeginnerGuide />} />
          <Route path="/master-typescript" element={<MasterTypeScript />} />
          <Route path="/typescript-lesson/:lessonId" element={<TypeScriptLesson />} />
          <Route path="/playwright" element={<PlaywrightCourse />} />
          <Route path="/cypress" element={<CypressCourse />} />
          <Route path="/cypress-lesson/:lessonId" element={<CypressLesson />} />
          <Route path="/jobs" element={<JobSearch />} />
          <Route path="/lesson/:lessonId" element={<TypeScriptLesson />} />
          <Route path="/framework/:frameworkId" element={<FrameworkDetails />} />
          <Route path="/course/:pathId/:courseId" element={<CourseDetails />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
