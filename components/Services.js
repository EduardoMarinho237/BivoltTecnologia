import { useState, useEffect } from "react";

export default function Services() {
  const [selectedPlan, setSelectedPlan] = useState("anual");

  const plans = [
    {
      id: "trimestral",
      icon: "fa-calendar-alt",
      title: "Plano Trimestral",
      description: "Equilíbrio entre custo e flexibilidade. Ideal para empresas em crescimento.",
      totalPrice: "R$399,60/ano", 
      monthlyPrice: "R$33,30/mês", 
      features: [
        "Melhor custo-benefício a curto prazo",
        "Flexibilidade para ajustar conforme necessário",
        "Cancelamento simples"
      ]
    },
    {
      id: "anual",
      icon: "fa-calendar-check",
      title: "Plano Anual",
      description: "Economize mais com o plano anual. Perfeito para empresas consolidadas.",
      totalPrice: "R$299,90/ano", 
      monthlyPrice: "R$24,99/mês", 
      features: [
        "Desconto especial de 15%",
        "Suporte premium 24/7",
        "Maior estabilidade financeira"
      ]
    },
    {
      id: "mensal",
      icon: "fa-calendar-day",
      title: "Plano Mensal",
      description: "Flexibilidade total! Assine e cancele a qualquer momento.",
      totalPrice: "R$478,80/ano", 
      monthlyPrice: "R$39,90/mês", 
      features: [
        "Sem contratos longos",
        "Pagamento mensal recorrente",
        "Ideal para freelancers e startups"
      ]
    }
  ];

  useEffect(() => {
    setSelectedPlan("anual");
  }, []);

  return (
    <>
      <style>
        {`
          @tailwind base;
          @tailwind components;
          @tailwind utilities;
        `}
      </style>

      <section id="services" className="min-h-[80vh] bg-gray-100 py-16 flex flex-col items-center">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-600">Nossos Planos</h2>
          <p className="text-gray-600 mt-4">Escolha o melhor plano para o seu negócio</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative p-8 border rounded-xl shadow-lg flex flex-col items-center cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-xl 
                  ${selectedPlan === plan.id ? "border-blue-500 shadow-blue-500/50" : "border-gray-300 opacity-70"}`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {plan.id === "anual" && (
                  <div className="absolute -top-3 right-4 bg-gradient-to-r from-red-600 to-red-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg flex items-center space-x-2">
                    <i className="fa-solid fa-clock"></i>
                    <span>Oferta por tempo limitado!</span>
                  </div>
                )}

                <div className="flex items-center space-x-4 mb-4">
                  <i className={`fa-2x fa-solid ${plan.icon} text-blue-600`}></i>
                  <h3 className="text-2xl font-semibold text-blue-600">{plan.title}</h3>
                </div>
                <p className="mt-4 text-gray-600 text-center">{plan.description}</p>

                <p className="mt-4 text-sm text-gray-500">
                  {plan.totalPrice}
                </p>

                <p className="mt-2 text-3xl font-bold text-blue-600">
                  {plan.monthlyPrice}
                </p>

                {plan.id === "anual" && (
                  <p className="mt-2 text-sm text-green-600 font-semibold">
                    Economize R$179,90 por ano!
                  </p>
                )}

                <ul className="mt-6 text-left space-y-2 pl-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <i className="fa fa-check-circle mr-2 text-green-500"></i>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div
                  className={`mt-6 w-full transition-all duration-500 ease-in-out ${
                    selectedPlan === plan.id
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4 pointer-events-none"
                  }`}
                >
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-bold w-full hover:from-blue-600 hover:to-blue-700 transition-all duration-700 ease-in-out">
                    Escolher Plano
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}