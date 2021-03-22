let abase = 0
let bbase = 0
let hheight = 0

document.getElementById('button').addEventListener('click', multiplication)

function multiplication () {
  number2 = document.getElementById('input2').value
  number = document.getElementById('input').value
  number2 = parseInt(number2)
  number = parseInt(number)
  answer = number * number2
  document.getElementById('answer').innerHTML = answer
}
