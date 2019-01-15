$(document).ready(function () {

});

const quiz = [
  { question: "What is the county town of Cornwall?", answer: "Truro" },
  { question: "What is the county town of Cumberland?", answer: "Carlisle" },
  { question: "What is the county town of Essex?", answer: "Chelmsford" },
  { question: "What is the county town of Shropshire?", answer: "Shrewsbury" },
  { question: "What is the county town of Hampshire?", answer: "Winchester" },
  { question: "What is the county town of Berkshire?", answer: "Reading" },
  { question: "What is the county town of Buckinghamshire?", answer: "Aylesbury" },
  { question: "What is the county town of Devon?", answer: "Exeter" },
  { question: "What is the county town of Kent?", answer: "Maidstone" },
  { question: "What is the county town of Northumberland?", answer: "Alnwick" },
  { question: "What is the county town of Rutland?", answer: "Oakham" },
  { question: "What is the county town of Somerset?", answer: "Taunton" },
  { question: "What is the county town of Suffolk?", answer: "Ipswitch" },
  { question: "What is the county town of Surrey?", answer: "Guildford" },
  { question: "What is the county town of Wiltshire?", answer: "Trowbridge" },
  { question: "What is the county town of Surrey?", answer: "Guildford" },
  { question: "What year was the Battle of Agincourt?", answer: "1415" },
  { question: "What year did the First World War begin?", answer: "1914" },
  { question: "What year did the Second World War begin?", answer: "1939" },
  { question: "What year did the First World War end?", answer: "1918" },
  { question: "What year did the Second World War end?", answer: "1945" },
  { question: "What is the first name of The Rolling Stones\' lead singer?", answer: "Mick" },
  { question: "What is the first name of the Beatles\' drummer?", answer: "Ringo" },
  { question: "What is the surname of Queen\'s lead guitarist?", answer: "May" },
  { question: "What was the surname of Pink Floyd\'s founding lead singer?", answer: "Barrett" },
  { question: "What is the first name of Coldplay\'s lead singer?", answer: "Chris" },
  { question: "What metal precedes \"maiden\" to form the name of an English band?", answer: "Iron" },
  { question: "Who released an album called \"21\"?", answer: "Adele" },
  { question: "What name is tied with \"Henry\" for the highest number of British monarchs?", answer: "Edward" },
  { question: "What was the most common first name of Henry VIII\'s wives?", answer: "Catherine" },
  { question: "What year did Steven Gerrard win the UEFA champions league?", answer: "2005" },
  { question: "What year did England win the FIFA World Cup?", answer: "1966" },
  { question: "What year did Denise Lewis win an olympic gold medal?", answer: "2000" },
  { question: "What year did Andy Murray win his first Wimbledon?", answer: "2013" },
  { question: "What year did Virginia Wade win Wimbledon?", answer: "1977" },
  { question: "What year did Jonathan Edwards break two triple jump records in consecutive jumps?", answer: "1995" },
  { question: "What year did David Beckham score from the halfway line?", answer: "1996" },
  { question: "What British oil and gas giant has its headquarters in the Netherlands?", answer: "Shell" },
  { question: "What British bank was founded by Sir Thomas Sutherland in British Hong Kong?", answer: "HSBC" },
  { question: "What year did Eric Liddel win an olympic gold medal?", answer: "1924" },
];

const questionCount = 10;
let answerBank = [];

window.onload = function () {
  let str = "<h1>10 British Questions</h1>";
  for (let i = 0; i < questionCount; i++) {
    let rand = Math.floor(Math.random() * quiz.length);
    answerBank.push(quiz[rand].answer);
    str += '<div class="questions">' + (i + 1) + " " +
      quiz[rand].question + "<br>" + '<input type="text" id="r'
      + i + '">' + "<br>" + '</div>';
    quiz.splice(rand, 1);
  }
  str += '<br><INPUT value="CHECK SCORE" type="button" onclick="getScore()">';
  str += '<INPUT id="score" type="text" size="8">';
  str += '<h3 id="summary"></h3>';
  document.getElementById("questionsContainer").innerHTML = str;
}

function getScore() {
  let correct, given, advice;
  let sum = 0;
  const total = questionCount;
  const sel = document.getElementById("questionsContainer").getElementsByTagName("input");

  for (let i = 0; i < sel.length - 2; i++) {
    correct = answerBank[i];
    given = sel[i].value;
    if (!given || given.toLowerCase() !== correct.toLowerCase()) {
      $(sel[i]).addClass("incorrect");

    }
    if (given && correct) {
      if (correct.toLowerCase() == given.toLowerCase()) {
        sum++;
        $(sel[i]).addClass("correct");
      }
    }

  }
  if (sum < 4) {
    advice = "You should study more.";
  }
  if (sum > 3 && sum < 7) {
    advice = "A respectable effort. Some room for improvement."
  }
  if (sum > 6 && sum < 10) {
    advice = "A very good score."
  }
  if (sum == 10) {
    advice = "What can one say? You are a genius."
  }
  document.getElementById("score").value = ((sum / total) * 100).toFixed(0) + "%";
  document.getElementById("summary").innerHTML = advice;
}


















