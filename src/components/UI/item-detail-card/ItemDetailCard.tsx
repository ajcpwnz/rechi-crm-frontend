import { useState } from "react"
import { ItemCardDetailProps } from "./ItemCardDetailProps"

const initialState: ItemCardDetailProps = {
    id: 0,
    name: "",
    city: "",
    date: "",
    telegram: "",
    instagram: "",
    complete: "",
    family: 0,
    textInfo: "",
    status: 'status',
    phone: "",
}

export const ItemDetailCard: React.FC<ItemCardDetailProps> = () => {
    const [data, setData] = useState<ItemCardDetailProps>(initialState)

    setData(prev => prev)

    return (
        <div>
            <h2>Контактна інформація</h2>
            <p>{data.id}</p>
            <p>{data.status}</p>
            <p>{data.date}</p>
            <p>{data.name}</p>
            <p>{data.city}</p>
            <p>Телефон {data.phone}</p>
            <p>Instagram (нік чи посилання){data.instagram}</p>
            <p>Telegram (нік) {data.telegram}</p>
            <p>{data.complete}</p>
            <p>{data.family}</p>
            <p>{data.textInfo}</p>
            <link>Редагувати</link>
        </div>
    )
}
