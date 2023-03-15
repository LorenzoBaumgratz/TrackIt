import { Link } from "react-router-dom"
import styled from "styled-components"
import logo from "../assets/logo.png"

export default function Cadastro(){
    return(
        <CadastroContainer>
            <img src={logo} alt="logo" />
            <form>
                <input placeholder="email" />
                <input placeholder="senha" />
                <input placeholder="nome" />
                <input placeholder="foto" />
                <button type="submit">Cadastrar</button>
            </form>
            <Link>
                <p>Já tem uma conta? Faça login!</p>
            </Link>
        </CadastroContainer>
    )
}

const CadastroContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
gap: 32px;
padding-top: 68px;
img{
    height: 178px;
    width: 180px;
}
form{
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-bottom: 25px;
    input{
        width: 303px;
        height: 45px;
        border-radius: 5px;
        border: 1px solid #d4d4d4;
        font-size: 20px;
        font-weight: 400;
        //deslocar txt um pouco para dir
    }
    button{
        width: 303px;
        height: 45px;
        background-color: #52b6ff;
        border-radius: 5px;
        border: none;
        color: white;
        font-size: 21px;
        font-weight: 400;
    }
}
p{
    color: #52b6ff;
    font-size: 14px;
    font-weight: 400;
}
`