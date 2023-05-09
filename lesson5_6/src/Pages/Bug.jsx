import { Link } from "react-router-dom";
import { useEffect, useState } from "react"
import axios from "axios";


export function Bug(){
   
        const[Bug,SetBug]= useState([])

        useEffect(() => {
            axios.get("https://jsonplaceholder.typicode.com/comments?postId=1")
            .then((res)=>{
                console.log(res.data);
                SetBug(res.data)
            }).catch((error)=>{
                console.log(error);
            })
        },[])
     
        return(
            <div className="container bg-light" style={{justifyContent:"center",alignItems:"center",alignSelf:"center"}}>
                <header className="d-flex justify-content-around">
                 <Link style={{ textDecoration: "none" }} className='btn out-line' to={"/"}><i class="bi bi-chevron-left"></i> Go Back</Link>
                 <Link style={{textDecoration:"none",backgroundColor:"#4661E6"}}  className='btn btn-primary'  to={"/edit"}>Edit Feedback</Link>
               </header>
            <section className="d-flex justify-content-center">
            <li className='main-section_li mt-4 d-flex'>
              <button className='main-section_btn btn btn-link mx-4 mt-4'><i className="bi bi-chevron-up"></i>42</button>
              <div className='mt-4 main-section_texts'>
              <h6 className='main-section_text'> Ability to follow others</h6>
              <p className='main-section_p'>Easier to search for solutions based on a specific stack.</p>
              <Link className='btn btn-link ' to="/comments">Feature</Link>
              </div>
              <i className="bi bi-chat-fill mt-5">2</i>
            </li>
            </section>
            <div className="d-flex justify-content-center">
            <div className="" style={{width:"818px",marginTop:"30px",backgroundColor:"#FFFF",borderRadius:"10px"}}>
            {
                Bug?.map((item)=><h3>{item.body}</h3>)
            }
        </div>
        </div>
        <div className=" d-flex justify-content-center">
        <div className="AddComment  mt-4" style={{backgroundColor:"#FFFFFF",borderRadius:"10px",width:"815px"}}>
            <h3>Add Comment</h3>
            <input type="text" name="" id="" style={{background:" #F7F8FD",borderRadius:"5px",width:"686px",height:"96px", marginLeft:"40px",marginBottom:"20px",border:"0"}}/>
            <div className="d-flex justify-content-around">
            <p>250 Characters left</p>
            <Link style={{ textDecoration: "none" }} className='btn btn-primary' to={"#"}>Post Comment</Link>
        </div>
        </div>
        </div>
        </div>
     )
}