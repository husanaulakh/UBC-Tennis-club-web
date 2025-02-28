
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, ExternalLink, FileText, Video } from "lucide-react";

// Mock data for FAQs
const faqs = [
  {
    question: "How do I join the UBC Tennis Club?",
    answer: "You can join by filling out the membership form on our Membership page. Once your application is processed, you'll receive a confirmation email with details about your membership benefits.",
  },
  {
    question: "What is the membership fee?",
    answer: "Membership fees vary depending on your status. Students pay $50 per year, UBC faculty and staff pay $80 per year, and alumni and community members pay $100 per year. All fees go toward club activities, court rentals, and equipment.",
  },
  {
    question: "Do I need to bring my own equipment?",
    answer: "While we encourage members to have their own rackets, we do have equipment available for rent during club sessions. Tennis balls are provided for all club activities.",
  },
  {
    question: "What skill level is required to join?",
    answer: "The UBC Tennis Club welcomes players of all skill levels, from complete beginners to advanced players. We have programs, events, and coaching options suitable for everyone.",
  },
  {
    question: "How often does the club meet?",
    answer: "We have regular practice sessions on weekdays and weekends. The schedule varies each term and is communicated to members via email and posted on the Events page of our website.",
  },
  {
    question: "Can non-UBC students join the club?",
    answer: "Yes, we welcome UBC faculty, staff, alumni, and even community members. However, priority for certain events and court times may be given to current UBC students.",
  },
  {
    question: "Do you offer coaching services?",
    answer: "Yes, we have certified coaches who offer both group and private lessons. You can find more information on our Coaching page.",
  },
  {
    question: "How can I participate in tournaments?",
    answer: "Tournament information is posted on our Events page. Most tournaments require registration in advance. Club members receive priority registration for all tournaments.",
  },
];

// Mock data for resources
const tennisResources = [
  {
    id: "1",
    title: "Tennis Basics: Grips and Strokes",
    type: "video",
    description: "A comprehensive guide to different tennis grips and basic strokes.",
    url: "#",
    icon: Video,
  },
  {
    id: "2",
    title: "Tennis Strategy for Singles",
    type: "article",
    description: "Learn effective strategies for winning singles matches.",
    url: "#",
    icon: FileText,
  },
  {
    id: "3",
    title: "Doubles Positioning and Tactics",
    type: "video",
    description: "Master the art of doubles play with these positioning tips.",
    url: "#",
    icon: Video,
  },
  {
    id: "4",
    title: "Tennis Fitness Routine",
    type: "pdf",
    description: "A complete fitness program designed specifically for tennis players.",
    url: "#",
    icon: FileText,
  },
  {
    id: "5",
    title: "Mental Toughness in Tennis",
    type: "article",
    description: "Develop the mental resilience needed to compete at your best.",
    url: "#",
    icon: BookOpen,
  },
  {
    id: "6",
    title: "Serve Technique Breakdown",
    type: "video",
    description: "A detailed analysis of proper serving technique.",
    url: "#",
    icon: Video,
  },
];

// Mock data for external links
const externalLinks = [
  {
    title: "Tennis Canada",
    description: "The official governing body for tennis in Canada.",
    url: "https://www.tenniscanada.com/",
  },
  {
    title: "UBC Recreation",
    description: "Information about recreational facilities and programs at UBC.",
    url: "https://recreation.ubc.ca/",
  },
  {
    title: "BC Tennis",
    description: "Tennis British Columbia, the provincial sport organization for tennis.",
    url: "https://www.tennisbc.org/",
  },
  {
    title: "Vancouver Parks Tennis",
    description: "Public tennis courts and programs in Vancouver.",
    url: "https://vancouver.ca/parks-recreation-culture/tennis.aspx",
  },
];

// Mock data for equipment recommendations
const equipmentRecommendations = [
  {
    category: "Beginner Rackets",
    items: [
      {
        name: "Wilson Clash 100",
        description: "Great for beginners due to its forgiveness and power.",
        price: "$199",
      },
      {
        name: "Babolat Pure Drive",
        description: "Excellent all-around racket with good power and control.",
        price: "$229",
      },
      {
        name: "Head Ti.S6",
        description: "Lightweight and powerful, perfect for beginners.",
        price: "$99",
      },
    ],
  },
  {
    category: "Intermediate/Advanced Rackets",
    items: [
      {
        name: "Yonex EZONE 98",
        description: "Great control with moderate power for experienced players.",
        price: "$239",
      },
      {
        name: "Wilson Pro Staff RF97",
        description: "Roger Federer's racket, offers precise control.",
        price: "$269",
      },
    ],
  },
  {
    category: "Tennis Shoes",
    items: [
      {
        name: "Nike Zoom Vapor X",
        description: "Excellent support and durability for all court surfaces.",
        price: "$140",
      },
      {
        name: "Adidas Adizero Club",
        description: "Lightweight and comfortable, great value for beginners.",
        price: "$70",
      },
    ],
  },
  {
    category: "Strings",
    items: [
      {
        name: "Babolat RPM Blast",
        description: "Popular polyester string with great spin potential.",
        price: "$20",
      },
      {
        name: "Wilson NXT",
        description: "Comfortable multifilament string, ideal for beginners and intermediates.",
        price: "$16",
      },
    ],
  },
];

const ResourcesPage = () => {
  return (
    <div>
      <PageHeader 
        title="Resources & FAQs" 
        description="Helpful information and answers to common questions about the UBC Tennis Club."
      />
      
      {/* FAQs */}
      <Section
        title="Frequently Asked Questions"
        description="Find answers to common questions about membership, events, and policies."
      >
        <FaqAccordion faqs={faqs} />
      </Section>
      
      {/* Tennis Resources */}
      <Section
        title="Tennis Resources"
        description="Educational content to help you improve your game."
        className="bg-muted/50 py-16 -mx-4 sm:-mx-6 px-4 sm:px-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tennisResources.map((resource) => (
            <Card key={resource.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-primary/10 p-2">
                    <resource.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div className="text-xs font-medium uppercase text-muted-foreground">
                    {resource.type}
                  </div>
                </div>
                <CardTitle className="mt-2">{resource.title}</CardTitle>
                <CardDescription>{resource.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-2">
                <Button asChild variant="outline" className="w-full mt-2">
                  <a href={resource.url} target="_blank" rel="noopener noreferrer">
                    View Resource
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
      
      {/* Equipment Recommendations */}
      <Section
        title="Equipment Recommendations"
        description="Suggestions for tennis equipment based on skill level and needs."
      >
        <Tabs defaultValue="beginner" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="beginner">Beginner</TabsTrigger>
            <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
            <TabsTrigger value="advanced">Advanced</TabsTrigger>
          </TabsList>
          
          {["beginner", "intermediate", "advanced"].map((level) => (
            <TabsContent key={level} value={level}>
              <div className="space-y-8">
                {equipmentRecommendations.map((category, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-semibold mb-4">{category.category}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {category.items.map((item, itemIndex) => (
                        <Card key={itemIndex}>
                          <CardHeader className="p-4 pb-2">
                            <CardTitle className="text-base">{item.name}</CardTitle>
                          </CardHeader>
                          <CardContent className="p-4 pt-2">
                            <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                            <p className="font-medium">{item.price}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
                
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    Disclaimer: These are recommendations only. The UBC Tennis Club is not affiliated with any of these brands and does not receive compensation for these recommendations.
                  </p>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </Section>
      
      {/* External Links */}
      <Section
        title="Useful Links"
        description="External resources for tennis players in Vancouver and UBC."
        className="bg-muted/50 py-16 -mx-4 sm:-mx-6 px-4 sm:px-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {externalLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block group"
            >
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader className="p-4 pb-2">
                  <CardTitle className="flex items-center gap-2">
                    {link.title}
                    <ExternalLink className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-2">
                  <p className="text-muted-foreground">{link.description}</p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default ResourcesPage;
