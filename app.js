/* API URL */

const API="https://innovatex-backend-production.up.railway.app"


/* AUTO GREETING */

setTimeout(()=>{

bot("Hi 👋 I am your InnovateX Internship AI Assistant. Ask me anything about internships.")

},800)



/* BOT MESSAGE */

function bot(text){

let chat=document.getElementById("chat")

let div=document.createElement("div")

div.className="bot"

div.innerText=text

chat.appendChild(div)

chat.scrollTop=chat.scrollHeight

}



/* USER MESSAGE */

function user(text){

let chat=document.getElementById("chat")

let div=document.createElement("div")

div.className="user"

div.innerText=text

chat.appendChild(div)

chat.scrollTop=chat.scrollHeight

}



/* SEND MESSAGE */

async function send(){

let msg=document.getElementById("msg").value.trim()

if(msg==="") return

user(msg)

document.getElementById("msg").value=""

/* typing animation */

let typing=document.createElement("div")
typing.className="bot"
typing.innerText="AI is typing..."
typing.id="typing"

document.getElementById("chat").appendChild(typing)

try{

let response = await fetch(API+"/ai-chat",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
question:msg
})
})

let data = await response.json()

let typingEl=document.getElementById("typing")
if(typingEl) typingEl.remove()

bot(data.answer || data.reply || "AI response unavailable")

}catch(error){

let typingEl=document.getElementById("typing")
if(typingEl) typingEl.remove()

bot("⚠️ AI server error. Please try again.")

}

}



/* ENTER KEY SEND */

document.getElementById("msg").addEventListener("keypress",function(e){

if(e.key==="Enter"){
send()
}

})



/* QUICK BUTTONS */

function sayHi(){

user("Hi")

sendAI("Hi")

}



function internship(){

user("I want internship")

sendAI("I want internship")

}



/* QUICK AI CALL */

async function sendAI(message){

let typing=document.createElement("div")
typing.className="bot"
typing.innerText="AI is typing..."
typing.id="typing"

document.getElementById("chat").appendChild(typing)

try{

let response = await fetch(API+"/ai-chat",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
question:message
})
})

let data = await response.json()

let typingEl=document.getElementById("typing")
if(typingEl) typingEl.remove()

bot(data.answer || data.reply)

}catch(error){

let typingEl=document.getElementById("typing")
if(typingEl) typingEl.remove()

bot("⚠️ AI server error.")

}

}



/* LOGOUT */

function logout(){

localStorage.removeItem("loggedUser")

window.location="login.html"

}