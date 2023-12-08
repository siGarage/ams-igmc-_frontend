import { useState } from 'react';
import './UploadCSV.css'
import {parse} from 'papaparse';
import DropImage from './dropkk.png'
import {toast } from "react-toastify";
function UploadCSV(props) {
    let [data,setData]=useState([])
    console.log(data)
  return (
    <>
   <section>
    <div className="Drag-Files" onDragOver={(event)=>{
        event.preventDefault();
        }}
    onDrop={(event)=>{
        event.preventDefault();
        Array.from(event.dataTransfer.files).map(async file=>{
            let text = await file.text()
            let result=parse(text,{header:true})
            setData(result)
            toast.success('File Uploaded Successfully')
        })
    }}
   
    >
        Drop Your File
        <img src={DropImage} alt='Drop'/>
    </div>
   </section>
    </>
  );
}

export default UploadCSV;

