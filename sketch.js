let jogos = [
  { nome: "League of Legends", idade: 12, categorias: ["MOBA", "Estratégia"] },
  { nome: "Minecraft", idade: 7, categorias: ["Sandbox", "Aventura"] },
  { nome: "Grand Theft Auto V", idade: 18, categorias: ["Ação", "Mundo Aberto"] },
  { nome: "Fortnite", idade: 13, categorias: ["Battle Royale", "Tiro"] },
  { nome: "The Legend of Zelda: Breath of the Wild", idade: 10, categorias: ["Aventura", "RPG"] },
  { nome: "Among Us", idade: 10, categorias: ["Mistério", "Social"] },
  { nome: "Call of Duty: Warzone", idade: 18, categorias: ["Battle Royale", "Tiro"] },
  { nome: "Animal Crossing: New Horizons", idade: 0, categorias: ["Simulação", "Relaxante"] },
  { nome: "Rocket League", idade: 3, categorias: ["Esporte", "Corrida"] },
  { nome: "Stardew Valley", idade: 10, categorias: ["Simulação", "RPG"] },
];

let idadeUsuario;
let gostaMOBA, gostaEstrategia, gostaSandbox, gostaAventura, gostaAcao, gostaMundoAberto,
  gostaBattleRoyale, gostaTiro, gostaRPG, gostaMisterio, gostaSocial, gostaSimulacao,
  gostaRelaxante, gostaEsporte, gostaCorrida;
let jogosRecomendados = [];

function setup() {
  createCanvas(600, 400);
  background(240);
  textSize(16);
  fill(50);
  text("Recomendador de Jogos Online", 20, 30);

  // Coletar idade
  idadeUsuario = int(prompt("Qual sua idade?"));

  // Coletar preferências
  gostaMOBA = prompt("Você gosta de jogos MOBA? (sim/não)").toLowerCase() === "sim";
  gostaEstrategia = prompt("Você gosta de jogos de estratégia? (sim/não)").toLowerCase() === "sim";
  gostaSandbox = prompt("Você gosta de jogos sandbox? (sim/não)").toLowerCase() === "sim";
  gostaAventura = prompt("Você gosta de jogos de aventura? (sim/não)").toLowerCase() === "sim";
  gostaAcao = prompt("Você gosta de jogos de ação? (sim/não)").toLowerCase() === "sim";
  gostaMundoAberto = prompt("Você gosta de jogos de mundo aberto? (sim/não)").toLowerCase() === "sim";
  gostaBattleRoyale = prompt("Você gosta de jogos Battle Royale? (sim/não)").toLowerCase() === "sim";
  gostaTiro = prompt("Você gosta de jogos de tiro? (sim/não)").toLowerCase() === "sim";
  gostaRPG = prompt("Você gosta de jogos RPG? (sim/não)").toLowerCase() === "sim";
  gostaMisterio = prompt("Você gosta de jogos de mistério? (sim/não)").toLowerCase() === "sim";
  gostaSocial = prompt("Você gosta de jogos sociais? (sim/não)").toLowerCase() === "sim";
  gostaSimulacao = prompt("Você gosta de jogos de simulação? (sim/não)").toLowerCase() === "sim";
  gostaRelaxante = prompt("Você gosta de jogos relaxantes? (sim/não)").toLowerCase() === "sim";
  gostaEsporte = prompt("Você gosta de jogos de esporte? (sim/não)").toLowerCase() === "sim";
  gostaCorrida = prompt("Você gosta de jogos de corrida? (sim/não)").toLowerCase() === "sim";

  for (let jogo of jogos) {
    if (idadeUsuario >= jogo.idade) {
      if (
        (gostaMOBA && jogo.categorias.includes("MOBA")) ||
        (gostaEstrategia && jogo.categorias.includes("Estratégia")) ||
        (gostaSandbox && jogo.categorias.includes("Sandbox")) ||
        (gostaAventura && jogo.categorias.includes("Aventura")) ||
        (gostaAcao && jogo.categorias.includes("Ação")) ||
        (gostaMundoAberto && jogo.categorias.includes("Mundo Aberto")) ||
        (gostaBattleRoyale && jogo.categorias.includes("Battle Royale")) ||
        (gostaTiro && jogo.categorias.includes("Tiro")) ||
        (gostaRPG && jogo.categorias.includes("RPG")) ||
        (gostaMisterio && jogo.categorias.includes("Mistério")) ||
        (gostaSocial && jogo.categorias.includes("Social")) ||
        (gostaSimulacao && jogo.categorias.includes("Simulação")) ||
        (gostaRelaxante && jogo.categorias.includes("Relaxante")) ||
        (gostaEsporte && jogo.categorias.includes("Esporte")) ||
        (gostaCorrida && jogo.categorias.includes("Corrida"))
      ) {
        jogosRecomendados.push(jogo.nome);
      }
    }
  }

  if (jogosRecomendados.length > 0) {
    text("Jogos recomendados para você:", 20, 70);
    for (let i = 0; i < jogosRecomendados.length; i++) {
      text("- " + jogosRecomendados[i], 40, 100 + i * 25);
    }
  } else {
    text("Nenhum jogo disponível para sua idade e preferências.", 20, 70);
  }
}
