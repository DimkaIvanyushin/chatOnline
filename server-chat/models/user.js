module.exports = class User {

    constructor(_name = '', _date = new Date(), _friends = []) {
        this.name = _name;
        this.friends = _friends;
        this.date = _date;
        this.online = false;
    }

    getUserName() {
        return this.name;
    }

    setUserName(name) {
        this.name = name;
    }

    setTimeConnect(date) {
        this.date = date;
    }

    getTimeConnect() {
        return this.date;
    }

    setStatusOffline() {
        this.online = false;
    }

    setStatusOnline() {
        this.online = true;
    }

    getStatus() {
        return this.online;
    }

    addFriend(user) {
        this.friends.push(user);
    }

    deleteFriend(user) {
        this.friends.splice(this.friends.map((e) => {
            return e.name;
        }).indexOf(user.name), 1);
    }

    getFriends() {
        return this.friends;
    }

}