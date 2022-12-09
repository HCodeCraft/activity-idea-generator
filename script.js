const activityCardTemplate = document.querySelector("[activity-card-template]")
const activityCardContainer = document.querySelector("[activity-user-cards-container]")
const searchInput = document.querySelector("[data-search]")

let things = []

searchInput.addEventListener("input", (e)=> {
    e.preventDefault
    const value = e.target.value
    console.log(things)


})





fetch("db.json")
.then(res => res.json())
.then(data => {
    console.log(data)
    //  things = data.map(activity  =>{
    // const card = activityCardTemplate.textContent.cloneNode(true).children[0]
    // const header = card.querySelector("[data-header]")
    // const body = card.querySelector("[data-body]")
    // header.textContent = activities.activity
    // body.textContent = "Type", activities.type, "People:", activities.participants, "Price", activities.price, activities.link
    // activityCardContainer.append(card)
    // return { activity: activities.activity, type:activities.type, participants: activities.participants[0], price:activities.price, link: activities.link}
// })

})