// Criar um array de objetos com o nome e a nota de alunos
const alunos = [
    { nome: "João", nota: 7 },
    { nome: "Maria", nota: 5 },
    { nome: "Pedro", nota: 8 },
    { nome: "Ana", nota: 4 },
    { nome: "Lucas", nota: 6 },
    { nome: "Clara", nota: 9 },
    ];

  // Criar uma função para retornar os alunos com nota maior ou igual a 6
    function filtrarAlunosComNotaMaiorOuIgualASeis(arrayDeAlunos) {
    return arrayDeAlunos.filter((aluno) => aluno.nota >= 6);
    }

  // Chamando a função e armazenando o resultado em uma nova variável
    const alunosAprovados = filtrarAlunosComNotaMaiorOuIgualASeis(alunos);

  // Exibindo os alunos aprovados
    console.log("Alunos aprovados:");
    console.log(alunosAprovados);