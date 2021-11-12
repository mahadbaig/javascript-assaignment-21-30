// -------------- STRING METHOD -------------- //

//1

// var firstName = prompt ("Enter your first name")
// var lastName = prompt ("Enter your last name")
// var fullName = firstName + lastName
// console.log( fullName);

//2

// var phone = prompt ("What is your favourite phone")
// document.write ("Your favourite phone is ==> " + phone + "<br />Length of string ==> " + phone.length )

//3

// var pak = "Pakistani"
// document.write ("String: " + pak + "<br />Indec of 'n': " + pak.indexOf("n") )

//4

// var string = "Hello World"
// document.write ("String: " + string + "<br />Last Index of 'l': " + string.lastIndexOf("l") )

//5

// var pak = "PAKISTANI"
// document.write ("String: " + pak + "<br />Character at index 3: " + pak.charAt("3"))

//7

// var city = "Hyderabad"
// var replacement = city.replace("Hyder" , "Islam")
// document.write("City: " + city + " <br />After replacement: " + replacement)

//8

// var message = "Ali and Sami are best friends. They play cricket and football together."
// var updated = message.replace(/and/g ,  "&")
// document.write (updated)

//9

// var num = "472"
// var updated = Number(num)
// document.write ("Value: " + num )
// document.write ("<br/>Type: String " )
// document.write ("<br/>Value: " + updated )
// document.write ("<br/>Type: Number " )

//10

// var userinput = prompt ("Input anything")
// var capital = userinput.toUpperCase()
// document.write ("User Input: " + userinput + "<br />UpperCase: " + capital)

//12

// var num = 35.36;
// var updated = num.toString()
// document.write (updated.replace("." , ""));

//13

// var userinput = prompt("Enter your name")

// if (userinput = ("@ . , !")  ) {
//     alert ("Enter valid name")
// } else {
//     alert ("Successful")
// }


// -------------- MATH METHOD -------------- //

//1

// var userinput = +prompt ("Enter a positive Integer")
// var roundof = Math.round(userinput)
// var floorvalue = Math.floor(userinput)
// var ceilvalue = Math.ceil(userinput)
// document.write ("Number: " + userinput + "<br />Round Of: " + roundof + "<br />Floor Value: " + floorvalue + "<br />Ceil Value: " + ceilvalue)

//2

// var userinput = +prompt ("Enter a negative Integer")
// var roundof = Math.round(userinput)
// var floorvalue = Math.floor(userinput)
// var ceilvalue = Math.ceil(userinput)
// document.write ("Number: " + userinput + "<br />Round Of: " + roundof + "<br />Floor Value: " + floorvalue + "<br />Ceil Value: " + ceilvalue)


//3

// var userinput = +prompt ("Enter a Number")
// var absolute = Math.abs(userinput)
// document.write ("The absolute value of " + userinput + " is " + absolute)

//4

// var dice = Math.floor( Math.random()*6 + 1 )
// document.write("<h1>Random Dice Value: </h1>" + dice)

//5
// var toss = Math.floor(Math.random() *2 + 1)

// if (toss === 1) {
//     document.write ("<h1>Heads Win</h1>")
// } else {
//     document.write ("<h1>Tails Win</h1>")
    
// }

//6
// var randomnumber = Math.floor(Math.random() *100 + 1)
// document.write("Random Number between 1 & 100 ==> " + randomnumber)


//8
// var userinput = +prompt ("Enter a Number between 1 & 10")

// var randomnumber = Math.floor(Math.random() *10+1 )

// if (userinput === randomnumber) {
//     alert("Congratulations")
// } else {
//     alert("Try Again")
// }