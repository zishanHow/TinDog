# TinDog
 tinder for dogs!

see it Live: https://zishanhow.github.io/TinDog/

# About me
Hi, my name is Zishan! currently, I'm learning javaScript.
This is part of mine javaScript learning project. where i have practive js class and, new way moveing over array of items, i showing a spesefic image if the button is clicked, and also i use clientX.


## key Feature. what have i learn 

**javascript class**
```
class Feed {
    constructor(data) {
        Object.assign(this, data)
    }

    getRectionHtml(status) {
        return status
            ? `<img id="like" src="images/badge-like.png" alt="">`
            : `<img id="nope" src="images/badge-nope.png" alt="">`
    }

    getFeedHtml() {
        const { name, avatar, age, bio } = this
        return `
            <img class="feed-img" src="${avatar}" alt="">
            <div class="about-dog">
                <p class="date">${name}, ${age}</p>
                <p class="caption">${bio}</p>
            </div>
        `
    }
    getEndmassegeHtml(count) {
        return `
            <div class="end-message">
                <p>Hey you reach the end of dogs in your <span>Area</span>😥</p>
                <p>You have ❤️ ( ${count} ), Dogs!</p>
                <a href="index.html"><img src="images/logo.png" alt=""></a>
            </div>
        `
    }
}
```

**new way moveing over array of items**
```
let currentDogIndex = 0
// getting new instance of dog! from feed class. and from the dogs array.
function getNewDogs() {
    return new Feed(dogs[currentDogIndex])
}
```

**showing a spesefic image if the button is clicked**
```
// setting reaction LIKE or DISLIKE the dog.
function renderRection() {
    let rectionEl = document.querySelector(".reactions")

    rectionEl.innerHTML = dog.getRectionHtml(status) // status here as a argument
    setTimeout(() => {
        rectionEl.innerHTML = ""  // clear the reaction after specific time.
    }, 500)
}
```

**clientX and cliendY**
*i haven't understand how it fully work*

**Object.assign() _Method_**
*copies the values (of all enumerable own properties) from one or more **source** objects to a **target** object.*

