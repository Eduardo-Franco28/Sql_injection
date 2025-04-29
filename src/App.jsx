import './App.css'
import banco from "./assets/img/logopng.png"
import escudo from "./assets/img/escudo.png"

function App() {

  return (
    <>
      <header className='header'>
        <nav>
          <img src={banco} alt="" className='imglogo'/>
        </nav>
      </header>
      <main className='main'>
        <section className="section1">
          <div>
            <img src={escudo} alt="" className='escudo'/>
          </div>
          <div>
            <h1>SQL Injection</h1>
          </div>
        </section>
        <section className='section2'>
          <div>
            <h2>Como <span>Prevenir</span></h2>
          </div>
          <div>
            <p>SQL Injection é um ataque em que um atacante insere comandos SQL maliciosos em uma aplicação vulnerável para acessar ou modificar dados no banco de dados. Para prevenir, é essencial usar consultas preparadas, validar e sanitizar entradas do usuário, e restringir os privilégios de acesso ao banco de dados. Além disso, evitar exibir erros detalhados e implementar firewalls de aplicativos web ajudam a proteger a aplicação. Essas medidas tornam a aplicação mais segura contra esse tipo de ataque.</p>
          </div>
          <div className='lista'>
            <div className="doisdecima">
              <div className='dicas'>Use consultas preparadas: Sempre utilize consultas parametrizadas para garantir que os dados do usuário sejam tratados como parâmetros e não como parte da consulta SQL.</div>
              <div className='dicas'>Valide e sanitize entradas: Verifique e limpe todas as entradas dos usuários para garantir que estejam no formato esperado, rejeitando dados maliciosos.</div>
            </div>
            <div className='dicas'>Limite privilégios no banco de dados: Aplique o princípio do menor privilégio, concedendo apenas os acessos necessários para a conta de usuário que a aplicação utiliza no banco de dados.</div>
          </div>
        </section>
        <footer>
          <h3>Desenvolvido Por: Eduardo Franco; Lucas Volpe / 2°C TI</h3>
        </footer>
      </main>
    </>
  )
}

export default App
