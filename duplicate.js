function flr(directions) {
    let positionY = 0;
    let positionX = 0;
    let turns = 0;
    
    
    for (let i = 0; i<directions.length; i++) {
        
        if (directions.charAt(i) == 'F') {
            //looks north
            if (turns % 4 === 0) {
                positionY += 1;
            }
            //looks south
            if (turns % 4 === 2 || turns % 4 === -2)  {
                positionY -= 1;
            }
            //looks east
            if (turns % 4 === 1 || turns % 4 === -3) {
                positionX += 1;
            }
            //looks west
            if (turns % 4 === 3 || turns % 4 === -1) {
                positionX -= 1;
            }
        }
        
        
        
        if (directions.charAt(i) == 'L') {
            turns -= 1;
        }
        if (directions.charAt(i) == 'R') {
            turns += 1;
        }
        
    }


    let minTurns = 1;
    
    if (turns % 4 === 0 && positionY > 0) {
        minTurns = 2;
    }
    
    if ((turns % 4 === 2 || turns % 4 === -2) && positionY < 0) {
        minTurns = 2;
    }
    
    if ((turns % 4 === 1 || turns % 4 === -3) && positionX > 0) {
        minTurns = 2;
    }
    
    if ((turns % 4 === 3 || turns % 4 === -1) && positionX < 0) {
        minTurns = 2;
    }
    
    if ((positionY === 0 && positionX > 0) && (turns % 4 === 3 || turns % 4 === -1)) {
        minTurns = 0;
    }
    
    if ((positionY === 0 && positionX < 0) && (turns % 4 === 1 || turns % 4 === -3)) {
        minTurns = 0;
    }
    
    if ((positionX === 0 && positionY > 0) && (turns % 4 === 2 || turns % 4 === -2)) {
        minTurns = 0;
    }
    
    if ((positionX === 0 && positionY < 0) && turns % 4 === 0) {
        minTurns = 0;
    }
    
    
    const minCommands = Math.abs(positionX) + Math.abs(positionY) + minTurns;
    console.log(minCommands)
    return minCommands;
}

flr("LFRFRFR")