export default function Services() {
  return (
    <section id="services" className="min-h-[80vh] bg-white pt-16 flex items-center justify-center">
      <div className="max-w-7xl mx-auto text-center text-blue-600">
        <h2 className="text-4xl font-bold">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="p-8 border rounded-lg shadow-lg flex flex-col items-center transition-transform duration-300 ease-in-out hover:transform hover:scale-105 hover:opacity-100 opacity-70">
            <i className="fa-5x fa-solid fa-gears mb-4 text-blue-600"></i>
            <h3 className="text-2xl mt-8 font-semibold">Manutenção em sistemas</h3>
            <p className="mt-2 text-gray-700">Fazemos manutenção em sistemas PHP que utilizam frameworks conhecidos como laravel, codeiginiter e zend.</p>
          </div>
          <div className="p-8 border rounded-lg shadow-lg flex flex-col items-center transition-transform duration-300 ease-in-out hover:transform hover:scale-105 hover:opacity-100 opacity-70">
            <i className="fa-5x fa-solid fa-globe mb-4 text-blue-600"></i>
            <h3 className="text-2xl mt-8 font-semibold">Desenvolvimento de sites</h3>
            <p className="mt-2 text-gray-700">Desenvolvemos sites institucionais, blogs, landing pages e diversos outros tipos de aplicações web dinâmicas e interativas.</p>
          </div>
          <div className="p-8 border rounded-lg shadow-lg flex flex-col items-center transition-transform duration-300 ease-in-out hover:transform hover:scale-105 hover:opacity-100 opacity-70">
            <i className="fa-5x fa-solid fa-mobile-screen mb-4 text-blue-600"></i>
            <h3 className="text-2xl mt-8 font-semibold">Desenvolvimento de apps</h3>
            <p className="mt-2 text-gray-700">Criamos apps para dispositívos móveis como celulares, tablets, etc.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
