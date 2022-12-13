
const form = document.getElementById('form') 

form.addEventListener("submit", (event) => {
event.preventDefault()


fetch("db.json")
.then(res => res.json())
.then(data => {
    // console.log(data)
    // console.log("activity list", data.activities)
    // console.log(data.activities[0])
    // console.log(data.activities[0].activity)

let resultBox = document.getElementsByClassName('card-box')
console.log("resultBox is working", resultBox)

let actList = data.activites

console.log("This is data.activities", data.activities)
console.log("This is actList", actList)

let input = event.target[0].value
console.log("Input is working", input)

const list = document.getElementById('list')
console.log("list is working", list)

function setList(results){

    for (const activity of results){
        // creating a li element for each result item
        const resultItem = document.createElement('li')

        // adding a class to each item of the results
        resultItem.classList.add('result-item')

        // grabbing the name of the current point of the loop and adding the name as the list item's text
        const text = document.createTextNode(actList[activity])

        // appending the text to the result item
        resultItem.appendChild(text)

        // appending the result item to the list
        list.appendChild(resultItem)
    }
}

console.log("actList is working", actList)



if (input && input.trim().length >0){

    value = input.trim().toLowerCase()

    setList(actList.filter(activity => {
        return activity.includes(value)}))

        console.log("The if/else statement is working")


} else {

    console.log("No results found :(")
}


})

})


    








// //All art activities :D

//     let result = actList.filter(activity => activity.type == "Art");
//     console.log(result)
