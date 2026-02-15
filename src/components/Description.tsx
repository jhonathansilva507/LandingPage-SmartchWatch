import descriptionSVG from "../assets/img/Smartwatch-amico.svg";

export default function Description() {
  return (
    <section className="bg-gray-200 w-full">
      <div className="container w-full m-auto flex items-center justify-between">
        <div>
          <img src={descriptionSVG} className="w-3xl" />
        </div>
        <div className="max-w-2xl">
          <h2 className="font-bold text-4xl text-right">
            Smartchwatch ideal papa corredores e praticantes de atividade física
            que buscam monitorar seu desempenho
          </h2>
        </div>
      </div>
    </section>
  );
}
