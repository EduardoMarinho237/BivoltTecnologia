import { useState } from 'react';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleEmailCopy = () => {
    navigator.clipboard.writeText('edu.docxl@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); 
  };

  return (
    <section id="contact" className="min-h-[80vh] flex items-center justify-center bg-gray-200 pt-16">
      <div className="max-w-md text-center">
        <i className="fa-5x fa-solid fa-handshake mb-4 text-blue-600"></i>
        <h2 className="text-4xl font-bold text-blue-600">Entre em contato consoco</h2>
        <p className="mt-4 text-gray-700">Conecte-se conosco através das nossas redes sociais ou envie um e-mail!</p>
        <div className="mt-6 flex justify-center space-x-4">
          <a href="https://wa.me/5581991007965" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-green-600 text-white p-3 rounded hover:bg-green-700">
            <FaWhatsapp className="mr-2" /> WhatsApp
          </a>
          <button onClick={handleEmailCopy} className="flex items-center justify-center bg-blue-600 text-white p-3 rounded hover:bg-blue-700">
            <FaEnvelope className="mr-2" /> Email
          </button>
        </div>
        {copied && (
          <div className="mt-4 text-blue-600">
            Endereço de email copiado para a área de transferência!
          </div>
        )}
      </div>
    </section>
  );
}
