
const answer = ["tinurbo sa gate", 
"kanino ka lang?", 
"sakin ka lang ah?", 
"oum",
"sa'yo lang",
"oliver",
"ano pangalan ko?",
"estudyanteng late",
"dunk it",
"tinanggal ni kulot",
"ang lungkot ni lotlot"
]

const btn = document.getElementById("btn")

let decide = document.getElementById("decide")

let extend = document.getElementById("extend")

btn.addEventListener('click', function(){
  let decider = randomChose()
  decide.textContent = answer[decider]
})

function randomChose(){
  return Math.floor(Math.random() * answer.length)
}


