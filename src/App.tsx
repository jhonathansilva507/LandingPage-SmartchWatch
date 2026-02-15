import Description from "./components/Description";
import Details from "./components/Details";
import Features from "./components/Features";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Description />
        <Features />
        <Details />
      </main>
    </div>
  );
}
