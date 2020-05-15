
class Users {
    constructor () {
        this.users = []
    }
    addUser (id, name, room) {
        var user = {id, name, room}
        this.users.push(user)
        return user
    }
    removeUser (id) {
        var user = this.getUser(id)
        if (user) {
            this.users = this.users.filter((el) => el.id !== id)
        }

        return user
    }
    getUser (id) {
        var user = this.users.filter((el) => el.id == id)
        return user   
    }
    getAllUsers () {
        return this.users
    }
    getUserList(room) {
        var users = this.users.filter((el) => el.room == room)
        var namesArray = users.map((el) => el.name)

        return  namesArray
    }
}


var KenStudents = new Users

KenStudents.addUser(1, 'Kwame', 43)
KenStudents.addUser(2, 'Kwesi', 43)
KenStudents.addUser(3, 'Kwamena', 43)
KenStudents.addUser(4, 'Kwame', 43)


var all = KenStudents.getAllUsers()
console.log(all)


// to use the class => {
//     module.exports = {Users}

// }
// then call it => const {Users} = require('./the path')  




//Javascript classes
// class Person {
//     constructor (name, age) {
//         this.name = name
//         this.age = age
//     }
//     getUserDescription () {
//         return `${this.name} is ${this.age} year(s) old`
//     }
// }

// var me = new Person('Kennedy', 20)
// var desc = me.getUserDescription()
// console.log(me.name)
// console.log(desc)

