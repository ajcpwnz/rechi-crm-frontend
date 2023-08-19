import { NavItemProps } from "./NavItemProps";

export const NavItem: React.FC<NavItemProps> = ({ data }) => {
    return <li>{data}</li>;
};