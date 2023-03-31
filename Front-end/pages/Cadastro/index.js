import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { Inter } from 'next/font/google'
import api from '../api/services/api';
import { BsList } from 'react-icons/bs'
import dynamic from 'next/dynamic'
const JSMain = dynamic(
  () => import('../../js/main'),
  { ssr: false }
)

const inter = Inter({ subsets: ['latin'] })

export default function Cadastro() {

  //instancia para alteração de rota
  const router = useRouter();
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');

  //Funcao para inserir dados do Cadastro
  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      nome, sobrenome, email
    };
    try {
      const response = await api.post('/user', data)
      localStorage.setItem('user_id', response.data.user)
      router.push('/Formulario');
    } catch (err) {
      return alert("Servidor com erro de conexão!😞\nAguarde logo estará de volta.😁")
    }
  }
  return (
    <>

      <header className='fixed-top' id="header">
        <div className="container d-flex align-items-center justify-content-between">

          <h1 className="logo"><a href="index.html">Netflix Priority</a></h1>

          <nav id="navbar" className="navbar">
            <ul>
              <li><a href={"/"}>Home</a></li>
              <li><a className='active' href={"/Cadastro"}>Cadastro</a></li>
              <li><a href={"/Contato"}>Contato</a></li>
            </ul>
            <BsList id='mobile-nav-toggle' className='mobile-nav-toggle'></BsList>
            {/* <i className="bi bi-list mobile-nav-toggle"></i> */}
          </nav>
          {/* <!-- .navbar --> */}
        </div>

      </header>
      <section className="bg-image mt-5">
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div id='box-form' className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ borderRadius: '15px' }}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">Cadraste-se</h2>

                    <form onSubmit={handleRegister}>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example1cg">Nome</label>
                        <input required type="text" placeholder='' id="form3Example1cg" className="form-control form-control-lg" onChange={e => setNome(e.target.value)} value={nome} />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example3cg">Sobrenome</label>
                        <input required type="text" id="form3Example3cg" className="form-control form-control-lg" onChange={e => setSobrenome(e.target.value)} value={sobrenome} />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example3cg">Email</label>
                        <input required type="email" id="form3Example3cg" className="form-control form-control-lg" onChange={e => setEmail(e.target.value)} value={email} />
                      </div>

                      <div className="d-flex justify-content-center">
                        <button type="submit"
                          className="button-primary">Enviar</button>
                      </div>

                    </form>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
      <JSMain />
    </>
  )
}
