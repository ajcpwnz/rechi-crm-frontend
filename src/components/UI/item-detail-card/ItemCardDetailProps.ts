import { StatusTicket } from "../item-card/StatusTicket"

export interface ItemCardDetailProps {
    id: number,
    name: string,
    city: string,
    date: string,
    telegram: string,
    instagram: string,
    complete: string,
    family: number,
    textInfo: string,
    status: StatusTicket,
    phone: string,
}