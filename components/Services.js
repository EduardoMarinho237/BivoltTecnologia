export default function Services() {
  return (
    <section id="services" className="min-h-[80vh] bg-white pt-16 flex items-center justify-center">
      <div className="max-w-7xl mx-auto text-center text-blue-600">
        <h2 className="text-4xl font-bold">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="p-6 border rounded-lg shadow-lg flex flex-col items-center">
            <img src="/images/web-development.jpeg" alt="Desenvolvimento Web" className="mb-4 w-full h-32 object-cover rounded" />
            <h3 className="text-2xl font-semibold">Desenvolvimento Web</h3>
            <p className="mt-2 text-gray-700">Criamos sites e aplicativos modernos e responsivos.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-lg flex flex-col items-center">
            <img src="/images/consultoria.jpeg" alt="Consultoria" className="mb-4 w-full h-32 object-cover rounded" />
            <h3 className="text-2xl font-semibold">Consultoria</h3>
            <p className="mt-2 text-gray-700">Oferecemos consultoria para ajudá-lo a alcançar seus objetivos.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-lg flex flex-col items-center">
            <img src="/images/suporte-tecnico.jpeg" alt="Suporte Técnico" className="mb-4 w-full h-32 object-cover rounded" />
            <h3 className="text-2xl font-semibold">Suporte Técnico</h3>
            <p className="mt-2 text-gray-700">Estamos sempre prontos para oferecer suporte e assistência.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
