import { StaticImageData } from "next/image";

export interface IEvents {
    id: number;
    title: string;
    description?: string;
    eventDate: string;
    image: string;
}

export interface ITeam {
    id: number;
    name: string;
    title: string;
    description?: string;
    image?: string | StaticImageData;
}
