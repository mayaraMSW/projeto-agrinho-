export default function AgroLandingPage() {
  const cards = [
    {
      title: 'Monitoramento Inteligente',
      desc: 'Acompanhe clima, solo e produtividade em tempo real.',
    },
    {
      title: 'Gestão de Safra',
      desc: 'Controle completo da produção agrícola com dashboards modernos.',
    },
    {
      title: 'Tecnologia no Campo',
      desc: 'Integração com sensores, drones e análises avançadas.',
    },
  ];

  const stats = [
    { value: '98%', label: 'Eficiência Operacional' },
    { value: '+120', label: 'Fazendas Conectadas' },
    { value: '24h', label: 'Monitoramento Climático' },
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-white overflow-hidden">
      {/* HERO */}
      <section className="relative px-8 py-20 lg:px-24">
        <div className="absolute inset-0 bg-gradient-to-br from-green-700/20 to-lime-400/10 blur-3xl" />

        <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm border border-green-500/30">
              Plataforma Inteligente para o Agro
            </span>

            <h1 className="text-5xl lg:text-7xl font-black mt-6 leading-tight">
              O futuro do
              <span className="text-green-400"> agronegócio </span>
              começa agora.
            </h1>

            <p className="text-gray-300 text-lg mt-6 max-w-xl leading-relaxed">
              Gestão agrícola moderna com monitoramento em tempo real,
              inteligência de dados e automação para fazendas de alta
              performance.
            </p>

            <div className="flex gap-4 mt-8 flex-wrap">
              <button className="bg-green-500 hover:bg-green-400 transition px-6 py-4 rounded-2xl font-semibold text-black shadow-2xl">
                Começar Agora
              </button>

              <button className="border border-white/20 hover:bg-white/10 transition px-6 py-4 rounded-2xl font-semibold">
                Ver Demonstração
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 shadow-2xl">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <p className="text-gray-400 text-sm">Produção Atual</p>
                  <h3 className="text-3xl font-bold">1.248 Ton</h3>
                </div>

                <div className="bg-green-500/20 text-green-300 px-4 py-2 rounded-xl text-sm">
                  +18% este mês
                </div>
              </div>

              <div className="space-y-5">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Soja</span>
                    <span>82%</span>
                  </div>
                  <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-[82%] bg-green-400 rounded-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Milho</span>
                    <span>65%</span>
                  </div>
                  <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-[65%] bg-lime-300 rounded-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Café</span>
                    <span>91%</span>
                  </div>
                  <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-[91%] bg-emerald-500 rounded-full" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-10">
                {stats.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/5 rounded-2xl p-4 border border-white/10"
                  >
                    <h4 className="text-2xl font-bold text-green-400">
                      {item.value}
                    </h4>
                    <p className="text-gray-400 text-sm mt-1">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-8 py-20 lg:px-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black">
            Soluções para o Agro Inteligente
          </h2>
          <p className="text-gray-400 mt-4 text-lg">
            Tecnologia moderna para maximizar resultados no campo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-[28px] p-8 hover:scale-105 transition duration-300 backdrop-blur-xl"
            >
              <div className="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center text-3xl mb-6">
                🌱
              </div>

              <h3 className="text-2xl font-bold mb-4">{card.title}</h3>

              <p className="text-gray-400 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DASHBOARD PREVIEW */}
      <section className="px-8 py-20 lg:px-24">
        <div className="bg-gradient-to-r from-green-500/10 to-lime-300/10 border border-white/10 rounded-[40px] p-10 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black leading-tight">
                Controle total da sua produção.
              </h2>

              <p className="text-gray-300 mt-6 text-lg leading-relaxed">
                Visualize dados climáticos, produtividade, sensores e métricas
                agrícolas em um painel moderno e intuitivo.
              </p>

              <button className="mt-8 bg-green-400 text-black px-6 py-4 rounded-2xl font-bold hover:scale-105 transition">
                Explorar Plataforma
              </button>
            </div>

            <div className="bg-[#111827] rounded-[32px] p-8 border border-white/10 shadow-2xl">
              <div className="flex justify-between mb-8">
                <div>
                  <p className="text-gray-400">Umidade do Solo</p>
                  <h3 className="text-4xl font-black">74%</h3>
                </div>

                <div className="text-right">
                  <p className="text-gray-400">Temperatura</p>
                  <h3 className="text-4xl font-black">28°C</h3>
                </div>
              </div>

              <div className="h-52 rounded-3xl bg-gradient-to-br from-green-400/20 to-lime-300/10 flex items-end justify-around p-6 overflow-hidden">
                {[40, 65, 30, 80, 55, 90, 70].map((height, index) => (
                  <div
                    key={index}
                    className="w-8 bg-green-400 rounded-t-2xl"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-8 py-10 lg:px-24 flex flex-col lg:flex-row justify-between gap-6">
        <div>
          <h3 className="text-2xl font-black text-green-400">AGROTECH</h3>
          <p className="text-gray-400 mt-2">
            Tecnologia e inovação para o agronegócio.
          </p>
        </div>

        <div className="flex gap-6 text-gray-300">
          <a href="#" className="hover:text-green-400 transition">
            Início
          </a>
          <a href="#" className="hover:text-green-400 transition">
            Soluções
          </a>
          <a href="#" className="hover:text-green-400 transition">
            Dashboard
          </a>
          <a href="#" className="hover:text-green-400 transition">
            Contato
          </a>
        </div>
      </footer>
    </div>
  );
}
