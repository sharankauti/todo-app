import React,{useState} from 'react'
import styles from './NewGoal.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
export default function NewGoals(props) {


    const [enterValue,setEnterValue] = useState('');
    const [nullValue,setUserEnterValue] = useState(true);
    const InputHandler = (event)=>{
        setEnterValue(event.target.value)
       if (event.target.value.trim().length > 0) {
            setUserEnterValue(true)
       }
    }

  
    const checkValue = ()=>{
        if (enterValue ==='') {
            alert('Please Enter CourseGoal')
        }
    }


    const formHandeler = (event)=>{
        event.preventDefault();
        const getInputValues = {
            key : Math.random(),
            value:enterValue
        }
        console.log(getInputValues);
        if (enterValue.trim().length ===0) {
            setUserEnterValue(false)
        }
        props.getUserFirstData(getInputValues)
    }

 
    return (
        <div className={styles.GoalBox}>
            <form onSubmit={formHandeler}>
                <div className={`${styles['goalField']} ${!nullValue && styles.inValid}`}>
                    <label className='GoalLabel form-label'>GoalName</label>
                    <input type="text" onChange={InputHandler} className='form-control'/>
                </div>
               
                <button type='submit' onClick={checkValue}  className='GoalButton btn btn-success'>ADD GOAL</button>
            </form>
        </div>
    )
}
