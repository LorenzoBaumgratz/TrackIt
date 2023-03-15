import styled from "styled-components";
import Inferior from "../components/Inferior";
import Marcador from "../components/Marcador";
import Superior from "../components/Superior";

export default function Hoje(){
    return(
        <>
        <Superior/>
        <ConteudoHoje>
            <P>Segunda, 17/05</P>
            <Span>Nenhum hábito concluido ainda</Span>
            {/* <Span>67% dos hábitos concluídos</Span> */}
            <Marcador/>
            <Marcador/>
            <Marcador/>
        </ConteudoHoje>
        <Inferior/>
        </>
    )
}

const ConteudoHoje=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f2f2f2;
    padding: 70px 18px;
    height: 100%;
`
const Span=styled.span`
    color: #bababa;
    font-size: 18px;
    width: 100%;
    margin-bottom: 28px;
`

const P=styled.p`
    margin-top: 28px;
    color: #126ba5;
    font-size: 23px;
    width: 100%;
`

