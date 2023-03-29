import React,{useState} from 'react'
import styles from './GoalListItem.module.css'
export default function GoalListItem(props) {
    // const displayMsgInBox = <p style={{marginBottom:'0px',color:'black',fontWeight:'bold'}}>Fill GoalName field to change this default value</p>
    // let exactValue = props.value;
    // if (exactValue === '') {
    //     exactValue =  displayMsgInBox;
    // }
    const [showResult,setShoWResult] = useState(false);
    const deleteHandler = ()=>{
        setShoWResult(true)
    }
    return (
        <li className={styles.ItemBox} onClick={deleteHandler}>
            
            {!showResult ? props.value:null }
        </li>    
    )
}
