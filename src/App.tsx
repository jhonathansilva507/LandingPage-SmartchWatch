import Description from "./components/Description";
import Features from "./components/Features";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Specs from "./components/Specs";

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Description />
        <Features />
        <Specs />
      </main>
    </div>
  );
}
