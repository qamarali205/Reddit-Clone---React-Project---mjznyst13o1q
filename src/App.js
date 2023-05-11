import React from "react";
import Home from "./pages/Home";
import {Routes, Route} from "react-router-dom";
// import { AuthContextProvider } from "../src/components/context/AuthContext";

function App() {
  return (
      <>
      {/* <AuthContextProvider> */}
      <Routes>
        <Route path="*" element={<Home />} />
      </Routes>
      {/* </AuthContextProvider> */}
      </>

  );
}

export default App;
