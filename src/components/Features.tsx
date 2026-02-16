import FeatureCard from "./FeatureCard";

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
      title: "EXERCÍCIO DIÁRIO SUGERIDO",
      text: "Para orientações de treino personalizadas, obtenha recomendações de corridas diárias de várias intensidades com base no seu histórico de treino, nível de condição física e tempo de recuperação.",
      icon: "fa-solid fa-person-running",
    },
    {
      title: "PREVISÃO DE COMPETIÇÃO",
      text: "Esta ferramenta especializada leva em consideração o seu nível de condição física e o histórico de treino para o ajudar a alcançar o objetivo de competição e a ver o impacto do treino nas previsões de tempo de corrida.",
      icon: "fa-solid fa-trophy",
    },
    {
      title: "TEMPO DE CORRIDA",
      text: "Precisa de alguma orientação que o ajude a cumprir o seu objetivo? Selecione uma distância para a sua corrida e verá um display de dados que apresenta o tempo de corrida estimado.",
      icon: "fa-regular fa-clock",
    },
    {
      title: "ASSISTÊNCIA DE RECUPERAÇÃO",
      text: "Dar tempo ao seu corpo para recuperar entre sessões de treino é crucial. Depois de cada exercício, a funcionalidade de tempo de recuperação integrada indica quanto tempo deve descansar antes do próximo grande esforço.",
      icon: "fa-solid fa-bed",
    },
    {
      title: "MEDIÇÃO DE RITMO CARDÍACO NO PULSO",
      text: "Obtenha dados de ritmo cardíaco1, juntamente com alertas, se o seu ritmo cardíaco se mantiver elevado enquanto estiver em repouso. Avalie o esforço realizado pelo seu coração durante as atividades.",
      icon: "fa-solid fa-heart-pulse",
    },
    {
      title: "APLICAÇÕES ESPORTIVAS INCORPORADAS",
      text: "Mude a sua rotina de exercício com perfis de atividade para corrida virtual ou em pista, natação em piscina, Pilates, HIIT e até mesmo de trabalho de respiração.",
      icon: "fa-solid fa-dumbbell",
    },
    {
      title: "GARMIN COACH",
      text: "Estes planos de treino adaptáveis incluem orientações de treinadores especialistas e planos de treino gratuitos que se adaptam a você e aos seus objetivos. Os exercícios são sincronizados diretamente com o relógio a partir do app. Garmin Connect",
      icon: "fa-solid fa-chalkboard-user",
    },
  ];
  return (
    <section>
      <div className="container m-auto">
        <h2 className="mx-auto my-10 font-semibold text-4xl text-center bg-linear-to-t from-green-500 to-green-100 bg-clip-text text-transparent">
          Diversas funcionalidades para seu treino
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10 m-auto w-full px-8 py-5">
          {features.map((feature, index) => (
            <FeatureCard {...feature} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
