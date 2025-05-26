import axios from "axios";

import { AuthRegister } from "../store/regStore";

export const authRegister = async (formData: AuthRegister) => {
    console.log(formData)
    try {
        const response = await axios.post('http://localhost:3000/users/register', formData);
        console.log(response.data)
        return response.data;
    } catch(err) {
        console.log(err)
    }
}