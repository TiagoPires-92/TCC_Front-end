import React, { useLayoutEffect, useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { Inter } from 'next/font/google'
import api from '../api/services/api';
import { BsList } from 'react-icons/bs'
import { geraDashboard } from './resumo';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie as PieInternal } from 'react-chartjs-2';


import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.register(ChartDataLabels);


// const optionsSemLegenda = {

//   layout: {
//     padding: 20,
//   },
//   plugins: {
//     datalabels: {

//     },
//     legend:
//     {
//       display: false
//     }
//   }
// }
const optionsQuebrado = {
  layout: {
    padding: 20,
  },
  plugins: {
    datalabels: {
      formatter: (value, ctx) => {
        console.log({ value, ctx })
        const indice = ctx.dataIndex;
        const percentValue = ctx.dataset.dataPercent[indice];
        if (percentValue == 0) return ''
        return percentValue + '%'
      },
      color: "#fff"
    },
    legend:
    {
      maxWidth: 20,
      labels: {
        boxWidth: 15,
        font: {
          size: 15
        }
      }
    }
  }
}

const Pie = (props) => <PieInternal options={optionsQuebrado} {...props} />

const makeChartData = (form) => {
  return {
    labels: form.opcoes.map(o => o.value),
    options: {

    },
    datasets: [

      {
        label: form.titulo,
        data: form.opcoes.map(o => (o.count)),
        dataPercent: form.opcoes.map(o => (o.percent)),
        // data: form.opcoes.map(o => ({ count: o.count, percent: o.percent })),
        parsing: {
          // xAxisKey: 'id',
          xAxisKey: 'count'
        },
        backgroundColor: [
          "#4b77a9",
          "#5f255f",
          "#d21243",
          "#B27200",
          "#06d6a0"
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderColor: "#fff",
        borderWidth: 5,
      }
    ]
  }
}

const EXEMPLO_DATA = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const inter = Inter({ subsets: ['latin'] })

const formataHoraLocal = (data_backend) => {
  const data = new Date(data_backend).toLocaleDateString();
  const hora = new Date(data_backend).toLocaleTimeString();
  return data + " " + hora;
}

export default function Dashboard() {

  //instancia para alteração de rota
  const router = useRouter();
  const [users, setUsers] = useState(null)
  const [forms, setForms] = useState(null)
  const [resumo, setResumo] = useState(null)

  useLayoutEffect(() => {
    const buscaTudo = async () => {
      const { data } = await api.get("/userAll")
      setUsers(data);
      const { data: dataForms } = await api.get("/formAll");
      setForms(dataForms);

      const resumo = geraDashboard(dataForms);
      setResumo(resumo);

      console.log("resumo", resumo);
    }

    buscaTudo();
  }, []);

  if (resumo == null) return <div>carregando...</div>

  return (
    <>
      <header id="header">
        <div className="container d-flex align-items-center justify-content-between">

          <h1 className="dashbord"><a href="index.html">Dashboard</a></h1>
        </div>

      </header>

      <section className="container" style={{ marginTop: '15px' }}>
        <div id="conteudo">
          <div className='margem'>
            <p className='first_title'>Quem são os clientes da netflix ?</p>
            <div className='types' >
              <div className='graph' >
                <p className='title'>Qual seu gênero ?</p>
                <Pie data={makeChartData(resumo['genero'])} />
              </div>
              <div className="graph">
                <p className='title'>Qual seu estado civil </p>
                <Pie data={makeChartData(resumo['estado_civil'])} />
              </div>
              <div className="graph">
                <p className='title'>Qual sua idade </p>
                <Pie data={makeChartData(resumo['idade'])} />
              </div>
              <div className="graph">
                <p className='title'>Qual sua opção sexual </p>
                <Pie data={makeChartData(resumo['sexo'])} />
              </div>
            </div>
            <p className='first_title' style={{ marginTop: '50px' }} >Em qual momento os clientes se utilizam do app Netflix?</p>
            <div className='types' >
              <div className="graph">
                <p className='title'>Acesso fora de Casa</p>
                <Pie data={makeChartData(resumo['acesso_foracasa'])} />
              </div>
              <div className="graph">
                <p className='title'>Acesso no horário das 8 ás 18 horas</p>
                <Pie data={makeChartData(resumo['horario_oito_dezoito'])} />
              </div>
              <div className="graph">
                <p className='title'>Acesso no horário das 18 ás 23 horas</p>
                <Pie data={makeChartData(resumo['acesso_noite'])} />
              </div>
              <div className="graph">
                <p className='title'>Acesso no horário das 23 ás 07 horas</p>
                <Pie data={makeChartData(resumo['acesso_madrugada'])} />
              </div>
            </div>
            <p className='first_title' style={{ marginTop: '50px' }} >Como é o acesso quando estão acompanhados os clientes da Netflix?</p>
            <div className='types' >
              <div className="graph">
                <p className='title'>Durante a Semana Acompanhado</p>
                <Pie data={makeChartData(resumo['semana_acompanhado'])} />
              </div>
              <div className="graph">
                <p className='title'>Final de Semana Acompanhado</p>
                <Pie data={makeChartData(resumo['findi_acompanhado'])} />
              </div>
              <div className="graph">
                <p className='title'>Acompanhado</p>
                <Pie data={makeChartData(resumo['acampanhado'])} />
              </div>
              <div className="graph">
                <p className='title'>Sexo</p>
                <Pie data={makeChartData(resumo['acompanhado_findi_gosta'])} />
              </div>
            </div>
            <p className='first_title' style={{ marginTop: '50px' }} >Como é o acesso do cliente estando sozinho(a)?</p>
            <div className='types' >
              <div className="graph">
                <p className='title'>Sexo</p>
                <Pie data={makeChartData(resumo['sozinho_conteudo'])} />
              </div>
              <div className="graph">
                <p className='title'>Sexo</p>
                <Pie data={makeChartData(resumo['sozinho_irrelevante'])} />
              </div>
              <div className="graph">
                <p className='title'>Sexo</p>
                <Pie data={makeChartData(resumo['tempo_sozinho'])} />
              </div>
              <div className="graph">
                <p className='title'>Novidades</p>
                <Pie data={makeChartData(resumo['novidade_conteudo'])} />
              </div>
            </div>
            <p className='first_title' style={{ marginTop: '50px' }}
            >O que o cliente avalia como conveniente quanto a privacidade e segurança
              da plataforma, além de opinar sobre novas produções e concorrentes?</p>
            <div className='types' >
              <div className="graph">
                <p className='title'>Controle de Acesso</p>
                <Pie data={makeChartData(resumo['controle_acesso'])} />
              </div>
              <div className="graph">
                <p className='title'>Pagamento</p>
                <Pie data={makeChartData(resumo['pagamento'])} />
              </div>
              <div className="graph">
                <p className='title'>Atores e Diretores</p>
                <Pie data={makeChartData(resumo['atores_diretores'])} />
              </div>
              <div className="graph">
                <p className='title'>Concorrentes</p>
                <Pie data={makeChartData(resumo['concorrentes'])} />
              </div>
            </div>
          </div>
        </div>
      </section >
    </>
  )
}
