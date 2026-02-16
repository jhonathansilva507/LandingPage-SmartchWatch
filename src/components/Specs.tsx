import detailPNG from "../assets/img/img-detail1.png";

export default function Specs() {
  const physicalSpecs = [
    { label: "Material da caixa: ", value: "Polímero reforçado" },
    { label: "Material da lente: ", value: "Vidro quimicamente reforçado" },
    { label: "Material da alça: ", value: "Silicone" },
    { label: "Proteção à água: ", value: "5 ATM" },
    { label: "Tipo de: ", value: "LCD" },
    { label: "Tamanho: ", value: "42 x 42 x 11,6 mm" },
    { label: "Peso: ", value: "37g" },
  ];
  const tecnicalSpecs = [
    { label: "Autonomia da bateria: ", value: "2 semanas (Modo Smartchwatch)" },
    { label: "Autonomia modo GPS: ", value: "20 horas" },
    { label: "Memória interna: ", value: "2 Gb" },
    { label: "Memória RAM: ", value: "2 Gb" },
    { label: "Conectividade: ", value: "Bluetooth, GPS" },
    { label: "Compatibilidade: ", value: "Android e IOS" },
    { label: "Resolução de vídeo: ", value: "208 x 2208 px" },
  ];
  return (
    <section>
      <div className="container m-auto">
        <div className="flex justify-center">
          <img src={detailPNG} className="w-4xl" />
        </div>

        <div className="flex justify-center gap-16">
          <div className="bg-gray-100 p-4 rounded-3xl shadow-lg w-lg">
            {physicalSpecs.map((physicSpec, physicIndex) => (
              <div key={physicIndex} className="flex gap-1 mb-1.5">
                <h3 className="font-semibold">{physicSpec.label}</h3>
                <span>{physicSpec.value}</span>
              </div>
            ))}
          </div>

          <div className="bg-gray-100 p-4 rounded-3xl shadow-lg w-lg">
            {tecnicalSpecs.map((tecnicSpec, tecnicIndex) => (
              <div key={tecnicIndex} className="flex gap-1 mb-1.5">
                <h3 className="font-semibold">{tecnicSpec.label}</h3>
                <span>{tecnicSpec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
