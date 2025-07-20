import { useState } from "react";
import { Card, Button } from "flowbite-react";
import {
  ArrowLeft,
  BookOpen,
  Play,
  ArrowRight,
  X,
  ChevronRight,
  BookOpenCheck,
} from "lucide-react";
import { lessons } from "../data/bitLessons";

const LearningResources = () => {
  const [selectedLesson, setSelectedLesson] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const nextStep = () => {
    if (currentStep < lessons[selectedLesson].steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const selectLesson = (index: number) => {
    setSelectedLesson(index);
    setCurrentStep(0);
    setIsSidebarOpen(false);
  };

  const LessonsList = () => (
    <div className="space-y-2 h-[600px] overflow-scroll scrollbar-hide">
      {lessons.map((lesson, index) => (
        <button
          key={index}
          onClick={() => selectLesson(index)}
          className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${
            selectedLesson === index
              ? "bg-indigo-600/20 border-indigo-600 text-indigo-300"
              : "bg-slate-800/50 border-slate-700 hover:bg-slate-800 text-slate-300"
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold mb-1">{lesson.title}</h3>
              <p className="text-sm opacity-80">{lesson.description}</p>
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
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-indigo-500/10 to-violet-500/10 blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-violet-500/10 to-indigo-500/10 blur-2xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 px-6 py-8 pt-24">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1">
              <div className="text-3xl font-bold pb-1 bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent flex items-center justify-between gap-3">
                <h1 className="flex items-center gap-3">
                  <BookOpen className="h-8 w-8 text-indigo-400" />
                  Learning Resources
                </h1>
                <div className="flex items-center space-x-4">
                  <Button
                    outline
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="lg:hidden flex gap-2 text-sm p-2 bg-indigo-600/20 border-indigo-600 text-indigo-300"
                  >
                    <BookOpenCheck className="h-4 w-4" />
                    Lessons
                  </Button>
                </div>
              </div>
              <p className="text-slate-400 mt-2">
                Interactive lessons on binary fundamentals
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
              <div className="fixed mt-18 inset-0 z-50 lg:hidden">
                <div
                  className="absolute inset-0 bg-black/50"
                  onClick={() => setIsSidebarOpen(false)}
                />
                <div className="absolute p-4 left-0 top-0 h-full w-80 bg-slate-900  border-r border-slate-800">
                  <div className="flex justify-between pb-4 ">
                    <h2 className="text-lg font-semibold flex items-center gap-2 text-indigo-400">
                      <BookOpen className="h-6 w-6" />
                      Lessons
                    </h2>
                    <Button
                      onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                      className=" text-indigo-300 hover:scale-110"
                    >
                      <X className="h-6 w-6" />
                    </Button>
                  </div>
                  <LessonsList />
                </div>
              </div>
            )}

            {/* Desktop Sidebar */}
            <div className="hidden lg:block lg:col-span-4">
              <Card className="bg-slate-900/40 border-slate-800 backdrop-blur-sm">
                <div className="flex flex-col border-slate-800/50">
                  <div className="text-2xl font-semibold text-indigo-400 flex items-center gap-2">
                    <BookOpen className="h-6 w-6" />
                    Lessons
                  </div>
                  <div className="text-sm text-slate-400">
                    Choose a lesson to start learning
                  </div>
                </div>
                <LessonsList />
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-8 space-y-6">
              {/* Lesson Content */}
              <Card className="bg-indigo-900/40 border-indigo-800 backdrop-blur-sm">
                <div className="-my-4 flex flex-col ">
                  <div className="text-xl font-semibold text-indigo-400 flex items-center gap-2">
                    <Play className="h-6 w-6" />
                    {lessons[selectedLesson].title}
                  </div>
                  <div className="text-sm text-slate-400 leading-relaxed">
                    {lessons[selectedLesson].description}
                  </div>
                </div>
              </Card>
              <Card className="bg-slate-900/40 border-slate-800 backdrop-blur-sm">
                <div className="flex flex-col ">
                  <div className="text-2xl font-semibold text-indigo-400 flex items-center gap-2">
                    {lessons[selectedLesson].steps[currentStep].title}
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="text-slate-300 leading-relaxed text-lg">
                    {lessons[selectedLesson].steps[currentStep].content}
                  </div>

                  <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                    <pre className="text-indigo-400 font-mono text-sm whitespace-pre-wrap">
                      <h4 className="text-white font-semibold mb-2">
                        Example:
                      </h4>
                      {lessons[selectedLesson].steps[currentStep].example}
                    </pre>
                  </div>

                  {/* Navigation */}
                  <div className="flex justify-center space-x-3 pt-4 border-t border-slate-700">
                    {lessons[selectedLesson].steps.map((_, index) => (
                      <button
                        key={index}
                        className={`w-4 h-4 rounded-md transition-colors ${
                          index === currentStep
                            ? "bg-indigo-400"
                            : "bg-slate-800"
                        }`}
                        onClick={() => setCurrentStep(index)}
                      />
                    ))}
                  </div>

                  <div className="flex items-center justify-between ">
                    <Button
                      onClick={() => {
                        if (currentStep === 0) {
                          if (selectedLesson > 0) {
                            setSelectedLesson(selectedLesson - 1);
                            setCurrentStep(0);
                          }
                        } else {
                          prevStep();
                        }
                      }}
                      disabled={selectedLesson === 0 && currentStep === 0}
                      className="p-4 border border-indigo-600 text-indigo-400 shadow-sm shadow-indigo-500 hover:bg-indigo-800/50 hover:shadow-md transition-all duration-300"
                    >
                      <ArrowLeft className="h-4 w-4 md:mr-2" />

                      {currentStep === 0 ? (
                        <span className="ml-2 md:ml-0">Prev Lesson</span>
                      ) : (
                        <span className="hidden md:block">Prev</span>
                      )}
                    </Button>

                    <Button
                      onClick={() => {
                        if (
                          currentStep ===
                          lessons[selectedLesson].steps.length - 1
                        ) {
                          if (selectedLesson < lessons.length - 1) {
                            setSelectedLesson(selectedLesson + 1);
                            setCurrentStep(0);
                          }
                        } else {
                          nextStep();
                        }
                      }}
                      disabled={
                        selectedLesson === lessons.length - 1 &&
                        currentStep === lessons[selectedLesson].steps.length - 1
                      }
                      className="p-4 border border-indigo-600 text-indigo-400 shadow-sm shadow-indigo-500 hover:bg-indigo-800/50 hover:shadow-md transition-all duration-300"
                    >
                      {currentStep ===
                      lessons[selectedLesson].steps.length - 1 ? (
                        <span className="mr-2 md:mr-0">Next Lesson</span>
                      ) : (
                        <span className="hidden md:block">Next</span>
                      )}

                      <ArrowRight className="h-4 w-4 md:ml-2" />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningResources;
