import { styled } from "styled-components";



export const Wrapper = styled.section`

*{
    margin: 0;
    padding: 0;
    font-family:Arial, Helvetica, sans-serif;
    box-sizing: border-box;
}

div,h3,p{
    padding:10px;
    font-size:3rem;
}

form input[type=button]{
    display:block;
    color:white;
    margin:30px ;
    padding:10px;
    width:50%;
    border-radius:10px;
    border:none;
    font-size:1.5rem;
    font-weight:500;
}

form input[type=btn]{
    display:block;
    margin:30px ;
    padding:10px;
    width:50%;
    border-radius:10px;
    border:none;
    text-align:center;
    font-size:1.5rem;
}

form input[type=submit]{
    display:block;
    margin:30px;
    padding:10px;
    width:50%;
    border-radius:10px;
    border:none;
    text-align:center;
    font-size:1.5rem;
}

form input[type=submit],input[type=btn],input[type=button]:hover{
    cursor:pointer;
}
`

