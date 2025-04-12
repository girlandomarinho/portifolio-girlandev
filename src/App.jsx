import React from "react";
import FotoPerfil from "./assets/foto.jpg"; // Troque para sua foto real

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Header */}
      <header className="flex items-center p-6 border-b border-gray-700">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-indigo-500 shadow-lg">
          <img src={FotoPerfil} alt="Foto de Girlando" className="w-full h-full object-cover" />
        </div>
        <div className="ml-6">
          <h1 className="text-3xl font-bold">Girlando Marinho da Silva Neto</h1>
          <p className="text-gray-400 mt-1">19 anos • Patos-PB</p>
          <p className="text-gray-300">Programador Fullstack</p>
        </div>
      </header>

      {/* Biografia */}
      <section className="p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">Sobre mim</h2>
        <p className="text-gray-300">
          Sou um desenvolvedor fullstack apaixonado por tecnologia. Busco criar soluções que misturam criatividade com eficiência. Estou sempre aprendendo algo novo para evoluir como profissional e como pessoa.
        </p>
      </section>

      {/* Projetos */}
      <section className="p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">Projetos</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[1, 2, 3, 4, 5].map((projeto) => (
            <div key={projeto} className="bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-700 transition">
              <h3 className="text-xl font-bold mb-2">Projeto {projeto}</h3>
              <p className="text-gray-400">Descrição breve do projeto {projeto}. Fale um pouco do que ele faz, tecnologias usadas, etc.</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
