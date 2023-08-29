import { styled } from "styled-components";



export const Wrapper = styled.section`


*{
    margin: 0;
    padding: 0;
    font-family:Arial, Helvetica, sans-serif;
    box-sizing: border-box;
}

header{
    ${'' /* position:absolute; */}
    top:0;
    left:0;
    width: 100%;
    padding: 20px;
    background-color:#162938 ;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
}
h1{
    font-size: 1.5rem;
}

li{
    list-style: none;
}
li a{ 
    text-decoration: none;
    color: #fff;
}

`

