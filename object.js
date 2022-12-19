var quoteSource = [{ 
    quote: "Start by doing what's necessary; thendo what's possible; andsuddenly you are doing the impossible.",
    name:"Francis of Assisi"
},
{
    quote:"Believe you can and you're halfway there.",
    name:"Theodore Roosevelt"
},
{
    quote:"It does not matter how slowly you go aslong as you do not stop.",
    name:"Confucius"
},
{
    quote:"Our greatest weakness lies in giving up.The most certain way tosucceed is always to try just one more time.",
    name:"Thomas A. Edison"
},
{
    quote:"The will to win, the desire to succeed,the urge to reach your fullpotential... these are the keys that will unlock the door to personalexcellence.",
    name:"Confucius"
}
];
const quoteButton = document.getElementById('quoteButton');
function myfunction(){
    
    //getting a new random number to attach to a quote and setting a limit
    var sourceLength = quoteSource.length;
    var randomNumber = Math.floor(Math.random() * sourceLength);
    //set a new quote
    var newQuoteText = quoteSource[randomNumber].quote;
    var newQuoteGenius = quoteSource[randomNumber].name;
    var quoteContainer = document.getElementById('quoteContainer');
    quoteContainer.innerHTML =`<p>${newQuoteText}</p><p id="quoteGenius">-${newQuoteGenius}</p> `;
};
