import React from 'react'
import NewGoals from './NewGoals'
import 'bootstrap/dist/css/bootstrap.min.css'
export default function Goals(props) {

    const dataFirstHandler = (getInputValues)=>{
       const goalData ={
           ...getInputValues
       }
        props.getUserEnterDataFromGoals(goalData)
    }

    return (
        <div className='GoalWrapper my-5'>
            <NewGoals getUserFirstData={dataFirstHandler}/>
        </div>
    )
}
