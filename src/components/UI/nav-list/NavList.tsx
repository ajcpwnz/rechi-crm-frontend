import { NavItem } from "../nav-item/NavItem";

export const NavList: React.FC = () => {
    const data: string[] = [
        'Очікується валідація',
        'Необроблені заявки',
        'Проводиться верифікація',
        'Проводиться валідація',
        'Відхилені заявки',
        'Архів заявок',
        'Донори'
    ];

    return (
        <ul>
        {data.map((item, index) => (
            <NavItem key={index} data={item} />
        ))}
        </ul>
    );
};

