import axios from "axios";

interface AuthLogin {
    login: string,
    password: string,
}

export const authLogin = async (formData: AuthLogin ) => {
    try {
        const response = await axios.post('http://localhost:3000/auth/login', formData);
        console.log(response.data);
        return response.data;
    } catch(err) {
        console.log(err)
    }
} 