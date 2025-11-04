import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Search, MapPin, Building, Clock, ExternalLink } from "lucide-react";
import { useState } from "react";

const JobSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [timeFilter, setTimeFilter] = useState<string[]>([]);
  const [visaSponsorship, setVisaSponsorship] = useState(false);

  const handleTimeFilterChange = (value: string, checked: boolean) => {
    if (checked) {
      setTimeFilter([...timeFilter, value]);
    } else {
      setTimeFilter(timeFilter.filter(f => f !== value));
    }
  };

  // Mock job data - in production this would come from an API
  const mockJobs = [
    {
      id: 1,
      title: "Senior QA Automation Engineer",
      company: "TechCorp Europe",
      location: "Berlin, Germany",
      posted: "24 hours",
      visaSponsorship: true,
      description: "Looking for experienced Playwright/Cypress automation engineer",
      salary: "€70,000 - €90,000"
    },
    {
      id: 2,
      title: "Test Automation Lead",
      company: "FinTech Solutions",
      location: "Amsterdam, Netherlands",
      posted: "2 days",
      visaSponsorship: true,
      description: "Lead our automation testing efforts with modern frameworks",
      salary: "€80,000 - €100,000"
    },
    {
      id: 3,
      title: "QA Engineer - Automation",
      company: "Digital Innovations",
      location: "Barcelona, Spain",
      posted: "3 days",
      visaSponsorship: false,
      description: "Join our QA team building scalable test automation",
      salary: "€50,000 - €65,000"
    },
    {
      id: 4,
      title: "SDET - TypeScript/Playwright",
      company: "CloudTech GmbH",
      location: "Munich, Germany",
      posted: "5 days",
      visaSponsorship: true,
      description: "Build and maintain our E2E testing infrastructure",
      salary: "€75,000 - €95,000"
    },
    {
      id: 5,
      title: "QA Automation Specialist",
      company: "ECommerce Group",
      location: "Dublin, Ireland",
      posted: "1 week",
      visaSponsorship: true,
      description: "Cypress and API testing automation specialist needed",
      salary: "€60,000 - €75,000"
    },
    {
      id: 6,
      title: "Senior Test Engineer",
      company: "MedTech Solutions",
      location: "Copenhagen, Denmark",
      posted: "1 week",
      visaSponsorship: false,
      description: "Healthcare software testing with Playwright",
      salary: "DKK 550,000 - 700,000"
    }
  ];

  const filterJobs = () => {
    return mockJobs.filter(job => {
      // Search filter
      const matchesSearch = searchQuery === "" || 
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.location.toLowerCase().includes(searchQuery.toLowerCase());

      // Visa sponsorship filter
      const matchesVisa = !visaSponsorship || job.visaSponsorship;

      // Time filter
      let matchesTime = timeFilter.length === 0;
      if (timeFilter.includes("24h") && job.posted.includes("24 hours")) matchesTime = true;
      if (timeFilter.includes("2d") && job.posted.includes("2 days")) matchesTime = true;
      if (timeFilter.includes("1w") && job.posted.includes("week")) matchesTime = true;

      return matchesSearch && matchesVisa && matchesTime;
    });
  };

  const filteredJobs = filterJobs();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-6 bg-gradient-button">QA Automation Jobs</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-text bg-clip-text text-transparent">
              Find QA Jobs in Europe
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover automation testing opportunities across Europe with visa sponsorship options
            </p>
          </div>

          {/* Search and Filters */}
          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="space-y-6">
                {/* Search Bar */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    placeholder="Search by job title, company, or location..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 h-12 text-base"
                  />
                </div>

                {/* Filters Row */}
                <div className="flex flex-wrap gap-6 items-start">
                  {/* Time Posted Filters */}
                  <div className="space-y-3">
                    <Label className="text-sm font-semibold">Posted Within</Label>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="24h" 
                          checked={timeFilter.includes("24h")}
                          onCheckedChange={(checked) => handleTimeFilterChange("24h", checked as boolean)}
                        />
                        <Label htmlFor="24h" className="cursor-pointer">Last 24 hours</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="2d" 
                          checked={timeFilter.includes("2d")}
                          onCheckedChange={(checked) => handleTimeFilterChange("2d", checked as boolean)}
                        />
                        <Label htmlFor="2d" className="cursor-pointer">Last 2 days</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="1w" 
                          checked={timeFilter.includes("1w")}
                          onCheckedChange={(checked) => handleTimeFilterChange("1w", checked as boolean)}
                        />
                        <Label htmlFor="1w" className="cursor-pointer">Last week</Label>
                      </div>
                    </div>
                  </div>

                  {/* Visa Sponsorship */}
                  <div className="space-y-3">
                    <Label className="text-sm font-semibold">Sponsorship</Label>
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="visa" 
                        checked={visaSponsorship}
                        onCheckedChange={(checked) => setVisaSponsorship(checked as boolean)}
                      />
                      <Label htmlFor="visa" className="cursor-pointer">Visa Sponsorship Available</Label>
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={() => {
                    setSearchQuery("");
                    setTimeFilter([]);
                    setVisaSponsorship(false);
                  }}
                  variant="outline"
                  className="w-full sm:w-auto"
                >
                  Clear All Filters
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{filteredJobs.length}</span> jobs
            </p>
          </div>

          {/* Job Listings */}
          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <Card key={job.id} className="hover:border-primary/40 transition-all duration-300 hover:shadow-md">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                      <CardDescription className="flex flex-wrap gap-3 text-base">
                        <span className="flex items-center gap-1">
                          <Building className="w-4 h-4" />
                          {job.company}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          Posted {job.posted} ago
                        </span>
                      </CardDescription>
                    </div>
                    {job.visaSponsorship && (
                      <Badge variant="secondary" className="ml-4">Visa Sponsorship</Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">{job.description}</p>
                  <p className="text-foreground font-semibold mb-4">{job.salary}</p>
                  <Button className="bg-gradient-button hover:opacity-90">
                    View Details
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}

            {filteredJobs.length === 0 && (
              <Card>
                <CardContent className="py-12 text-center">
                  <p className="text-muted-foreground text-lg">
                    No jobs found matching your criteria. Try adjusting your filters.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default JobSearch;
