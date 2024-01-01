import {useState} from 'react'
import './ProgressBar.css';

function ProgressBar() {

    const[progress,setProgress]=useState(0)
    const[flag,setFlag]=useState(true);
    let counter=0
    const getStart=(index)=>{
   
    setFlag(false);
          let timer= setInterval(()=>{
           
           
           setProgress((prev)=>{
                
            counter= prev+1
            index=counter
                return counter
            });
            if(counter==99){
                clearInterval(timer);
            }
           
           },200)
           
       
    }
    const getPause=()=>{
        alert("downloading complete please click on reset button");
    }
    
    const getReset=()=>{
        setProgress(0);
        setFlag(true)
        if(progress<99){
            alert('please wait till the downloading process is completed')
        }
        console.log('reset');
    }



  return (
    <div className='container'>
    <h2>Progress Bar</h2>
     <div className='progress-bar'>
     <div className='progress-bar-fill' style={{width:`${progress}%` , backgroundColor:"lightgreen"}}></div>
     </div>
     <div className='label'>{progress}%</div>
     <div className='btn_container'>
     <button onClick={flag?()=>{
        getStart(counter)
     }:()=>{
        getPause();
     }} style={{backgroundColor:"green"}}>Start</button>
     <button onClick={getReset} style={{backgroundColor:"red"}}>Reset</button>
     
     </div>
    </div>
  )
}

export default ProgressBar
