import React  from 'react'
import GoalListItem from './GoalListItem'
export default function GoalList(props) {
    const loopData = props.goalPointer;
    const getValue = props.goalPointer.map((element) =>{
        return element.value;
    });
    console.log(getValue);
    let displayMsgContent = <p className="text-danger text-center" style={{fontWeight:'bold'}}>No Goal list found</p>
    // if (loopData.length <= 0) {
    //     displayMsgContent = <p className='text-danger text-center'>Please Enter CourseGoal</p>
    // }

    // const [showResult,setShoWResult] = useState(false);
    // // const deleteHandler = ()=>{
    // //     setShoWResult(true)
    // //     console.log('run');
    // // }
 
   if (getValue !== '') {
    if (loopData.length > 0) {
        displayMsgContent =  loopData.map((goals) => <GoalListItem
            key={goals.key}
            value={goals.value}
        />)
    }
}
   

  
    return (
        <div>
            <ul className='p-0 m-0'>
                {displayMsgContent}
            </ul>
        </div>
    )
}

