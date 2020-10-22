import React from 'react';
import * as S from './styles';

import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';

function Header({lateCount, clickNotification}) {//O nome da função sempre será o nome da página
  return (//S.LeftSide nesse caso vai estar carregando o logo que vai ficar no lado esquerdo header
          //S.RightSide nesse caso vai estar carregadno alguns botões que ficaram do direto do header
          //alt='' sempre usar como uma boa pratica para quando por algum motivo a pag não carregar ele mostar algum nome lugar ex: logo alt='Logo' para se a imgaem não carregar aparecer escrito "Logo"
          //id é apenas uma identificado para usarmos quando quisermos manipular aquele elemento 
          //que está dentro pro exemplo de um href aparte
          //Usar classe quando for alterar o mesmo visual em vários elemtos quando quiser manipular um elemento
          //especifico use o seletor id
    <S.Container>
      <S.LeftSide> 
        <img src= {logo} alt='Logo'/>
      </S.LeftSide>
      <S.RigthSide>
        <a href="#">INÍCIO</a>
        <span className="dividir"/>
        <a href="#">NOVA TAREFA</a>
        <span className="dividir"/>
        <a href="#">SINCRONIZAR CELULAR</a>
        <span className="dividir"/>
        <button onClick={clickNotification}>
          <img src={bell} alt="Notficação"/>
          <span>{lateCount}</span> 
          </button>
      </S.RigthSide>
    </S.Container>
  )
}

export default Header;
