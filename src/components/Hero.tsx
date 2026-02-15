import heroIMG from "../assets/img/hero.jpg";

export default function Hero() {
  return (
    <section>
      <div className="container mx-auto flex items-center justify-between pt-2 flex-col md:flex-row">
        <div className="text-center my-4 md:text-start">
          <h1 className="font-bold text-3xl md:text-5xl lg:text-7xl">
            Smart Watch <br />
            Forerunner 55
          </h1>
          <span className="text-xl font-contrast">Garmin</span>
        </div>
        <div>
          <img
            src={heroIMG}
            alt="Smart Watch"
            className="w-64 md:w-sm lg:w-xl"
          />
        </div>
      </div>
    </section>
  );
}
