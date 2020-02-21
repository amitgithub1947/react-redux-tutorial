import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { AntoherName, addWish } from '../Actions/Action1';

function UseSelectorAndUseDispatch(){
        const myName = useSelector((state)=>{
            return  state.name
         })
         const wish = useSelector((state)=>{
            return  state.wish
         })
         const myWish = wish.map((item)=>{
            return <p key={Math.random()}>{item}</p>
         })

         const dispatch = useDispatch();
        return(
            <div>
                I am inside use selector and use dispatch<br/>
                name : {myName}      
                {myWish}
                <button onClick={()=>{dispatch(AntoherName())}}>change name</button>
                <button onClick={()=>{dispatch(addWish())}}>add wish</button>

            </div>
        )
  
}

export default UseSelectorAndUseDispatch;