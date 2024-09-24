import { Analytics } from '@vercel/analytics/react';
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
      <Home />
      <Analytics />
  );
}

export default App;
