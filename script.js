body = document.querySelector("body");
url = 'https://source.unsplash.com/'+String(window.innerWidth)+"x"+String(window.innerHeight)+'/?game'
body.style.backgroundImage = "url("+url+")"

b1 = 0;
b2 = 0;
b3 = 0;
b4 = 0;
b5 = 0;
b6 = 0;
b7 = 0;
b8 = 0;
b9 = 0;

winner = "none";

player = 1;

function conv(player){

  if (player == 1){
    
    return "X";
  }
  if (player == -1){
  return "O";
}
}

function updateBoard(idd) {
  if (winner == "none"){
  aa = document.getElementById(idd);
  if (aa.innerHTML == ""){
  aa.innerHTML = conv(player);
  player = player*(-1);
}}
}

function reverseConv(a){
  if (a == "X"){
    return 1;
  }
  if (a=="O"){
  return -1;}
  if (a==""){
    return 0;
  }
}

function declareWinner(){
  board = [
    [
      reverseConv(document.getElementById("b1").innerHTML),
     reverseConv(document.getElementById("b2").innerHTML),
     reverseConv(document.getElementById("b3").innerHTML)
   ],
   [reverseConv(document.getElementById("b4").innerHTML),
    reverseConv(document.getElementById("b5").innerHTML),
    reverseConv(document.getElementById("b6").innerHTML)
  ],
  [reverseConv(document.getElementById("b7").innerHTML),
   reverseConv(document.getElementById("b8").innerHTML),
   reverseConv(document.getElementById("b9").innerHTML)
  ]
]
c = 0;
for (i = 0; i<3; i++){
  for (j = 0; j<3; j++){
    if (board[i][j] != 1 && board[i][j] != -1){
      c++;
    }
  }
}

for (i = 0; i<3; i++)
{
  if (board[i][0] == board[i][1] && board[i][1] == board[i][2] && board[i][1]!=0){
    winner = conv(board[i][1])
    return
  }
  if (board[0][i] == board[1][i] && board[1][i] == board[2][i] && board[1][i]!=0){
    winner = conv(board[1][i])
    return
  }
}
if (board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[1][1] !=0){
  winner = conv(board[1][1])
  return
}
if (board[2][0] == board[1][1] && board[1][1] == board[0][2] && board[1][1] !=0){
  winner = conv(board[1][1])
  return
}

if (c==0) {
    winner = "draw";
    return
  }
}

function reset(){
  for (i = 1; i<10; i++){
    document.getElementById("b"+i).innerHTML = "";

  }
  winner = "none";
  player = 1;
}



function fb1() {
  b1++;
  updateBoard("b1");
  if (winner == "none"){
    declareWinner();
    if (winner != "none"){
      alert(winner);}
  }
}

function fb2() {
  b2++;
  updateBoard("b2");
  if (winner == "none"){
    declareWinner();
  if (winner != "none"){
  alert(winner);}}
}

function fb3() {
  b3++;
  updateBoard("b3");
  if (winner == "none"){
    declareWinner();
  if (winner != "none"){
  alert(winner);}}
}

function fb4() {
  b4++;
  updateBoard("b4");
  if (winner == "none"){
    declareWinner();
  if (winner != "none"){
  alert(winner);}}
}

function fb5() {
  b5++;
  updateBoard("b5");
  if (winner == "none"){
    declareWinner();
  if (winner != "none"){
  alert(winner);}}
}

function fb6() {
  b6++;
  updateBoard("b6");
  if (winner == "none"){
    declareWinner();
  if (winner != "none"){
  alert(winner);}}
}

function fb7() {
  b7++;
  updateBoard("b7");
  if (winner == "none"){
    declareWinner();
  if (winner != "none"){
  alert(winner);}}
}

function fb8() {
  b8++;
  updateBoard("b8");
  if (winner == "none"){
    declareWinner();
  if (winner != "none"){
  alert(winner);}}
}

function fb9() {
  b9++;
  updateBoard("b9");
  if (winner == "none"){
    declareWinner();
  if (winner != "none"){
  alert(winner);}}
}
