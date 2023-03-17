import styled from "styled-components"
import BotaoDia from "./BotaoDia"

export default function Days() {
   

    return (
        <Week>
            <BotaoDia dia="D" numero={1}/> 
            <BotaoDia dia="S" numero={2}/> 
            <BotaoDia dia="T" numero={3}/> 
            <BotaoDia dia="Q" numero={4}/> 
            <BotaoDia dia="Q" numero={5}/> 
            <BotaoDia dia="S" numero={6}/> 
            <BotaoDia dia="S" numero={7}/> 
        </Week>
    )
}

const Week = styled.div`
    display: flex;
    align-items: center;
    margin-top: 8px;
`

