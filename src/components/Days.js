import styled from "styled-components"
import { useLogin } from "../context"

export default function Days() {
    const { dias, setDias } = useLogin()

    function selecionar(data) {
        console.log("clicou")
        if (dias.includes(data)) {
            console.log("inclui")
            setDias(dias.filter((d)=>d!==data))
        } else {
            console.log("nao inclui")
            setDias([...dias, data])
        }

    }
    return (
        <Week>
            <button onClick={() => selecionar(1)} data-test="habit-day" >D</button>
            <button onClick={() => selecionar(2)} data-test="habit-day" >S</button>
            <button onClick={() => selecionar(3)} data-test="habit-day" >T</button>
            <button onClick={() => selecionar(4)} data-test="habit-day" >Q</button>
            <button onClick={() => selecionar(5)} data-test="habit-day" >Q</button>
            <button onClick={() => selecionar(6)} data-test="habit-day" >S</button>
            <button onClick={() => selecionar(7)} data-test="habit-day" >S</button>
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
    color: #dbdbdb;
    background-color: white  ;
    /* :disabled{
        background-color: #cfcfcf;
        color: white;
    } */
   }
`