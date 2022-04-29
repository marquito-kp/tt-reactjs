import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
  padding: 20px;
  background: red;
  display: flex;
  justify-content: space-between;
  align-items: center; 
`


export const Logo = styled.img`
    max-width: 100%;
`

export const ContainerLogo = styled.div`
    width: 70px;
    height: 40px;
`

export const List = styled.ul`
    display: flex;
    gap: 20px;
    margin-right: 40px;
`

export const ListItem = styled.li`
    list-style: none;
    
`
export const Link = styled.a`
    color: #fff;
    text-decoration: none;
`