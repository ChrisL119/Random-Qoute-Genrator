const quotes = [
  {
    quote: "The Hardest Choices Require The Strongest Wills.",
    source: "Thanos",
    citation: "Avengers-infinity",
    year: "2018",
    tags: "thanos",
    timeline: "2017-2018",
  },

  {
    quote:
      "The death of one man is a tragedy. The death of millions is a statistic. ",
    source: "Joseph Stalin",
  },

  {
    quote:
      "Your world as you knew it is gone. How far would you go to bring it back?",
    source: "Captian Price",
  },

  {
    quote: "The Hardest Choices Require The Strongest Wills.",
    source: "Thanos",
  },
];
function getRandomQuote() {
  let range = quotes.length;
  console.log(range);

  let randomNum = Math.random(Math.random() * range);
  console.log(randomNum);

  let getRandomQuote = quotes[randomNum];
  return RandomQuote;
}

function printQuote() {
  let printedQuote = getRandomQuote();
  let quoteProperty = printedQuote.quote;
  let sourceProperty = printedQuote.source;
  let citationProperty = printedQuote.citation;
  let yearProperty = printedQuote.year;

  if (printedQuote.hasOwnProperty("citation")) {
    htmlString += <span class="citation"> ${citationPrerty}</span>;
  }
  if (printedQuote.hasOwnProperty("year")) {
    htmlString += <span class="year"> ${yearProperty}</span>;
  }
}

printQuote();

document.getElementById("load-quote").addEventListener("click", printQuote);

