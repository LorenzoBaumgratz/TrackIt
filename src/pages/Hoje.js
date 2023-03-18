import axios from "axios";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Inferior from "../components/Inferior";
import Marcador from "../components/Marcador";
import Superior from "../components/Superior";
import { useLogin } from "../context";
//import weekday from 'dayjs/plugin/weekday';

export default function Hoje(){
    const { usuario,qntHab,qntHabFeito,setQntHab} = useLogin()
    const [hoje,setHoje]=useState([])
    console.log("day",dayjs())
    const config = {
        headers: {
            "Authorization": `Bearer ${usuario.token}`
        }
    }

    useEffect(()=>{
        axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",config)
        .then((res)=>{
            console.log("hoje",res.data)
            setHoje(res.data)
            setQntHab(res.data.length)
        })
        .catch((err)=>console.log(err.response.data.message))
    },[])
    console.log("hab feitos",qntHabFeito)
    return(
        <>
        <Superior/>
        <ConteudoHoje>
            <P data-test="today">Sexta, {dayjs().$D}/{dayjs().$M+1}</P>
            <Span data-test="today-counter">{((qntHabFeito!==0)?<Span2>{Math.ceil(qntHabFeito/qntHab*100)}% dos hábitos concluídos</Span2>:"Nenhum hábito concluido ainda")}</Span>
            {hoje.map((h,i)=><Marcador key={hoje[i].id} info={hoje[i]}/>)}

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
const Span2=styled.span`
    color: #8fc549;
`

const P=styled.p`
    margin-top: 28px;
    color: #126ba5;
    font-size: 23px;
    width: 100%;
`

