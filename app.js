import {users} from "./data.js";
const findUserById = (id) => {
    const user = users.find(user => user.id === id); 
    if(!user)
    {
        return "Error: User not found";
    }
    return `${user.id}, ${user.name}, ${user.occupation}`;
};

console.log(findUserById(1)); // { id: 1, name: "Ava Coleman", occupation: "Principal" }
console.log(findUserById(4)); // { error: "User not found" }