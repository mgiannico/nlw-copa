function createGame(player1, hour, player2) {
    return `
     <li>
             <img src="./assets/icon-${player1}.svg" alt="ícone bandeira do ${player1}">
             <strong>${hour}</strong>
             <img src="./assets/icon-${player2}.svg" alt="ícone bandeira do ${player2}">
     </li>
    `
}

let delay = -0.4;

function createCard(date, day, games) {
    delay = delay + 0.4;
    return `
    <div class="card" style="animation-delay: ${delay}s">
     <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
 `
}

document.querySelector('.cards').innerHTML = `
        ${createCard("24/11", "quinta", createGame('brasil', '16:00', 'camaroes') + createGame('brasil', '16:00', 'camaroes'))}
        ${createCard("28/11", "segunda", createGame())}
        ${createCard("02/12", "sexta", createGame())}
`