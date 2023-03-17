import styled from "styled-components"
import { useLogin } from "../context"

export default function Days() {
    const { dias, setDias } = useLogin()

    function selecionar(data) {
        console.log("clicou")
        if (dias.includes(data)) {
            console.log("inclui")
            setDias(dias.filter((d)=>d!==data))
            return true
        } else {
            console.log("nao inclui")
            setDias([...dias, data])
            return false
        }

    }

    return (
        <Week>
            <Botao onClick={() => selecionar(1)} funcao={()=>selecionar(1)} data-test="habit-day" >D</Botao>
            <Botao onClick={() => selecionar(2)} funcao={()=>selecionar(2)} data-test="habit-day" >S</Botao>
            <Botao onClick={() => selecionar(3)} funcao={()=>selecionar(3)} data-test="habit-day" >T</Botao>
            <Botao onClick={() => selecionar(4)} funcao={()=>selecionar(4)} data-test="habit-day" >Q</Botao>
            <Botao onClick={() => selecionar(5)} funcao={()=>selecionar(5)} data-test="habit-day" >Q</Botao>
            <Botao onClick={() => selecionar(6)} funcao={()=>selecionar(6)} data-test="habit-day" >S</Botao>
            <Botao onClick={() => selecionar(7)} funcao={()=>selecionar(7)} data-test="habit-day" >S</Botao>
        </Week>
    )
}

const Week = styled.div`
    display: flex;
    align-items: center;
    margin-top: 8px;
   button{
    width: 30px;
    height: 30px;
    border: 1px solid #d4d4d4;
    margin-right: 4px;
    border-radius: 5px;
    font-size: 20px;
    color: ${props=>((props.funcao)? "white": "#dbdbdb")};
    background-color: ${props=>((props.funcao)? "#cfcfcf": "white")};
   }
`

const Botao=styled.button`

    width: 30px;
    height: 30px;
    border: 1px solid #d4d4d4;
    margin-right: 4px;
    border-radius: 5px;
    font-size: 20px;
    color: ${props=>((props.funcao==="opa")? "white": "#dbdbdb")};
    background-color: ${props=>((props.funcao==="opa")? "#cfcfcf": "white")};
  
`