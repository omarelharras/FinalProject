import { getUsers } from "./actions";
import { validateData } from "./actions";

const Users = [];
export function HandleGetUsers() {
    fetch('http://localhost:3000/Users')
        .then((response) => {
            Users = response.json();
        })
    return {
        type: getUsers,
        payload: Users
    }
};

export const HandleValidateData = (Email, Password) => {

    return {
        type: validateData,
        payload: { Email, Password }
    }
};