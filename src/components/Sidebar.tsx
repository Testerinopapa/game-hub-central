import { Home, Library, Clock, Star, Settings, TrendingUp, User } from "lucide-react";
import { NavLink } from "./NavLink";

const Sidebar = () => {
  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Library, label: "Library", path: "/library" },
    { icon: Clock, label: "Recent", path: "/recent" },
    { icon: Star, label: "Favorites", path: "/favorites" },
    { icon: TrendingUp, label: "Trending", path: "/trending" },
    { icon: User, label: "Friends", path: "/friends" },
  ];

  return (
    <aside className="w-16 bg-sidebar-bg border-r border-border flex flex-col items-center py-6 gap-6">
      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center font-bold text-primary-foreground text-xl">
        G
      </div>
      
      <nav className="flex flex-col gap-4">
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className="p-3 rounded-lg transition-all text-muted-foreground hover:text-foreground hover:bg-secondary"
            activeClassName="!bg-primary !text-primary-foreground shadow-lg shadow-primary/30"
            title={item.label}
          >
            <item.icon className="w-5 h-5" />
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto">
        <button
          className="p-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
          title="Settings"
        >
          <Settings className="w-5 h-5" />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
