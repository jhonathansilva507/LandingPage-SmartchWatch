// import descriptionSVG from "../assets/img/Smartwatch-amico.svg";
import descriptionPNG from "../assets/img/img-detail.png";

export default function Description() {
  return (
    <section className="bg-gray-200 w-full">
      <div className="container w-full pb-8 m-auto flex flex-col items-center justify-between">
        <div>
          {/* <img src={descriptionSVG} className="w-3xl" /> */}
          <img src={descriptionPNG} className="w-4xl" />
        </div>
        <div className="max-w-2xl">
          <h2 className="font-bold text-center text-2xl lg:text-5xl">
            Smartchwatch ideal para corredores e praticantes de atividade física
            que buscam monitorar seu desempenho
          </h2>
        </div>
      </div>
    </section>
  );
}
