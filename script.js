

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

let myTable = document.querySelector('#table');
let headers = ['Activity', 'Type', 'People', 'Price', 'Link', 'Id']

const randomBtn = document.querySelector('#random')



let actList;

let result;

form.addEventListener("submit", (event) => {
event.preventDefault()

fetch('db.json')
.then(res => res.json())
.then(data => {
    console.log(data)

    actList = data.activities

    let newActivityObj = {
        activity: event.target.aname.value,
        type: [type.value],
        participants: [participants.value],
        price: [price.value],
        link: event.target.link.value
       
    }
    const addObject = () => {
          fetch("http://localhost:3000/activities", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body:JSON.stringify(newActivityObj),
        });
      };
    

addObject()

})})





function buildTable(results){
    
    let table = document.createElement('table');
    let headerRow = document.createElement('tr');


    headers.forEach(indHeader =>{
        let header = document.createElement('th');
        let textNode = document.createTextNode(indHeader);
        header.appendChild(textNode);
        headerRow.appendChild(header);

    })

    table.appendChild(headerRow);

    console.log("Results", results)
    results.forEach(result => {
        let row = document.createElement('tr');
        console.log("Object Values for results", Object.values(results))


      
        Object.values(result).forEach(text => {
            let cell = document.createElement('td');
            let textNode = document.createTextNode(text);
            cell.appendChild(textNode);
            row.appendChild(cell);


        })

        table.appendChild(row);



    })

    myTable.appendChild(table);

}




document.addEventListener("DOMContentLoaded", (e) => {
    console.log("The DOM content has been loaded!")
    fetch('db.json')
.then(res => res.json())
.then(data => {
    

   let actList = data.activities


   randomBtn.addEventListener("click" , (event) => {

    let rndmNum = actList[actList.length * Math.random() || 0] 

    let table = document.createElement('table');
    let headerRow = document.createElement('tr');

    headers.forEach(indHeader =>{
        let header = document.createElement('th');
        let textNode = document.createTextNode(indHeader);
        header.appendChild(textNode);
        headerRow.appendChild(header);

    })

    table.appendChild(headerRow);

    let row = document.createElement('tr'); 
      

    
    Object.values(rndmNum).forEach(value => {

        let cell = document.createElement('td');
        let textNode = document.createTextNode(value);
        cell.appendChild(textNode);
        row.appendChild(cell);

    })



    table.appendChild(row);




myTable.appendChild(table);

})    






onePersonLink.addEventListener("click", (event) => {
console.log("onePersonLink", onePersonLink)
let oneResult = actList.filter(activity => activity.participants == "1");


buildTable(oneResult) 

})


twoPeopleLink.addEventListener("click", (event) => {

let twoResult = actList.filter(activity => activity.participants[0] == "2" || activity.participants[1] == "2");


buildTable(twoResult) 

})


threeLink.addEventListener("click", (event) => {
console.log("threeLink", threeLink)
let threeResult = actList.filter(activity => activity.participants[0] == "3" || activity.participants[1] == "3" || activity.participants[2]== "3");


buildTable(threeResult) 

})



relLink.addEventListener("click", (event) => {
console.log(event)
console.log("relLink", relLink)
let relResult = actList.filter(activity => activity.type[0] == "Relaxation" || activity.type[1]== "Relaxation");


buildTable(relResult) 

})




exLink.addEventListener("click", (event) => {
console.log("exLink", exLink)
let exResult = actList.filter(activity => activity.type[0] == "Excersize" || activity.type[1] == "Excersize");


buildTable(exResult) 

})




artLink.addEventListener("click", (event) => {
console.log("artLink", artLink)
let artResult = actList.filter(activity => activity.type[0]== "Art" || activity.type[1] == "Art");


buildTable(artResult) 

})




leaLink.addEventListener("click", (event) => {
console.log("leaLink", leaLink)
let leaResult = actList.filter(activity => activity.type[0] == "Learning" || activity.type[1] == "Learning");


buildTable(leaResult) 

})



entLink.addEventListener("click", (event) => {
console.log("entLink", entLink)
let entResult = actList.filter(activity => activity.type[0] == "Entertainment" || activity.type[1] == "Entertainment");


buildTable(entResult) 

})


orgLink.addEventListener("click", (event) => {
console.log("orgLink", orgLink)
let orgResult = actList.filter(activity => activity.type[0] == "Organizing" || activity.type[1] == "Organizing");


buildTable(orgResult) 

})




foodLink.addEventListener("click", (event) => {
console.log("foodLink", foodLink)
let foodResult = actList.filter(activity => activity.type[0] == "Food" || activity.type[1] == "Food");


buildTable(foodResult) 

})



shopLink.addEventListener("click", (event) => {
console.log("shopLink", shopLink)
let shopResult = actList.filter(activity => activity.type[0] == "Shopping" || activity.type[1] == "Shopping");


buildTable(shopResult) 

})



socialLink.addEventListener("click", (event) => {
console.log("socialLink", socialLink)
let shopResult = actList.filter(activity => activity.type[0] == "Social" || activity.type[1] == "Social");


buildTable(shopResult) 

})




varLink.addEventListener("click", (event) => {
console.log("varLink", varLink)
let varResult = actList.filter(activity => activity.price[0] == "Variable" || activity.price[1] == "Variable" || activity.price[2] == "Variable");


buildTable(varResult) 

})



freeLink.addEventListener("click", (event) => {
console.log("freeLink", freeLink)
let freeResult = actList.filter(activity => activity.price[0] == "Free" || activity.price[1] == "Free" || activity.price[2]== "Free");

console.log("freeResult", freeResult) 

buildTable(freeResult) 
})


lowLink.addEventListener("click", (event) => {
console.log("lowLink", lowLink)
let lowResult = actList.filter(activity => activity.price[0] == "Low" || activity.price[1] == "Low");

console.log("lowResult", lowResult) 

buildTable(lowResult) 

})



medLink.addEventListener("click", (event) => {

let medResult = actList.filter(activity => activity.price[0] == "Medium" || activity.price[1] == "Medium" || activity.price[2]== "Medium");



buildTable(medResult) 

})



expLink.addEventListener("click", (event) => {
console.log("expLink", expLink)
let expResult = actList.filter(activity => activity.price[0] == "Expensive" || activity.price[1] == "Expensive" || activity.price[2] == "Expensive" || activity.price[3] == "Expensive");


buildTable(expResult) 

})


})

})
