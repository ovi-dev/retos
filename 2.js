/*
 * Escribe un programa que muestre cómo transcurre un juego de tenis y quién lo ha ganado.
 * El programa recibirá una secuencia formada por "P1" (Player 1) o "P2" (Player 2), según quien
 * gane cada punto del juego.
 *
 * - Las puntuaciones de un juego son "Love" (cero), 15, 30, 40, "Deuce" (empate), ventaja.
 * - Ante la secuencia [P1, P1, P2, P2, P1, P2, P1, P1], el programa mostraría lo siguiente:
 *   15 - Love
 *   30 - Love
 *   30 - 15
 *   30 - 30
 *   40 - 30
 *   Deuce
 *   Ventaja P1
 *   Ha ganado el P1
 */

const players = {
    p1: 1,
    p2: 2,
  };
  
  function gameTenis(points) {
    let game = ["love", "15", "30", "40"];
    let p1_points = 0;
    let p2_points = 0;
  
    for (let player of points) {
      player == players.p1 ? (p1_points += 1) : (p2_points += 1);
  
      if (p1_points >= 3 && p2_points >= 3) {
        console.log(
          p1_points == p2_points
            ? "Deuce"
            : p1_points > p2_points
            ? "ventaja p1"
            : "ventaja p2"
        );
      } else {
        console.log(`${game[p1_points]} - ${game[p2_points]} `);
      }
    }
  
    console.log(p1_points > p2_points ? "Ha ganado P1" : "Ha ganado P2");
  }
  
  gameTenis([
    players.p1,
    players.p1,
    players.p2,
    players.p2,
    players.p1,
    players.p2,
    players.p1,
    players.p1,
  ]);