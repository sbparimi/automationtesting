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
import PlaywrightLesson from "./pages/PlaywrightLesson";
import CypressCourse from "./pages/CypressCourse";
import CypressLesson from "./pages/CypressLesson";
import TestManagementCourse from "./pages/TestManagementCourse";
import TestManagementLesson from "./pages/TestManagementLesson";
import AiInQaCourse from "./pages/AiInQaCourse";
import AiQaLesson from "./pages/AiQaLesson";
import JobSearch from "./pages/JobSearch";
import FrameworksCourse from "./pages/FrameworksCourse";
import FrameworkLesson from "./pages/FrameworkLesson";
import Auth from "./pages/Auth";
import AdminPanel from "./pages/AdminPanel";
import AdminLogin from "./pages/AdminLogin";

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
          <Route path="/playwright-lesson/:lessonId" element={<PlaywrightLesson />} />
          <Route path="/cypress" element={<CypressCourse />} />
          <Route path="/cypress-lesson/:lessonId" element={<CypressLesson />} />
          <Route path="/test-management" element={<TestManagementCourse />} />
          <Route path="/test-management-lesson/:lessonId" element={<TestManagementLesson />} />
          <Route path="/ai-in-qa" element={<AiInQaCourse />} />
          <Route path="/ai-qa-lesson/:lessonId" element={<AiQaLesson />} />
          <Route path="/jobs" element={<JobSearch />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/adminn" element={<AdminLogin />} />
          <Route path="/frameworks" element={<FrameworksCourse />} />
          <Route path="/framework-lesson/:lessonId" element={<FrameworkLesson />} />
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
