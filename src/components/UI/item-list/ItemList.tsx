import { useState } from "react"
import { ItemCard } from "../item-card/ItemCard"
import { ItemCardProps } from "../item-card/ItemCardProps";

export const ItemList: React.FC = () => {
    const [data, setData] = useState<ItemCardProps[]>([]);

    setData(prev => prev)

    return (
    <ul>
        {data && data.map((item) => (
            <ItemCard
                key={item.id}
                id={item.id}
                name={item.name}
                city={item.city}
                date={item.date}
                nick={item.nick}
                telegram={item.telegram}
                instagram={item.instagram}
                complete={item.complete}
                family={item.family}
                textInfo={item.textInfo}
                status={item.status} />
        ))}
    </ul>
    );
};