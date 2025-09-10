import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Calendar, Clock, ExternalLink } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = React.useState({
    fullName: '',
    email: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    // You could integrate with Supabase or another backend service here
  };

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ready to drive transformation and achieve sustainable success? Let's discuss your goals 
              and how we can help you deliver measurable outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                  Let's Start the Conversation
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Whether you're looking to transform your organization's agile practices, optimize 
                  performance, or drive operational excellence, I'm here to help you achieve your goals.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-1">Email</h3>
                      <p className="text-muted-foreground mb-2">Send me a detailed message about your project</p>
                      <a href="mailto:avitanruti@gmail.com" className="text-primary hover:underline">
                        avitanruti@gmail.com
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-1">Phone</h3>
                      <p className="text-muted-foreground mb-2">Call for immediate consultation</p>
                      <a href="tel:+31628917912" className="text-primary hover:underline">
                        +31 628 917 912
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <Calendar className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-1">Schedule Meeting</h3>
                      <p className="text-muted-foreground mb-2">Book a free consultation session</p>
                      <Button variant="outline" className="mt-2" asChild>
                        <a href="https://calendly.com/avitanruti" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Schedule via Calendar
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Availability & Location */}
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="p-6 text-center">
                  <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-heading font-semibold text-foreground mb-2">Availability</h3>
                  <p className="text-sm text-muted-foreground">Monday - Friday</p>
                  <p className="text-sm text-muted-foreground">9:00 - 18:00 CET</p>
                </Card>
                
                <Card className="p-6 text-center">
                  <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-heading font-semibold text-foreground mb-2">Location</h3>
                  <p className="text-sm text-muted-foreground">Amsterdam, Netherlands</p>
                  <p className="text-sm text-muted-foreground">(Available globally)</p>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="card-professional">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                    Send a Message
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">
                      Full Name <span className="text-primary">*</span>
                    </Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      type="text"
                      placeholder="Your full name"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">
                      Email <span className="text-primary">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Your company name (optional)"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">
                    Message <span className="text-primary">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your transformation goals, current challenges, and how I can help..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button type="submit" className="flex-1">
                    Send Message
                  </Button>
                  <Button type="button" variant="outline" className="flex-1" asChild>
                    <a href="https://calendly.com/avitanruti" target="_blank" rel="noopener noreferrer">
                      <Calendar className="h-4 w-4 mr-2" />
                      Schedule Meeting
                    </a>
                  </Button>
                </div>

                <p className="text-sm text-muted-foreground">
                  * Required fields. Your information is secure and will only be used to respond to your inquiry.
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick CTA */}
      <section className="py-16 bg-primary/5 border-t border-primary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
            Ready to Start Your Transformation Journey?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Don't wait to achieve the sustainable success your organization deserves. 
            Let's discuss your specific needs and create a customized roadmap.
          </p>
          <Button size="lg" className="text-lg px-8">
            Book Your Free Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;