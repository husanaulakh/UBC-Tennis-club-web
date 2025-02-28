
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ImageGallery } from "@/components/gallery/ImageGallery";

// Mock data for gallery images
const tournamentImages = [
  {
    id: "t1",
    src: "https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    alt: "Summer Tournament 2023",
    width: 1770,
    height: 1180,
  },
  {
    id: "t2",
    src: "https://images.unsplash.com/photo-1595435934847-5ec0dcdead01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80",
    alt: "Player hitting a forehand",
    width: 1776,
    height: 1184,
  },
  {
    id: "t3",
    src: "https://images.unsplash.com/photo-1617075611933-dd2c9cba210a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    alt: "Tennis racket and ball on court",
    width: 1770,
    height: 1180,
  },
  {
    id: "t4",
    src: "https://images.unsplash.com/photo-1622279457486-53d2f999766c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Tennis serve in action",
    width: 2070,
    height: 1380,
  },
  {
    id: "t5",
    src: "https://images.unsplash.com/photo-1511886929837-354d827aae26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
    alt: "Group photo of tournament participants",
    width: 2064,
    height: 1376,
  },
  {
    id: "t6",
    src: "https://images.unsplash.com/photo-1599152399807-1febe0627fb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    alt: "Tennis players shaking hands",
    width: 1770,
    height: 1180,
  },
];

const trainingImages = [
  {
    id: "tr1",
    src: "https://images.unsplash.com/photo-1551773188-0801da12ddae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Coach instructing student",
    width: 2070,
    height: 1380,
  },
  {
    id: "tr2",
    src: "https://images.unsplash.com/photo-1545809074-59472b3f5ecc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    alt: "Group training session",
    width: 1770,
    height: 1180,
  },
  {
    id: "tr3",
    src: "https://images.unsplash.com/photo-1529926706528-db9e5010cd3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Junior training program",
    width: 2070,
    height: 1380,
  },
  {
    id: "tr4",
    src: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    alt: "Tennis drills",
    width: 774,
    height: 1161,
  },
];

const socialImages = [
  {
    id: "s1",
    src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    alt: "Club social gathering",
    width: 1770,
    height: 1180,
  },
  {
    id: "s2",
    src: "https://images.unsplash.com/photo-1543165796-5426273eaab3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    alt: "End of year celebration",
    width: 1770,
    height: 1180,
  },
  {
    id: "s3",
    src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80",
    alt: "Awards ceremony",
    width: 1769,
    height: 1180,
  },
  {
    id: "s4",
    src: "https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1839&q=80",
    alt: "Club dinner",
    width: 1839,
    height: 1226,
  },
  {
    id: "s5",
    src: "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    alt: "Tennis club barbecue",
    width: 1770,
    height: 1180,
  },
];

const GalleryPage = () => {
  return (
    <div>
      <PageHeader 
        title="Gallery" 
        description="Explore photos from our tournaments, training sessions, and social events."
      />
      
      <Section>
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="all">All Photos</TabsTrigger>
            <TabsTrigger value="tournaments">Tournaments</TabsTrigger>
            <TabsTrigger value="training">Training</TabsTrigger>
            <TabsTrigger value="social">Social Events</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all">
            <h3 className="text-xl font-bold mb-4">All Photos</h3>
            <ImageGallery 
              images={[...tournamentImages, ...trainingImages, ...socialImages]} 
              columns={3}
            />
          </TabsContent>
          
          <TabsContent value="tournaments">
            <h3 className="text-xl font-bold mb-4">Tournament Photos</h3>
            <ImageGallery 
              images={tournamentImages} 
              columns={3}
            />
          </TabsContent>
          
          <TabsContent value="training">
            <h3 className="text-xl font-bold mb-4">Training Photos</h3>
            <ImageGallery 
              images={trainingImages} 
              columns={3}
            />
          </TabsContent>
          
          <TabsContent value="social">
            <h3 className="text-xl font-bold mb-4">Social Event Photos</h3>
            <ImageGallery 
              images={socialImages} 
              columns={3}
            />
          </TabsContent>
        </Tabs>
      </Section>
      
      {/* Social Media Feed */}
      <Section
        title="Social Media"
        description="Follow us on social media for the latest updates and photos."
        className="bg-muted/50 py-16 -mx-4 sm:-mx-6 px-4 sm:px-6"
      >
        <div className="text-center mb-6">
          <p className="text-muted-foreground">Find us on social media and tag your photos with #UBCTennisClub</p>
          <div className="flex justify-center gap-4 mt-4">
            <Button variant="outline" size="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </Button>
            <Button variant="outline" size="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </Button>
            <Button variant="outline" size="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </Button>
          </div>
        </div>
        
        <div className="border rounded-lg bg-background p-6 text-center">
          <p className="text-muted-foreground">Social media feed would be embedded here.</p>
          <p className="text-sm mt-2">This would typically use an external widget from platforms like Instagram, Facebook, or Twitter to display the latest posts.</p>
        </div>
      </Section>
    </div>
  );
};

export default GalleryPage;
