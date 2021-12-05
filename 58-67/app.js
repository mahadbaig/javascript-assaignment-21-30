/// 1 ///


//i
var mainContent = document.getElementById("main-content");
var children = mainContent.childNodes;
console.log(children)

//ii
var render = document.getElementsByClassName("render")
console.log(render)

//iii
var firstname = document.getElementById("first-name")
firstname.value = "mahad"

//iv
var lastname = document.getElementById("last-name")
var email = document.getElementById("email")

//v
lastname.value = "baig"
email.value = "mahadmirza681@gmail.com"


///2///


//i
var formcontent = document.getElementById("form-content")
console.log(formcontent.nodeType)

//ii
console.log(lastname.nodeType)
console.log(lastname.childNodes)

//iii
childNew= document.createElement("p")
lastname.append(childNew)
console.log(lastname.childNodes)

//iv
console.log(mainContent.firstChild)
console.log(mainContent.lastChild)

//v
console.log(lastname.nextSibling)
console.log(lastname.previousSibling)

//vi
console.log(email.parentNode)
console.log(email.nodeType)