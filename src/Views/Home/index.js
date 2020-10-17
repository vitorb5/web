//useState ele avisa todos os componentes que certo estado mudou e os outros elementos mudam de cor para se 
//adaptar para o novo estatado
import React, {useState} from 'react';
import * as S from './styles'
import api from '../../Services/api';

//Nossos Componetes
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import FilterCard from '../../Components/FilterCard';
import TaskCard from '../../Components/TaskCard';

function Home() {//O nome da função sempre será o nome da página
  const [filteActived, setFilterActived] = useState();
  return (
          <S.Container>
          <Header/>
          
          <S.FilterArea>
          <button type="button"         onClick={() => setFilterActived("all")}> 
            <FilterCard title="Todos"   actived={filteActived == 'all'} />
          </button>
          <button type="button"         onClick={() => setFilterActived("today")}> 
            <FilterCard title="Hoje"    actived={filteActived == 'today'} />
          </button>
          <button type="button"         onClick={() => setFilterActived("week")}> 
            <FilterCard title="Semana"  actived={filteActived == 'week'} />
          </button>
          <button type="button"         onClick={() => setFilterActived("month")}> 
            <FilterCard title="Mês"     actived={filteActived == 'month'} />
          </button>
          <button type="button"         onClick={() => setFilterActived("yaer")}> 
            <FilterCard title="Ano"     actived={filteActived == 'year'}/>
          </button>
          </S.FilterArea>

          <S.Title>
            <h3>Tarefas</h3>
          </S.Title>

          <S.Content>
            <TaskCard/>
            <TaskCard/>
            <TaskCard/>
            <TaskCard/>
            <TaskCard/>
            <TaskCard/>
            <TaskCard/>
            <TaskCard/>
            <TaskCard/>
            <TaskCard/>
          </S.Content>
           
          <Footer/>

          </S.Container>
         ) 
}

export default Home;
