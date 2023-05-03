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

let word = [];

function titleCased(ntutorialstr=tutorials){
  const tstring = ntutorialstr.map(x => x.toString());
let ntstring = tstring.join(", ")
    //return ntstring;
 //console.log(ntstring);
 
 
 const titleCase = ntstring.split(" ").map(word1 =>{
        return word1.charAt(0).toUpperCase() + word1.slice(1);
            }).join (" ");
            
word = titleCase.split(", ");
return word;

//console.log(word);

  }
