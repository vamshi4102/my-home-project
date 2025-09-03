import React from "react";
import { AuthProvider } from "./utils/context/AuthContext";
import WebsiteStartPoint from "./navigation";
function App() {
  return (
    <>
      <AuthProvider>
      <WebsiteStartPoint />
      </AuthProvider>
    </>
  );
}

export default App;
