class Feed {
    constructor(data){
        Object.assign(this, data)
    }

    setMatchStatus(bool){
        this.hasBeenLiked = bool
        this.hasBeenSwiped = true
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

export default Feed