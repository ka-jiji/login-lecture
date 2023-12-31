"use strict";

class UserStorage {

    static #users = {
        id: ["kim","lee","park"],
        psword: ["1234","12345","123456"],
        name: ["김","이","박"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        },{});
        return newUsers;
    }
    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users); // => ['id', 'psword', 'name']
        const userInfo = usersKeys.reduce((newUser, info) =>{
        newUser[info] = users[info][idx];
        return newUser;
        }, {});

        return userInfo;
    }
}

module.exports = UserStorage;