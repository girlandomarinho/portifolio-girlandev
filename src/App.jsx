import minhaFoto from './assets/image.png';

function App() {
  return (
    <div className="container">

      <header className="header">
        <div className="foto-nome">
          <img src={minhaFoto} className="minha-imagem" alt="Minha foto" />
          <div className="texto">
            <h1 className="nome">GirlanDev</h1>
            <p className="nome-completo">Girlando Marinho da Silva Neto</p>
            <p className="descricao"># Olá, Mundo! 👋 Meu nome é Girlando Marinho, um entusiasta da tecnologia e programador full stack em constante evolução.</p>
          </div>
        </div>

        <div className="redes-sociais">
          <a href="https://github.com/girlandomarinho" target="_blank" rel="noopener noreferrer" className="link-social">GitHub</a>
          <a href="https://www.linkedin.com/in/girlando-marinho-568960221/" target="_blank" rel="noopener noreferrer" className="link-social">LinkedIn</a>
          <a href="https://www.instagram.com/girlando__/?hl=pt-br" target="_blank" rel="noopener noreferrer" className="link-social">Instagram</a>
        </div>
      </header>


      <section className="projetos">
        <h2 className="titulo-projetos">Meus Projetos</h2>

 
        <div className="projeto">
          <img src="link-da-imagem-do-projeto" alt="Projeto 1" className="imagem-projeto" />
          <div className="descricao-projeto">
            <h3 className="nome-projeto">Projeto 1</h3>
            <p className="descricao-projeto-texto">Descrição do projeto 1 aqui...</p>
            <a href="link-do-projeto" target="_blank" className="link-projeto">Veja o projeto</a>
          </div>
        </div>


        <div className="projeto">
          <img src="link-da-imagem-do-projeto" alt="Projeto 2" className="imagem-projeto" />
          <div className="descricao-projeto">
            <h3 className="nome-projeto">Projeto 2</h3>
            <p className="descricao-projeto-texto">Descrição do projeto 2 aqui...</p>
            <a href="link-do-projeto" target="_blank" className="link-projeto">Veja o projeto</a>
          </div>
        </div>


      </section>
    </div>
  );
}

export default App;
