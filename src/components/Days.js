import styled from "styled-components"

export default function Days(){
    return(
        <Week>
            <button>D</button>
            <button>S</button>
            <button>T</button>
            <button>Q</button>
            <button>Q</button>
            <button>S</button>
            <button>S</button>
        </Week>
    )
}

const Week=styled.div`
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
    background-color: white;
   }
`