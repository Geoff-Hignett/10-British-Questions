$(document).ready(function () {
});
// Store questions and answers in array
const quiz = [
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
  { question: "Jesy Nelson and Jade Thirwell are members of which band?", answer: "Little Mix" },
  { question: "John Paul Jones and John Bonham were members of which band?", answer: "Led Zeppelin" },
  { question: "Thom Yorke and Colin Greenwood are members of which band?", answer: "Radiohead" },
  { question: "Who presented a 2017 revival of The Price is Right ?", answer: "Alan Carr" },
  { question: "Which Loose Women panelist has their own show on BBC Radio Scotland?", answer: "Kaye Adams" },
  { question: "Which tabloid ended its Page 3 feature in 2015?", answer: "The Sun" },
  { question: "What surname did Ronnie and Roxy share in Eastenders?", answer: "Mitchell" },
  { question: "Eric Pollard and Lisa Dingle are characters in which soap?", answer: "Emmerdale" },
  { question: "Which TV judge shakes contestants' hands after eating food he heavily approves of?", answer: "Paul Hollywood" },
  { question: "What soap opera is Rita Tanner a character in?", answer: "Coronation Street" },
  { question: "Which footballer was Cheryl married to?", answer: "Ashley Cole" },
  { question: "The UK is found in which continent?", answer: "Europe" },
  { question: "What is the highest mountain in England called?", answer: "Scafell Pike" },
  { question: "Which river is the longest in Wales?", answer: "Tywi" },
  { question: "What is the term for a non-magical person in Harry Potter?", answer: "Muggle" },
  { question: "What carbohydrate is traditionally eaten with fish in Britain? (plural)", answer: "Chips" },
  { question: "What is another word for \"banger\" in \"bangers and mash\"?", answer: "Sausage" },
  { question: "What five-letter word is the currency of Britain?", answer: "Pound" },
  { question: "How many British monarchs were crowned in the 19th century? (use digit)", answer: "3" },
  { question: "Which British physicist appeared on The Big Bang Theory?", answer: "Stephen Hawking" },
  { question: "Benedict Cumberbatch played which World War II cryptanalyst in a 2014 film?", answer: "Alan Turing" },
  { question: "Who wrote \"The Selfish Gene\" (1976)?", answer: "Richard Dawkins" },
  { question: "What is the name of the BBC children's news programme started in 1972?", answer: "Newsround" },
  { question: "Which Harry Potter actress has won 3 Olivier Awards for Best Actress in a Musical?", answer: "Imelda Staunton" },
  { question: "Which former Strictly Come Dancing contestant is married to Billy Connolly?", answer: "Pamela Stevenson" },
  { question: "Which New Labour Prime Minister followed \"Third Way\" economic programmes?", answer: "Tony Blair" },
  { question: "What country was Edward VIII in when he died?", answer: "France" },
  { question: "Which Australian city shares its name with a former queen consort of the UK?", answer: "Adelaide" },
  { question: "Mr Jaggers is a prominent lawyer in which Dickens novel?", answer: "Great Expectations" },
  { question: "Whose debut novel \"White Teeth\" became a best seller?", answer: "Zadie Smith" },
  { question: "Which Victorian novelist married Emma Gifford in 1874?", answer: "Thomas Hardy" },
  { question: "Which English writer was played by Nicole Kidman in The Hours?", answer: "Virginia Woolf" },
  { question: "Which Scottish soup is made of smoked haddock, potato and onion?", answer: "Cullen skink" },
  { question: "What is the name for a winery that produces meads?", answer: "meadery" },
  { question: "Which Oliver Twist character shares their name with a defunct garage duo? (2 words)", answer: "Artful Dodger" }
];

const questionCount = 10;
let answerBank = [];

window.onload = function () {
  let str = "<h1>10 British Questions</h1>";
  // Generate quiz
  for (let i = 0; i < questionCount; i++) {
    // Randomize question selection
    let rand = Math.floor(Math.random() * quiz.length);
    // Store used questions in new array to locate answers
    answerBank.push(quiz[rand].answer);
    str += '<div class="questions">' + (i + 1) + " " +
      quiz[rand].question + "<br>" + '<input type="text" id="r'
      + i + '">' + "<br>" + '</div>';
    // Remove used questions to avoid duplicates
    quiz.splice(rand, 1);
  }
  str += '<h3 id="summary"></h3>';
  str += '<br><INPUT value="CHECK SCORE" id="results" type="button" onclick="getScore()">';
  str += '<br><INPUT value="CHANGE QUESTIONS" id="reload" type="button" onclick="test()">';
  str += '<h2 id="score"></h2>';

  document.getElementById("questionsContainer").innerHTML = str;
}

function getScore() {
  let correct, given, advice;
  let sum = 0;
  const total = questionCount;
  // Collect given answers
  const sel = document.getElementById("questionsContainer").getElementsByTagName("input");

  for (let i = 0; i < sel.length - 2; i++) {
    // Compare given answers with answer bank array
    correct = answerBank[i];
    given = sel[i].value;
    if (!given || given.toLowerCase() !== correct.toLowerCase()) {
      // Highlight incorrect answers
      $(sel[i]).addClass("incorrect");
      // Show correct answers instead of the attempted incorrect answers
      $(sel[i]).val(correct);

    }
    if (given && correct) {
      if (correct.toLowerCase() == given.toLowerCase()) {
        sum++;
        // Highlight correct answers
        $(sel[i]).addClass("correct");
      }
    }
  }
  // Assign grade
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
  // Show results
  document.getElementById("score").innerHTML = ((sum / total) * 100).toFixed(0) + "%";
  document.getElementById("summary").innerHTML = advice;
  // Disable results button
  $("#results").attr("disabled", "disabled");
  // Realign change questions button
  const changeButton = document.getElementById("reload");
  $(changeButton).addClass("realign");

}
function test() {
  location.reload();
}


















