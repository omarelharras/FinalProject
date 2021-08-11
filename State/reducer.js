import { getUsers } from "./actions";
import { validateData } from "./actions";

const IntialState = {
    Users: [],
    validData: 0
}

const reducerFunction = (state = IntialState, action) => {
    switch (action.type) {
        case getUsers:
            return { ...state, Users: action.payload };
        case validateData: {
            var IsDataValid = 0;
            var EmailIndex = -1;

            for (let i = 0; i < Users.length; i++) {
                if (Users[i].Email == action.payload.Email)
                    EmailIndex = i;
            }
            if (EmailIndex != -1) {
                if (Users[EmailIndex].Password == action.payload.Password)
                    IsDataValid = 1;
            }
            return { ...state, validData: IsDataValid };
        }
        default:
            return (state);
    }
}

export default reducerFunction;