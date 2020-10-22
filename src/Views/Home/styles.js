import styled from 'styled-components'

export const Container = styled.div `
width: 100%;

`
//flex-wrap: wrap; serve para deixar um componente embaixo do outro quando a tela for 
//reduzida, nesse caso eu colocaria isso dentro do FilterArea
export const FilterArea = styled.div`
width: 100%;
display: flex;
justify-content: space-around;
margin-top: 10px;

button {
background: none; 
border: none;
}
`
//display: flex para deixar os objetos um do lado do outro
export const Content = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: center;




`

export const Title = styled.div`
width: 100%;
border-bottom: 1px solid #20295F;
display: flex;
justify-content: center;
margin-bottom: 20px;

h3{
    color: #20295F;
    position: relative;
    top: 30px; 
    background: #FFFFFF;
    padding: 0 20px;
}
`