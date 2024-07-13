import { create } from "zustand";
import menuInterface from "../data/interfaces/generalInterfaces";


export const useNavMenu = create<menuInterface>((set) => ({
    title: "",
    route: "",
    changeTitle: (menu: string) => set({ title: menu }),
    changeRoute: (route: string) => set({ route: route }),
}));


