class Feed {
    constructor(data) {
        Object.assign(this, data)
    }

    /* setMatchStatus(bool){
        this.hasBeenLiked = bool
        this.hasBeenSwiped = true
    } */

    getRectionHtml(status) {
        return status
            ? `<img id="like" src="images/badge-like.png" alt="">`
            : `<img id="nope" src="images/badge-nope.png" alt="">`
    }
    getEndmassegeHtml(count) {
        return `
            <div class="endMessage">
                <h2>Yo, You loved ${count}</h2>
                <picture class="">
                    <img src="images/logo.png" alt="">
                </picture>
            </div>
        `
    }
    getFeedHtml() {
        const { name, avatar, age, bio } = this
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