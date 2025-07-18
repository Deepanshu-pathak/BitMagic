import { useState, useEffect } from "react";
import { Card, Button } from "flowbite-react";
import {
  Calculator,
  Binary,
  Lightbulb,
  Code2,
  BookOpen,
  Zap,
  ChevronRight,
  Cpu,
  Sparkles,
  RefreshCw,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [animatedBits, setAnimatedBits] = useState("1011010110");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedBits((prev) => {
        const bits = prev.split("");
        const randomIndex = Math.floor(Math.random() * bits.length);
        bits[randomIndex] = bits[randomIndex] === "0" ? "1" : "0";
        return bits.join("");
      });
    }, 1000);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      clearInterval(interval);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const features = [
    {
      icon: Calculator,
      title: "Expression Evaluator",
      description: "Decode bitwise expressions with AI-powered insights",
      color: "from-cyan-400 to-blue-600",
      hoverEffect: "group-hover:text-cyan-300",
      btnHover: "hover:text-cyan-500",
      path: "/evaluator",
    },
    {
      icon: Binary,
      title: "Binary Calculator",
      description: "Visual binary arithmetic with live bit manipulation",
      color: "from-purple-400 to-violet-600",
      hoverEffect: "group-hover:text-purple-300",
      btnHover: "hover:text-purple-500",
      path: "/calculator",
    },
    {
      icon: RefreshCw,
      title: "Number Converter",
      description: "Convert number systems",
      color: "from-rose-400 to-red-500",
      hoverEffect: "group-hover:text-rose-300",
      btnHover: "hover:text-rose-500",
      path: "/converter",
    },
    {
      icon: Lightbulb,
      title: "Bit Tricks",
      description: "Master efficient tricks and optimization secrets",
      color: "from-emerald-400 to-green-600",
      hoverEffect: "group-hover:text-emerald-300",
      btnHover: "hover:text-emerald-500",
      path: "/tricks",
    },
    {
      icon: Code2,
      title: "Code Challenges",
      description: "Solve problems with real-time feedback",
      color: "from-orange-400 to-red-500",
      hoverEffect: "group-hover:text-orange-300",
      btnHover: "hover:text-orange-500",
      path: "/challenges",
    },
    {
      icon: BookOpen,
      title: "Learn",
      description: "Interactive binary fundamentals",
      color: "from-sky-400 to-purple-600",
      hoverEffect: "group-hover:text-sky-300",
      btnHover: "hover:text-sky-500",
      path: "/learn",
    },
  ];

  return (
    <div className="min-h-screen px-6 bg-slate-950 relative overflow-hidden">
      {/* Enhanced Dynamic Background */}
      <div className="absolute inset-0">
        <div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-cyan-500/15 to-purple-500/15 blur-3xl transition-all duration-800"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 blur-2xl animate-pulse delay-1000"></div>

        {/* Floating Elements */}
        <div className="absolute top-10 left-20 text-cyan-400 opacity-70">
          <Binary className="w-8 h-8 animate-[ping_1.5s_infinite]" />
        </div>
        <div className="absolute top-100 right-12 text-purple-400 opacity-70">
          <Code2 className="w-8 h-8 animate-pulse" />
        </div>
        <div className="absolute bottom-32 left-40 text-emerald-400 opacity-70">
          <Cpu className="w-10 h-10 animate-[spin_4s_linear_infinite]" />
        </div>
        <div className="absolute bottom-100 right-60 text-yellow-400 opacity-70">
          <Sparkles className="w-7 h-7 animate-bounce" />
        </div>
      </div>

      {/* Enhanced Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
          radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0),
          linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px),
          linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px)
        `,
          backgroundSize: "24px 24px, 50px 50px, 50px 50px",
        }}
      ></div>

      <div className="relative z-10">
        {/* Enhanced Hero Section */}
        <header className="container mx-auto pt-32 pb-16 py-14">
          <div className="text-center mb-16">
            {/* Animated Binary Display */}
            <div className="flex items-center justify-center text-4xl font-mono mb-4 space-x-2">
              {animatedBits.split("").map((bit, index) => (
                <span
                  key={index}
                  className={`transition-colors duration-300 ${
                    bit === "1" ? "text-cyan-400" : "text-purple-400"
                  }`}
                >
                  {bit}
                </span>
              ))}
            </div>

            <div className="relative">
              <h1 className="text-7xl z-10 md:text-8xl font-black pb-4 mb-2 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-tight">
                BitMagic
              </h1>
              <div className="absolute -top-4 -right-4 text-cyan-400/15 opacity-70">
                <Star className="w-16 h-16 animate-[spin_8s_linear_infinite]" />
              </div>
              <div className="absolute -bottom-4 -left-4 text-purple-400 opacity-50">
                <Sparkles className="w-12 h-12 animate-[bounce_1.5s_infinite]" />
              </div>
            </div>

            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Where binary meets brilliance. Master bit manipulation through
              immersive, AI-powered learning experiences and unlock the secrets
              of efficient coding.
            </p>

            <div className="flex items-center justify-center gap-4">
              <Link to="/learn">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/30"
                >
                  <Zap className="mr-2 h-5 w-5" />
                  Start
                </Button>
              </Link>
              <Link to="/evaluator">
                <Button
                  size="lg"
                  className="border-2 border-slate-700 bg-slate-900/50 text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-4 rounded-xl font-bold text-lg backdrop-blur-sm transition-all duration-300 hover:scale-105"
                >
                  Explore
                </Button>
              </Link>
            </div>
          </div>
        </header>

        {/* Enhanced Features Grid */}
        <section className="container mx-auto py-6 lg:py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="rounded-lg border shadow-sm group relative overflow-hidden bg-slate-900/40 border-slate-800 hover:border-slate-700 transition-all duration-500 hover:scale-[1.02] backdrop-blur-sm"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="flex flex-col relative z-10 ">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <div
                    className={`text-xl pb-2 leading-none tracking-tight text-white ${feature.hoverEffect} transition-colors duration-300 font-bold`}
                  >
                    {feature.title}
                  </div>
                  <div className="text-sm text-slate-400 leading-relaxed">
                    {feature.description}
                  </div>
                </div>
                <div className="pt-0 relative z-10">
                  <Link to={feature.path}>
                    <Button
                      className={`border-2 border-slate-700 p-6 w-full justify-between text-slate-300 ${feature.btnHover} hover:bg-slate-800/50 group/btn rounded-xl transition-all duration-300`}
                    >
                      <span className="font-medium">Explore</span>
                      <ChevronRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Enhanced Stats Section */}
        <section className="container mx-auto py-14">
          <div className="bg-slate-900/30 rounded-3xl border border-slate-800 p-8 backdrop-blur-md relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
            <div className="relative z-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="group">
                  <div className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                    20+
                  </div>
                  <div className="text-slate-400 font-medium">Challenges</div>
                </div>
                <div className="group">
                  <div className="text-4xl font-black bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                    15+
                  </div>
                  <div className="text-slate-400 font-medium">Bit Tricks</div>
                </div>
                <div className="group">
                  <div className="text-4xl font-black bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                    50+
                  </div>
                  <div className="text-slate-400 font-medium">Examples</div>
                </div>
                <div className="group">
                  <div className="text-4xl font-black bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                    AI
                  </div>
                  <div className="text-slate-400 font-medium">Explanation</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="container mx-auto py-12 text-center">
          <div className="border-t border-slate-800 pt-8">
            <p className="text-slate-500 font-medium">
              &copy; 2024 BitMagic. Where binary becomes magic.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
