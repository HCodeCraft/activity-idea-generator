"use strict";



fetch("db.json")
.then(res => res.json())
.then(data => {
    console.log(data)
    console.log("activity list", data.activities)
    console.log(data.activities[0])
    console.log(data.activities[0].activity)

    const actList= data.activities

    //All art activities :D
    let result = actList.filter(activity => activity.type == "Art");
    console.log(result)



})


