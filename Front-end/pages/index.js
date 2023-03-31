import Link from 'next/link';
import { Inter } from 'next/font/google'
import { BsList } from 'react-icons/bs'
import dynamic from 'next/dynamic'
const JSMain = dynamic(
  () => import('../js/main'),
  { ssr: false }
)

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>n
      <header className='fixed-top' id="header">
        <div className="container d-flex align-items-center justify-content-between">

          <h1 className="logo"><a href="index.html">Netflix Priority</a></h1>

          <nav id="navbar" className="navbar">
            <ul>
              <li><a className='active' href="#hero">Home</a></li>
              <li><a href={"/Cadastro"}>Cadastro</a></li>
              <li><a href={"/Contato"}>Contato</a></li>
            </ul>
            <BsList id='mobile-nav-toggle' className='mobile-nav-toggle'></BsList>
          </nav>

        </div>
      </header>
      <section className=" bg-image row mt-5">

        <div id="conteudo">
          <div className='about'>
            <p>A ideia do projeto “Netflix Priority” é realizar um serviço de entrega mais personalizada de acordo
              com o local em que você esteja, tempo que você tem para ficar conectado e horário que for conectar.
              Mesmo que você esteja na correria do dia a dia e não tem tempo para fazer aquela busca aprofundada
              na plataforma. Sendo assim a Netflix Priority é uma oportunidade, com esse serviço de personalizar
              suas preferências, desta forma poderia ser feito de forma programada a sua necessidade temporária ou
              efetiva, atribuindo segurança e privacidade, de acordo com sua característica individual ou coletiva.
            </p>

          </div>

        </div>
      </section>
      <JSMain />

    </>
  )
}
