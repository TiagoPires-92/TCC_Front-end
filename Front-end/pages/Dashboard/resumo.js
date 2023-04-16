const CATEGORIAS = [
    {
        titulo: "Gênero",
        campo: "genero",
        opcoes: [
            "Feminino",
            "Masculino",
            "LGBT",
            "Outro",
            "Prefiro não informar",
        ]
    },
    {
        titulo: "Estado civil",
        campo: "estado_civil",
        opcoes: [
            "Solteiro(a)",
            "Casado(a)",
            "Divorciado",
            "Viúvo(a)",
            "Prefiro não informar",
        ]
    },
    {
        titulo: "Idade",
        campo: "idade",
        opcoes: [
            "Menor de 18 anos",
            "18 a 39 anos",
            "40 a 59 anos",
            "Mais de 60 anos",
            "Prefiro não informar",
        ]
    },
    {
        titulo: "Sexo",
        campo: "sexo",
        opcoes: [
            "Heterossexual",
            "Homossexual",
            "LGBT",
            "Outro",
            "Prefiro não informar",
        ]
    },
    {
        titulo: "Idade dos Filhos",
        campo: "idade_filhos",
        opcoes: [
            "Menores de 18 anos",
            "Entre 18 a 59 anos",
            "Mais de 60 anos",
            "Não tenho filhos humanos",
            "Prefiro não informar",
        ]
    },
    {
        titulo: "Filha(s)",
        campo: "filha_feminino",
        opcoes: [
            "Menores de 10 anos ",
            "Menores de 18 anos",
            "Entre 19 a 60 anos",
            "Não tenho filhos do gênero feminino",
            "Prefiro não informar",
        ]
    },
    {
        titulo: "Filho(s)",
        campo: "filho_masculino",
        opcoes: [
            "Menores de 10 anos ",
            "Menores de 18 anos",
            "Entre 19 a 60 anos",
            "Não tenho filhos do gênero masculino",
            "Prefiro não informar",
        ]
    },
    {
        titulo: "Durante a semana Acompanhado",
        campo: "semana_acompanhado",
        opcoes: [
            "Na maioria de pessoas menores de 18 anos",
            "Na maioria pessoas de 18 a 39 anos",
            "Na maioria pessoas de 40 a 59 anos",
            "Na maioria pessoas com mais de 60 anos",
            "Prefiro não informar",
        ]
    },
    {
        titulo: "Final de Semana Acompanhado",
        campo: "findi_acompanhado",
        opcoes: [
            "Na maioria de pessoas menores de 18 anos",
            "Na maioria pessoas de 18 a 39 anos",
            "Na maioria pessoas de 40 a 59 anos",
            "Na maioria pessoas com mais de 60 anos",
            "Prefiro não informar",
        ]
    },
    {
        titulo: "Acesso fora de casa",
        campo: "acesso_foracasa",
        opcoes: [
            "Sim",
            "Não",
            "As vezes durante a semana",
            "As vezes no final de semana",
            "Prefiro não informar",
        ]
    },
    {
        titulo: "Acesso no trabalho",
        campo: "acesso_trabalho",
        opcoes: [
            "Sim",
            "Não",
            "As vezes durante a semana",
            "As vezes no final de semana",
            "Prefiro não informar",
        ]
    },
    {
        titulo: "Acesso comercial das 8 ás 18 horas",
        campo: "horario_oito_dezoito",
        opcoes: [
            "Sim",
            "Não",
            "As vezes durante a semana",
            "As vezes no final de semana",
            "Prefiro não informar",
        ]
    },
    {
        titulo: "Compartilhar o acesso",
        campo: "horario_compartilhado",
        opcoes: [
            "Sim",
            "Não",
            "As vezes durante a semana",
            "As vezes no final de semana",
            "Prefiro não informar",
        ]
    },
    {
        titulo: "Acesso a noite das 18 ás 23 horas",
        campo: "acesso_noite",
        opcoes: [
            "Sim",
            "Não",
            "As vezes durante a semana",
            "As vezes no final de semana",
            "Prefiro não informar",
        ]
    },
    {
        titulo: "Acesso na madrugada das 23 ás 07 horas ",
        campo: "acesso_madrugada",
        opcoes: [
            "Sim",
            "Não",
            "As vezes durante a semana",
            "As vezes no final de semana",
            "Prefiro não informar",
        ]
    },
    {
        titulo: "Tempo que estou no trânsito",
        campo: "tempo_transito",
        opcoes: [
            "Menos uma hora",
            "De uma a duas horas",
            "Mais de 3 horas",
            "No momento desenvolvo minhas atividades em home office",
            "Prefiro não informar",
        ]
    },
    {
        titulo: "Acompanhado",
        campo: "acampanhado",
        opcoes: [
            "Sim",
            "Não",
            "Acompanhado(a) as vezes durante a semana",
            "Acompanhado(a) as vezes no final de semana",
            "Prefiro não informar",
        ]
    },
    {
        titulo: "Consumo conteúdo sozinho",
        campo: "sozinho_conteudo",
        opcoes: [
            "Adulto",
            "Infantil",
            "Científico",
            "Ficção",
            "Prefiro não informar",
        ]
    },
    {
        titulo: "Sozinho Irrelevante",
        campo: "sozinho_irrelevante",
        opcoes: [
            "Adulto",
            "Infantil",
            "Científico",
            "Ficção",
            "Prefiro não informar",
        ]
    },
    {
        titulo: "Acompanhado no final de Semana",
        campo: "acompanhado_findi_gosta",
        opcoes: [
            "Adulto",
            "Infantil",
            "Científico",
            "Ficção",
            "Prefiro não informar",
        ]
    },
    {
        titulo: "Filmes Irrelevantes",
        campo: "acampanhado_findiirrelevante",
        opcoes: [
            "Adulto",
            "Infantil",
            "Científico",
            "Ficção",
            "Prefiro não informar",
        ]
    },
    {
        titulo: "Tempo que estou acompanhado",
        campo: "tempo_acompanhado",
        opcoes: [
            "Aproximadamente menos de 2 horas ",
            "Aproximadamente mais de 5 horas",
            "Aproximadamente mais de 10 horas",
            "Aproximadamente mais de 15 horas",
            "Prefiro não informar",
        ]
    },
    {
        titulo: "Tempo sozinho",
        campo: "tempo_sozinho",
        opcoes: [
            "Aproximadamente menos de 2 horas ",
            "Aproximadamente mais de 5 horas",
            "Aproximadamente mais de 10 horas",
            "Aproximadamente mais de 15 horas",
            "Prefiro não informar",
        ]
    },
    {
        titulo: "Novidade",
        campo: "novidade_conteudo",
        opcoes: [
            "Sites",
            "Aplicativo Netflix",
            "Amigos",
            "Familiares",
            "Streaming",
        ]
    },
    {
        titulo: "Novidade irrelevante",
        campo: "novidade_irrelevante",
        opcoes: [
            "Sites",
            "Aplicativo Netflix",
            "Amigos",
            "Familiares",
            "Streaming",
        ]
    },
    {
        titulo: "Controle de Acesso",
        campo: "controle_acesso",
        opcoes: [
            "Seria atribuir controle de acesso em duas etapas de forma individual por número de celular",
            "Aplicativo de token",
            "Acesso por e-mail e senha",
            "Prefiro não informar",
        ]
    },
    {
        titulo: "Pagamento",
        campo: "pagamento",
        opcoes: [
            "Pagamento Pix",
            "Cartão de crédito ou débito",
            "Recarga por boleto bancário, bancas de revistas e lotéricas",
            "Link de pagamento",
            "Prefiro não informar",
        ]
    },
    {
        titulo: "Atores e Diretores",
        campo: "atores_diretores",
        opcoes: [
            "Séries",
            "Filmes",
            "Documentários",
            "Animações",
            "Prefiro não informar",
        ]
    },
    {
        titulo: "Concorrentes",
        campo: "concorrentes",
        opcoes: [
            "Sim antes de ser cliente da NETFLIX",
            "Faço as vezes o uso de plataformas concorrentes com foco no público infantil",
            "Nunca fiz uso de outras plataformas concorrentes",
            "Faço as vezes o uso de plataformas concorrentes com foco no público adulto",
            "Prefiro não informar",
        ]
    },
    {
        titulo: "Avaliação",
        campo: "avaliacao",
        opcoes: [
            "Muito satisfatório",
            "Satisfatório",
            "Regular",
            "Insatisfatório",
            "Prefiro não informar",
        ]
    }

];

// Aqui é um exemplo do que o teu banco está retornando, pra facilitar. 
const EXEMPLO_FORMS = [
    { id: 1, genero: "Feminino", estado_civil: "Solteiro" },
    { id: 2, genero: "Masculino", estado_civil: "Solteiro" },
    { id: 3, genero: "Masculino", estado_civil: "Divorciado" },
    { id: 4, genero: "Outro", estado_civil: "Casado(a)" },
    { id: 5, genero: "Prefiro não informar", estado_civil: "Solteiro" },
]

const geraResumo = (respostas) => {
    let resumo = {};

    // Para cada categoria do objeto acima: genero, estado_civil, etc
    for (const { campo } of CATEGORIAS) {

        // Iniciamos um objeto para o resumo da categoria "genero" por exemplo
        resumo[campo] = {}

        // Para cada resposta no formulário passado...
        for (const resp of respostas) {
            // Pegamos a resposta atual e...
            const opcao = resp[campo]
            // Se ela já estiver no nosso resumo, somamos 1
            if (opcao in resumo[campo]) {
                resumo[campo][opcao] = resumo[campo][opcao] + 1
            } else {
                // Caso contrario, é a primeira vez que esta resposta aparece
                // Iniciamos com 1
                resumo[campo][opcao] = 1
            }
        }
    }

    // Retornamos o objeto neste formato com todos os resumos para cada categoria
    // {
    //   genero: { Feminino: 1, Masculino: 2, Outro: 1, 'Prefiro não informar': 1 },
    //   estado_civil: { Solteiro: 3, Divorciado: 1, 'Casado(a)': 1 }
    //   ...
    // }
    return resumo;
}

// A partir do resumo e das categorias, gera uma lista formatada das contagens
// É só alterar para gerar um dashboard ou react a partir dos dados retornados desta 
// função.
export const geraDashboard = (dados) => {
    const resumo = geraResumo(dados);
    // let formatado = [];
    let formatado = {};

    console.log('geraDashboard')

    for (const categ of CATEGORIAS) {
        let opcoes = [];

        for (const value of categ.opcoes) {
            if (value in resumo[categ.campo]) {
                opcoes.push({ value, count: resumo[categ.campo][value] });

            } else {
                // Nao apareceu no resumo então é zero:
                opcoes.push({ value, count: 0 })
            }
        }

        // segunda passada pra calcular porcentagens
        let total = 0;

        for (const o of opcoes) {
            total += o.count;
        }

        let opcoesComPercent = [];
        for (const o of opcoes) {
            opcoesComPercent.push({ ...o, percent: Math.round(100 * (o.count / total)) })
        }

        // formatado.push({ titulo: categ.titulo, opcoes })
        formatado[categ.campo] = { titulo: categ.titulo, opcoes: opcoesComPercent };
    }

    // console.log(formatado);
    return formatado;
}
/* Esta funcao vai retornar algo pra usarmos depois no dashboard:
[
    {
        "titulo": "Gênero",
        "opcoes": [
            {
                "value": "Feminino",
                "count": 1
            },
            {
                "value": "Masculino",
                "count": 2
            },
            {
                "value": "LGBT",
                "count": 0
            },
            {
                "value": "Outro",
                "count": 1
            },
            {
                "value": "Prefiro não informar",
                "count": 1
            }
        ]
    },
    {
        "titulo": "Estado civil",
        "opcoes": [
            {
                "value": "Solteiro",
                "count": 3
            },
            {
                "value": "Casado(a)",
                "count": 1
            },
            {
                "value": "Divorciado",
                "count": 1
            },
            {
                "value": "Prefiro não informar",
                "count": 0
            }
        ]
    }
]
*/