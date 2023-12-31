import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { Notfound } from "./Components/Notfound";
import { Nav } from "./Components/Nav";
import { Footer } from "./Components/Footer";
import { Register } from "./Components/Register";
import { createContext, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Books } from "./Components/Books";
import { Book } from "./Components/Book";
export const siteName = createContext();
const App = () => {
  const client = new QueryClient({defaultOptions:{queries:{refetchOnWindowFocus: false,refetchOnMount:false}}});
  const [site, setSite] = useState("Hossein Farahkordmahaleh");
  return (
    <QueryClientProvider client={client}>
      <siteName.Provider value={{ site, setSite }}>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/books/" element={<Books/>}/>
            <Route path="/books/:book?/" element={<Book/>}/>

            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </siteName.Provider>
    </QueryClientProvider>
  );
};

export default App;
