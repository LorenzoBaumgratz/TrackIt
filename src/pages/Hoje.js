import axios from "axios";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Inferior from "../components/Inferior";
import Marcador from "../components/Marcador";
import Superior from "../components/Superior";
import { useLogin } from "../context";

export default function Hoje(){
    const { usuario,qntHab,qntHabFeito,setQntHab, setQntHabFeito} = useLogin()
    const [hoje,setHoje]=useState([])
    const weekday=dayjs().locale('pt=br').day();

    function findWeekday(){
        switch(weekday){
            case 1:
                return "Segunda"
            case 2:
                return "Terça"
            case 3:
                return "Quarta"
            case 4:
                return "Quinta"
            case 5:
                return "Sexta"
            case 6:
                return "Sabado"
            case 7:
                return "Domingo"
        }
    }

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

        for(let i=0;i<hoje.length;i++){
            if(hoje[i].done){
                setQntHabFeito(qntHabFeito +1)
            }
        }
        
    },[])
    console.log("hab feitos",qntHabFeito)
    return(
        <>
        <Superior/>
        <ConteudoHoje>
            <P data-test="today">{findWeekday()}, {dayjs().format('DD/MM')}</P>
            <Span data-test="today-counter">{((qntHabFeito!==0)?<Span2 data-test="today-counter">{Math.ceil(qntHabFeito/qntHab*100)}% dos hábitos concluídos</Span2>:"Nenhum hábito concluido ainda")}</Span>
            {hoje.map((h,i)=><Marcador key={hoje[i].id} info={hoje[i]} /> )}

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

