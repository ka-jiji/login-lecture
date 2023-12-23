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
}

module.exports = UserStorage;