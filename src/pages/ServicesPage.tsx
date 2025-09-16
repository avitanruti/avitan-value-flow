import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, CheckCircle } from 'lucide-react';
import agileImage from '@/assets/agile-transformation.jpg';
import performanceImage from '@/assets/performance-optimization.jpg';
import portfolioImage from '@/assets/portfolio-management.jpg';
import programImage from '@/assets/program-management.jpg';

const ServicesPage = () => {
  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const services = [
    {
      title: 'Performance Optimization',
      image: performanceImage,
      description: 'Streamline operations and maximize efficiency across all business functions by identifying process challenges, implementing simplifications and AI solutions to streamline global processes.',
      keyDeliverables: [
        'Processes optimization',
        'Time-to-Market (TTM) and Time-to-Value (TTV) improvement',
        'Predictability enhancement frameworks (S&OP)',
        'Execution diagnostics and root cause analysis',
        'KPI and OKR alignment strategies',
        'Lean operations and AI solutions implementations',
        'Stakeholder and program management optimization'
      ],
      outcome: 'A high performing, compliant, and scalable organization where execution meets strategy. Teams collaborate seamlessly across geographies, delivery becomes reliable and fast, and decision making is data driven. The result is measurable improvements in speed, efficiency, cost, and product quality - all while fostering organizational clarity, resilience, and long term business success.'
    },
    {
      title: 'Program/Project Management',
      image: programImage,
      description: 'Comprehensive program management services to ensure reliable delivery and stakeholder satisfaction.',
      keyDeliverables: [
        'PM training and coaching programs',
        'Lean governance and flow optimization',
        'Time-to-Market and root-cause analysis',
        'Process and methodology implementation',
        'KPI systems and measurement frameworks',
        'Iterative tracking and monitoring',
        'Results-driven continuous improvement'
      ],
      outcome: 'Reliable delivery capabilities, enhanced stakeholder confidence, improved team satisfaction, and predictable project outcomes.'
    },
    {
      title: 'Agile & SAFe Transformation',
      image: agileImage,
      description: 'End to end support for organizations ready to scale agility across teams, portfolios, and leadership. SAFe certified experts to guide implementation, coach stakeholders, and align delivery with strategic outcomes. Build and lead Agile transformation programs grounded in the SAFe framework — customized to your organization\'s structure, maturity, and goals. Whether you\'re launching new teams or evolving enterprise agility, our coaching bridges the gap between theory and execution, fostering resilience, clarity, and continuous improvement.',
      keyDeliverables: [
        'Assessment and roadmap development',
        'LACE (Lean-Agile Center of Excellence) establishment',
        'SAFe adoption and ART launch',
        'ART design and optimization',
        'Value-stream funding models',
        'Lean Portfolio alignment',
        'Retrospectives and executive coaching',
        'Scaled Agile Framework core and advanced certifications (in English)'
      ],
      outcome: 'From initial assessments to rollout and continuous improvement, driving a mindset shift toward sustainable change and delivering measurable results in delivery speed, cross functional alignment, and product quality.'
    },
    {
      title: 'Portfolio Management',
      image: portfolioImage,
      description: "Traditional portfolio management struggles to keep pace with the demands of today's digital, fast moving markets. A portfolio cannot be treated as a simple list of initiatives or products; it must serve as a strategic engine that reflects business priorities, drives predictable execution, and delivers measurable financial outcomes.",
      keyDeliverables: [
        'Strategic alignment assessment',
        'Prioritization frameworks (LPM)',
        'Dynamic value-stream funding models',
        'Agile portfolio operations setup',
        'Visibility and health dashboards',
        'Lean governance implementation',
        'Continuous improvement processes'
      ],
      outcome: 'Transparent, predictable, and impact-maximizing portfolio with clear visibility into value delivery and strategic alignment.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Expert Consulting Services
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive solutions for tech & healthcare executives seeking end-to-end value delivery, 
              agile transformation, and operational excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <Card key={index} className="card-professional overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                        {service.title}
                      </h2>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                        Key Deliverables
                      </h3>
                      <ul className="space-y-2">
                        {service.keyDeliverables.map((deliverable, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-6 bg-secondary/50 rounded-xl border border-border">
                      <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                        Expected Outcome
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.outcome}
                      </p>
                    </div>

                    <Button asChild className="w-full sm:w-auto">
                      <Link to="/contact">
                        Discuss Your Project
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>

                  <div className="lg:order-first lg:order-last">
                    <img 
                      src={service.image} 
                      alt={`${service.title} consulting service`}
                      className="w-full h-full min-h-[400px] object-cover rounded-xl"
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to Transform Your Organization?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's discuss how our expertise can help you achieve sustainable success and measurable outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary" size="lg" className="text-lg px-8">
              <Link to="/contact">Start Your Transformation</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/contact">Schedule Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;