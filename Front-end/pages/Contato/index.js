import React, { useState } from 'react';
import Link from 'next/link';
import emailjs, { send } from '@emailjs/browser'
import { Inter } from 'next/font/google'
import { BsList } from 'react-icons/bs'
import dynamic from 'next/dynamic'
const JSMain = dynamic(
    () => import('../../js/main'),
    { ssr: false }
)

const inter = Inter({ subsets: ['latin'] })

export default function Contato() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    //Funcao para inserir dados do Cadastro
    function sendEmail(e) {
        e.preventDefault();

        if (name === '' || email === '' || message === '') {
            alert('Preencha todos os campos');
            return;
        }

        const templateParams = {
            from_name: name,
            message: message,
            email: email
        }

        emailjs.send('service_lhjyi9q', 'template_aarj69g', templateParams, 'h7OFBOKZ3Y8YJoziz')
            .then((response) => {
                console.log('EMAIL ENVIADO', response.status, response.text)
                setName('')
                setEmail('')
                setMessage('')

            }, (error) => {
                console.log('ERRO: ', error)
            })
    }

    return (

        <>
            <header className='fixed-top' id="header">
                <div className="container d-flex align-items-center justify-content-between">

                    <h1 className="logo"><a href="index.html">Netflix Priority</a></h1>

                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><a href={"/"}>Home</a></li>
                            <li><a href={"/Cadastro"}>Cadastro</a></li>
                            <li><a className='active' href={"/Contato"}>Contato</a></li>
                        </ul>
                        <BsList id='mobile-nav-toggle' className='mobile-nav-toggle'></BsList>

                    </nav>

                </div>

            </header>
            <section className="bg-image mt-5" style={{ marginBottom: '50px' }}>
                <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div className="container h-100">
                        <div id='box-form' className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div className="card" style={{ borderRadius: '15px' }}>
                                    <div className="card-body p-5">


                                        <h2 className="text-uppercase text-center mb-5">Contato</h2>
                                        <form onSubmit={sendEmail}>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example1cg">Nome</label>
                                                <input required type="text" id="form3Example1cg" className="form-control form-control-lg" onChange={(e) => setName(e.target.value)} value={name} />
                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example3cg">Email</label>
                                                <input required type="email" id="form3Example3cg" className="form-control form-control-lg" onChange={(e) => setEmail(e.target.value)} value={email} />
                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example3cg">Mensagem</label>
                                                {/* <input required type="message" id="form3Example3cg" className="form-control form-control-lg" onChange={(e) => setMessage(e.target.value)} value={message} /> */}
                                                <textarea id="form3Example3cg" className="form-control form-control-lg"
                                                    type='text'
                                                    onChange={(e) => setMessage(e.target.value)}
                                                    value={message}
                                                    style={{ height: '100px' }}   //TODO colocar no globals
                                                />
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
