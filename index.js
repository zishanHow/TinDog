import dogs from './data.js'
import Feed from './feed.js'

const likeBtn = document.getElementById('heart')
const nopeBtn = document.getElementById('cross')


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
        renderRection()
        isWaiting = true
        currentDogIndex++

        setTimeout(() => {
            dog = getNewDogs()
            render()
            isWaiting = false
        }, 500)
    }
}

//Formatting button clicks 
function buttonHandler(button, boolean) {
    button.addEventListener("click", (e) => {
        if (currentDogIndex < dogs.length) {
            status = boolean
            swipe()

            if (button === likeBtn) {
                likeRection.push(e.clientX)
            }
        } else {
            setTimeout(()=>{
                location.reload(true)
            }, 1000)
        }
    })
}

buttonHandler(likeBtn, true)
buttonHandler(nopeBtn, false)

function renderRection() {
    let rectionEl = document.querySelector(".reactions")

    rectionEl.innerHTML = dog.getRectionHtml(status)
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