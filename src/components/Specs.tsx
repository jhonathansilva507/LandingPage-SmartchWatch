import { useState } from "react";

import whiteIMG from "../assets/img/img-color-white.png";
import grayIMG from "../assets/img/img-color-gray.png";
import cyaIMG from "../assets/img/img-color-cyan.png";
import blackIMG from "../assets/img/img-color-black.png";
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
  const colors = [
    { name: "white", img: whiteIMG, colorClass: "bg-white" },
    { name: "gray", img: grayIMG, colorClass: "bg-gray-500" },
    { name: "cyan", img: cyaIMG, colorClass: "bg-cyan-200" },
    { name: "black", img: blackIMG, colorClass: "bg-gray-800" },
  ];

  const [selectionColor, setSelecitonColor] = useState("white");
  return (
    <section>
      <div className="container m-auto flex flex-col items-center">
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

        <h2 className="mx-auto mt-8 font-semibold text-2xl">
          Esoclha a cor que mais combina com você
        </h2>
        <div className="">
          <img
            src={`${colors.find((color) => color.name === selectionColor)?.img}`}
            className=""
          />
        </div>

        <div className="m-auto flex justify-center">
          {colors.map((color) => (
            <button
              key={color.name}
              onClick={() => setSelecitonColor(color.name)}
              className="cursor-pointer m-1.5"
            >
              <div
                className={`w-8 h-8 ${color.colorClass} rounded-full transition-all duration-300 border-4 ${color.name === selectionColor ? "border-amber-400 scale-110" : "border-gray-300"}`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
