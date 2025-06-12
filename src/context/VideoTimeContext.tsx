/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";
import type { contextInterface, ContextProviderProps } from "../assets/helpers/interfaces";



export const VideoTimeContext = createContext<contextInterface | null>(null)
export default function VideoTimeContextProvider({ children }: ContextProviderProps) {
    const [videoTime, setVideoTime] = useState("");

    return <VideoTimeContext.Provider value={{ setVideoTime, videoTime }}>

        {children}
    </VideoTimeContext.Provider>
}