import { styled } from "styled-components";


export const Wrapper = styled.section`
width:50%;
min-width:320px;
padding:20px;
margin:20px auto;
h1{
    text-align:center;
}
form{
    justify-content:center;
}
form input{
    display: block;
    margin: 15px auto;
    padding: 5px 15px;
    border-radius:5px;
}
form input[type = button]{
    width: 30%;
    border:none;
    border-radius:5px;
}
`