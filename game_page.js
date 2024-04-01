player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML =
  "Turno de Pergunta - " + player1_name;
document.getElementById("player_answer").innerHTML =
  "Turno de Resposta - " + player2_name;

function send() {
  get_word = document.getElementById("word").value;
  word = get_word.toLowerCase();
  console.log("palavra em letras minúsculas = " + word);

  if (word.length < 5) {
    console.log("por favor digite uma plavra com 5 ou mais letras");
    return (document.getElementById("msg-label").innerHTML =
      "por favor digite um palavra com 5 ou mais letras");
  }

  charAt1 = word.charAt(1);
  console.log(charAt1);

  length_divide_2 = Math.floor(word.length / 2);
  charAt2 = word.charAt(length_divide_2);
  console.log(charAt2);

  length_minus_1 = word.length - 1;
  charAt3 = word.charAt(length_minus_1);
  console.log(charAt3);

  remove_charAt1 = word.replace(charAt1, "_");
  remove_charAt2 = remove_charAt1.replace(charAt2, "_");
  remove_charAt3 = remove_charAt2.replace(charAt3, "_");
  console.log(remove_charAt3);

  question_word = "<h4 id= 'word_display'> p. " + remove_charAt3 + "</h4>";
  input_box = "<br>Resposta : <input type='text' id='input_check_box'>";
  check_button =
    "<br><br><button class='btn btn-info' onclick='check()'>Verificar</button>";
  row = question_word + input_box + check_button;
  document.getElementById("output").innerHTML = row;
  document.getElementById("word").value = "";
}
question_turn = "player1";
awnser_turn = "player2";
function check() {
  get_anwser = document.getElementById("input_check_box").value;
  anwser = get_anwser.toLowerCase();
  console.log("resposta: " + anwser)
  if (anwser == word) {
    if (anwser_turn == "player1") {
      player1_score = player1_score + 1;
      document.getElementById("player1_score").innerHTML = player1_score
    }
    else {
      player2_score = player2_score + 1;
      document.getElementById("player2_score").innerHTML = player2_score
    }
  }

  if (question_turn == "player1") {
    question_turn = "player2"
    document.getElementById("player_question").innerHTML = "turno de respostas-" + player2_name;
  }
  else {
    question_turn = "player1"
    document.getElementById("player_question").innerHTML = "turno de respostas-" + player1_name;
  }
  if (anwser_turn == "player1") {
    anwser_turn = "player2"
    document.getElementById("player_anwser").innerHTML = "turno de perguntas-" + player2_name;
  }
  else {
    anwser_turn = "player1"
    document.getElementById("player_anwser").innerHTML = "turno de perguntas-" + player1_name;
  }
  document.getElementById("output").innerHTML = " "
}
