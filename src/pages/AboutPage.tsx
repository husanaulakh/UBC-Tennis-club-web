
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { CommitteeMemberCard } from "@/components/committee/CommitteeMemberCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

// Mock data for committee members
const committeeMembers = [
  {
    id: "1",
    name: "Alex Johnson",
    position: "President",
    bio: "Alex has been part of the UBC Tennis Club for 3 years and is passionate about creating an inclusive environment for tennis enthusiasts of all levels.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    email: "president@ubctennis.com",
    linkedin: "https://linkedin.com",
  },
  {
    id: "2",
    name: "Sophia Chen",
    position: "Vice President",
    bio: "Sophia oversees the club's operations and works closely with the president to ensure everything runs smoothly. She's been playing tennis since high school.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
    email: "vicepresident@ubctennis.com",
    linkedin: "https://linkedin.com",
  },
  {
    id: "3",
    name: "Michael Patel",
    position: "Treasurer",
    bio: "Michael manages the club's finances, ensuring resources are allocated appropriately. He's also an avid tennis player and has competed in several tournaments.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    email: "treasurer@ubctennis.com",
  },
  {
    id: "4",
    name: "Emily Wong",
    position: "Secretary",
    bio: "Emily handles the club's communications and record-keeping. She ensures members are kept up-to-date with club activities and events.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1361&q=80",
    email: "secretary@ubctennis.com",
    linkedin: "https://linkedin.com",
  },
  {
    id: "5",
    name: "David Kim",
    position: "Events Coordinator",
    bio: "David organizes and oversees all club events, from tournaments to social gatherings. He's known for his creativity and attention to detail.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    email: "events@ubctennis.com",
  },
  {
    id: "6",
    name: "Sarah Martinez",
    position: "Marketing Director",
    bio: "Sarah manages the club's marketing and social media presence. She's passionate about sharing the love of tennis with the UBC community.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
    email: "marketing@ubctennis.com",
    linkedin: "https://linkedin.com",
  },
];

// Mock data for club documents
const clubDocuments = [
  {
    id: "1",
    title: "Club Constitution",
    description: "The official constitution outlining the club's purpose, structure, and rules.",
    downloadUrl: "#",
  },
  {
    id: "2",
    title: "Bylaws",
    description: "Detailed regulations that govern the operation of the UBC Tennis Club.",
    downloadUrl: "#",
  },
  {
    id: "3",
    title: "Club Guidelines",
    description: "Guidelines for membership, events, and court usage.",
    downloadUrl: "#",
  },
  {
    id: "4",
    title: "Code of Conduct",
    description: "Expected behavior for all club members during club activities.",
    downloadUrl: "#",
  },
];

const AboutPage = () => {
  return (
    <div>
      <PageHeader 
        title="About UBC Tennis Club" 
        description="Learn about our history, values, and the team behind the club."
      />
      
      {/* Club History & Values */}
      <Section
        title="Our History"
        description="The journey of the UBC Tennis Club since its inception."
      >
        <div className="space-y-6">
          <p>
            Founded in 1953, the UBC Tennis Club has a rich history of promoting the sport of tennis among the University of British Columbia community. What started as a small group of enthusiasts has grown into one of the largest sports clubs on campus, with hundreds of active members each year.
          </p>
          <p>
            Over the decades, the club has evolved and expanded its offerings, always staying true to its core mission of making tennis accessible to students of all skill levels. The club has produced several notable players who have gone on to compete at provincial and national levels.
          </p>
          <p>
            In recent years, the UBC Tennis Club has modernized its approach, introducing structured coaching programs, regular tournaments, and social events that cater to the diverse interests of its members. Despite these changes, the club's commitment to fostering a love for tennis and building a supportive community remains unwavering.
          </p>
        </div>
      </Section>
      
      {/* Mission & Values */}
      <Section
        title="Our Values"
        description="The principles that guide everything we do."
        className="bg-muted/50 py-16 -mx-4 sm:-mx-6 px-4 sm:px-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="p-6">
              <CardTitle>Inclusivity</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <p className="text-muted-foreground">
                We welcome players of all backgrounds and skill levels, creating a space where everyone can enjoy the sport of tennis.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="p-6">
              <CardTitle>Excellence</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <p className="text-muted-foreground">
                We strive for excellence in everything we do, from organizing events to providing quality coaching.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="p-6">
              <CardTitle>Sportsmanship</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <p className="text-muted-foreground">
                We promote fair play, respect for opponents, and integrity both on and off the court.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="p-6">
              <CardTitle>Community</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <p className="text-muted-foreground">
                We foster a sense of belonging and camaraderie among our members, creating connections that extend beyond tennis.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>
      
      {/* Committee Members */}
      <Section
        title="Meet Our Committee"
        description="The dedicated team behind the UBC Tennis Club."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {committeeMembers.map((member) => (
            <CommitteeMemberCard key={member.id} {...member} />
          ))}
        </div>
      </Section>
      
      {/* Club Documents */}
      <Section
        title="Club Documents"
        description="Official documents and guidelines for the UBC Tennis Club."
        className="bg-muted/50 py-16 -mx-4 sm:-mx-6 px-4 sm:px-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {clubDocuments.map((document) => (
            <Card key={document.id}>
              <CardHeader className="p-6 pb-3">
                <CardTitle className="flex items-center">
                  <FileText className="mr-2 h-5 w-5" />
                  {document.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-3">
                <p className="text-muted-foreground mb-4">
                  {document.description}
                </p>
                <Button variant="outline" asChild>
                  <a href={document.downloadUrl} download>
                    Download PDF
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default AboutPage;
