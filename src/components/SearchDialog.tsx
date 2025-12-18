import { useState, useMemo } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, BookOpen, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { allCodexCourses } from "@/data/codexLessons";
import { allPlaywrightCourses } from "@/data/playwrightLessons";
import { allCypressCourses } from "@/data/cypressLessons";
import { allTypeScriptCourses } from "@/data/typeScriptLessons";
import { allTestManagementCourses } from "@/data/testManagementLessons";
import { allAiInQaCourses } from "@/data/aiInQaLessons";

interface SearchResult {
  id: string;
  title: string;
  description: string;
  duration: string;
  courseName: string;
  path: string;
  type: "lesson" | "course";
}

export const SearchDialog = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const allResults = useMemo(() => {
    const results: SearchResult[] = [];

    // Add courses
    const courses = [
      { name: "AI Codex", path: "/codex-course", data: allCodexCourses, lessonPath: "codex-lesson" },
      { name: "Playwright", path: "/playwright", data: allPlaywrightCourses, lessonPath: "playwright-lesson" },
      { name: "Cypress", path: "/cypress", data: allCypressCourses, lessonPath: "cypress-lesson" },
      { name: "TypeScript", path: "/master-typescript", data: allTypeScriptCourses, lessonPath: "typescript-lesson" },
      { name: "Test Management", path: "/test-management", data: allTestManagementCourses, lessonPath: "test-management-lesson" },
      { name: "AI in QA", path: "/ai-in-qa", data: allAiInQaCourses, lessonPath: "ai-qa-lesson" },
    ];

    courses.forEach(({ name, path, data, lessonPath }) => {
      // Add course itself
      results.push({
        id: path,
        title: name,
        description: `Complete ${name} course`,
        duration: "Full Course",
        courseName: name,
        path,
        type: "course"
      });

      // Add lessons from each course
      data.forEach((course: any) => {
        if (course.sections) {
          course.sections.forEach((section: any) => {
            section.lessons.forEach((lesson: any) => {
              results.push({
                id: lesson.id,
                title: lesson.title,
                description: lesson.description,
                duration: lesson.duration,
                courseName: name,
                path: `/${lessonPath}/${lesson.id}`,
                type: "lesson"
              });
            });
          });
        } else if (course.lessons) {
          course.lessons.forEach((lesson: any) => {
            results.push({
              id: lesson.id,
              title: lesson.title,
              description: lesson.description,
              duration: lesson.duration,
              courseName: name,
              path: `/${lessonPath}/${lesson.id}`,
              type: "lesson"
            });
          });
        }
      });
    });

    return results;
  }, []);

  const filteredResults = useMemo(() => {
    if (!query.trim()) return [];
    
    const searchTerms = query.toLowerCase().split(" ");
    
    return allResults
      .filter(result => {
        const searchText = `${result.title} ${result.description} ${result.courseName}`.toLowerCase();
        return searchTerms.every(term => searchText.includes(term));
      })
      .slice(0, 20);
  }, [query, allResults]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Search className="w-5 h-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Search className="w-5 h-5" />
            Search Courses & Lessons
          </DialogTitle>
        </DialogHeader>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search for courses, lessons, topics..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10"
            autoFocus
          />
        </div>

        <div className="flex-1 overflow-y-auto mt-4 space-y-2">
          {query.trim() === "" ? (
            <div className="text-center py-12 text-muted-foreground">
              <Search className="w-12 h-12 mx-auto mb-4 opacity-20" />
              <p>Start typing to search across all courses and lessons</p>
              <p className="text-sm mt-2">Search {allResults.length} items</p>
            </div>
          ) : filteredResults.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              <p>No results found for "{query}"</p>
              <p className="text-sm mt-2">Try different keywords</p>
            </div>
          ) : (
            filteredResults.map((result) => (
              <Link
                key={result.id}
                to={result.path}
                onClick={() => setOpen(false)}
                className="block p-4 rounded-xl border border-border hover:bg-muted/50 transition-all group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant={result.type === "course" ? "default" : "secondary"} className="text-xs">
                        {result.courseName}
                      </Badge>
                      {result.type === "lesson" && (
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          {result.duration}
                        </span>
                      )}
                    </div>
                    <h4 className="font-medium text-foreground group-hover:text-primary transition-colors truncate">
                      {result.title}
                    </h4>
                    <p className="text-sm text-muted-foreground line-clamp-1 mt-1">
                      {result.description}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                </div>
              </Link>
            ))
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
