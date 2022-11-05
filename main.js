function createGame(player1, hour, player2, name) {
    return `
     <li>
             <img src="./assets/icon-${player1}.svg" alt="ícone bandeira do ${player1}">
             <strong>${hour}</strong>
             <img src="./assets/icon-${player2}.svg" alt="ícone bandeira do ${player2}">
             
     </li>
     <h3>${name}</h3>
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
        ${createCard("20/11", "domingo", createGame('quatar', '13:00', 'ecuador', 'Catar X Equador'))}
        ${createCard("21/11", "segunda", createGame('england', '10:00', 'iran', 'Inglaterra X Irã') + createGame('senegal', '13:00', 'netherlands', 'Senegal X Holanda') + createGame('USA', '16:00', 'wales', 'USA X País de Gales'))}
        ${createCard("22/11", "terça", createGame('argentina', '07:00', 'saudi-arabia', 'Argentina X Arabia Saudita') + createGame('denmark', '10:00', 'tunisia', 'Dinamarca X Tunísia') + createGame('mexico', '13:00', 'poland', 'México X Polônia') + createGame('france', '16:00', 'australia', 'França X Austrália'))}
        ${createCard("23/11", "quarta", createGame('morocco', '07:00', 'croatia', 'Marrocos X Croácia') + createGame('germany', '10:00', 'japan', 'Alemanha X Japão') + createGame('spain', '13:00', 'costa-rica', 'Espanha X Costa Rica') + createGame('belgium', '16:00', 'canada', 'Bélgica X Canadá'))}
        ${createCard("24/11", "quinta", createGame('switzerland', '07:00', 'cameroon', 'Suíça X Camarões') + createGame('uruguay', '10:00', 'south-korea','Uruguai X Coréia do Sul') + createGame('portugal', '13:00', 'ghana', 'Portugal X Gana') + createGame('brazil', '16:00', 'serbia','Brasil X Sérvia'))}
        ${createCard("25/11", "sexta", createGame('wales', '07:00', 'iran','País de Gales X Irã') + createGame('quatar', '10:00', 'senegal', 'Catar X Senegal') + createGame('netherlands', '13:00', 'ecuador', 'Holanda X Equador') + createGame('england', '16:00', 'USA', 'Inglaterra X USA'))}
        ${createCard("26/11", "sábado", createGame('tunisia', '07:00', 'australia','Tunísia X Austrália') + createGame('poland', '10:00', 'saudi-arabia', 'Polônia X Arabia Saudita') + createGame('france', '13:00', 'denmark', 'França X Dinamarca') + createGame('argentina', '16:00', 'mexico', 'Argentina X México'))}
        ${createCard("27/11", "domingo", createGame('japan', '07:00', 'costa-rica','Japão X Costa Rica') + createGame('belgium', '10:00', 'morocco', 'Bélgica X Marrocos') + createGame('croatia', '13:00', 'canada','Croácia X Canadá') + createGame('spain', '16:00', 'germany','Espanha X Alemanha'))}
        ${createCard("28/11", "segunda", createGame('cameroon', '07:00', 'serbia','Camarões X Sérvia') + createGame('south-korea', '10:00', 'ghana','Coréia do Sul X Gana') + createGame('brazil', '13:00', 'switzerland','Brasil X Suíça') + createGame('portugal', '16:00', 'uruguay','Portugal X Uruguai'))}
        ${createCard("29/11", "terça", createGame('ecuador', '12:00', 'senegal','Equador X Senegal') + createGame('netherlands', '12:00', 'quatar','Holanda X Catar') + createGame('iran', '16:00', 'USA','Irã X USA') + createGame('wales', '16:00', 'england','País de Gales X Inglaterra'))}
        ${createCard("30/11", "quarta", createGame('tunisia', '12:00', 'france', 'Tunísia X França') + createGame('australia', '12:00', 'denmark','Austrália X Dinamarca') + createGame('poland', '16:00', 'argentina', 'Polônia X Argentina') + createGame('saudi-arabia', '16:00', 'mexico','Arabia Saudita X México'))}
        ${createCard("01/12", "quinta", createGame('croatia', '12:00', 'belgium','Croácia X Bélgica') + createGame('canada', '12:00', 'morocco','Canadá X Marrocos') + createGame('japan', '16:00', 'spain', 'Japão X Espanha') + createGame('costa-rica', '16:00', 'germany','Costa Rica X Alemanha'))}
        ${createCard("02/12", "sexta", createGame('south-korea', '12:00', 'portugal','Coréia do Sul X Portugal') + createGame('ghana', '12:00', 'uruguay', 'Gana X Uruguai') + createGame('serbia', '16:00', 'switzerland','Sérvia X Suíça') + createGame('cameroon', '16:00', 'brazil', 'Camarões X Brasil'))}
        ${createCard("03/12", "sábado", createGame('não-definido', '12:00', 'não-definido', 'indefinido') + createGame('não-definido', '16:00', 'não-definido','indefinido'))}
        ${createCard("04/12", "domingo", createGame('não-definido', '12:00', 'não-definido','indefinido') + createGame('não-definido', '16:00', 'não-definido','indefinido'))}
        ${createCard("05/12", "segunda", createGame('não-definido', '12:00', 'não-definido','indefinido') + createGame('não-definido', '16:00', 'não-definido','indefinido'))}
        ${createCard("06/12", "terça", createGame('não-definido', '12:00', 'não-definido','indefinido') + createGame('não-definido', '16:00', 'não-definido','indefinido'))}
        ${createCard("09/12", "sexta", createGame('não-definido', '12:00', 'não-definido','indefinido') + createGame('não-definido', '16:00', 'não-definido','indefinido'))}
        ${createCard("10/12", "sábado", createGame('não-definido', '12:00', 'não-definido','indefinido') + createGame('não-definido', '16:00', 'não-definido','indefinido'))}
        ${createCard("13/12", "terça", createGame('não-definido', '16:00', 'não-definido','indefinido'))}
        ${createCard("14/12", "quarta", createGame('não-definido', '16:00', 'não-definido','indefinido'))}
        ${createCard("17/12", "sábado", createGame('não-definido', '12:00', 'não-definido','indefinido'))}
        ${createCard("18/12", "domingo", createGame('não-definido', '12:00', 'não-definido','indefinido'))}

 `       