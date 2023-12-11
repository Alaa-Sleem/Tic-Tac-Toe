
let currentPlayer = 'X'; 
let LastMove = null;
let playerXWins = 0;
let playerOWins = 0;

 

  
function MakeMove(row , col){
    const Cell =document.getElementById(`cell-${row}-${col}`)

    if (Cell && Cell.textContent.trim()==='')
    {
        Cell.textContent = currentPlayer;
        LastMove = currentPlayer ;
      // Switch to the next player
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      CheckWinner(row,col);
    }

}


function CheckWinner(row ,col)
{
    const cells = Array.from(document.querySelectorAll('.gamesquar'));
    let winnerMessage = document.getElementById('winner-message');


    //  check the rows 
    for (let i=0 ;i<3 ;i++)
    {
        if (
       cells[i * 3] &&    
       cells[i*3].textContent !==''&& 
       cells[i*3].textContent === cells[i*3 +1]?.textContent &&
       cells[i*3].textContent === cells[i*3 +2]?.textContent ){
        if (LastMove === 'X') {
          playerXWins++;
      } else if (LastMove === 'O') {
          playerOWins++;
      }
      document.getElementById('playerXWins').textContent = playerXWins;
      document.getElementById('playerOWins').textContent = playerOWins;
      
        winnerMessage.textContent = `Player  ${LastMove} Wins!`;
        const winningCell = cells[row * 3 + col];
        if (winningCell) {
          winningCell.textContent = LastMove; // Display last move in the winning square
      }


       
         return;
         
       }   
    }


    // check the coulmns 

    for (let i=0 ;i<3 ;i++)
    {
        if (
        cells[i] &&
        cells[i].textContent !== '' && 
        cells[i].textContent === cells[i + 3 ]?.textContent &&
        cells[i].textContent === cells[i + 6]?.textContent ){
          if (LastMove === 'X') {
            playerXWins++;
        } else if (LastMove === 'O') {
            playerOWins++;
        }
        document.getElementById('playerXWins').textContent = playerXWins;
        document.getElementById('playerOWins').textContent = playerOWins;
          winnerMessage.textContent = `Player  ${LastMove} Wins!`;
          const winningCell = cells[row * 3 + col];
          if (winningCell) {
            winningCell.textContent = LastMove; // Display last move in the winning square

        }
     
         return;
       }   
    }
    
    
    //check the dignoal 
    if(cells[0] && 
    cells[0].textContent !== '' &&
    cells[0].textContent === cells[4]?.textContent &&
    cells[0].textContent === cells[8]?.textContent )
    {
      if (LastMove === 'X') {
        playerXWins++;
    } else if (LastMove === 'O') {
        playerOWins++;
    }
    document.getElementById('playerXWins').textContent = playerXWins;
    document.getElementById('playerOWins').textContent = playerOWins;
      winnerMessage.textContent = `Player  ${LastMove} Wins!`;
        const winningCell = cells[row * 3 + col];
        if (winningCell) {
          winningCell.textContent = LastMove; // Display last move in the winning square  
     
          
      }
        return;   
    }
    
   
    if(cells[2] &&    
    cells[2].textContent !== '' &&
    cells[2].textContent === cells[4]?.textContent&&
    cells[2].textContent === cells[6]?.textContent ){
      if (LastMove === 'X') {
        playerXWins++;
    } else if (LastMove === 'O') {
        playerOWins++;
    }
    document.getElementById('playerXWins').textContent = playerXWins;
    document.getElementById('playerOWins').textContent = playerOWins;
      winnerMessage.textContent = `Player  ${LastMove} Wins!`;
        const winningCell = cells[row * 3 + col];
        if (winningCell) {
          winningCell.textContent = LastMove; // Display last move in the winning square
      
      }
       return;
  
      }


      const isDraw = cells.every(cell => cell.textContent !== '');
      if (isDraw) {
          winnerMessage.textContent = "It's a draw!";
          // Additional logic if needed
          return;
      }
  

  

}


//reset game 
function resetGame(){
    const cells = Array.from(document.querySelectorAll('.gamesquar'));
    const winnerMessage = document.getElementById('winner-message');

    // Clear the content of all cells
    cells.forEach(cell => {
    cell.textContent = '';
    });
    LastMove =null;
    winnerMessage.textContent =''; // Clear the winner message
    currentPlayer = 'X';
}

