//useMemo para datas
import React, {useMemo} from 'react';
import {format} from 'date-fns';
import * as S from './styles';
import typrIcons from '../../Utils/typeIcons';
import typeIncons from '../../Utils/typeIcons';

function TaskCard({type, title, when}){
    const date = useMemo (() => format(new Date(when), 'dd/mm/yyyy'));
    const hour = useMemo (() => format(new Date(when), 'HH:mm'));

    return(
        <S.Container>
            <S.TopCard>
                <img src={typeIncons[type]} alt="Icone da tarefa"/>
                <h3>{title}</h3>
                
            </S.TopCard>
            <S.ButtomCard>
                <strong>{date}</strong>
                <span>{hour}</span>
            </S.ButtomCard>
        </S.Container>
    )
}

export default TaskCard;