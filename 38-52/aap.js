// ----------------------- 38-44 -----------------------

//1

// var leapYears = ["2020 , 2016 , 2012 , 2008 , 2004 , 2000 , 1996 , 1992 , 1988 , 1984 , 1980"]

// function leapYearCheck() {

//     var input = document.getElementById("myinput")

    
//     if (input == leapYears) {
//         var bornInleap = "You were born in leap year"
//         document.write(bornInleap)
//     } else {
//         var notinleap = "You were not born in leap year"
//         document.write(notinleap)
//     }
    



//3

// var a = 50
// var b = 20
// var c = 40
// var s = (a+b+c) / 2

// function valueS(){
//     document.write (s)
// }

// function area(){
//     var s = (a+b+c) / 2
//     var areaFormula  = (s-a)(s-b)(s-c)
//     // var area = areaFormula
//     document.write(areaFormula)
// }

//4

// ----------------------- EVENTS -----------------------

/* 1
function alertBox (){
    alert("Congrats")
} */

/*2
function thankyou(){
    alert ("THANK YOU PURCHASING")
}*/


//3

// function deleteRow(){
//     var deleteTr = document.getElementById("deleteTr")
//     deleteTr.className = "delete"   
    
// }

// function deleteRow2() {
//     var deleteTr2 = document.getElementById("deleteTr2")
//     deleteTr2.className = "delete"
// }

// function deleteRow3() {
//     var deleteTr3 = document.getElementById("deleteTr3")
//     deleteTr3.className = "delete"
// }

// function deleteRow4() {
//     var deleteTr4 = document.getElementById("deleteTr4")
//     deleteTr4.className = "delete"
// }

//4
// function mouseOver() {
//     var myImg = document.getElementById("myImg")
//     myImg.src = "./images/myImg2.jpg"

// }

// function mouseOut() {
//     var myImg = document.getElementById("myImg")
//     myImg.src = "./images/myImg1.jpg"

// }


//5
// function increase() {
//     var mainCounter = document.getElementById("mainCounter")
//     mainCounter = 0

//     for (let i = 0; i < 10; i++) {
//         mainCounter = i
//         console.log(mainCounter);
        
//     }
// }

// function decrease() {
//     var mainCounter = document.getElementById("mainCounter")
//     mainCounter = 0

//     for (let i = 10; i > 0; i--) {
//         mainCounter = i
//         console.log(mainCounter);
        
//     }
// }

// ----------------------- 49-52 -----------------------

//1
// function submit(){
//     var inputName = document.getElementById("inputName")
//     var inputPassword = document.getElementById("inputPassword")
//     // console.log(inputName.value);
//     // console.log(inputPassword.value);
//     document.write("Username: " +  inputName.value + "<br/>")
//     document.write("Password: " +  inputPassword.value)
// }


//2
// var longPara = "He'll live. I asked to see you in order to... clear the air. There are uh, some... issues that could cause a misunderstanding between us and I think it's in our best interest to lay the cards on the table. My brother-in-law, moments before he was attacked, someone called to warn him. I believe that same person was protecting me. Those two men, the assassins. I believe I was their prime target, but that somehow they were steered away from me to my brother-in-law. Because of this 'intervention' I am alive. And yet, I think that this person was playing a much deeper game. He made that phone call because he wanted a shootout not a silent assassination. In one stroke, he bloodied both sides - set the American and Mexican governments against the Cartel, and cut off the supply of methamphetamine to the southwest. If this man had his own source of product on this side of the border, he would have the market to himself. The rewards would be... enormous. We're both adults. I can't pretend I don't know that person is you. I want there to be no confusion. I know I owe you my life. And more than that, I respect the strategy. In your position, I would have done the same. One issue, which troubles me, I don't know what happens when our three-month contract ends. You know why I do this. I want security for my family."


// console.log(shortPara);

// function readMore() {
//     var shortPara = document.getElementById("shortPara")
//     console.log(shortPara.innerHTML);
//     shortPara.innerHTML = longPara
// }
