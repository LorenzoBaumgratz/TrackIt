import styled from "styled-components"

export default function Superior(){
    return(
        <ContainerSup>
            <span>Trackit</span>
            <img src="https://pbs.twimg.com/profile_images/1446329314/b27Iy43XXs0Vd85scnWI671617485D6F0QH9Z8I_grd_1__400x400.jpg" alt="foto-usuario"/>
        </ContainerSup>
    )
}

const ContainerSup=styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    background-color: #126ba5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 18px;
    img{
        width: 51px;
        height: 51px;
        border-radius: 100px;
    }
    span{
        font-size: 39px;
        font-weight: 400;
        color: white;
    }
`