type FeatureCardProps = {
  title: string;
  text: string;
  icon: string;
};

export default function FeatureCard({ title, text, icon }: FeatureCardProps) {
  return (
    <div className="relative h-fit rounded-lg bg-gray-100 shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer opacity-75 hover:opacity-100 ">
      <div className="absolute w-full top-0 left-0 z-0 bg-cyan-400 h-24 rounded-lg"></div>
      <div className="relative z-10 -translate-y-3">
        <h3 className="px-3 py-1.5 font-contrast font-bold mx-auto my-3 text-center align-middle text-2xl text-white">
          {title}
        </h3>

        <p className="px-6 py-3 text-gray-700 text-justify bg-gray-100 rounded-t-lg flex flex-col">
          <i className={`${icon} text-center text-2xl mb-4 text-emerald-400`} />
          {text}
        </p>
      </div>
    </div>
  );
}
