import { StatusTicket } from "./StatusTicket"

export interface ItemCardProps {
    id: number,
    name: string,
    city: string,
    date: string,
    nick: string,
    telegram: string,
    instagram: string,
    complete: string,
    family: number,
    textInfo: string,
    status: StatusTicket

}
