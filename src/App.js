
import './App.css';
import React,{useState} from 'react';
import Goals from './Componets/Goals/Goals';
import GoalList from './Componets/GoalsLists/GoalList';
function App(props) {

    const [defaultValue,setNoValues] = useState([]);

    const dataHandler = (goalData)=>{
        console.log(goalData);
        setNoValues((prevData)=>{
            return [goalData,...prevData]
        })
    }
   
    return(
        <div>
                <Goals getUserEnterDataFromGoals={dataHandler}/>
                <GoalList goalPointer={defaultValue}/>
       </div>
    )
  
}

export default App;
