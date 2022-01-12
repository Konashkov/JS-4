let mark = Number(prompt("Input your first number"))
console.log(mark)
message = "Incorrect input"
if(mark>=1&&mark<=12){
    message = mark<6?"Don't pass":"Pass"
}
alert(message)