import React, { useState } from 'react'
import "./Createpost.css";

export default function Createpost() {
const [body, setBody] =  useState("");
const [image, setImage] = useState("")

const postDetails = () => {
    console.log(body,image)
}

    const loadfile = (event) => {
        var output = document.getElementById('output');
        output.src = URL.createObjectURL(event.target.files[0]);
        output.onload = function() {
            URL.revokeObjectURL(output.src)
    }};
  return (
    <div className='createPost'>
        <div className='post-header'>
            <h4 style={{margin:"3px auto"}}>ADD BOOK</h4>
            <button id='post-btn' onClick={()=>{postDetails()}}>Share</button>
        </div>
        <div className='main-div'>
            <img id='output' src='https://static.thenounproject.com/png/132220-200.png'/>
            <input type='file' accept='image/*' onChange={(event)=>{loadfile(event);
            setImage(event.target.files[0])}} />
        </div>
        <div className='details'>
            <div className='card-header'>
                <div className='card-pic'>
                    <img src='https://images.unsplash.com/photo-1592334873219-42ca023e48ce?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w3NjA4Mjc3NHx8ZW58MHx8fHx8' alt='' />
                </div>
                <h5>Lucifer</h5>
            </div>
            <textarea value={body} onChange={(e)=>{setBody(e.target.value)
            }} type="text" placeholder='Info Of Book'></textarea>
        </div>
    </div>
  )
}
