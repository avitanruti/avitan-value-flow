import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Users, TrendingUp, Target } from 'lucide-react';
import heroImage from '@/assets/hero-consulting.jpg';
import agileImage from '@/assets/agile-transformation.jpg';
import performanceImage from '@/assets/performance-optimization.jpg';
import portfolioImage from '@/assets/portfolio-management.jpg';
import programImage from '@/assets/program-management.jpg';
const HomePage = () => {
  const services = [{
    title: 'Agile & SAFe Transformation',
    description: 'Assessment, LACE, SAFe design & ART launch, Training, value stream funding',
    image: agileImage,
    outcome: 'Faster delivery, cross-functional alignment, quality'
  }, {
    title: 'Performance Optimization',
    description: 'Cross-country dev process optimization, execution diagnostics, KPI/OKR alignment',
    image: performanceImage,
    outcome: 'Reliable, efficient, data-driven organization'
  }, {
    title: 'Portfolio Management',
    description: 'Strategic alignment, prioritization frameworks, dynamic value-stream funding',
    image: portfolioImage,
    outcome: 'Transparent, predictable, impact-maximizing portfolio'
  }, {
    title: 'Program/Project Management',
    description: 'PM training/coaching, lean governance & flow, TTM analysis',
    image: programImage,
    outcome: 'Reliable delivery, stakeholder confidence, improved satisfaction'
  }];
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-heading font-bold text-foreground leading-tight">
                Change Management & 
                <span className="text-primary"> Program Management Services</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Welcome, I'm Ruti Avitan.
                For over two decades, I've been leading transformations in healthcare technology, SaaS, and enterprise software.
                <br /><br />
                I specialize in guiding teams to strengthen program management, optimize processes, and lead digital and agile transformations. My focus is on driving operational excellence and delivering sustainable business success end-to-end
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg px-8">
                  <Link to="/about">Learn More About Me</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8">
                  <Link to="/contact">Schedule Free Consultation</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img src="/lovable-uploads/e21b96a0-dfeb-46ed-9691-71c3400bb13e.png" alt="Professional executives collaborating on business transformation strategy" className="rounded-2xl shadow-lg-custom w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      

      {/* Services Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Services That Drive Real Results</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Expert consulting services designed for technology and IT organizations seeking measurable outcomes</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => <Card key={index} className="card-professional group hover:shadow-brand">
                <div className="aspect-square mb-4 overflow-hidden rounded-xl">
                  <img src={service.image} alt={`${service.title} consulting service`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{service.description}</p>
                <div className="flex items-start gap-2 mb-4">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm font-medium text-foreground">{service.outcome}</p>
                </div>
                <Button asChild variant="outline" className="w-full group">
                  <Link to="/services">
                    Learn More 
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </Card>)}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" className="text-lg px-8">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default HomePage;