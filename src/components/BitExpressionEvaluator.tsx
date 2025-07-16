import { useState } from "react";
import { Card, Button } from "flowbite-react";
import {
  Calculator,
  Sparkles,
  Circle,
  Zap,
  Triangle,
  Square,
} from "lucide-react";

const BitExpressionEvaluator = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState("");

  const evaluateExpression = () => {
    if (!expression) {
      setResult(null);
      setError("Please enter a valid expression.");
      return;
    }

    try {
      const processedExpression = expression
        .replace(/&/g, "&")
        .replace(/\|/g, "|")
        .replace(/\^/g, "^")
        .replace(/<</g, "<<")
        .replace(/>>/g, ">>");

      const evalResult = eval(processedExpression);
      setResult(evalResult);
    } catch {
      setResult(null);
      setError("Error evaluating expression. Please check your syntax.");
      return;
    }
    setError("");
  };

  const formatBinary = (num: number) => {
    return num.toString(2).padStart(8, "0");
  };

  return (
    <div className="min-h-screen pt-18 bg-slate-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-2xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 p-6 ">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1">
              <h1 className="text-3xl font-bold pb-1 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent flex items-center gap-3">
                <Calculator className="h-8 w-8 text-cyan-400" />
                Bit Expression Evaluator
              </h1>
              <p className="text-slate-400 mt-2">
                Enter bitwise expressions and get multi-format results
              </p>
            </div>
          </div>

          {/* Main Evaluator Card */}
          <Card className="rounded-lg bg-slate-900/50 border-slate-700 backdrop-blur-sm shadow-2xl">
            <div className="flex flex-col border-slate-800/50">
              <div className="text-2xl font-semibold flex items-center gap-2 text-cyan-400">
                <Sparkles className="h-6 w-6" />
                Expression Playground
              </div>
              <div className="text-sm text-slate-400">
                Enter a valid Bitwise Expression
              </div>
            </div>
            <div className="space-y-8">
              {/* Expression Input */}
              <div className="space-y-2">
                <div className="text-slate-300 font-medium">
                  Bitwise Expression
                </div>
                <input
                  onChange={(e) => {
                    setExpression(e.target.value);
                    setError("");
                  }}
                  placeholder="e.g., 5 & 7, 4 << 2, (8 | 1) ^ 7"
                  className="flex h-10 w-full rounded-md border px-3 py-2 bg-slate-800/50 border-slate-600 text-white font-mono text-lg focus:border-cyan-500 focus:ring-cyan-500/20 transition-all duration-200"
                />

                {error && (
                  <div className="text-cyan-400 text-sm bg-cyan-500/10 p-2 rounded border border-cyan-500/20 ">
                    {error}
                  </div>
                )}
              </div>
              <Button
                onClick={evaluateExpression}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-cyan-500/25 py-6 text-lg font-semibold"
              >
                <Calculator className="mr-2 h-5 w-5" />
                Evaluate Expression
              </Button>
            </div>
          </Card>

          {/* Results Display */}
          {result !== null && (
            <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/30 backdrop-blur-sm hover:scale-[1.02] transition-transform duration-200">
              <div className="flex flex-col space-y-1.5 border-b border-cyan-500/20">
                <div className="text-xl font-semibold text-cyan-400 flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  Expression Result
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-col items-center  bg-slate-800/30 rounded-lg p-4 border border-slate-700">
                  <div className="text-sm font-semibold text-slate-400 flex items-center gap-2">
                    <Circle className="h-5 w-5" />
                    Decimal
                  </div>

                  <div className="w-full text-center overflow-scroll scrollbar-hide text-xl font-mono text-cyan-400 mt-2">
                    {result}
                  </div>
                </div>
                <div className="flex flex-col items-center text-slate-400  bg-slate-800/30 rounded-lg p-4 border border-slate-700">
                  <div className="text-sm font-semibold  flex items-center gap-2">
                    <Triangle className="h-5 w-5" />
                    Binary
                  </div>

                  <div className="w-full text-center overflow-scroll scrollbar-hide text-xl font-mono text-cyan-400 mt-2">
                    {formatBinary(result)}
                  </div>
                </div>
                <div className="flex flex-col items-center text-slate-400 bg-slate-800/30 rounded-lg p-4 border border-slate-700">
                  <div className="text-sm font-semibold flex items-center gap-2">
                    <Square className="h-5 w-5" />
                    Hexadecimal
                  </div>

                  <div className="w-full text-center overflow-scroll scrollbar-hide text-xl font-mono text-cyan-400 mt-2">
                    0x{result.toString(16).toUpperCase()}
                  </div>
                </div>
              </div>
            </Card>
          )}

          {/* AI Explanation */}
          {/* {explanation && (
            <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm shadow-2xl">
              <div className="flex flex-col border-b border-slate-800/50">
                <div className="text-2xl font-semibold flex items-center gap-2 text-yellow-400">
                  <Info className="h-5 w-5" />
                  AI-Powered Step-by-Step Explanation
                </div>
              </div>
              <div className="space-y-6 p-6">
                <div className="bg-slate-800/50 border-slate-600 text-slate-300 min-h-40 focus:border-yellow-500 resize-none" />
                {explanation}
              </div>
            </Card>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default BitExpressionEvaluator;
