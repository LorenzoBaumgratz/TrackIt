import styled from "styled-components"

export default function Inferior() {
    return (
        <ContainerInf>
            <Botao>Hábitos</Botao>
            <Circulo>Hoje</Circulo>
            <Botao>Histórico</Botao>
        </ContainerInf>
    )
}

const ContainerInf = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 36px;
`

const Circulo = styled.button`
    width: 91px;
    height: 91px;
    background-color: #52b6ff;
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
    border: none;
`

const Botao = styled.button`
    font-size: 18px;
    font-weight: 400;
    color: #52b6ff;
    border: none;
    background: none;
`