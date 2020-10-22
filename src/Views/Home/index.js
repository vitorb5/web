//useState ele avisa todos os componentes que certo estado mudou e os outros elementos mudam de cor para se 
//adaptar para o novo estatado
//useEffect é uma função que é carregada sempre que a tela é carregada
import React, {useState, useEffect} from 'react';
import * as S from './styles'
import api from '../../Services/api';

//Nossos Componetes
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import FilterCard from '../../Components/FilterCard';
import TaskCard from '../../Components/TaskCard';

function Home() {//O nome da função sempre será o nome da página
  const [filteActived, setFilterActived] = useState('all');
  const [task, setTasks] = useState([]);
  const [lateCount, setLateCount] = useState();

  //setTasks é função que atualiza o status  
  async function loadTask(){
    await api.get(`/task/filter/${filteActived}/11:11:11:11:11:11`)
    .then(response => {
      setTasks(response.data)
    })
  }

  async function lateVerify(){
    await api.get(`/task/filter/late/11:11:11:11:11:11`)
    .then(response => {
      setLateCount(response.data.length)
    })
  }

  //Não vai ser asincrona pois não envolve nada com api nem com banco
  function Notification(){
    setFilterActived('late');
  }
  
  //Lembrando que o useEffect é carregado sempre um que é carregada nesse caso estou solicitando
  //que ele carregue sempre a função loadTask sempre que a tela for carregada
  useEffect(() =>{
    loadTask();
    lateVerify();
  },[filteActived])
  
  return (
          <S.Container>
          <Header lateCount={lateCount} clickNotification={Notification}/>
          
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
            <h3>{filteActived == 'late' ? 'Tarefas Atrasadas' : 'Tarefas'}</h3>
          </S.Title>

          <S.Content>
            {
              task.map(t =>(
            <TaskCard type={t.type} title={t.title} when={t.when}/>
              ))
            }
          </S.Content>
           
          <Footer/>

          </S.Container>
         ) 
}

export default Home;
