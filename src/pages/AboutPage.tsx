import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { ArrowRight, MapPin, Calendar, Users } from 'lucide-react';
const AboutPage = () => {
  return <div className="min-h-screen">
      {/* Header Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8 flex justify-center">
              <Avatar className="h-32 w-32 md:h-40 md:w-40 border-4 border-white shadow-elegant">
                <AvatarImage src="/lovable-uploads/ad3c999f-8ad9-4b9f-9d28-353404cbcb83.png" alt="Ruti Avitan - Global leader in healthcare technology and software transformation" className="object-cover" />
                <AvatarFallback className="text-2xl font-heading">RA</AvatarFallback>
              </Avatar>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              About Ruti Avitan
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Global leader in healthcare technology, SaaS, and software transformation with 20+ years of executive experience
            </p>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="card-professional">
              <div className="grid md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-1">
                  <div className="space-y-4">
                    <div className="p-6 bg-secondary/50 rounded-xl">
                      <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                        Experience Highlights
                      </h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• 20+ years global leadership</li>
                        <li>• €400M+ portfolio management</li>
                        <li>• Healthcare technology focus</li>
                        <li>• SaaS & software expertise</li>
                        <li>• Executive roles & coaching</li>
                      </ul>
                    </div>
                    
                    <div className="p-6 bg-secondary/50 rounded-xl">
                      <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                        Core Expertise
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Agile Transformation</Badge>
                        <Badge variant="secondary">Lean Portfolio</Badge>
                        <Badge variant="secondary">Process Optimization</Badge>
                        <Badge variant="secondary">Team Performance</Badge>
                        <Badge variant="secondary">Strategic Alignment</Badge>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="md:col-span-2 space-y-6">
                  <div>
                    <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                      Transforming Strategy Into Outcomes
                    </h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        Ruti Avitan is a distinguished global leader with over 20 years of executive experience 
                        in healthcare technology, SaaS, and software organizations. Throughout her career, she 
                        has successfully managed portfolios exceeding €400 million in value, consistently 
                        delivering transformational results for complex global enterprises.
                      </p>
                      
                      <p>
                        Her expertise spans the complete spectrum of organizational transformation, from strategic 
                        planning to tactical execution. Ruti specializes in Agile and Lean Portfolio Management, 
                        helping organizations optimize their development processes, enhance cross-functional 
                        collaboration, and build high-performing teams that deliver sustainable value.
                      </p>
                      
                      <p>
                        What sets Ruti apart is her proven ability to bridge the gap between strategic vision 
                        and practical implementation. She understands that successful transformation requires 
                        not just the right frameworks and methodologies, but also the cultural change management 
                        and executive coaching necessary to sustain long-term success.
                      </p>
                      
                      <p>Ruti works with clients globally, bringing a unique perspective informed by diverse international markets and regulatory environments. Her approach is always data-driven, outcome-focused, and tailored to each organization's specific challenges and goals.</p>
                    </div>
                  </div>

                  <div className="p-6 bg-primary/5 border border-primary/20 rounded-xl">
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                      Mission Statement
                    </h3>
                    <p className="text-muted-foreground italic leading-relaxed">
                      "I believe that every organization has the potential to achieve extraordinary results. 
                      My mission is to help leaders unlock that potential by creating sustainable processes, 
                      building high-performing teams, and ensuring that strategic initiatives translate into 
                      measurable business outcomes."
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Location & Contact Info */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-foreground mb-2">Location</h3>
                <p className="text-sm text-muted-foreground">Amsterdam, Netherlands</p>
                <p className="text-xs text-muted-foreground mt-1">(Available globally)</p>
              </Card>
              
              <Card className="p-6 text-center">
                <Calendar className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-foreground mb-2">Availability</h3>
                <p className="text-sm text-muted-foreground">Monday - Friday</p>
                <p className="text-xs text-muted-foreground mt-1">9:00 - 18:00 CET</p>
              </Card>
              
              <Card className="p-6 text-center">
                <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-foreground mb-2">Focus Areas</h3>
                <p className="text-sm text-muted-foreground">Tech & Healthcare</p>
                <p className="text-xs text-muted-foreground mt-1">Executive Leadership</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Ready to Drive Transformation?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Let's discuss how my experience and expertise can help your organization achieve 
              sustainable success and measurable outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link to="/contact">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default AboutPage;