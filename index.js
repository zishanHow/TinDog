import dogs from './data.js'

class Feed {
    constructor(data){
        Object.assign(this, data)
    }

    getFeedHtml(){
        const {name, avatar, age, bio } = this
        return `
            <div class="feed-flex">
                <img class="feed-img" src="${avatar}" alt="">

                <div class="support-text">
                    <p class="date">${name}, ${age}</p>
                    <p class="caption">${bio}</p>
                </div>
            </div>
        `
    }
}
// end of class

function getNewTindogs(){
    const nextTindogs = dogs.shift()
    return nextTindogs ? new Feed(nextTindogs) : body
}

function newProfiles(){
    if(dogs.length > 0){
        tinDogs = getNewTindogs()
        render()
    } else {
        console.log("End of profiles")
    }
}

document.getElementById('decide-box-heart').addEventListener('click', newProfiles)
document.getElementById('decide-icons-cross').addEventListener('mouseover', function(){
    console.log("Hello world")
})

function render(){
    document.getElementById("feed").innerHTML = tinDogs.getFeedHtml() 
}

let tinDogs = getNewTindogs()

render()