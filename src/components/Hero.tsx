import heroIMG from "../assets/img/hero.jpg";

export default function Hero() {
  return (
    <section>
      <div className="font-contrast flex items-center justify-between container mx-auto pt-2">
        <div>
          <h1 className="font-bold text-7xl">
            Smart Watch <br />
            Forerunner 55
          </h1>
          <span className="text-xl font-contrast">Garmin</span>
        </div>
        <div>
          <img src={heroIMG} alt="Smart Watch" className="w-2xl" />
        </div>
      </div>
    </section>
  );
}
