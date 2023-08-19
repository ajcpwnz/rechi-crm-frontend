
import { ItemCardProps } from "./ItemCardProps";

export const ItemCard: React.FC<ItemCardProps> = ({ id, status, name, city, date, nick, telegram, instagram, complete, family, textInfo}) => {

    return <li>
            <p>{id}</p>
            <p>{date}</p>
            <p>{status}</p>
            <h3>{name}</h3>
            <p>{city}</p>
            <p>{nick}</p>
            <p>{telegram}</p>
            <p>{instagram}</p>
            <p>{complete}</p>
            <p>{family}</p>
            <p>{textInfo}</p>
            <link>Детальна інформація</link>
        </li>;
};