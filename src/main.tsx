import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme.tsx";
import { HotkeysProvider } from "react-hotkeys-hook";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <HotkeysProvider>
        <App />
      </HotkeysProvider>
    </ChakraProvider>
  </React.StrictMode>
);
