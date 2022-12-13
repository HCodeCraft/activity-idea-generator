
const form = document.getElementById('form') 

form.addEventListener("submit", (event) => {
event.preventDefault()

let actList;

fetch("db.json")
.then(res => res.json())
.then(data => {
    // console.log(data)
    // console.log("activity list", data.activities)
    // console.log(data.activities[0])
    // console.log(data.activities[0].activity)

    actList = data.activities

let resultBox = document.getElementsByClassName('card-box')
console.log("resultBox is working", resultBox)



let input = event.target[0].value
console.log("Input is working", input)

const list = document.getElementById('list')
console.log("list is working", list)






})


    








// //All art activities :D

//     let result = actList.filter(activity => activity.type == "Art");
//     console.log(result)
