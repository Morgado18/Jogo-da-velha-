

    // Jogo Da velha //

    const celulas = document.querySelector('.celula');
    let checarTurno = true;
    const JOGADOR_X = "X"
    const JOGADOR_O = "O"

    document.addEventListener('click', (event)=>{
       if(event.target.matches('.celula')){
           jogar(event.target.id)
       } 
    });

    function jogar(id) {

        const celula = document.getElementById(id);
        turno = checarTurno ? JOGADOR_X : JOGADOR_O;
        celula.textContent = turno;
        checarTurno = !checarTurno;   
        checaVencedor(turno)
    }

    function checaVencedor(turno){
        
    }
