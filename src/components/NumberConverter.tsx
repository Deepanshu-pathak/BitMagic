import { useState } from "react";
import { Card, Button } from "flowbite-react";
import { RefreshCw, Copy, Check, TriangleAlert } from "lucide-react";

const tabs = ["dec", "bin", "hex", "oct"];

const NumberConverter = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputBase, setInputBase] = useState("dec");
  const [results, setResults] = useState({
    binary: "",
    decimal: "",
    hex: "",
    octal: "",
    onesComplement: "",
    twosComplement: "",
  });
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [error, setError] = useState("");

  const validateInput = (value: string, base: string): boolean => {
    if (!value.trim()) return false;

    switch (base) {
      case "bin":
        return /^[01]+$/.test(value);
      case "dec":
        return (
          /^-?\d+$/.test(value) &&
          parseInt(value) >= -2147483648 &&
          parseInt(value) <= 2147483647
        );
      case "hex":
        return /^[0-9A-Fa-f]+$/.test(value);
      case "oct":
        return /^[0-7]+$/.test(value);
      default:
        return false;
    }
  };

  const convertNumber = () => {
    if (!inputValue.trim()) {
      setError("Please enter a value");
      return;
    }

    if (!validateInput(inputValue, inputBase)) {
      setError(`Invalid ${inputBase} number format`);
      return;
    }

    setError("");
    let decimalValue: number;

    try {
      switch (inputBase) {
        case "bin":
          decimalValue = parseInt(inputValue, 2);
          break;
        case "dec":
          decimalValue = parseInt(inputValue, 10);
          break;
        case "hex":
          decimalValue = parseInt(inputValue, 16);
          break;
        case "oct":
          decimalValue = parseInt(inputValue, 8);
          break;
        default:
          throw new Error("Invalid base");
      }

      // Calculate complements for binary representation
      const binaryStr = (decimalValue >>> 0).toString(2).padStart(32, "0");
      const onesComp = binaryStr
        .split("")
        .map((bit) => (bit === "0" ? "1" : "0"))
        .join("");
      const twosComp = (parseInt(onesComp, 2) + 1)
        .toString(2)
        .padStart(32, "0");

      setResults({
        binary: decimalValue >= 0 ? decimalValue.toString(2) : binaryStr,
        decimal: decimalValue.toString(),
        hex: decimalValue.toString(16).toUpperCase(),
        octal: decimalValue.toString(8),
        onesComplement: onesComp,
        twosComplement: twosComp,
      });
    } catch (err) {
      setError("Conversion failed. Please check your input.");
      return;
    }
  };

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const clearAll = () => {
    setInputValue("");
    setResults({
      binary: "",
      decimal: "",
      hex: "",
      octal: "",
      onesComplement: "",
      twosComplement: "",
    });
    setError("");
  };

  const formatBinary = (binary: string) => {
    return binary.replace(/(.{4})/g, "$1 ").trim();
  };

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-pink-500/10 to-rose-500/10 blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-cyan-500/10 to-pink-500/10 blur-2xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-8 pt-24">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1">
              <h1 className="text-3xl font-bold pb-1 bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent flex items-center gap-3">
                <RefreshCw className="h-8 w-8 text-pink-400" />
                Number Converter
              </h1>
              <p className="text-slate-400 mt-2">
                Convert between different number systems
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Input Section */}
            <Card className="rounded-lg bg-slate-900/50 border-slate-700 backdrop-blur-sm shadow-2xl">
              <div className="flex flex-col border-slate-800/50">
                <div className="text-2xl font-semibold text-pink-400 flex items-center gap-2">
                  <RefreshCw className="h-6 w-6" />
                  Input Number
                </div>
                <div className="text-sm text-slate-400">
                  Enter a number in any base system
                </div>
              </div>
              <div className="space-y-8">
                <div className="grid grid-cols-4 bg-slate-800 p-1 rounded-md overflow-hidden">
                  {tabs.map((tab) => (
                    <div
                      key={tab}
                      onClick={() => setInputBase(tab)}
                      className={`cursor-pointer text-sm text-center py-2 font-medium transition-colors ${
                        inputBase === tab
                          ? "bg-pink-500 rounded-md"
                          : "text-slate-400"
                      }`}
                    >
                      {tab.toUpperCase()}
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder={`Enter ${inputBase} number...`}
                    className="flex h-10 w-full rounded-md border px-3 py-2 bg-slate-800 border-slate-700 text-white text-lg font-mono"
                    onKeyPress={(e) => e.key === "Enter" && convertNumber()}
                  />

                  {error && (
                    <div className="flex gap-2 text-pink-400 text-sm bg-pink-500/10 p-2 rounded border border-pink-500/20">
                      <TriangleAlert />{error}
                    </div>
                  )}

                  <div className="flex space-x-2">
                    <Button
                      onClick={convertNumber}
                      className="flex-2 bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-400 hover:to-rose-500 py-5 text-lg font-semibold shadow-lg hover:shadow-pink-500/25 transition-all duration-300 hover:scale-[1.02]"
                    >
                      <RefreshCw className="h-4 w-4 mr-2" />
                      Convert
                    </Button>
                    <Button
                      outline
                      onClick={clearAll}
                      className="flex-1 border-slate-700 text-slate-300 hover:bg-slate-800 py-5 text-lg font-semibold shadow-lg hover:border-pink-500 transition-all duration-300 hover:scale-[1.02]"
                    >
                      Clear
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Results Section */}
            <Card className="bg-slate-900/40 border-slate-800 backdrop-blur-sm">
              <div className="flex flex-col">
                <div className="text-xl font-semibold text-pink-400 flex items-center">
                  <Copy className="h-5 w-5 mr-2" />
                  Results
                </div>
                <div className="text-sm text-slate-400">
                  Converted values in all number systems
                </div>
              </div>
              <div className="space-y-4 text-pink-400">
                {[
                  {
                    label: "Decimal",
                    value: results.decimal,
                  },
                  {
                    label: "Binary",
                    value: formatBinary(results.binary),
                  },
                  {
                    label: "Hexadecimal",
                    value: results.hex,
                  },
                  {
                    label: "Octal",
                    value: results.octal,
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-slate-800/50 p-4 rounded-lg border border-slate-700"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-slate-300 font-medium">
                        {item.label}
                      </span>
                      <Button
                        size="sm"
                        onClick={() => copyToClipboard(item.value, item.label)}
                        className="text-slate-400 hover:text-white"
                        disabled={!item.value}
                      >
                        {copiedField === item.label ? (
                          <Check className="h-4 w-4" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                    <div
                      className={`font-mono text-lg break-all`}
                    >
                      {item.value || "---"}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Complements Section */}
          {results.binary && (
            <Card className="mt-8 bg-slate-900/40 border-slate-800 backdrop-blur-sm">
              <div className="flex flex-col">
                <div className="text-xl font-semibold text-pink-400 flex items-center">
                  <RefreshCw className="h-5 w-5 mr-2 " />
                  Binary Complements
                </div>
                <div className="text-sm text-slate-400">
                  1's and 2's complement representations (32-bit)
                </div>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-slate-300 font-medium">
                        1's Complement
                      </span>
                      <Button
                        size="sm"
                        onClick={() =>
                          copyToClipboard(
                            results.onesComplement,
                            "1's Complement"
                          )
                        }
                        className="text-slate-400 hover:text-white"
                      >
                        {copiedField === "1's Complement" ? (
                          <Check className="h-4 w-4" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                    <div className="font-mono text-sm text-pink-400 break-all">
                      {formatBinary(results.onesComplement)}
                    </div>
                  </div>

                  <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-slate-300 font-medium">
                        2's Complement
                      </span>
                      <Button
                        size="sm"
                        onClick={() =>
                          copyToClipboard(
                            results.twosComplement,
                            "2's Complement"
                          )
                        }
                        className="text-slate-400 hover:text-white"
                      >
                        {copiedField === "2's Complement" ? (
                          <Check className="h-4 w-4" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                    <div className="font-mono text-sm text-pink-400 break-all">
                      {formatBinary(results.twosComplement)}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default NumberConverter;
