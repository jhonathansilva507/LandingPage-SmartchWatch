export default function Features() {
  const features = [
    {
      title: "GPS INCORPORADO",
      text: "Monitore o percurso das suas corridas e obtenha estatísticas precisas, incluindo distância, ritmo e intervalos.",
    },
    {
      title: "ALERTAS DE CADÊNCIA",
      text: "Pretende melhorar a sua forma de corrida? Utilize os alertas de cadência para saber quando se desviou do intervalo de cadência pretendido.",
    },
    {
      title: "TEMPO DE CORRIDA",
      text: "Precisa de alguma orientação que o ajude a cumprir o seu objetivo? Selecione uma distância para a sua corrida e verá um display de dados que apresenta o tempo de corrida estimado.",
    },
    {
      title: "MEDIÇÃO DE RITMO CARDÍACO NO PULSO",
      text: "Obtenha dados de ritmo cardíaco1, juntamente com alertas, se o seu ritmo cardíaco se mantiver elevado enquanto estiver em repouso. Avalie o esforço realizado pelo seu coração durante as atividades.",
    },
    {
      title: "GARMIN COACH",
      text: "Estes planos de treino adaptáveis incluem orientações de treinadores especialistas e planos de treino gratuitos que se adaptam a você e aos seus objetivos. Os exercícios são sincronizados diretamente com o relógio a partir do app. Garmin Connect",
    },
    {
      title: "ASSISTÊNCIA DE RECUPERAÇÃO",
      text: "Dar tempo ao seu corpo para recuperar entre sessões de treino é crucial. Depois de cada exercício, a funcionalidade de tempo de recuperação integrada indica quanto tempo deve descansar antes do próximo grande esforço.",
    },
    {
      title: "PREVISÃO DE COMPETIÇÃO",
      text: "Esta ferramenta especializada leva em consideração o seu nível de condição física e o histórico de treino para o ajudar a alcançar o objetivo de competição e a ver o impacto do treino nas previsões de tempo de corrida.",
    },
    {
      title: "APLICAÇÕES ESPORTIVAS INMNCORPORADAS",
      text: "Mude a sua rotina de exercício com perfis de atividade para corrida virtual ou em pista, natação em piscina, Pilates, HIIT e até mesmo de trabalho de respiração.",
    },
    {
      title: "MONITORAMENTO DE ENERGIA BODY BATTERY",
      text: "Mantenha os níveis de energia do seu corpo para que possa encontrar os melhores momentos do dia para atividade e para descanso.",
    },
  ];
  return (
    <section>
      <div className="container m-auto mt-2">
        <div className="border-amber-500 border-2 grid grid-cols-3 gap-5 m-auto justify-center w-full">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-blue-50 w-sm p-3 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer opacity-75 hover:opacity-100 justify-items-center"
            >
              <h3 className="font-contrast font-bold text-center text-2xl text-cyan-400 pb-2.5">
                {feature.title}
              </h3>
              <p className="text-center text-gray-700">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
