import { useState } from "react";
import { Card, Button } from "flowbite-react";
import { Lightbulb, Code, X, ChevronRight, List } from "lucide-react";
import { tricks } from "../data/bitTricks";

const BitManipulationTricks = () => {
  const [selectedTrick, setSelectedTrick] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const TricksList = () => (
    <div className="space-y-2 h-[600px] overflow-scroll scrollbar-hide">
      {tricks.map((trick, index) => (
        <button
          key={index}
          onClick={() => {
            setSelectedTrick(index);
            setIsSidebarOpen(false);
          }}
          className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${
            selectedTrick === index
              ? "bg-emerald-600/20 border-emerald-600 text-emerald-300"
              : "bg-slate-800/50 border-slate-700 hover:bg-slate-800 text-slate-300"
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold mb-1">{trick.title}</h3>
              <p className="text-sm opacity-80">{trick.description}</p>
            </div>
            <ChevronRight className="h-4 w-4 opacity-50" />
          </div>
        </button>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-emerald-500/10 to-green-500/10 blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 blur-2xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-8 pt-24">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1">
              <div className="text-3xl font-bold pb-1 bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent flex items-center justify-between gap-3">
                <h1 className="flex items-center gap-3">
                  <Lightbulb className="h-8 w-8 text-emerald-400" />
                  Bit Tricks
                </h1>
                <div className="flex items-center space-x-4">
                  <Button
                    outline
                    size="lg"
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="lg:hidden p-2 bg-emerald-600/20 border-emerald-600 text-emerald-300"
                  >
                    {isSidebarOpen ? (
                      <X className="h-6 w-6" />
                    ) : (
                      <List className="h-6 w-6" />
                    )}
                  </Button>
                </div>
              </div>
              <p className="text-slate-400 mt-2">
                Master efficient algorithms and optimization secrets
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
              <div className="fixed mt-20 inset-0 z-50 lg:hidden">
                <div
                  className="absolute inset-0 bg-black/50"
                  onClick={() => setIsSidebarOpen(false)}
                />
                <div className="absolute p-4 left-0 top-0 h-full w-80 bg-slate-900 border-r border-slate-800">
                  <div className="pb-4 border-b border-slate-800">
                    <h2 className="text-lg font-semibold flex items-center gap-2 text-emerald-400">
                      <Lightbulb className="h-6 w-6" />
                      Tricks Library
                    </h2>
                  </div>
                  <TricksList />
                </div>
              </div>
            )}

            {/* Desktop Sidebar */}
            <div className="hidden lg:block lg:col-span-4">
              <Card className="bg-slate-900/40 border-slate-800 backdrop-blur-sm">
                <div className="flex flex-col border-slate-800/50">
                  <div className="text-2xl font-semibold text-emerald-400 flex items-center gap-2">
                    <Lightbulb className="h-6 w-6" />
                    Tricks Library
                  </div>
                  <div className="text-sm text-slate-400">
                    Select a trick to explore
                  </div>
                </div>
                <TricksList />
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-8 space-y-6">
              {/* Trick Details */}
              <Card className="bg-slate-900/40 border-slate-800 backdrop-blur-sm">
                <div className="flex flex-col border-slate-800/50">
                  <div className="text-2xl font-semibold text-emerald-400 flex items-center gap-2">
                    <Code className="h-6 w-6" />
                    {tricks[selectedTrick].title}
                  </div>
                  <div className="text-sm text-slate-400">
                    {tricks[selectedTrick].description}
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                    <pre className="text-green-400 font-mono text-sm overflow-x-auto scrollbar-hide">
                      {tricks[selectedTrick].code}
                    </pre>
                  </div>

                  <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                    <h4 className="text-emerald-400 font-semibold mb-2">
                      Explanation:
                    </h4>
                    <p className="text-slate-400 leading-relaxed">
                      {tricks[selectedTrick].explanation}
                    </p>
                  </div>
                </div>
                <button className="text-emerald-400 font-semibold mb-2">
                  Further Explain
                </button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BitManipulationTricks;
