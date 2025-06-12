import axios from "axios";

import { Event } from "../store/EventsStore";

export const createEvent = async (formData: Event, token: string) => {
    console.log(formData)
    try {
        const response = await axios.post(
            'http://localhost:3000/events/',
            formData,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        console.log(response.data)
        return response.data;
    } catch (err) {
        console.log(err);
        throw err;
    }
}