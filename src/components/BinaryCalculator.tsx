import { useState } from "react";
import { Card, Button } from "flowbite-react";
import { Binary, Calculator, Circle, Square, Triangle, Zap } from "lucide-react";

const BinaryCalculator = () => {
  const [num1, setNum1] = useState(" ");
  const [num2, setNum2] = useState(" ");
  const [operation, setOperation] = useState("+");
  const [error, setError] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const operations = [
    { symbol: "+", name: "Add", type: "arithmetic" },
    { symbol: "-", name: "Subtract", type: "arithmetic" },
    { symbol: "*", name: "Multiply", type: "arithmetic" },
    { symbol: "/", name: "Divide", type: "arithmetic" },
    { symbol: "&", name: "AND", type: "bitwise" },
    { symbol: "|", name: "OR", type: "bitwise" },
    { symbol: "^", name: "XOR", type: "bitwise" },
    { symbol: "<<", name: "Left Shift", type: "bitwise" },
    { symbol: ">>", name: "Right Shift", type: "bitwise" },
  ];

  const calculate = () => {
    if (!/^\d+$/.test(num1) || !/^\d+$/.test(num2)) {
      setResult(null);
      setError("Please enter valid numbers.");
      return;
    }
    setError("");
    try {
      const dec1 = parseInt(num1, 10);
      const dec2 = parseInt(num2, 10);

      let calculationResult: number;

      switch (operation) {
        case "+":
          calculationResult = dec1 + dec2;
          break;
        case "-":
          calculationResult = dec1 - dec2;
          break;
        case "*":
          calculationResult = dec1 * dec2;
          break;
        case "/":
          calculationResult = Math.floor(dec1 / dec2);
          break;
        case "&":
          calculationResult = dec1 & dec2;
          break;
        case "|":
          calculationResult = dec1 | dec2;
          break;
        case "^":
          calculationResult = dec1 ^ dec2;
          break;
        case "<<":
          calculationResult = dec1 << dec2;
          break;
        case ">>":
          calculationResult = dec1 >> dec2;
          break;
        default:
          calculationResult = 0;
      }

      setResult(calculationResult);
    } catch (error) {
      setResult(null);
      setError("Calculation Error. Please try again.");
      return;
    }
  };

  const formatBinary = (num: number, minLength = 8) => {
    return num.toString(2).padStart(minLength, "0");
  };

  const BitVisualization = ({
    binary,
  }: {
    binary: string;
  }) => (
    <div className="space-y-2">
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex space-x-1 font-mono text-lg w-max">
          {binary
            .padStart(8, "0")
            .split("")
            .map((bit, index) => (
              <div
                key={index}
                className={`w-8 h-8 flex items-center justify-center rounded-lg border transition-all duration-300 hover:scale-110 ${
                  bit === "1"
                    ? "bg-purple-500/30 border-purple-400 text-purple-300 shadow-lg shadow-purple-500/20"
                    : "bg-slate-700 border-slate-600 text-slate-400"
                }`}
              >
                {bit}
              </div>
            ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen pt-18 bg-slate-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-purple-500/10 to-violet-500/10 blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-2xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1">
              <h1 className="text-3xl font-bold pb-1 bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent flex items-center gap-3">
                <Binary className="h-8 w-8 text-purple-400" />
                Binary Calculator
              </h1>
              <p className="text-slate-400 mt-2">
                Perform arithmetic and bitwise operations with visual bit
                manipulation
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Calculator */}
            <div className="lg:col-span-2 space-y-8">
              <Card className="rounded-lg bg-slate-900/50 border-slate-700 backdrop-blur-sm shadow-2xl">
                <div className="flex flex-col border-slate-800/50">
                  <div className="text-2xl font-semibold flex items-center gap-2 text-purple-400">
                    <Calculator className="h-6 w-6" />
                    Binary Operations
                  </div>
                  <div className="text-sm text-slate-400">
                    Input numbers and perform calculations with live bit
                    visualization
                  </div>
                </div>
                <div className="space-y-8">
                  {/* Input Numbers */}
                  <div className="space-y-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <div className="text-sm text-slate-300 font-medium">
                          First Number
                        </div>
                        <input
                          onChange={(e) => {
                            setNum1(e.target.value);
                            setResult(null);
                            setError("")
                          }}
                          placeholder="e.g., 1010, 1101"
                          className="flex h-10 w-full rounded-md border px-3 py-2 bg-slate-800/50 border-slate-600 text-white font-mono text-lg focus:border-purple-500 focus:ring-purple-500/20"
                        />
                        <BitVisualization
                          binary={parseInt(num1, 10).toString(2)}
                        />
                      </div>
                      <div className="space-y-3">
                        <div className="text-sm text-slate-300 font-medium">
                          Second Number
                        </div>
                        <input
                          onChange={(e) => {
                            setNum2(e.target.value);
                            setResult(null);
                            setError("")
                          }}
                          placeholder="e.g., 1010, 1101"
                          className="flex h-10 w-full rounded-md border px-3 py-2 bg-slate-800/50 border-slate-600 text-white font-mono text-lg focus:border-purple-500 focus:ring-purple-500/20"
                        />
                        <BitVisualization
                          binary={parseInt(num2, 10).toString(2)}
                        />
                      </div>
                    </div>
                    {error && (
                      <div className="text-purple-400 text-sm bg-purple-500/10 p-2 rounded border border-purple-500/20 ">
                        {error}
                      </div>
                    )}
                  </div>

                  {/* Operations */}
                  <div className="space-y-4">
                    <div className="text-slate-300 font-medium">Operation</div>
                    <div className="grid grid-cols-3 gap-3">
                      {operations.map((op) => (
                        <Button
                          key={op.symbol}
                          onClick={() => setOperation(op.symbol)}
                          className={`transition-all duration-200 ${
                            operation === op.symbol
                              ? "bg-purple-500 hover:bg-purple-600 shadow-lg shadow-purple-500/25"
                              : "outline border-slate-600 text-slate-300 hover:bg-slate-700 hover:border-slate-500"
                          }`}
                        >
                          <span className="font-mono mr-0 md:mr-2 text-lg">
                            {op.symbol}
                          </span>
                          <span className="hidden md:inline md:text-sm">
                            {op.name}
                          </span>
                        </Button>
                      ))}
                    </div>
                  </div>

                  <Button
                    onClick={calculate}
                    className="w-full bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-400 hover:to-violet-500 py-6 text-lg font-semibold shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-[1.02]"
                  >
                    <Zap className="mr-2 h-5 w-5" />
                    Calculate Result
                  </Button>
                </div>
              </Card>

              {/* Result Display */}
              {result !== null && (
                <Card className="rounded-lg border bg-gradient-to-br from-purple-500/20 to-violet-500/20 border-purple-500/30 backdrop-blur-sm shadow-2xl">
                  <div className="flex flex-col space-y-1.5 border-b border-purple-500/20">
                    <div className="text-xl font-semibold text-purple-400 flex items-center gap-2">
                      <Zap className="h-5 w-5" />
                      Calculation Result
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex flex-col items-center bg-slate-800/30 rounded-lg p-4 border border-slate-700">
                        <div className="text-sm font-semibold text-slate-400 flex items-center gap-2">
                          <Circle className="h-5 w-5" />
                          Decimal
                        </div>
                        <div className="w-full text-center overflow-scroll scrollbar-hide mt-2 font-mono text-xl text-purple-400">
                          {result}
                        </div>
                      </div>
                      <div className="flex flex-col items-center bg-slate-800/30 rounded-lg p-4 border border-slate-700">
                        <div className="text-sm font-semibold text-slate-400 flex items-center gap-2">
                          <Triangle className="h-5 w-5" />
                          Binary
                        </div>
                        <div className="w-full text-center overflow-scroll scrollbar-hide mt-2 font-mono text-xl text-purple-400">
                          {formatBinary(result)}
                        </div>
                      </div>
                      <div className="flex flex-col items-center bg-slate-800/30 rounded-lg p-4 border border-slate-700">
                        <div className="text-sm font-semibold text-slate-400 flex items-center gap-2">
                          <Square className="h-5 w-5" />
                          Hexadecimal
                        </div>
                        <div className="w-full text-center overflow-scroll scrollbar-hide mt-2 font-mono text-xl text-purple-400">
                          0x{result.toString(16).toUpperCase()}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              )}
            </div>

            <div className="hidden lg:block space-y-8">
              {/* Quick Reference */}
              <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm shadow-2xl">
                <div className="border-b border-slate-800/50">
                  <div className="text-purple-400">Quick Reference</div>
                </div>
                <div className="space-y-6 p-6">
                  <div>
                    <div className="mb-3 border-violet-500 text-violet-400">
                      Arithmetic Operations
                    </div>
                    <div className="text-sm text-slate-400 space-y-2">
                      <div className="flex justify-between">
                        <span>Addition</span>
                        <code className="text-violet-400">+</code>
                      </div>
                      <div className="flex justify-between">
                        <span>Subtraction</span>
                        <code className="text-violet-400">-</code>
                      </div>
                      <div className="flex justify-between">
                        <span>Multiplication</span>
                        <code className="text-violet-400">*</code>
                      </div>
                      <div className="flex justify-between">
                        <span>Division</span>
                        <code className="text-violet-400">/</code>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-3 border-violet-500 text-violet-400">
                      Bitwise Operations
                    </div>
                    <div className="text-sm text-slate-400 space-y-2">
                      <div className="flex justify-between">
                        <span>AND</span>
                        <code className="text-violet-400">&</code>
                      </div>
                      <div className="flex justify-between">
                        <span>OR</span>
                        <code className="text-violet-400">|</code>
                      </div>
                      <div className="flex justify-between">
                        <span>XOR</span>
                        <code className="text-violet-400">^</code>
                      </div>
                      <div className="flex justify-between">
                        <span>Left Shift</span>
                        <code className="text-violet-400">&lt;&lt;</code>
                      </div>
                      <div className="flex justify-between">
                        <span>Right Shift</span>
                        <code className="text-violet-400">&gt;&gt;</code>
                      </div>
                    </div>
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

export default BinaryCalculator;
