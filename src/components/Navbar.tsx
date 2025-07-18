import { useState } from "react";
import {
  Calculator,
  Binary,
  Lightbulb,
  Code2,
  BookOpen,
  RefreshCw,
  Menu,
  X,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    {
      icon: Calculator,
      title: "Evaluator",
      path: "/evaluator",
      color: "text-cyan-400 hover:text-cyan-300",
    },
    {
      icon: Binary,
      title: "Calculator",
      path: "/calculator",
      color: "text-purple-400 hover:text-purple-300",
    },
    {
      icon: RefreshCw,
      title: "Converter",
      path: "/converter",
      color: "text-pink-400 hover:text-pink-300",
    },
    {
      icon: Lightbulb,
      title: "Bit Tricks",
      path: "/tricks",
      color: "text-emerald-400 hover:text-emerald-300",
    },
    {
      icon: Code2,
      title: "Challenges",
      path: "/challenges",
      color: "text-orange-400 hover:text-orange-300",
    },
    {
      icon: BookOpen,
      title: "Learn",
      path: "/learn",
      color: "text-indigo-400 hover:text-indigo-300",
    },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
          >
            BitMagic
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                  isActive(item.path)
                    ? `${item.color} bg-slate-800/50`
                    : `${item.color} hover:bg-slate-800/50`
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="text-sm font-medium">{item.title}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-slate-800/50 text-slate-300 hover:text-white transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="fixed mt-18 h-screen inset-0 z-50 lg:hidden ">
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setIsMenuOpen(false)}
            />
            <div className="absolute p-4 w-full bg-slate-900/80 backdrop-blur-md border-t border-slate-700">
              <div className="flex flex-col space-y-2">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-all duration-200 ${
                      isActive(item.path)
                        ? `${item.color} bg-slate-800/50`
                        : `${item.color} hover:bg-slate-800/50`
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
