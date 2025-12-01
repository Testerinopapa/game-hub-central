import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import GameCard from "@/components/GameCard";
import {
  Sheet,
  SheetContent,
} from "@/components/ui/sheet";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const games = [
    { title: "Astroneer", image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=400&h=600&fit=crop", lastPlayed: "2 hours ago" },
    { title: "Battlerite", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=600&fit=crop", lastPlayed: "Yesterday" },
    { title: "Counter-Strike", image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400&h=600&fit=crop", lastPlayed: "3 days ago" },
    { title: "Dead by Daylight", image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&h=600&fit=crop", lastPlayed: "1 week ago" },
    { title: "Overwatch", image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&h=600&fit=crop", lastPlayed: "5 hours ago" },
    { title: "Path of Exile", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=600&fit=crop", lastPlayed: "Today" },
    { title: "Roblox", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=600&fit=crop", lastPlayed: "2 days ago" },
    { title: "Rocket League", image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=600&fit=crop", lastPlayed: "Yesterday" },
    { title: "The Witcher 3", image: "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?w=400&h=600&fit=crop", lastPlayed: "1 month ago" },
  ];

  return (
    <div className="flex h-screen bg-background text-foreground overflow-hidden">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent side="left" className="p-0 w-16 bg-sidebar-bg border-r border-border">
          <Sidebar />
        </SheetContent>
      </Sheet>
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar onMenuClick={() => setMobileMenuOpen(true)} />
        
        <main className="flex-1 overflow-y-auto">
          <div className="p-4 md:p-8">
            <div className="mb-6 md:mb-8">
              <h1 className="text-2xl md:text-3xl font-bold mb-2">My Games</h1>
              <p className="text-muted-foreground text-sm md:text-base">Your gaming library</p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
              {games.map((game) => (
                <GameCard
                  key={game.title}
                  title={game.title}
                  image={game.image}
                  lastPlayed={game.lastPlayed}
                />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
