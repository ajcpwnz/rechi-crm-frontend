import { NavLink } from "react-router-dom";
// import { NavItem } from "../nav-item/NavItem";
import styled from '@emotion/styled'; 

export const NavList: React.FC = () => {

    // const data: string[] = [
    //     'Очікується валідація',
    //     'Необроблені заявки',
    //     'Проводиться верифікація',
    //     'Проводиться валідація',
    //     'Відхилені заявки',
    //     'Архів заявок',
    //     'Донори'
    // ];

    return (
        <NavListStyled>
        {/* {data.map((item, index) => ( */}
            {/* // <NavItem key={index} data={item} /> */}
          
         <NavLinkStyled to="request-submissions">Необроблені заявки</NavLinkStyled>
         <NavLinkStyled to="request-suions">Проводиться верифікація</NavLinkStyled>
         <NavLinkStyled to="requestssions">Проводиться валідація</NavLinkStyled>
         <NavLinkStyled to="reqssions">Відхилені заявки</NavLinkStyled>
         <NavLinkStyled to="reqmissions">Архів заявок</NavLinkStyled>
         <NavLinkStyled to="remissions">Донори</NavLinkStyled>
        {/* ))} */}
        </NavListStyled>
    );
};

const NavLinkStyled = styled(NavLink)({
    textDecoration: "none", 
    width: "240px", 
    color: "#000",
    paddingTop: "8px", 
    paddingBottom: "8px", 
    paddingLeft: "16px",  


    '&.active': {
        color: '#FFF',
        backgroundColor: "#005AC1",
        borderRadius: "12px",
    },

    '&:hover': {
        borderRadius: "12px",
        backgroundColor: "#44474F", 
        color: '#FFF'
    }
});

const NavListStyled = styled('ul')({
    paddingLeft: 0,
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    rowGap: "12px",
    width: "240px",
});