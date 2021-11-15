const readline = require('readline')

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

reader.question("Please enter a valid Password.", function(input){
    tokens = input.split(' ')


passWord = String(tokens[0])


  if (passWord.length < 10) {
  console.log("Password is not long enough")
}
  if (passWord.length >= 10) {
  console.log('This password is valid')
}

reader.close()


})





//Sources:
//https://www.w3schools.com/howto/howto_js_password_validation.asp















//https://www.youtube.com/watch?v=w6nQmCetNuQ