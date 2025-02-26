export default function About() {
    return (
      <section id="about" className="min-h-[80vh] flex items-center justify-center bg-gray-100 px-8">
        <div className="max-w-3xl text-center">
          <h2 className="text-4xl font-bold text-blue-600">Sobre Nós</h2>
          <div className="flex items-center justify-center">
            <p className="mt-8 mr-8 text-gray-700 text-end">
              A Bivolt Tecnologia é uma empresa focada em inovação e qualidade, dedicada a transformar suas ideias em realidade.
            </p>
            <img src="/images/notebook.webp" alt="Notebook" className="mt-8 w-full" />
          </div>
        </div>
      </section>
    );
  }
  