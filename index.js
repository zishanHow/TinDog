import dogs from './data.js'
import Feed from './feed.js'

const heartBtn = document.getElementById('heart')
const crossBtn = document.getElementById('cross')


let currentDogIndex = 0
let status;
let likeRection = []

let isWaiting = false

// getting new instance of dog! from feed class. 
function getNewDogs() {
    return new Feed(dogs[currentDogIndex])
}

// fucntion swipe to different dog!
function swipe() {
    if (!isWaiting) {
        isWaiting = true
        renderRection()
        currentDogIndex++

        setTimeout(() => {
            dog = getNewDogs()
            render()
            isWaiting = false
        }, 1000)
    }
}

//Formatting button clicks 
function buttonHandler(button, bool) {
    button.addEventListener("click", (e) => {
        if (currentDogIndex < dogs.length) {
            status = bool
            swipe()

            if (button === heartBtn) {
                likeRection.push(e.clientX)
            }
        } /* else {
            setTimeout(() => {
                location.reload(true)
            }, 1000)
        } */
    })
}

// giving buttonHandler parameter
buttonHandler(heartBtn, true)
buttonHandler(crossBtn, false)

// setting reaction LIKE or DISLIKE the dog.
function renderRection() {
    let rectionEl = document.querySelector(".reactions")

    rectionEl.innerHTML = dog.getRectionHtml(status) // status here as a argument
    setTimeout(() => {
        rectionEl.innerHTML = ""
    }, 500)
}

function render() {
    let feedEL = document.getElementById("feed")

    return currentDogIndex < dogs.length
        ? feedEL.innerHTML = dog.getFeedHtml()
        : feedEL.innerHTML = dog.getEndmassegeHtml(likeRection.length)
}

let dog = getNewDogs()
render()