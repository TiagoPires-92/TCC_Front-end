import React, { useLayoutEffect, useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { Inter } from 'next/font/google'
import api from '../api/services/api';
import { BsList } from 'react-icons/bs'

const inter = Inter({ subsets: ['latin'] })

const formataHoraLocal = (data_backend) => {
  const data = new Date(data_backend).toLocaleDateString();
  const hora = new Date(data_backend).toLocaleTimeString();
  return data + " " + hora;
}

const CATEGORIAS = [
  {titulo: "Gênero", campo: "genero", opcoes: [
    "Feminino",
    "Masculino",
    "LGBT",
    "Outro",
    "Prefiro não informar",
  ]},
  // {titulo: "Estado civil", campo: "estado_civil", opcoes: [
  //   "Feminino",
  //   "Masculino",
  //   "LGBT",
  //   "Outro",
  //   "Prefiro não informar",
  // ]},
  
]

const geraResumo = (respostas) => {
  let resumo = {}; // dicionario javascript tambem conhecido como mapa ou hashtable

  for (const r of respostas) {
    // id:40, genero: masculino... 
    for (const {titulo, campo, opcoes} of CATEGORIAS) { // genero, estado_civil, etc
      //  const x = 
    }
      
  }

  /**
   * quero retornar algo assim
   * [
   * {titulo: "Genero", resumo: [{nome: "Feminino", count: 3}] }]
   */
}

export default function Dashboard() {

  //instancia para alteração de rota
  const router = useRouter();
  const [users, setUsers] = useState(null)
  const [forms, setForms] = useState(null)

  useLayoutEffect(() => {
    const buscaTudo = async () => {
      const { data } = await api.get("/userAll")
      setUsers(data);
      const { data: dataForms } = await api.get("/formAll");
      setForms(dataForms);

    }

    buscaTudo();
  }, []);

  if (users == null || forms == null) return <div>carregando...</div>

  return (
    <div>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Sobrenome</th>
            <th scope="col">Email</th>
            <th scope="col">Data cadastro</th>
          </tr>
        </thead>
        <tbody>

          {users.map((item) =>
            <tr key={item.id}>
              <td>
                {item.id || "--"}
              </td>
             
              <td>
                {item.nome || "--"}
              </td>
              <td>
                {item.sobrenome || "--"}
              </td>
              <td>
                {item.email || "--"}
              </td>
              <td>
                {formataHoraLocal(item.data_hora) || "--"}
              </td>
            </tr>

          )}
        </tbody>
      </table>
    </div>
  )
}
