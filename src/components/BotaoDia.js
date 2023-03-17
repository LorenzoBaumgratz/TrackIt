import { useState } from "react"
import styled from "styled-components"
import { useLogin } from "../context"

export default function BotaoDia(props) {
    const [selecionado,setSelecionado]=useState(false)

    const { dias, setDias } = useLogin()

    function selecionar(data) {
        console.log("clicou")
        if (dias.includes(data)) {
            setSelecionado(false)
            console.log("inclui")
            setDias(dias.filter((d)=>d!==data))
            return true
        } else {
            console.log("nao inclui")
            setDias([...dias, data])
            setSelecionado(true)
            return false
        }

    }
    return (
        <>
            <Botao onClick={() => selecionar(props.numero)} selecionado={selecionado} data-test="habit-day" >{props.dia}</Botao>
        </>
    )
}

const Botao=styled.button`

    width: 30px;
    height: 30px;
    border: 1px solid #d4d4d4;
    margin-right: 4px;
    border-radius: 5px;
    font-size: 20px;
    color: ${props=>(props.selecionado? "white": "#dbdbdb")};
    background-color: ${props=>(props.selecionado? "#cfcfcf": "white")};
  
`