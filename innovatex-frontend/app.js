// ===============================
// InnovateX Backend Demo Script
// ===============================

const API = "https://innovatex-backend-production.up.railway.app";


// -------------------------------
// 1️⃣ AI CHAT
// -------------------------------

async function demoAI(){

const res = await fetch(API + "/ai-chat",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
question:"How can I get AI internship?"
})
});

const data = await res.json();

console.log("AI Response:", data.answer);

return data.answer;

}



// -------------------------------
// 2️⃣ SKILL DETECTION
// -------------------------------

async function demoSkills(resumeText){

const res = await fetch(API + "/extract-skills",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
resume_text: resumeText
})
});

const data = await res.json();

console.log("Detected Skills:", data.skills);

return data.skills;

}



// -------------------------------
// 3️⃣ RESUME SCORE
// -------------------------------

async function demoScore(resumeText){

const res = await fetch(API + "/resume-score",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
resume_text: resumeText
})
});

const data = await res.json();

console.log("Resume Score:", data.resume_score);

return data.resume_score;

}



// -------------------------------
// 4️⃣ INTERNSHIP RECOMMENDATION
// -------------------------------

async function demoInternships(skills){

const res = await fetch(API + "/recommend-internships",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
skills: skills
})
});

const data = await res.json();

console.log("Recommended Internships:", data);

return data;

}



// -------------------------------
// ⭐ FULL BACKEND WORKFLOW DEMO
// -------------------------------

async function runFullDemo(){

console.log("===== InnovateX Backend Demo =====");


// AI CHAT

await demoAI();


// DEMO RESUME TEXT

let resumeText = `
Python Flask SQL Machine Learning
Built AI project using Python
Experience with HTML CSS Git
`;


// SKILL DETECTION

let skills = await demoSkills(resumeText);


// RESUME SCORE

await demoScore(resumeText);


// INTERNSHIP MATCH

await demoInternships(skills);

console.log("===== Demo Completed =====");

}