import imgNotFound from '../images/Group 16.png'
import { Link } from "react-router-dom";
import "./style.css"

export function NotNav(){
    return(
        <section className='notNav-section'>
          <ul className='main-section px-1'>
          <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",backgroundColor:"#ffff",width:"825px",height:"600px",borderRadius:"10px",textAlign:"center"}}>
        <img src={imgNotFound}  style={{borderRadius:"50%", width:"100px", height:"100px"}} alt="" />
        <h1 className='notF-texs'>There is no feedback yet.</h1> 
        <p className='notF-text'>Got a suggestion? Found a bug that needs to be squashed? <br />
        We love hearing about new ideas to improve our app.</p> 
        <Link style={{textDecoration:"none"}}  className='btn btn-primary'  to={"/"}>+ Add Feedback</Link>
        </div>
          </ul>
          </section>  
    )
}