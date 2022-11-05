import dogs from './data.js'
import Feed from './feed.js'

const likeBtn = document.getElementById('heart')
const nopeBtn = document.getElementById('cross')


let index = 0
let status;
let likeRection = []

let isWaiting = false

// getting new instance of dog! from feed class. 
function getNewDogs() {
    return new Feed(dogs[index])
}

// fucntion swipe to different dog!
function swipe() {
    if (!isWaiting) {
        renderRection()
        isWaiting = true
        index++

        setTimeout(() => {
            isWaiting = false
            dog = getNewDogs()
            render()
        }, 500)
    }
}

//Formatting button clicks 
function buttonHandler(button, boolean) {
    button.addEventListener("click", (e) => {
        if (index < dogs.length) {
            status = boolean
            swipe()

            if (button === likeBtn) {
                likeRection.push(e.clientX)
            }
        } else {
            location.reload(true)
        }
    })
}

buttonHandler(likeBtn, true)
buttonHandler(nopeBtn, false)

function renderRection() {
    let rectionEl = document.querySelector(".rections")

    rectionEl.innerHTML = dog.getRectionHtml(status)
    setTimeout(() => {
        rectionEl.innerHTML = ""
    }, 500)
}

function render() {
    let feedEL = document.querySelector('.feed')

    return index < dogs.length
        ? feedEL.innerHTML = dog.getFeedHtml()
        : feedEL.innerHTML = dog.getEndmassegeHtml(likeRection.length)
}

let dog = getNewDogs()
render()