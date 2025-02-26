import { Link } from 'react-scroll';

export default function Header() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full bg-white shadow-md fixed top-0 z-10">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Bivolt Tecnologia</h1>
        <ul className="flex space-x-4">
          <li>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600">
              Sobre
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600">
              Serviços
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600">
              Contato
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
