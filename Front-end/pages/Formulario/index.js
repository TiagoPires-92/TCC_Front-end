import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useRouter } from 'next/router'
import { Inter } from 'next/font/google'
import api from '../api/services/api';

const inter = Inter({ subsets: ['latin'] })

export default function Formulario() {

    useLayoutEffect(() => {
        const user_id = localStorage.getItem('user_id')
        setId_usuario(user_id);
    }, [])

    const router = useRouter();

    const [genero, setGenero] = useState('');
    const [estado_civil, setEstado_civil] = useState('');
    const [idade, setIdade] = useState('');
    const [sexo, setSexo] = useState('');
    const [idade_filhos, setIdade_filhos] = useState('');
    const [filha_feminino, setFilha_feminino] = useState('');
    const [filho_masculino, setFilho_masculino] = useState('');
    const [semana_acompanhado, setSemana_acompanhado] = useState('');
    const [findi_acompanhado, setFindi_acompanhado] = useState('');
    const [acesso_foracasa, setAcesso_foracasa] = useState('');
    const [acesso_trabalho, setAcesso_trabalho] = useState('');
    const [horario_oito_dezoito, setHorario_oito_dezoito] = useState('');
    const [horario_compartilhado, setHorario_compartilhado] = useState('');
    const [acesso_noite, setAcesso_noite] = useState('');
    const [acesso_madrugada, setAcesso_madrugada] = useState('');
    const [tempo_transito, setTempo_transito] = useState('');
    const [acampanhado, setAcampanhado] = useState('');
    const [sozinho_conteudo, setSozinho_conteudo] = useState('');
    const [sozinho_irrelevante, setSozinho_irrelevante] = useState('');
    const [acompanhado_findi_gosta, setAcompanhado_findi_gosta] = useState('');
    const [acampanhado_findiirrelevante, setAcampanhado_findiirrelevante] = useState('');
    const [tempo_acompanhado, setTempo_acompanhado] = useState('');
    const [tempo_sozinho, setTempo_sozinho] = useState('');
    const [avaliacao, setAvaliacao] = useState('');
    const [novidade_conteudo, setNovidade_conteudo] = useState('');
    const [novidade_irrelevante, setNovidade_irrelevante] = useState('');
    const [controle_acesso, setControle_acesso] = useState('');
    const [pagamento, setPagamento] = useState('');
    const [atores_diretores, setAtores_diretores] = useState('');
    const [concorrentes, setConcorrentes] = useState('');
    const [id_usuario, setId_usuario] = useState(-1);



    //Funcao para inserir dados do Cadastro
    async function handleForm(e) {
        e.preventDefault();

        const data = {
            genero, estado_civil, idade, sexo, idade_filhos, filha_feminino, filho_masculino, semana_acompanhado, findi_acompanhado,
            acesso_foracasa, acesso_trabalho, horario_oito_dezoito, horario_compartilhado, acesso_noite, acesso_madrugada,
            tempo_transito, acampanhado, sozinho_conteudo, sozinho_irrelevante, acompanhado_findi_gosta, acampanhado_findiirrelevante,
            tempo_acompanhado, tempo_sozinho, avaliacao, novidade_conteudo, novidade_irrelevante, controle_acesso, pagamento,
            atores_diretores, concorrentes, id_usuario
        };
        console.log(data)
        try {
            await api.post('/form', data)
            console.log('cadastrou')
            router.push('/Formulario/success');
            // router.push('/Login');
        } catch (err) {
            return alert("Servidor com erro de conexão!😞\nAguarde logo estará de volta.😁")
        }
    }

    if (id_usuario === -1) {
        return <><p>carregando...</p></>
    }

    return (
        <>
            <section className="vh-100 bg-image">
                <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div className="card" style={{ borderRadius: '15px' }}>
                                    <div className="card-body p-5">
                                        <h2 className="text-center mb-5">FORMULÁRIO</h2>

                                        <form onSubmit={handleForm}>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example3cg">1.	Qual seu gênero ?</label>
                                                <select required className="form-select" aria-label="Default select example" value={genero} onChange={e => setGenero(e.target.value)}>
                                                    <option value=''>Selecione sua resposta</option>
                                                    <option value="Feminino">Feminino</option>
                                                    <option value="Masculino">Masculino</option>
                                                    <option value="LGBT">LGBT</option>
                                                    <option value="Outro">Outro</option>
                                                    <option value="Prefiro não informar">Prefiro não informar</option>
                                                </select>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example3cg">2.	Qual seu estado civil ?</label>
                                                <select required className="form-select" aria-label="Default select example" value={estado_civil} onChange={e => setEstado_civil(e.target.value)}>
                                                    <option value=''>Selecione sua resposta</option>
                                                    <option value="Solteiro(a)">Solteiro(a)</option>
                                                    <option value="Casado(a)">Casado(a)</option>
                                                    <option value="Divorciado(a)">Divorciado(a)</option>
                                                    <option value="Viúvo(a)">Viúvo(a)</option>
                                                    <option value="Prefiro não informar">Prefiro não informar</option>
                                                </select>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example3cg">3.	Qual sua idade ?</label>
                                                <select required className="form-select" aria-label="Default select example" value={idade} onChange={e => setIdade(e.target.value)}>
                                                    <option value=''>Selecione sua resposta</option>
                                                    <option value="Menor de 18 anos">Menor de 18 anos </option>
                                                    <option value="18 a 39 anos">18 a 39 anos</option>
                                                    <option value="40 a 59 anos">40 a 59 anos</option>
                                                    <option value="Mais de 60 anos">Mais de 60 anos</option>
                                                    <option value="Prefiro não informar">Prefiro não informar</option>
                                                </select>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example3cg">4.	Por gentileza qual sua opção sexual ?</label>
                                                <select required className="form-select" aria-label="Default select example" value={sexo} onChange={e => setSexo(e.target.value)}>
                                                    <option value=''>Selecione sua resposta</option>
                                                    <option value="Heterossexual">Heterossexual</option>
                                                    <option value="Homossexual">Homossexual</option>
                                                    <option value="LGBT">LGBT</option>
                                                    <option value="Outro">Outro</option>
                                                    <option value="Prefiro não informar">Prefiro não informar</option>
                                                </select>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example3cg">5.	Por gentileza caso você tenha filhos (as) na minoria (os que você menos tem) ?</label>
                                                <select required className="form-select" aria-label="Default select example" value={idade_filhos} onChange={e => setIdade_filhos(e.target.value)}>
                                                    <option value=''>Selecione sua resposta</option>
                                                    <option value="Menores de 18 anos">Menores de 18 anos</option>
                                                    <option value="Entre 18 a 59 anos">Entre 18 a 59 anos</option>
                                                    <option value="Mais de 60 anos">Mais de 60 anos</option>
                                                    <option value="Não tenho filhos humanos">Não tenho filhos humanos</option>
                                                    <option value="Prefiro não informar">Prefiro não informar</option>
                                                </select>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example3cg">6.	Por gentileza caso possua filhas(os) do gênero feminino na maioria ambas são ?</label>
                                                <select required className="form-select" aria-label="Default select example" value={filha_feminino} onChange={e => setFilha_feminino(e.target.value)}>
                                                    <option value=''>Selecione sua resposta</option>
                                                    <option value="Menores de 10 anos ">Menores de 10 anos </option>
                                                    <option value="Menores de 18 anos">Menores de 18 anos</option>
                                                    <option value="Entre 19 a 60 anos">Entre 19 a 60 anos</option>
                                                    <option value="Não tenho filhos do gênero feminino">Não tenho filhos do gênero feminino</option>
                                                    <option value="Prefiro não informar">Prefiro não informar</option>
                                                </select>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example3cg">7.	Por gentileza caso possua filhos(as) do gênero masculino na maioria ambos são ?</label>
                                                <select required className="form-select" aria-label="Default select example" value={filho_masculino} onChange={e => setFilho_masculino(e.target.value)}>
                                                    <option value=''>Selecione sua resposta</option>
                                                    <option value="Menores de 10 anos ">Menores de 10 anos </option>
                                                    <option value="Menores de 18 anos">Menores de 18 anos</option>
                                                    <option value="Entre 19 a 60 anos">Entre 19 a 60 anos</option>
                                                    <option value="Não tenho filhos do gênero masculino">Não tenho filhos do gênero masculino</option>
                                                    <option value="Prefiro não informar">Prefiro não informar</option>
                                                </select>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example3cg">8.	Quando você assiste a NETFLIX durante a semana e você está acompanhado(a) ?</label>
                                                <select required className="form-select" aria-label="Default select example" value={semana_acompanhado} onChange={e => setSemana_acompanhado(e.target.value)}>
                                                    <option value=''>Selecione sua resposta</option>
                                                    <option value="Na maioria de pessoas menores de 18 anos">Na maioria de pessoas menores de 18 anos</option>
                                                    <option value="Na maioria pessoas de 18 a 39 anos">Na maioria pessoas de 18 a 39 anos</option>
                                                    <option value="Na maioria pessoas de 40 a 59 anos">Na maioria pessoas de 40 a 59 anos</option>
                                                    <option value="Na maioria pessoas com mais de 60 anos">Na maioria pessoas com mais de 60 anos</option>
                                                    <option value="Prefiro não informar">Prefiro não informar</option>
                                                </select>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example3cg">9.	Quando você assiste a NETFLIX aos finais semana e você está acompanhado(a) ?</label>
                                                <select required className="form-select" aria-label="Default select example" value={findi_acompanhado} onChange={e => setFindi_acompanhado(e.target.value)}>
                                                    <option value=''>Selecione sua resposta</option>
                                                    <option value="Na maioria de pessoas menores de 18 anos">Na maioria de pessoas menores de 18 anos</option>
                                                    <option value="Na maioria pessoas de 18 a 39 anos">Na maioria pessoas de 18 a 39 anos</option>
                                                    <option value="Na maioria pessoas de 40 a 59 anos">Na maioria pessoas de 40 a 59 anos</option>
                                                    <option value="Na maioria pessoas com mais de 60 anos">Na maioria pessoas com mais de 60 anos</option>
                                                    <option value="Prefiro não informar">Prefiro não informar</option>
                                                </select>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example3cg">10.	Você acessa a NETFLIX fora da sua casa ?</label>
                                                <select required className="form-select" aria-label="Default select example" value={acesso_foracasa} onChange={e => setAcesso_foracasa(e.target.value)}>
                                                    <option value=''>Selecione sua resposta</option>
                                                    <option value="Sim">Sim</option>
                                                    <option value="Não">Não</option>
                                                    <option value="As vezes durante a semana">As vezes durante a semana</option>
                                                    <option value="As vezes no final de semana">As vezes no final de semana</option>
                                                    <option value="Prefiro não informar">Prefiro não informar</option>
                                                </select>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example3cg">11.	Você acessa a NETFLIX durante o horário de trabalho ?</label>
                                                <select required className="form-select" aria-label="Default select example" value={acesso_trabalho} onChange={e => setAcesso_trabalho(e.target.value)}>
                                                    <option value=''>Selecione sua resposta</option>
                                                    <option value="Sim">Sim</option>
                                                    <option value="Não">Não</option>
                                                    <option value="As vezes durante a semana">As vezes durante a semana</option>
                                                    <option value="As vezes no final de semana">As vezes no final de semana</option>
                                                    <option value="Prefiro não informar">Prefiro não informar</option>
                                                </select>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example3cg">12. Você acessa a NETFLIX durante o horário comercial entre 8 e 18 horas ?</label>
                                                <select required className="form-select" aria-label="Default select example" value={horario_oito_dezoito} onChange={e => setHorario_oito_dezoito(e.target.value)}>
                                                    <option value=''>Selecione sua resposta</option>
                                                    <option value="Sim">Sim</option>
                                                    <option value="Não">Não</option>
                                                    <option value="As vezes durante a semana">As vezes durante a semana</option>
                                                    <option value="As vezes no final de semana">As vezes no final de semana</option>
                                                    <option value="Prefiro não informar">Prefiro não informar</option>
                                                </select>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example3cg">13.	Você costuma dividir o acesso, entre usuários ou pessoas vinculados a sua conta da NETFLIX durante o horário comercial entre 8 e 18 horas ?</label>
                                                <select required className="form-select" aria-label="Default select example" value={horario_compartilhado} onChange={e => setHorario_compartilhado(e.target.value)}>
                                                    <option value=''>Selecione sua resposta</option>
                                                    <option value="Sim">Sim</option>
                                                    <option value="Não">Não</option>
                                                    <option value="As vezes durante a semana">As vezes durante a semana</option>
                                                    <option value="As vezes no final de semana">As vezes no final de semana</option>
                                                    <option value="Prefiro não informar">Prefiro não informar</option>
                                                </select>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example3cg">14.	Você costuma ter disponibilidade para acessar a NETFLIX entre 18h e 23 horas ?</label>
                                                <select required className="form-select" aria-label="Default select example" value={acesso_noite} onChange={e => setAcesso_noite(e.target.value)}>
                                                    <option value=''>Selecione sua resposta</option>
                                                    <option value="Sim">Sim</option>
                                                    <option value="Não">Não</option>
                                                    <option value="As vezes durante a semana">As vezes durante a semana</option>
                                                    <option value="As vezes no final de semana">As vezes no final de semana</option>
                                                    <option value="Prefiro não informar">Prefiro não informar</option>
                                                </select>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example3cg">15.	Você costuma ter disponibilidade para acessar a NETFLIX entre 23 horas e 07 horas ?</label>
                                                <select required className="form-select" aria-label="Default select example" value={acesso_madrugada} onChange={e => setAcesso_madrugada(e.target.value)}>
                                                    <option value=''>Selecione sua resposta</option>
                                                    <option value="Sim">Sim</option>
                                                    <option value="Não">Não</option>
                                                    <option value="As vezes durante a semana">As vezes durante a semana</option>
                                                    <option value="As vezes no final de semana">As vezes no final de semana</option>
                                                    <option value="Prefiro não informar">Prefiro não informar</option>
                                                </select>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example3cg">16.	 Quanto tempo no total por dia você fica no trânsito entre sua casa, até chegar na faculdade ou trabalho ?</label>
                                                <select required className="form-select" aria-label="Default select example" value={tempo_transito} onChange={e => setTempo_transito(e.target.value)}>
                                                    <option value=''>Selecione sua resposta</option>
                                                    <option value="Menos uma hora">Menos uma hora</option>
                                                    <option value="De uma a duas horas">De uma a duas horas</option>
                                                    <option value="Mais de 3 horas">Mais de 3 horas</option>
                                                    <option value="No momento desenvolvo minhas atividades em home office">No momento desenvolvo minhas atividades em home office</option>
                                                    <option value="Prefiro não informar">Prefiro não informar</option>
                                                </select>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example3cg">17. Você prefere acessar a NETFLIX acompanhado(a) ?</label>
                                                <select required className="form-select" aria-label="Default select example" value={acampanhado} onChange={e => setAcampanhado(e.target.value)}>
                                                    <option value=''>Selecione sua resposta</option>
                                                    <option value="Sim">Sim</option>
                                                    <option value="Não">Não</option>
                                                    <option value="Acompanhado(a) as vezes durante a semana">Acompanhado(a) as vezes durante a semana</option>
                                                    <option value="Acompanhado(a) as vezes no final de semana">Acompanhado(a) as vezes no final de semana</option>
                                                    <option value="Prefiro não informar">Prefiro não informar</option>
                                                </select>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example3cg">18.	Quando acessa sozinho(a) a NETFLIX seu gênero de conteúdo preferido durante a semana ?</label>
                                                <select required className="form-select" aria-label="Default select example" value={sozinho_conteudo} onChange={e => setSozinho_conteudo(e.target.value)}>
                                                    <option value=''>Selecione sua resposta</option>
                                                    <option value="Adulto">Adulto</option>
                                                    <option value="Infantil">Infantil</option>
                                                    <option value="Científico">Científico</option>
                                                    <option value="Ficção">Ficção</option>
                                                    <option value="Prefiro não informar">Prefiro não informar</option>
                                                </select>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example3cg">19.	Quando acessa sozinho(a) a NETFLIX seu gênero de conteúdo irrelevante ou seja que você não gosta durante a semana ?</label>
                                                <select required className="form-select" aria-label="Default select example" value={sozinho_irrelevante} onChange={e => setSozinho_irrelevante(e.target.value)}>
                                                    <option value=''>Selecione sua resposta</option>
                                                    <option value="Adulto">Adulto</option>
                                                    <option value="Infantil">Infantil</option>
                                                    <option value="Científico">Científico</option>
                                                    <option value="Ficção">Ficção</option>
                                                    <option value="Prefiro não informar">Prefiro não informar</option>
                                                </select>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example3cg">20.	Estando acompanhado(a) no final de semana, quando acessa a NETFLIX qual seu gênero de conteúdo preferido ?</label>

                                                <select required className="form-select" aria-label="Default select example" value={acompanhado_findi_gosta} onChange={e => setAcompanhado_findi_gosta(e.target.value)}>
                                                    <option value=''>Selecione sua resposta</option>
                                                    <option value="Adulto">Adulto</option>
                                                    <option value="Infantil">Infantil</option>
                                                    <option value="Científico">Científico</option>
                                                    <option value="Ficção">Ficção</option>
                                                    <option value="Prefiro não informar">Prefiro não informar</option>
                                                </select>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example3cg">21.	Quando acessa acompanhado(a) a NETFLIX seu gênero de conteúdo que você menos gosta no final de semana ?</label>
                                                <select required className="form-select" aria-label="Default select example" value={acampanhado_findiirrelevante} onChange={e => setAcampanhado_findiirrelevante(e.target.value)}>
                                                    <option value=''>Selecione sua resposta</option>
                                                    <option value="Adulto">Adulto</option>
                                                    <option value="Infantil">Infantil</option>
                                                    <option value="Científico">Científico</option>
                                                    <option value="Ficção">Ficção</option>
                                                    <option value="Prefiro não informar">Prefiro não informar</option>
                                                </select>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example3cg">22.	Quanto tempo por semana você acessa a NETFLIX acompanhado(a) ?</label>
                                                <select required className="form-select" aria-label="Default select example" value={tempo_acompanhado} onChange={e => setTempo_acompanhado(e.target.value)}>
                                                    <option value=''>Selecione sua resposta</option>
                                                    <option value="Aproximadamente menos de 2 horas ">Aproximadamente menos de 2 horas </option>
                                                    <option value="Aproximadamente mais de 5 horas">Aproximadamente mais de 5 horas</option>
                                                    <option value="Aproximadamente mais de 10 horas">Aproximadamente mais de 10 horas</option>
                                                    <option value="Aproximadamente mais de 15 horas">Aproximadamente mais de 15 horas</option>
                                                    <option value="Prefiro não informar">Prefiro não informar</option>
                                                </select>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example3cg">23.	Quanto tempo por semana você acessa a NETFLIX desacompanhado(a) ?</label>

                                                <select required className="form-select" aria-label="Default select example" value={tempo_sozinho} onChange={e => setTempo_sozinho(e.target.value)}>
                                                    <option value=''>Selecione sua resposta</option>
                                                    <option value="Aproximadamente menos de 2 horas">Aproximadamente menos de 2 horas</option>
                                                    <option value="Aproximadamente mais de 5 horas">Aproximadamente mais de 5 horas</option>
                                                    <option value="Aproximadamente mais de 10 horas">Aproximadamente mais de 10 horas</option>
                                                    <option value="Aproximadamente mais de 15 horas">Aproximadamente mais de 15 horas</option>
                                                    <option value="Prefiro não informar">Prefiro não informar</option>
                                                </select>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example3cg">24.	 Qual a principal forma que você fica sabendo das novidades de conteúdo da NETFLIX ?</label>
                                                <select required className="form-select" aria-label="Default select example" value={novidade_conteudo} onChange={e => setNovidade_conteudo(e.target.value)}>
                                                    <option value=''>Selecione sua resposta</option>
                                                    <option value="Sites">Sites</option>
                                                    <option value="Aplicativo Netflix">Aplicativo Netflix</option>
                                                    <option value="Amigos">Amigos</option>
                                                    <option value="Familiares">Familiares</option>
                                                    <option value="Streaming">Streaming</option>
                                                </select>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example3cg">25.	Qual a principal forma que você menos acompanha as novidades de conteúdo da NETFLIX ?</label>
                                                <select required className="form-select" aria-label="Default select example" value={novidade_irrelevante} onChange={e => setNovidade_irrelevante(e.target.value)}>
                                                    <option value=''>Selecione sua resposta</option>
                                                    <option value="Sites">Sites</option>
                                                    <option value="Aplicativo">Aplicativo</option>
                                                    <option value="Amigos">Amigos</option>
                                                    <option value="Familiares">Familiares</option>
                                                    <option value="Streaming">Streaming</option>
                                                </select>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example3cg">26.	Na sua opinião a principal forma e mais segura para controle de privacidade nos perfis na sua conta da NETFLIX ?</label>
                                                <select required className="form-select" aria-label="Default select example" value={controle_acesso} onChange={e => setControle_acesso(e.target.value)}>
                                                    <option value=''>Selecione sua resposta</option>
                                                    <option value="Seria atribuir controle de acesso em duas etapas de forma individual por número de celular">Seria atribuir controle de acesso em duas etapas de forma individual por número de celular</option>
                                                    <option value="Aplicativo de token">Aplicativo de token</option>
                                                    <option value="Acesso por e-mail e senha">Acesso por e-mail e senha</option>
                                                    <option value="Prefiro não informar">Prefiro não informar</option>
                                                </select>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example3cg">27. Na sua opinião a forma mais conveniente e mais segura para controle de pagamento nos perfis na sua conta da NETFLIX? </label>
                                                <select required className="form-select" aria-label="Default select example" value={pagamento} onChange={e => setPagamento(e.target.value)}>
                                                    <option value=''>Selecione sua resposta</option>
                                                    <option value="Pagamento Pix">Pagamento Pix</option>
                                                    <option value="Cartão de crédito ou débito">Cartão de crédito ou débito</option>
                                                    <option value="Recarga por boleto bancário, bancas de revistas e lotéricas">Recarga por boleto bancário, bancas de revistas e lotéricas</option>
                                                    <option value="FLink de pagamento">Link de pagamento</option>
                                                    <option value="Prefiro não informar">Prefiro não informar</option>
                                                </select>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example3cg">28.	Na sua opinião a forma mais conveniente da NETFLIX apresentar produções com novos atores e diretores? </label>
                                                <select required className="form-select" aria-label="Default select example" value={atores_diretores} onChange={e => setAtores_diretores(e.target.value)}>
                                                    <option value=''>Selecione sua resposta</option>
                                                    <option value="Séries">Séries</option>
                                                    <option value="Filmes">Filmes</option>
                                                    <option value="Documentários">Documentários</option>
                                                    <option value="Animações">Animações</option>
                                                    <option value="Prefiro não informar">Prefiro não informar</option>
                                                </select>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example3cg">29.	Você já fez uso de plataformas concorrentes da NETFLIX ?</label>
                                                <select required className="form-select" aria-label="Default select example" value={concorrentes} onChange={e => setConcorrentes(e.target.value)}>
                                                    <option value=''>Selecione sua resposta</option>
                                                    <option value="Sim antes de ser cliente da NETFLIX">Sim antes de ser cliente da NETFLIX</option>
                                                    <option value="Faço as vezes o uso de plataformas concorrentes com foco no público infantil">Faço as vezes o uso de plataformas concorrentes com foco no público infantil</option>
                                                    <option value="Nunca fiz uso de outras plataformas concorrentes">Nunca fiz uso de outras plataformas concorrentes</option>
                                                    <option value="Faço as vezes o uso de plataformas concorrentes com foco no público adulto">Faço as vezes o uso de plataformas concorrentes com foco no público adulto</option>
                                                    <option value="Prefiro não informar">Prefiro não informar</option>
                                                </select>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example3cg">30. E por fim, na sua opinião o quanto esta pesquisa de projeto, contribui para sua experiência de prioridades, e melhorar os serviços de preferências da NETFLIX ?</label>
                                                <select required className="form-select" aria-label="Default select example" value={avaliacao} onChange={e => setAvaliacao(e.target.value)}>
                                                    <option value=''>Selecione sua resposta</option>
                                                    <option value="Muito satisfatório">Muito satisfatório</option>
                                                    <option value="Satisfatório">Satisfatório</option>
                                                    <option value="Regular">Regular</option>
                                                    <option value="Insatisfatório">Insatisfatório</option>
                                                    <option value="Prefiro não informar">Prefiro não informar</option>
                                                </select>
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
        </>
    )
}
