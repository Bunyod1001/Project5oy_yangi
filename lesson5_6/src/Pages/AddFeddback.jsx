import { Link } from "react-router-dom";
import styles from './style.module.css'; 

export function AddFeedback() {
    return (
        <div className="container" style={{backgroundColor:"#F2F2F2"}}>
            <Link style={{ textDecoration: "none" }} className='btn out-line' to={"/"}><i class="bi bi-chevron-left"></i> Go Back</Link>
            <div className={styles.card}>
            <div>
                <h1 className={styles.navTitles}>Create New Feedback</h1>
                <div>
                    <p className={styles.navTitle}>Feedback Title</p>
                    <p className={styles.navP}>Add a short, descriptive headline</p>
                    <input type="text" name="" id="" style={{background:" #F7F8FD",borderRadius:"5px",width:"456px",height:"48px", marginLeft:"40px",marginBottom:"20px",border:"0"}}/>
                </div>
                <div>
                    <p className={styles.navTitle}>Category</p>
                    <p className={styles.navP}>Choose a category for your feedback</p>
                    <div className={styles.dropdown}>
                        <button className="btn  dropdown-toggle" style={{background:" #F7F8FD",borderRadius:"5px",width:"456px",height:"48px", marginLeft:"40px",marginBottom:"20px"}} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Feature
                        </button>
                        <ul className="dropdown-menu mt-3" style={{width:"456px",textAlign:"start"}}>
                            <li><Link className="dropdown-item" to="#">UI</Link></li>
                            <li><Link className="dropdown-item active" style={{ backgroundColor: "#ffff", color: "#AD1FEA" }} to="#" aria-current="true">UX</Link></li>
                            <li><Link className="dropdown-item" to="#">Enhancement</Link></li>
                            <li><Link className="dropdown-item" to="#">Bug</Link></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <p className={styles.navTitle}>Feedback Detail</p>
                    <p className={styles.navP}>Include any specific comments on what should be improved, added, etc.</p>
                    <input type="text" name="" id="" style={{background:" #F7F8FD",borderRadius:"5px",width:"456px",height:"96px", marginLeft:"40px",marginBottom:"20px",border:"0"}}/>
                </div>
                <div style={{marginLeft:"270px"}}>
                    <button style={{textDecoration:"none",borderRadius:"10px",backgroundColor:"#3A4374"}}  className='cancel btn mx-1'  to={"/"}>Cancel</button>
                    <Link style={{ textDecoration: "none" }} className='btn btn-primary' to={"/addfeedback"}>+ Add Feedback</Link>
                </div>
            </div>
        </div>
    </div>
    )
}