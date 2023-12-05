import { useState } from 'react';
import './UploadCSV.css'
import {parse} from 'papaparse';
import DropImage from './dropkk.png'
import {ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function UploadCSV(props) {
    let [data,setData]=useState([])
    console.log(data)
  return (
    <>
   <section>
   <ToastContainer/>
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

