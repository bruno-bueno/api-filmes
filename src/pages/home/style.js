import styled from "styled-components";

export const BarraLateral = styled.div`
    background-color: #5A5F61;
    width: 5vw;
    height: 100vh; 
    position: fixed;
`;

export const BarraSuperior = styled.div`
    background-color: #113049;
    width: 100vw;
    height: 10vh; 
    position: fixed;
    display: flex;
    margin-top: -10vh;
    h1 {
        display: flex;
        align-items: center;
        float: left;
    }
    form {
        display: flex;
        align-items: center;
    }
`;

export const Container = styled.div`
`;

export const MovieList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 3rem;
    row-gap: 4rem;
    margin-left: 5rem;
    margin-top: 10vh;
`;

export const Movie = styled.li`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    img {
        width: 180px;
        border-radius: 1rem;
        margin-bottom: 2rem;
    }
    span {
        margin-left: 2rem;
        margin-right: 2rem;
        font-weight: bold;
        font-size: 120%;
        float: left;
    }
    a {
        text-align: center;
        text-decoration: none;
        color: white;
        transition: all 0.3s;
    }
    a:hover {
        transform: scale(1.1);
    }
`;

