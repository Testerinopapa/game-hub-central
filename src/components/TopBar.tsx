import { Search, Bell, ChevronDown } from "lucide-react";
import { Input } from "./ui/input";

const TopBar = () => {
  const sections = ["My Games", "Store", "Community"];

  return (
    <header className="h-16 bg-topbar-bg border-b border-border px-6 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <nav className="flex items-center gap-6">
          {sections.map((section, index) => (
            <button
              key={section}
              className={`text-sm font-medium transition-colors ${
                index === 0
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {section}
            </button>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search games..."
            className="pl-9 bg-secondary border-border text-sm"
          />
        </div>

        <button className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full"></span>
        </button>

        <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-secondary transition-all">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full"></div>
          <span className="text-sm font-medium text-foreground">Player</span>
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>
    </header>
  );
};

export default TopBar;
