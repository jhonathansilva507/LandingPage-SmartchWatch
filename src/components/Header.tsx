export default function Header() {
  return (
    <header className="flex justify-center w-full p-6 sticky shadow-md top-0 left-0 right-0 z-20 bg-white">
      <nav className="w-md flex justify-between items-center font-medium">
        <a href="#hero" className="hover:scale-110 transition-all duration-300">
          Início
        </a>
        <a
          href="#features"
          className="hover:scale-110 transition-all duration-300"
        >
          Especificações
        </a>
        <a
          href="#specs"
          className="hover:scale-110 transition-all duration-300"
        >
          Detalhes
        </a>
        <button className="p-2 rounded-full text-md text-white font-medium bg-linear-to-tr from-cyan-500 to-green-400 cursor-pointer hover:scale-110 transition-all duration-300">
          Compre aqui
        </button>
      </nav>
    </header>
  );
}
