import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./components/Index";
// import BitExpressionEvaluator from "./components/BitExpressionEvaluator";
import BinaryCalculator from "./components/BinaryCalculator";
import NumberConverter from "./components/NumberConverter";
// import BitManipulationTricks from "./components/BitManipulationTricks";
// import CodingChallenges from "./components/CodingChallenges";
// import LearningResources from "./components/LearningResources";
import Navbar from "./components/Navbar";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        {/* <Route path="/evaluator" element={<BitExpressionEvaluator />} /> */}
        <Route path="/calculator" element={<BinaryCalculator />} />
        <Route path="/converter" element={<NumberConverter/>}/>
        {/* <Route path="/tricks" element={<BitManipulationTricks />} /> */}
        {/* <Route path="/challenges" element={<CodingChallenges />} /> */}
        {/* <Route path="/learn" element={<LearningResources />} /> */}
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
