import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, ExternalLink } from 'lucide-react';

const EventsPage = () => {
  const events = [
    {
      title: 'Agile Cross-Company Meetup',
      location: 'HÁRT Museum',
      date: 'June 5, 2024',
      type: 'Meetup',
      description: 'Cross-company collaboration session focused on agile transformation best practices and shared learnings across different industries.',
      status: 'past'
    },
    {
      title: 'Israel Fintech Breakfast',
      location: 'Money20/20 Week',
      date: 'June 4, 2024',
      type: 'Networking',
      description: 'Exclusive breakfast networking event during Money20/20 week, bringing together Israeli fintech leaders and international partners.',
      status: 'past'
    },
    {
      title: 'SAP Data Unleashed Networking Event',
      location: 'Virtual Event',
      date: 'May 2024',
      type: 'Corporate Event',
      description: 'Strategic networking event focused on data transformation and enterprise solutions in the modern business landscape.',
      status: 'past'
    },
    {
      title: 'IBM Executive Breakfast – "Put AI to Work"',
      location: 'Executive Session',
      date: 'March 19, 2024',
      type: 'Executive Session',
      description: 'Executive breakfast session exploring practical AI implementation strategies and transformation frameworks for enterprise organizations.',
      status: 'past'
    },
    {
      title: 'SAFe Summit 2024',
      location: 'Berlin',
      date: 'April 2024',
      type: 'Conference',
      description: 'Presented Philips EMR&CM transformation case study, showcasing successful SAFe implementation and organizational change management.',
      status: 'past',
      image: '/lovable-uploads/50e4f2dc-9d1f-44b2-9c5b-10d83af8f516.png'
    }
  ];

  const upcomingEvents = events.filter(event => event.status === 'upcoming');
  const pastEvents = events.filter(event => event.status === 'past');

  const getStatusBadge = (status: string) => {
    return status === 'upcoming' 
      ? <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Upcoming</Badge>
      : <Badge variant="secondary">Past Event</Badge>;
  };

  const getTypeBadge = (type: string) => {
    return (
      <Badge variant="outline">
        {type}
      </Badge>
    );
  };

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Recent Events & Highlights
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Industry engagement, thought leadership, and knowledge sharing through conferences, 
              meetups, and executive sessions.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      {upcomingEvents.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-12 text-center">
              Upcoming Events
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="card-professional hover:shadow-brand">
                  {(event as any).image && (
                    <img 
                      src={(event as any).image} 
                      alt={event.title}
                      className="w-full h-auto rounded-lg mb-4 object-cover"
                    />
                  )}
                  <div className="flex justify-between items-start mb-4">
                    {getStatusBadge(event.status)}
                    {getTypeBadge(event.type)}
                  </div>
                  
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-3 leading-tight">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {event.description}
                  </p>
                  
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/contact">
                      Get Involved
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Past Events */}
      <section className={`py-20 ${upcomingEvents.length > 0 ? 'bg-secondary/30' : ''}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-12 text-center">
            Past Events & Speaking Engagements
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <Card key={index} className="card-professional">
                {(event as any).image && (
                  <img 
                    src={(event as any).image} 
                    alt={event.title}
                    className="w-full h-auto rounded-lg mb-4 object-cover"
                  />
                )}
                <div className="flex justify-between items-start mb-4">
                  {getStatusBadge(event.status)}
                  {getTypeBadge(event.type)}
                </div>
                
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3 leading-tight">
                  {event.title}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {event.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Speaking & Partnership Opportunities */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="card-professional text-center">
              <Users className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                Speaking & Partnership Opportunities
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Interested in having Ruti speak at your event or explore partnership opportunities? 
                Let's discuss how we can collaborate to share insights on agile transformation, 
                operational excellence, and sustainable business success.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-secondary/50 rounded-xl">
                  <h3 className="font-heading font-semibold text-foreground mb-2">Speaking Topics</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Agile & SAFe Transformation</li>
                    <li>• Lean Portfolio Management</li>
                    <li>• Operational Excellence</li>
                    <li>• Executive Leadership</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-secondary/50 rounded-xl">
                  <h3 className="font-heading font-semibold text-foreground mb-2">Event Types</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Industry Conferences</li>
                    <li>• Executive Workshops</li>
                    <li>• Corporate Events</li>
                    <li>• Networking Sessions</li>
                  </ul>
                </div>
              </div>
              
              <Button asChild size="lg" className="text-lg px-8">
                <Link to="/contact">
                  Discuss Speaking Opportunities
                </Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;