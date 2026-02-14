import Description from "./components/Description";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Description />
      </main>
    </div>
  );
}
