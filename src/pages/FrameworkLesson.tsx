import { useParams, Link, useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Clock, Lock, BookOpen, MessageCircle, Crown } from "lucide-react";
import { allFrameworksCourses } from "@/data/frameworksLessons";
import { useSubscription } from "@/hooks/useSubscription";
import { UpgradeModal } from "@/components/UpgradeModal";

const FrameworkLesson = () => {
  const { lessonId } = useParams<{ lessonId: string }>();
  const navigate = useNavigate();
  const { isPremium, checkAccess, showUpgradeModal, setShowUpgradeModal, triggerSource } = useSubscription();

  // Find the lesson across all courses
  let currentLesson = null;
  let currentCourse = null;
  let lessonIndex = 0;
  let allLessons: any[] = [];

  for (const course of allFrameworksCourses) {
    for (let i = 0; i < course.lessons.length; i++) {
      allLessons.push({ ...course.lessons[i], courseTitle: course.title, courseIcon: course.icon });
      if (course.lessons[i].id === lessonId) {
        currentLesson = course.lessons[i];
        currentCourse = course;
        lessonIndex = allLessons.length - 1;
      }
    }
  }

  if (!currentLesson || !currentCourse) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Lesson not found</h1>
          <Link to="/frameworks" className="text-primary hover:underline">
            Back to Frameworks
          </Link>
        </div>
      </div>
    );
  }

  const prevLesson = lessonIndex > 0 ? allLessons[lessonIndex - 1] : null;
  const nextLesson = lessonIndex < allLessons.length - 1 ? allLessons[lessonIndex + 1] : null;

  const canAccessLesson = currentLesson.isFree || isPremium();

  const whatsappNumber = "31616270233";
  const whatsappMessage = encodeURIComponent(`Hi! I want to access the lesson "${currentLesson.title}" in the Frameworks course. Please help me subscribe (€2.99/month).`);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  if (!canAccessLesson) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-32 pb-16 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
              <Lock className="w-10 h-10 text-muted-foreground" />
            </div>
            <h1 className="text-3xl font-bold mb-4">Premium Content</h1>
            <p className="text-muted-foreground mb-8">
              This lesson requires a premium subscription. Unlock all {allLessons.length}+ framework lessons for just €2.99/month.
            </p>
            <Card className="bg-gradient-to-br from-primary/10 to-background border-primary/30 mb-6">
              <CardContent className="p-6">
                <Crown className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{currentLesson.title}</h3>
                <p className="text-muted-foreground mb-4">{currentLesson.description}</p>
                <Button 
                  size="lg"
                  className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white gap-2"
                  onClick={() => window.open(whatsappLink, '_blank')}
                >
                  <MessageCircle className="w-5 h-5" />
                  Unlock via WhatsApp - €2.99/month
                </Button>
              </CardContent>
            </Card>
            <Link to="/frameworks">
              <Button variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Frameworks
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-28 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/frameworks" className="hover:text-primary transition-colors">Frameworks</Link>
            <span>/</span>
            <span>{currentCourse.title}</span>
            <span>/</span>
            <span className="text-foreground">{currentLesson.title}</span>
          </div>

          {/* Lesson Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="secondary">{currentCourse.icon} {currentCourse.title}</Badge>
              {currentLesson.isFree && (
                <Badge variant="outline" className="text-success border-success/30">FREE</Badge>
              )}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{currentLesson.title}</h1>
            <div className="flex items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{currentLesson.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                <span>Lesson {lessonIndex + 1} of {allLessons.length}</span>
              </div>
            </div>
          </div>

          {/* Lesson Content */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Lesson Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">{currentLesson.description}</p>
              
              <div className="bg-muted/50 p-6 rounded-lg">
                <h3 className="font-semibold mb-4">What you'll learn:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                    <span>Core concepts and fundamentals of this framework pattern</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                    <span>Practical implementation with code examples</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                    <span>Best practices for production environments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                    <span>Common pitfalls and how to avoid them</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-primary/5 to-background rounded-lg border border-primary/20">
                <p className="text-center text-muted-foreground">
                  Full lesson content including video, code samples, and exercises coming soon. 
                  <br />
                  <span className="text-primary">Subscribe to get notified when this lesson is published!</span>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            {prevLesson ? (
              <Link to={`/framework-lesson/${prevLesson.id}`}>
                <Button variant="outline" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Previous: {prevLesson.title.slice(0, 30)}...
                </Button>
              </Link>
            ) : (
              <div />
            )}
            
            {nextLesson ? (
              <Link to={`/framework-lesson/${nextLesson.id}`}>
                <Button className="gap-2 bg-primary hover:bg-primary-hover">
                  Next: {nextLesson.title.slice(0, 30)}...
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            ) : (
              <Link to="/frameworks">
                <Button className="gap-2 bg-success hover:bg-success/90">
                  Complete Course
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>

      <Footer />

      <UpgradeModal 
        isOpen={showUpgradeModal} 
        onClose={() => setShowUpgradeModal(false)}
        triggerSource={triggerSource}
      />
    </div>
  );
};

export default FrameworkLesson;
