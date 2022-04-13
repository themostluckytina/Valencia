import { data } from './data';
import { useState } from 'react';
import './App.css';

function App() {

const [ city, setCity] = useState(0);

const {id, name, description, image} = data[city];

const [showMore, setShowMore ] = useState(false);

const pushNext = ()=>{
  setCity((city=>{
    city++;
    if(city > data.length-1){
      city=0
    }
    return city
  }))
}

const pushBack =()=>
setCity((city=>{
  city --;
  if(city <0){
    city= data.length-1;
  }
    return city
}))

  return (<div >
   <div className="App">
   <h1><span>B</span>еликолепная<span> B</span>аленсия</h1>
    
    <p>Валенсия – третий по величине город в Испании и один из красивейших европейских городов. 
      Валенсия прекрасна в любое время года. Это город впечатлит вас выдающийся исторической архитектурой, 
      ультрасовременными зданиями, приятным климатом и солнечными зелеными парками. 
      Располагается этот город в юго-восточной части Испании, на средиземноморском побережье.</p>
      </div>
      <div className="App">
        <h3>ТОП {data.length} ДОСТОПРИМЕЧАТЕЛЬНОСТЕЙ</h3>
      </div>

      <div className="App">
        <h4>{id}. {name} </h4>
      </div>
      <div className="App">
      <p> {showMore ? description: description.substring(0, 145) + '...' }
      <button className='btn'onClick={()=>setShowMore(!showMore)}> {showMore ? 'Скрыть' : 'Подробнее'} </button>
          </p>
      </div>
      <div className="App">
      <img src={image}  width={500} alt='pic'  />
      </div>
      
      <div className="App">
        <button onClick={pushBack} className='push'>назад</button>
        <button onClick={pushNext}  className='push'>вперед</button>
      </div>
     </div>
  );
}

export default App;
