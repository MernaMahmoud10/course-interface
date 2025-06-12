import type { Dispatch, ReactNode, SetStateAction } from "react";

export interface ISection {
    id: number;
    name: string,
    title: string
}
export interface INote {
    videoTime: string;
    note: string;
}
export interface IMyNote {
    setmyNote: Dispatch<SetStateAction<string>>;
    myNote: string;
}
export interface ContextProviderProps {
    children: ReactNode
}
export interface contextInterface {
    setVideoTime: React.Dispatch<React.SetStateAction<string>>;
    videoTime: string;
}