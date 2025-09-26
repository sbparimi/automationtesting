import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Clock, Shield, Users, Target, Zap } from "lucide-react";

export const BusinessValueSection = () => {
  const metrics = [
    {
      icon: TrendingUp,
      title: "75% Cost Reduction",
      description: "Automated testing reduces manual testing effort by 75%, enabling teams to focus on high-value activities and innovation.",
      color: "success"
    },
    {
      icon: Clock,
      title: "60% Faster Releases",
      description: "Comprehensive test automation enables continuous integration and faster, more confident product releases.",
      color: "primary"
    },
    {
      icon: Shield,
      title: "99.5% Bug Detection",
      description: "Early detection of issues through automated regression testing prevents costly production bugs.",
      color: "warning"
    },
    {
      icon: Users,
      title: "Team Productivity",
      description: "Empowers teams to deliver higher quality software with increased confidence and reduced manual overhead.",
      color: "success"
    },
    {
      icon: Target,
      title: "ROI Optimization",
      description: "Strategic framework selection optimizes return on testing investment through efficient automation.",
      color: "primary"
    },
    {
      icon: Zap,
      title: "Scale Flexibility",
      description: "Frameworks designed to scale from small teams to enterprise-level organizations seamlessly.",
      color: "warning"
    }
  ];

  const businessImpacts = [
    {
      category: "Financial Impact",
      items: [
        "Reduce manual testing costs by 70-80%",
        "Decrease time-to-market by 50-60%",
        "Prevent costly production bugs",
        "Optimize resource allocation"
      ]
    },
    {
      category: "Quality Assurance",
      items: [
        "Consistent, repeatable test execution",
        "Comprehensive regression coverage",
        "Early defect detection",
        "Improved software reliability"
      ]
    },
    {
      category: "Team Efficiency",
      items: [
        "Focus on exploratory and creative testing",
        "Reduced manual repetitive tasks",
        "Better test documentation",
        "Knowledge sharing through frameworks"
      ]
    },
    {
      category: "Strategic Advantages",
      items: [
        "Faster feature delivery cycles",
        "Higher customer satisfaction",
        "Competitive market positioning",
        "Scalable testing operations"
      ]
    }
  ];

  return (
    <section id="business-value" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Measurable
            <span className="block text-primary">Business Impact</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Strategic test automation frameworks deliver quantifiable business value 
            through improved efficiency, quality, and faster time-to-market.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <Card 
                key={metric.title}
                className="group hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg bg-${metric.color}/10 group-hover:bg-${metric.color}/20 transition-colors`}>
                      <IconComponent className={`w-6 h-6 text-${metric.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
                        {metric.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {metric.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Business Impact Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {businessImpacts.map((impact, index) => (
            <Card 
              key={impact.category}
              className="group hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4 text-foreground group-hover:text-primary transition-colors">
                  {impact.category}
                </h3>
                <ul className="space-y-3">
                  {impact.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="max-w-4xl mx-auto bg-gradient-tech text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Transform Your Testing Strategy?
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Let's discuss how these proven frameworks can accelerate your automation journey 
                and deliver measurable business results for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:contact@example.com" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Schedule Consultation
                </a>
                <a 
                  href="#frameworks" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                >
                  Explore Frameworks
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};