const readline = require('readline');

// Cria a interface para captura de dados
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pergunta o nome do herói
rl.question('Digite o nome do Herói: ', (name) => {

  // Pergunta o valor de XP
  rl.question('Digite a quantidade de XP: ', (xp) => {
    // Converte XP para número
    xp = parseInt(xp);
    let level;

    // Verifica o nível com base no XP
    if (xp <= 1000) {
      level = "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
      level = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
      level = "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
      level = "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
      level = "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
      level = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
      level = "Imortal";
    } else if (xp > 10001) {
      level = "Radiante";
    }

    // Exibe o resultado
    console.log(`O Herói de nome ${name} está no nível de ${level}`);

    // Fecha a interface de leitura
    rl.close();
  });
});
