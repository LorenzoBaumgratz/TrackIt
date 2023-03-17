import styled from "styled-components"

export default function Marcador(){
    return(
        <ConteudoMarcador data-test="today-habit-container">
            <Texto>
            <p data-test="today-habit-name">Ler 1 capítulo de livro</p>
            <span data-test="today-habit-sequence">Sequência atual: 3 dias</span>
            <span data-test="today-habit-record">Seu recorde: 5 dias</span>
            </Texto>
            <button data-test="today-habit-check-btn">X</button>
        </ConteudoMarcador>
    )
}

const ConteudoMarcador=styled.div`
    background-color: white;
    width: 340px;
    height: 94px;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    padding: 13px;
    margin-bottom: 10px;
    button{
        width: 69px;
        height: 69px;
        border: none;
        border-radius: 5px;
    }
`

const Texto=styled.div`
    display: flex;
    flex-direction: column;
    p{
        font-size: 20px;
        color: #666666;
        margin-bottom: 7px;
    }
    span{
        font-size: 13px;
        color: #666666;
    }
`

