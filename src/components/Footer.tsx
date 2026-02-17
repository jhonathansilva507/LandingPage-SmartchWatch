export default function Footer() {
  const footerSecitons = [
    {
      title: "PRODUTOS",
      links: [
        "CICLISMO",
        "SPORT FITNESS",
        "GPS",
        "AUTOMOTIVO",
        "AVIAÇÃO",
        "MARINE",
        "ACESSÓRIOS",
      ],
    },
    {
      title: "AJUDA",
      links: [
        "ASSITÊNCIA TÉCNICA (RMA)",
        "REVENDAS AUTORIZDAS",
        "MANUAIS",
        "MAPAS",
        "GARMIN EXPRESS",
        "HELP",
        "REGISTRO DO PRODUTO",
        "TROCAS E DEVOLUÇÕES",
      ],
    },
    {
      title: "INSTITUCIONAL",
      links: [
        "SOBRE",
        "POLÍTICA DE LGPD",
        "INVESTIDORES",
        "IMPRENSA",
        "LOJA GARMIN MOEMA",
        "LOJA GARMIN MORUMBI",
      ],
    },
    {
      title: "ATENDIMENTO E SUPORTE",
      links: [
        "CENTRAL DE ATENDIMENTO",
        "ATENDIMENTO PÓS VENDA",
        "(11) 5180-4830",
        "DÚVIDAS SOBRE O PRODUTO",
        "(11) 5180-4830",
        "SUPORTE TÉCNICO",
        "WhatsApp: (011) 5180-4835",
      ],
    },
  ];
  return (
    <footer id="footer" className="bg-gray-800 text-white py-8 scroll-mt-16">
      <div className="container m-auto flex flex-col items-center justify-start">
        <h3 className="font-bold mb-4 text-2xl">GARMIN</h3>
        <hr className="w-full border-gray-400 border-px" />
        <div className="w-full m-auto flex flex-col lg:flex-row items-start justify-center lg:justify-between text-center lg:text-start">
          {footerSecitons.map((section, index) => (
            <div key={index} className="m-auto">
              <h3 className="font-semibold text-2xl my-4">{section.title}</h3>
              <ul>
                {section.links.map((link, indexLink) => (
                  <li key={indexLink} className="mb-3">
                    <a href="" className="text-gray-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
