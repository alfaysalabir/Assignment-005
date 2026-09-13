import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SectionTitle from "./components/SectionTitle";
import TechCard from "./components/TechCard";
import YourStackSidebar from "./components/YourStackSidebar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

export default function App() {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load the technology catalog from the local JSON file (not hardcoded).
  useEffect(() => {
    fetch("/data/technologies.json")
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setIsLoading(false);
      })
      .catch(() => {
        toast.error("Could not load technologies. Please refresh the page.");
        setIsLoading(false);
      });
  }, []);

  function handleAddToStack(tech) {
    const alreadyAdded = stack.some((item) => item.id === tech.id);

    if (alreadyAdded) {
      toast.warn(`${tech.name} is already in your stack!`);
      return;
    }

    setStack((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to your stack.`);
  }

  function handleRemoveFromStack(id) {
    const tech = stack.find((item) => item.id === id);
    setStack((prev) => prev.filter((item) => item.id !== id));
    if (tech) toast.info(`${tech.name} removed from your stack.`);
  }

  function handleRemoveAll() {
    setStack([]);
    toast.info("Your stack has been cleared.");
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />

      <section id="technologies" className="mx-auto max-w-7xl px-6 py-16">
        <SectionTitle />

        {isLoading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {/* Tech cards grid — 1 col mobile, 2 col tablet, 3 col desktop */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-3 xl:grid-cols-3">
              {technologies.map((tech) => (
                <TechCard
                  key={tech.id}
                  tech={tech}
                  isAdded={stack.some((item) => item.id === tech.id)}
                  onAdd={handleAddToStack}
                />
              ))}
            </div>

            {/* Your Stack sidebar */}
            <div className="lg:col-span-1">
              <YourStackSidebar
                stack={stack}
                onRemove={handleRemoveFromStack}
                onRemoveAll={handleRemoveAll}
              />
            </div>
          </div>
        )}
      </section>

      <Footer />

      <ToastContainer position="top-right" autoClose={2500} newestOnTop />
    </div>
  );
}
