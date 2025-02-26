import React from 'react';
import Slider from 'react-slick';

export default function About() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1.5,
    slidesToScroll: 1.2,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <section id="about" className="min-h-[80vh] flex flex-col items-center justify-center bg-gray-100 py-24">
      <div className="max-w-3xl text-center px-8">
        <h2 className="text-4xl font-bold text-blue-600">Sobre Nós</h2>
        <div className="flex items-center justify-center mt-8">
          <p className="mr-8 text-gray-700 text-end">
            A <strong>Bivolt Tecnologia</strong> é uma empresa focada em simplicidade e qualidade. Buscamos sempre compreender o objetivo do cliente e <strong>desenvolver soluções rápidas de fácil aplicação</strong>.
          </p>
          <img
            src="/images/notebook.png"
            alt="Notebook"
            className="max-w-[300px] h-auto rounded-lg" 
          />
        </div>
      </div>

      <div className="mt-8 w-full rounded-2xl overflow-hidden">
        <Slider {...settings}>
          <div className="relative px-2 group">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="/images/imagem1.jpg"
                alt="Idealização"
                className="w-full h-auto transition-transform duration-300 ease-in-out transform group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-blue-600 opacity-20 transition-opacity duration-300 rounded-2xl"></div> 
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-blue-600 to-transparent rounded-2xl"></div>
              <h2 className="absolute left-4 bottom-4 text-white text-xl font-bold">Idealização</h2>
            </div>
          </div>
          <div className="relative px-2 group">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="/images/imagem2.jpg"
                alt="Inovação"
                className="w-full h-auto transition-transform duration-300 ease-in-out transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-blue-600 opacity-20 transition-opacity duration-300 rounded-2xl"></div> 
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-blue-600 to-transparent rounded-2xl"></div> 
              <h2 className="absolute left-4 bottom-4 text-white text-xl font-bold">Inovação</h2> 
            </div>
          </div>
          <div className="relative px-2 group">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="/images/imagem3.jpg"
                alt="Colaboração com cliente"
                className="w-full h-auto transition-transform duration-300 ease-in-out transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-blue-600 opacity-20 transition-opacity duration-300 rounded-2xl"></div> 
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-blue-600 to-transparent rounded-2xl"></div> 
              <h2 className="absolute left-4 bottom-4 text-white text-xl font-bold">Colaboração com cliente</h2> 
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}
