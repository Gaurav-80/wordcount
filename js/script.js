const charval = document.getElementById("textarea");
let totalCount = document.getElementById("total-counter");
let remainingCount = document.getElementById("remaining-counter");

let userChar = 0;

const udpateCounter = () => {
    userChar = charval.value.length;
   totalCount.innerText = userChar;
 remainingCount.innerText = 200 - userChar;
}; 
charval.addEventListener("keyup", () => udpateCounter());

//   copy text code

const copyText = () => {
    charval.select();
    charval.setSelectionRange(0, 9999);  // mobile version
navigator.clipboard.writeText(charval.value); //impotant
};