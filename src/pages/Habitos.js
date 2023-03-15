import styled from "styled-components";
import Days from "../components/Days";
import Inferior from "../components/Inferior";
import Superior from "../components/Superior";
import Task from "../components/Task";

export default function Habitos() {
    return (
        <>
            <Superior />
            <Conteudo>
                <Hab>
                    <p>Meus hábitos</p>
                    <button>+</button>
                </Hab>
                {/* <NewHab>
                    <input type="text" />
                    <Days />
                    <Botoes>
                        <span>Cancelar</span>
                        <Salvar type="submit">Salvar</Salvar>
                    </Botoes>
                </NewHab>
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p> */}
            <Task/>
            <Task/>
            <Task/>
            </Conteudo>
            <Inferior />
        </>
    )
}

const Conteudo = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #f2f2f2;
padding: 70px 0;
height: 100%;
    p{
        font-size: 18px;
        line-height: 23px;
        color: #666666;
        width: 340px;
    }

`
const Hab = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 22px;
margin-bottom: 28px;
width: 340px;
p{
color: #126ba5;
font-size: 23px;
}

button{
    background-color: #52b6ff;
    border-radius: 5px;
    width: 35px;
    height: 35px;
    border: none;
    color: white;
    font-size: 27px;
}
`
const NewHab = styled.form`
    width: 340px;
    height: 180px;
    background-color: white;
    padding: 18px;
    margin-bottom: 29px;
    input{
        border: 1px solid #d4d4d4;
        width: 303px;
        height: 45px;
        border-radius: 5px;
    }
`
const Botoes=styled.div`
    margin-top: 29px;
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 23px;
    span{
        color: #52b6ff;
        font-size: 16px;
    }
`
const Salvar = styled.button`
    border: none;
    border-radius: 5px;
    width: 84px;
    height: 35px;
    background-color: #52b6ff;
    color: white;
    font-size: 16px;
`