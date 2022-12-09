const activityCardTemplate = document.querySelector("[activity-card-template]")
const activityCardContainer = document.querySelector("[activity-user-cards-container]")





fetch("/db.json")
.then(res => res.json())
.then(data => {
    data.forEach(activity  =>{
    const card = activityCardTemplate.textContent.cloneNode(true).children[0]
    const header = card.querySelector("[data-header]")
    const body = card.querySelector("[data-body]")
    header.textContent = activity
    body.textContent = "Type", type, "People:", participants, "Price", price, link
    activityCardContainer.append(card)
})

})