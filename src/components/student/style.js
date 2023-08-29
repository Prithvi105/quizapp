import { styled } from "styled-components";




export const Wrapper = styled.section`


*{
    margin: 0;
    padding: 0;
    font-family:Arial, Helvetica, sans-serif;
    box-sizing: border-box;
}
h1{
    padding: 5px;
    margin: 20px;
}
.inner img{
       border-radius:50%;
       width:350px;
       display:flex;
}
input[type = button]{
    background-color:#141E46;
    color:#FFF;
    border-radius:5px;
    padding:15px 40px;
    border:none;
    font-weight:bolder;
    margin: 20px auto;
    display:block;
}
input[type = button]:hover{
    cursor:pointer;

}

.btn{
    margin:20px auto;
}
`