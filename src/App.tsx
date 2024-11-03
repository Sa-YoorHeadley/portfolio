import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";

function App() {
  const LOCAL_STORAGE_THEME = "portfolio.theme";
  const [theme, setTheme] = useState<string>(
    localStorage.getItem(LOCAL_STORAGE_THEME) || "dark"
  );

  function themeToggle() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  useEffect(() => {
    const html = window.document.documentElement;

    const prevTheme = theme === "dark" ? "light" : "dark";
    html.classList.remove(prevTheme);

    const nextTheme = theme === "dark" ? "dark" : "light";
    html.classList.add(nextTheme);

    localStorage.setItem(LOCAL_STORAGE_THEME, theme);
  }, [theme]);

  return (
    <div id="app" className="App relative font-montserrat">
      <Header theme={theme} themeToggle={themeToggle} />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />

      <a
        className={`hidden md:flex flex-col fixed bottom-12 right-6 items-center group text-lightBlue`}
        href="#home"
      >
        <Icon
          className="opacity-10 group-hover:opacity-100 text-lightBlue w-10 h-10"
          icon="fa:arrow-circle-up"
        />
        <p className="transition-all translate-x-48 opacity-0  group-hover:-translate-x-0  group-hover:opacity-100">
          Back to the top
        </p>
      </a>
    </div>
  );
}

export default App;
