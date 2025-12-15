
import { createContext, useContext } from "react";
import { SectionName } from "../lib/types";

export type NavContextType = {
    currentSection: SectionName
    setCurrentSection: (sectionName:SectionName)=>void;
}

export const NavContext = createContext<NavContextType|null>(null)

export const useNavContext = () => {
    const context=useContext(NavContext)

    if(!context) {
        throw new Error("useNavContext is not used within its provider.")
    }
    return context;
}