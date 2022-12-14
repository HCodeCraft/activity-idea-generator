
const form = document.getElementById('form') 

let aname = document.getElementById('aname')
let link = document.getElementById('link')
let type = document.getElementById('actType')
let participants = document.getElementById('participants')
let price = document.getElementById('price')

const onePersonLink = document.querySelector('.one');
const twoPeopleLink = document.querySelector('.two')
const threeLink = document.querySelector('.three')
const expLink = document.querySelector('.expensive')
const medLink = document.querySelector('.medium')
const lowLink = document.querySelector('.low')
const freeLink = document.querySelector('.free')
const varLink = document.querySelector('.variable')
const socialLink = document.querySelector('.social')

const shopLink = document.querySelector('.shopping')
const foodLink = document.querySelector('.food')
const orgLink = document.querySelector('.organizing')
const entLink = document.querySelector('.entertainment')
const leaLink = document.querySelector('.learning')
const artLink = document.querySelector('.art')
const exLink = document.querySelector('.excersize')
const relLink = document.querySelector('.relaxation')



let actList;

let result;

function addNewActivity(newActivityObj){


    fetch('db.json', {
        method: 'POST',
        headers: {
            'Accept' : 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(newActivityObj)
        
    })
    // .then(res => res.json())
    // .then(activity => console.log("This is the activity", activity))

} 


form.addEventListener("submit", (event) => {
event.preventDefault()

fetch('db.json')
.then(res => res.json())
.then(data => {
    console.log(data)
    // console.log("activity list", data.activities)
    // console.log(data.activities[0])
    // console.log(data.activities[0].activity)

    actList = data.activities

    let newActivityObj = {
        activity: event.target.aname.value,
        type: [type.value],
        participants: [participants.value],
        price: [price.value],
        link: event.target.link.value ,
       
    }

    // addNewActivity(newActivityObj) Not working :(



})})


function buildCard(results){

    for (const activity of results){
        const resultItem = document.createElement('p')
        resultItem.classList.add('result-item')
        const text = document.createTextNode(activity.activity, activity.type, activity.participants, activity.price, activity.link)
        resultItem.appendChild(text)
        list.appendChild(resultItem)
    } 
    if (results.length ===0){
        console.log("No results!!")
    }

}

document.addEventListener("DOMContentLoaded", (e) => {
    console.log("The DOM content has been loaded!")
    fetch('db.json')
.then(res => res.json())
.then(data => {
    

   let actList = data.activities
    // 1 person
console.log("onePersonLink", onePersonLink)
onePersonLink.addEventListener("click", (event) => {
console.log("onePersonLink", onePersonLink)
let oneResult = actList.filter(activity => activity.participants == "1");

console.log("result", oneResult) // Working

buildCard(oneResult) // not working

}) }) 

//2 people


document.addEventListener("click", (event) => {
console.log("twoPeopleLink", twoPeopleLink)
let twoResult = actList.filter(activity => activity.participants == "2");

console.log("result", twoResult) // Working

buildCard(twoResult) // not working

})
// 3 people

threeLink.addEventListener("click", (event) => {
console.log("threeLink", threeLink)
let Result = actList.filter(activity => activity.participants == "3");

console.log("threeResult", threeResult) // Working

buildCard(threeResult) // not working

})

// Relaxation

relLink.addEventListener("click", (event) => {
console.log("relLink", relLink)
let relResult = actList.filter(activity => activity.type == "relaxation");

console.log("result", relResult) // Working

buildCard(relResult) // not working

})

// Excersize


exLink.addEventListener("click", (event) => {
console.log("exLink", exLink)
let Result = actList.filter(activity => activity.type == "Excersize");

console.log("exResult", exResult) // Working

buildCard(exResult) // not working

})

// Art


artLink.addEventListener("click", (event) => {
console.log("artLink", artLink)
let Result = actList.filter(activity => activity.type== "Art");

console.log("artResult", artResult) // Working

buildCard(artResult) // not working

})

// Learning


leaLink.addEventListener("click", (event) => {
console.log("leaLink", leaLink)
let leaResult = actList.filter(activity => activity.type == "Learning");

console.log("leaResult", leaResult) // Working

buildCard(leaResult) // not working

})

// Entertainment

entLink.addEventListener("click", (event) => {
console.log("entLink", entLink)
let entResult = actList.filter(activity => activity.type == "Entertainment");

console.log("entResult", entResult) // Working

buildCard(entResult) // not working

})

// Organizing 

orgLink.addEventListener("click", (event) => {
console.log("orgLink", orgLink)
let orgResult = actList.filter(activity => activity.type == "Organizing");

console.log("orgResult", orgResult) // Working

buildCard(orgResult) // not working

})

// Food


foodLink.addEventListener("click", (event) => {
console.log("foodLink", foodLink)
let foodResult = actList.filter(activity => activity.type == "Food");

console.log("foodResult", foodResult) // Working

buildCard(foodResult) // not working

})

// Shopping

shopLink.addEventListener("click", (event) => {
console.log("shopLink", shopLink)
let Result = actList.filter(activity => activity.type == "Shopping");

console.log("shopResult", shopResult) // Working

buildCard(shopResult) // not working

})

// Social


socialLink.addEventListener("click", (event) => {
console.log("socialLink", socialLink)
let socialResult = actList.filter(activity => activity.type == "Social");

console.log("socialResult", socialResult) // Working

buildCard(socialResult) // not working

})

// Variable


varLink.addEventListener("click", (event) => {
console.log("varLink", varLink)
let varResult = actList.filter(activity => activity.price == "Variable");

console.log("varResult", varResult) // Working

buildCard(varResult) // not working

})

// Free

freeLink.addEventListener("click", (event) => {
console.log("Link", Link)
let Result = actList.filter(activity => activity.price == "");

console.log("result", twoResult) // Working

buildCard(Result) // not working

})

// Low

lowLink.addEventListener("click", (event) => {
console.log("Link", Link)
let Result = actList.filter(activity => activity.price == "");

console.log("result", twoResult) // Working

buildCard(Result) // not working

})

// Medium

medLink.addEventListener("click", (event) => {
console.log("Link", Link)
let Result = actList.filter(activity => activity.price == "");

console.log("result", twoResult) // Working

buildCard(Result) // not working

})

// Expensive

expLink.addEventListener("click", (event) => {
console.log("Link", Link)
let Result = actList.filter(activity => activity.price == "");

console.log("result", twoResult) // Working

buildCard(Result) // not working

})


})












 



    








// // //All art activities :D

// //     let result = actList.filter(activity => activity.type == "Art");
// //     console.log(result)
