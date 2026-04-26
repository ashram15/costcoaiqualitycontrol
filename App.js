import * as React from "react";
import ProductAnalysisPage from "./screens/ProductAnalysisPage";
import SignUpScreen from "./screens/SignUpScreen";

export default function App() {
  const [screen, setScreen] = React.useState("signUp");

  if (screen === "productAnalysis") {
    return <ProductAnalysisPage onBack={() => setScreen("signUp")} />;
  }

  return <SignUpScreen onProductAnalysisPress={() => setScreen("productAnalysis")} />;
}
