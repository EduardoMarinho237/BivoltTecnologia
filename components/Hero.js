import { Link } from 'react-scroll';

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-[80vh] flex items-center justify-center bg-gradient-to-tr from-blue-600 to-blue-900 text-white relative px-8">
      <div className="max-w-3xl text-center">
        <h2 className="text-5xl font-bold">Transformando grandes ideias em grandes feitos</h2>
        <p className="mt-4 text-xl">Na Bivolt Tecnologia, oferecemos soluções simples para necessidades complexas.</p>
        <button onClick={() => scrollToSection('services')} className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
          Conheça nossos serviços
        </button>
      </div>
    </section>
  );
}

