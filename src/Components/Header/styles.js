
import styled from 'styled-components'


//display: flex; Serve para nesse exeplo aonde eu 3 divs elas estavam por defou uma do lado e outra embaixo, ai com o displey ele coloca elas como caixas e elas ficam uma do lado da outra
export const Container = styled.div`
width: 100%;
height: 70px;
background: #20295F;
border-bottom: 5px solid #EE6B26;
display: flex;


`

export const LeftSide =  styled.div`
width: 50%;
height: 70px;
display: flex;
align-items: center;
padding-left: 10px;
img {
    width: 100px;
    height: 40px
}


`
//justify-content: end, estou usando aqui para fazer os 3 elementos do a heref começarem do final, ou seja,
//colados aba direita da tela
//border-radius: serve para de toda aquela que que envolve o número ou letra enfim redondo
//position: relative usado para subir no caso aqui a bolinha com número, lembrando que pra isso ternho que
//que usar juntamente com o position: relative o top - ou só top depende de eu vou querer o emblema
export const RigthSide = styled.div`
width: 50%;
height: 70px;
display: flex;
align-items: center;
justify-content: flex-end;

button {
    background: none;
    border: none;
    cursor: pointer;
    color:  #EE6B26;
}

a, button {
    color: #FFFFFF;
    font-weight: bold;
    text-decoration: none;
    margin: 0 10px;

&:hover {
        color: #EE6B26;
    }

    img{
        width: 25px;
        height: 30px;
        }

    span{
        background: #FFFFFF;
        color: #EE6B26;
        padding: 3px 8px;
        border-radius: 50%;
        position: relative;
        top: -20px;
        right: 10px;
       }
}


    &: hover{
        opacity: 0. 5;
    }



.dividir::after{
    content: "|";
    margin: 0 10px;
    color: #FFFFFF;
} 

`