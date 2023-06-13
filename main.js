const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("search-btn");
let inputWord = document.getElementById("inp-word");

// inputWord.addEventListener("keyup", () => {
//     let inpWord = document.getElementById("inp-word");
//     console.log(inpWord.value);
// })

inputWord.addEventListener("keyup", efrem => {
    if(efrem.key === "Enter" && efrem.target.value) {
        console.log(efrem.target.value);
    }
})