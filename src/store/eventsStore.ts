import { create } from "zustand";
import { createEvent as apiCreateEvent } from "../api/eventsApi";
import useAuthStore from "./authStore";

export interface Event {
    id?: number;
    title: string;
    hashtag: string;
    time: string;
}

interface EventStore {
    events: Event[];
    setEvents: (events: Event[]) => void;
    addEvent: (event: Event) => void;
    createEvent: (event: Event) => Promise<void>;
    editEvent: (event: Event) => void;
    deleteEvent: (id: number) => void;
}

const initialEvents: Event[] = [];

const useEventsStore = create<EventStore>((set, get) => ({
    events: initialEvents,
    setEvents: (events) => set((state) => ({
        events: events,
    })),
    addEvent: (event) => set((state) => ({ events: [...state.events, event] })),
    createEvent: async (event) => {
        const token = useAuthStore.getState().token;
        if (!token) throw new Error("Нет токена");
        const created = await apiCreateEvent(event, token);
        set((state) => ({ events: [...state.events, created] }));
        return created;
    },
    editEvent: (event) => set((state) => ({ events: state.events.map((e) => e.id === event.id ? event : e) })),
    deleteEvent: (id) => set((state) => ({ events: state.events.filter((e) => e.id !== id) })),
}))

export default useEventsStore;