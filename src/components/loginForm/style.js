import { styled } from "styled-components";



export const Wrapper = styled.section`

*{
    margin: 0;
    padding: 0;
    font-family:Arial, Helvetica, sans-serif;
    box-sizing: border-box;
}

.form{
    display:flex;
    padding: 20px;
    justify-content: center;
    background-color:#D1E9EA;
}

form {
    padding: 15px;
}
.form-login{
    position: relative;
    display: flex;
    padding: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;
    min-width: 320px;
    height: 70vh;
    border: solid 2px gray;
    border-radius: 20px;
    background-color: #fff;
}

.form-login h2{
    font-size: 2em;
    color: #162938;
    text-align: center;
    
}

.input-box{
    position: relative;
    width: 100%;
    height: 50px;
    border-bottom: 2px solid #162938;
    margin: 30px 0px;
}

.input-box input{
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    font-size: 1em;
    color: #162938;
    font-weight: 600; 
    padding: 0 35px 0 5px;
}

.remember-forget{
    font-size: 0.9em;
    color: #162938;
    font-weight: 500;
    margin: -15px 0 15px;
    display: flex;
    justify-content: space-between;
}

.remember-forget label input{
    accent-color: #162938;
    margin-right: 3px;
}

.remember-forget a{
    color: #162938;
    text-decoration: none;
}

.remember-forget a:hover{
    text-decoration: underline;
}

form input[type=button]{
    width: 100%;
    height: 45px;
    background-color: #162938;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1em;
    color: #fff;
    font-weight: 700;
}

.login-register{
    text-align: center;
    font-size: .9rem;
    color: #162938;
    margin: 25px 0 10px;
    font-weight: 500;
}

.login-register p a{
    text-decoration: none;
    color: #162938;
    font-weight: 700;
}

.login-register p a:hover{
    text-decoration: underline;
}
`


