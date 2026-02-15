export default function Features() {
  const features = [
    {
      title: "GPS INCORPORADO",
      text: "Monitore o percurso das suas corridas e obtenha estatísticas precisas, incluindo distância, ritmo e intervalos.",
      icon: "fa-solid fa-location-dot",
    },
    {
      title: "ALERTAS DE CADÊNCIA",
      text: "Pretende melhorar a sua forma de corrida? Utilize os alertas de cadência para saber quando se desviou do intervalo de cadência pretendido.",
      icon: "fa-solid fa-stopwatch",
    },
    {
      title: "TEMPO DE CORRIDA",
      text: "Precisa de alguma orientação que o ajude a cumprir o seu objetivo? Selecione uma distância para a sua corrida e verá um display de dados que apresenta o tempo de corrida estimado.",
      icon: "fa-regular fa-clock",
    },
    {
      title: "MEDIÇÃO DE RITMO CARDÍACO NO PULSO",
      text: "Obtenha dados de ritmo cardíaco1, juntamente com alertas, se o seu ritmo cardíaco se mantiver elevado enquanto estiver em repouso. Avalie o esforço realizado pelo seu coração durante as atividades.",
      icon: "fa-solid fa-heart-pulse",
    },
    {
      title: "GARMIN COACH",
      text: "Estes planos de treino adaptáveis incluem orientações de treinadores especialistas e planos de treino gratuitos que se adaptam a você e aos seus objetivos. Os exercícios são sincronizados diretamente com o relógio a partir do app. Garmin Connect",
      icon: "fa-solid fa-person-running",
    },
    {
      title: "ASSISTÊNCIA DE RECUPERAÇÃO",
      text: "Dar tempo ao seu corpo para recuperar entre sessões de treino é crucial. Depois de cada exercício, a funcionalidade de tempo de recuperação integrada indica quanto tempo deve descansar antes do próximo grande esforço.",
      icon: "fa-solid fa-bed",
    },
    {
      title: "PREVISÃO DE COMPETIÇÃO",
      text: "Esta ferramenta especializada leva em consideração o seu nível de condição física e o histórico de treino para o ajudar a alcançar o objetivo de competição e a ver o impacto do treino nas previsões de tempo de corrida.",
      icon: "fa-solid fa-trophy",
    },
    {
      title: "APLICAÇÕES ESPORTIVAS INMNCORPORADAS",
      text: "Mude a sua rotina de exercício com perfis de atividade para corrida virtual ou em pista, natação em piscina, Pilates, HIIT e até mesmo de trabalho de respiração.",
      icon: "fa-solid fa-dumbbell",
    },
    {
      title: "MONITORAMENTO DE ENERGIA BODY BATTERY",
      text: "Mantenha os níveis de energia do seu corpo para que possa encontrar os melhores momentos do dia para atividade e para descanso.",
      icon: "fa-solid fa-battery-three-quarters",
    },
  ];
  return (
    <section>
      <div className="container m-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10 m-auto w-full px-8 py-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative rounded-lg bg-gray-100 shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer opacity-75 hover:opacity-100 "
            >
              <div className="absolute w-full top-0 left-0 z-0 bg-cyan-400 h-24 rounded-lg"></div>
              <div className="relative z-10 h-full">
                <h3 className="px-4 py-1.5 font-contrast font-bold text-center text-2xl text-white pb-2.5">
                  {feature.title}
                </h3>

                <p className="px-6 py-4 text-gray-700 text-justify bg-gray-100 rounded-t-lg flex flex-col">
                  <i
                    className={`${feature.icon} text-center text-2xl mb-4 text-emerald-400`}
                  />
                  {feature.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
