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
            src="/images/notebook.webp"
            alt="Notebook"
            className="max-w-[300px] h-auto rounded-lg" 
          />
        </div>
      </div>

      <div className="mt-8 w-full rounded-2xl">
        <Slider {...settings}>
          <div className="px-2">
            <img src="/images/imagem1.avif" alt="Imagem 1" className="w-full rounded-2xl" />
          </div>
          <div className="px-2">
            <img src="/images/imagem2.avif" alt="Imagem 2" className="w-full rounded-2xl" />
          </div>
          <div className="px-2">
            <img src="/images/imagem3.avif" alt="Imagem 3" className="w-full rounded-2xl" />
          </div>
        </Slider>
      </div>
    </section>
  );
}
