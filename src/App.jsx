import React from "react";
import { AuthProvider } from "./utils/context/AuthContext";
import WebsiteStartPoint from "./navigation";
import { Provider } from "react-redux";
import { store } from "./redux/store";
function App() {
  return (
    <>
      <Provider store={store}>
        <AuthProvider>
          <WebsiteStartPoint />
        </AuthProvider>
      </Provider>
    </>
  );
}

export default App;
