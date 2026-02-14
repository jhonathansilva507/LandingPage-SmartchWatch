import descriptionSVG from "../assets/img/Smartwatch-amico.svg";

export default function Description() {
  return (
    <section className="bg-gray-200">
      <div className="container w-full m-auto flex items-center justify-between">
        <div>
          <img src={descriptionSVG} className="w-4xl" />
        </div>
        <div className="max-w-2xl">
          <h2 className="font-bold text-4xl">
            Smartchwatch ideal papa corredores e praticantes de atividade física
            que buscam monitorar seu desempenho
          </h2>
        </div>
      </div>
    </section>
  );
}
