let elo = rankeada(84, 10);

function rankeada(vitoria, derrota) {
  let saldoRankeada = vitoria - derrota;
  return saldoRankeada;
}

function eloFerro() {
  console.log("Voce possui " + elo + " pontos. Seu ELO é Ferro");
}

function eloBronze() {
  console.log("Voce possui " + elo + " pontos. Seu ELO é Bronze");
}

function eloPrata() {
  console.log("Voce possui " + elo + " pontos. Seu ELO é Prata");
}

function eloOuro() {
  console.log("Voce possui " + elo + " pontos. Seu ELO é Ouro");
}

function eloDiamante() {
  console.log("Voce possui " + elo + " pontos. Seu ELO é Diamante");
}

function eloLendario() {
  console.log("Voce possui " + elo + " pontos. Seu ELO é Lendario");
}

function eloImortal() {
  console.log("Voce possui " + elo + " pontos. Seu ELO é Imortal");
}

switch (true) {
  case elo <= 10:
    eloFerro();
    break;
  case elo > 10 && elo <= 20:
    eloBronze();
    break;
  case elo > 20 && elo <= 50:
    eloPrata();
    break;
  case elo > 50 && elo <= 80:
    eloOuro();
    break;
  case elo > 80 && elo <= 90:
    eloDiamante();
    break;
  case elo > 90 && elo <= 100:
    eloLendario();
    break;
  case elo > 100:
    eloImortal();
    break;
  default:
    console.log("Você possui " + elo + " pontos. Seu ELO é desconhecido");
}
