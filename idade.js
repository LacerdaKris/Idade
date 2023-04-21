//no terminal, dentro da pasta, iniciar projeto npm, e após instalar módulo para datas:
//npm init -y
//npm install --save dayjs

const dayjs = require("dayjs");

//cria interface com entradas/saídas para interagir com o usuário
const inputs = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

//chama a interface passando uma pergunta com função anônima e mostra resultado
//considera entrada em formato americano: mês-dia-ano
inputs.question(
  "Digite a data de nascimento no formato MM/DD/YYYY: ",
  (pergunta) => {
    const atual = dayjs();
    const nascimento = dayjs(pergunta);
    if (!nascimento.isValid() || nascimento.isAfter(atual)) {
      console.log("Data inválida! Tente novamente.");

      console.log(nascimento);

      inputs.close();
      return;
    }

    console.log(nascimento, atual);

    const diferencaEmAnos = atual.diff(nascimento, "year");
    const proximoAniversario = nascimento.add(diferencaEmAnos + 1, "year");
    const diasProximoAniversario = proximoAniversario.diff(atual, "day") + 1;

    console.log(`Sua idade atual é: ${diferencaEmAnos} anos.`);
    console.log(
      `Próximo aniversário: ${proximoAniversario.format("DD/MM/YYYY")}`
    );
    console.log(
      `Dias até completar ${
        diferencaEmAnos + 1
      } anos: ${diasProximoAniversario}`
    );

    inputs.close();
  }
);
