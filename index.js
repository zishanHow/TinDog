import dogs from './data.js'
import Feed from './feed.js'

let currentDogIndex = 0
let currentDog = new Feed(dogs[currentDogIndex])

//document.getElementById('decide-box-heart').addEventListener('click', yes)
//document.getElementById('decide-icons-cross').addEventListener('click', yes)

render()

function render(){
    document.getElementById("feed").innerHTML = currentDog.getFeedHtml() 
}

function getNewDogs(){
    currentDogIndex +=1
    currentDog = new Feed(dogs[currentDogIndex])
    render()
}


document.addEventListener('click', (e)=>{
    if(e.target.dataset.heart){
        liked(e.target.dataset.heart)
    } else if(e.target.dataset.cross){
        nope(e.target.dataset.cross)
    }
})

function liked(like){
    currentDog.setMatchStatus(true)
    getNewDogs()
}

function nope(disLike){
    currentDog.hasBeenSwiped = true
    getNewDogs()
}



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