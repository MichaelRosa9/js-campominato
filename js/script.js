

//funzione 16 numeri random compresi tra 1 e 100
function num_generator(arr){
  arr = [];  
  while(arr.length < 16){
    //counter ++;
    var random_num = Math.floor((Math.random() * 100) + 1);
    if(arr.includes(random_num)){
      
    }else{

      arr.push(random_num);
    }
  }
  return arr
}

//array di numeri del computer
var arr_npc = num_generator();

//array di numeri inseriti del giocatore
var arr_player = [];

var input_player = false;
//condizioni ciclo del gioco
while(input_player == false){
  var player_num = parseInt(prompt('Inserisci un numero da 1 a 100'))

  if(arr_player.includes(player_num)){//se il numero é già stato inserito
    alert("Attenzione!\n Il numero appena messo é gia stato inserito. Inserisci un altro numero diverso da");
    input_player == false;
  }else if(isNaN(player_num)){//se é stato in serito qualcosa al di fuori di un numero
    alert("Attenzione!\n Il carattere inserito non é un numero. Inserisci un numero da 1 a 100.");
    input_player == false;
  }else if(player_num < 0 && player_num > 100){//se il numero e' inferiore di 1 o superiore a 100
    alert("Attenzione!\n Il numero inserito non é compreso tra 1 e 100. Inserisci un numero da 1 a 100.");
    input_player == false;
  }else if(arr_npc.includes(player_num)){//se il numero inserito corrisponde a un numero del computer
    alert("Hai beccato una mina! Hai perso.");
    input_player = true;
  }
  //numero non puo essere insereti se e' gia stato messo
  
  arr_player.push(player_num);
  //esito partita terminata se

  //se si ha messo il numero massimo di numeri da poter inserire nel limite
}


console.log(arr_npc);
console.log(arr_player);
//una volta terminata la partita usare un alert indicanto tentativi eseguiti e numero che ha fatto perdere il giocatore
