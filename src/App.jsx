import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import MainPage from "./components/Home/MainPage";
import { ContactsProvider } from "./context/ContactsContext";

function App() {
  return (
    <ContactsProvider>
        <Navbar />
        <MainPage />
    </ContactsProvider>
  );
}

export default App;
