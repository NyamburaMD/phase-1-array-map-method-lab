const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased() {
  return tutorials.map((title) => {
    return title
      .split(" ")
      .map((word) => {
        const specialWords = {
          nan: "NaN",
          jsonp: "JSONP",
          api: "API",
          oo: "OO",
          stoppropagation: "StopPropagation",
          preventdefault: "PreventDefault",
          constructor: "Constructor" // Ensure "Constructor" remains unchanged
        };

        const lowerWord = word.toLowerCase();
        if (specialWords[lowerWord]) {
          return specialWords[lowerWord];
        }

        return word[0].toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(" ");
  });
}

console.log(titleCased());
