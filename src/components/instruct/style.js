import { styled } from "styled-components";




export const Wrapper = styled.section`

*{
    padding: 0;
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    
}



.insform{
    margin-left: 20px;
    padding-top: 7px;
    width:50%;
    min-width:320px;
    margin:10px auto;

}
 .insform .inner  h1{
    margin-left: 3px;
    padding: 15px;
    font-size: 40px;
    
}
 .insform .inner  p{
    margin: 9px;
    padding: 6px;
    font-size: 30px;
    
}
 .insform .list ul li{
    font-size: 20px;
    padding-left: 25px;
    margin: 20px;
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