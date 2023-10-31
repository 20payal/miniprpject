import React from 'react'
import "./Home.css";

export default function Home() {
  return (
    <div className='home'>
      <div className='card'>
        <div className='card-header'>
          <div className='card-pic'>
            <img src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D' alt='' />
          </div>
          <h5>Payal</h5>
        </div>
        <div className='card-image'>
          <img src='https://m.media-amazon.com/images/I/81YFkgx4YXL._AC_UF1000,1000_QL80_.jpg' alt='' />
        </div>
        <div className='card-content'>
        <span className="material-symbols-outlined">favorite</span>
        <p>1 Like</p>
        <p>Amazing Book For Enginner</p>
        </div>
        <div className='add-comment'>
        <span className="material-symbols-outlined">comment</span>
        <input type='text' placeholder='Add a comment' />
        <button className='comment'>Post</button>
        </div>
      </div>
    </div>
  )
}
