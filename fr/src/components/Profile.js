import React from 'react'
import "./Profile.css";

export default function Profile() {
  return (
    <div className='profile'>
      <div className='profile-frame'>
        <div className='profile-pic'>
          <img src='https://images.unsplash.com/photo-1592334873219-42ca023e48ce?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w3NjA4Mjc3NHx8ZW58MHx8fHx8' alt='' />
        </div>
        <div className='profile-data'>
          <h1>Lucifer</h1>
          <div className='profile-info' style={{display:"flex"}}>
            <p>4 Book Posted  </p>
            <p>20 Connection</p>
          </div>
        </div>
      </div>
      <hr style={{
        width:"90%",opacity:"0.8",margin:"25px auto"
      }} />
      <div className='gallery'>
        <img src='https://cdn.kobo.com/book-images/f995df92-59db-4809-92e0-528d85f5680d/1200/1200/False/case-study-research-in-software-engineering.jpg' alt='' />
        <img src='https://cdn.kobo.com/book-images/f995df92-59db-4809-92e0-528d85f5680d/1200/1200/False/case-study-research-in-software-engineering.jpg' alt='' />
        <img src='https://cdn.kobo.com/book-images/f995df92-59db-4809-92e0-528d85f5680d/1200/1200/False/case-study-research-in-software-engineering.jpg' alt='' />
        <img src='https://cdn.kobo.com/book-images/f995df92-59db-4809-92e0-528d85f5680d/1200/1200/False/case-study-research-in-software-engineering.jpg' alt='' />

      </div>
    </div>
  )
}
