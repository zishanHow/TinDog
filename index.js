import dogs from './data.js'
import Feed from './feed.js'

const likeBtn = document.getElementById('heart')
const nopeBtn = document.getElementById('cross')

let likeRection = []
let status;

let index = 0

// getting new instance of dog!
function getNewDogs(){
    return new Feed(dogs[index])
}

/* let currentDogIndex = 0
// getting new instance of dog!
let currentDog = new Feed(dogs[currentDogIndex])

function getNewDogs(){
    currentDogIndex +=1
    currentDog = new Feed(dogs[currentDogIndex])
    render()
} */

function swipe(){
    renderRection()
    index++

    dog = getNewDogs()
    render()
}


//Formatting button clicks 
function buttonHandler(button, boolean){
    button.addEventListener("click", (e)=>{
        if(index < dogs.length){
            status = boolean
            swipe()

            if(button === likeBtn){
                likeRection.push(e.clientX)
            }
        } else{
            location.reload(true)
        }
    })
}

buttonHandler(likeBtn, true)
buttonHandler(nopeBtn, false)



function renderRection(){
    let rectionEl = document.querySelector(".rections")
    
    rectionEl.innerHTML = dog.getRectionHtml(status)

    setTimeout( () => {
        rectionEl.innerHTML = ""
    },500)
}


function render(){
    let feedEL = document.querySelector('.feed')

    return index < dogs.length
    ? feedEL.innerHTML = dog.getFeedHtml()
    : feedEL.innerHTML = dog.getEndmassegeHtml(likeRection.length)


    // document.getElementById("feed").innerHTML = currentDog.getFeedHtml() 
}

let dog = getNewDogs()

render()















/* document.addEventListener('click', (e)=>{
    if(e.target.dataset.heart){
        liked(e.target.dataset.heart)
    } else if(e.target.dataset.cross){
        nope(e.target.dataset.cross)
    }
})

function liked(like){
    //index++
    getNewDogs()
}

function nope(disLike){
    console.log("dis liked")
}
 */







// before 

/* function getNewTindogs(){
    const nextTindogs = dogs.shift()
    return nextTindogs ? new Feed(nextTindogs) : {}
}
document.getElementById('decide-box-heart').addEventListener('click', newProfiles)

function newProfiles(){
    if(dogs.length > 0){
        tinDogs = getNewTindogs()
        render()
    } else {
        console.log("End of profiles")
    }
}

function yes(){
    getNewTindogs().setMatchStatus(true)
    newProfiles()
}
console.log( yes() )




function render(){
    document.getElementById("feed").innerHTML = tinDogs.getFeedHtml() 
}

let tinDogs = getNewTindogs()

render() */