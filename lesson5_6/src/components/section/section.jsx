import { Link } from "react-router-dom";


export function MainSection(){
    return(
        <section>
          <ul className='main-section px-1'>
            <li className='main-section_li mt-4 d-flex'>
              <button className='main-section_btn btn btn-link mx-4 mt-4'><i className="bi bi-chevron-up"></i>112</button>
              <div className='mt-4 main-section_texts'>
              <h6 className='main-section_text'> Add tags for solutions</h6>
              <p className='main-section_p'>Easier to search for solutions based on a specific stack.</p>
              <Link className='btn btn-link' to="/comments">Enhancement</Link>
              </div>
              <i className="bi bi-chat-fill mt-5">2</i>
            </li>
            <li className='main-section_li mt-4 d-flex'>
              <button className='main-section_btn btn btn-link mx-4 mt-4'><i className="bi bi-chevron-up"></i>99</button>
              <div className='mt-4 main-section_texts'>
              <h6 className='main-section_text'>Add a dark theme option</h6>
              <p className='main-section_p'>It would help people with light sensitivities and who prefer dark mode.</p>
              <Link className='btn btn-link  mb-2' to="/comments">Feature</Link>
              </div>
              <i className="bi bi-chat-fill mt-5">4</i>
            </li>
            <li className='main-section_li mt-4 d-flex'>
              <button className='main-section_btn btn btn-link mx-4 mt-4'><i className="bi bi-chevron-up"></i>65</button>
              <div className='mt-4 main-section_texts'>
              <h6 className='main-section_text'> Q&A within the challenge hubs</h6>
              <p className='main-section_p'>Challenge-specific Q&A would make for easy reference.</p>
              <Link className='btn btn-link ' to="/comments">Feature</Link>
              </div>
              <i className="bi bi-chat-fill mt-5">1</i>
            </li>
            <li className='main-section_li mt-4 d-flex'>
              <button className='main-section_btn btn btn-link active mx-4 mt-4'><i className="bi bi-chevron-up"></i>51</button>
              <div className='mt-4 main-section_texts'>
              <h6 className='main-section_text'> Allow image/video upload </h6>
              <p className='main-section_p'>Images and screencasts can enhance comments on solutions.</p>
              <Link className='btn btn-link' to="/comments">Enhancement</Link>
              </div>
              <i className="bi bi-chat-fill mt-5">2</i>
            </li>
            <li className='main-section_li mt-4 d-flex'>
              <button className='main-section_btn btn btn-link mx-4 mt-4'><i className="bi bi-chevron-up"></i>42</button>
              <div className='mt-4 main-section_texts'>
              <h6 className='main-section_text'> Ability to follow others</h6>
              <p className='main-section_p'>Easier to search for solutions based on a specific stack.</p>
              <Link className='btn btn-link ' to="/comments">Feature</Link>
              </div>
              <i className="bi bi-chat-fill mt-5">2</i>
            </li>
            <li className='main-section_li mt-4 d-flex'>
              <button className='main-section_btn btn btn-link mx-4 mt-4'><i className="bi bi-chevron-up"></i>3</button>
              <div className='mt-4 main-section_texts'>
              <h6 className='main-section_text'> Preview images not loading</h6>
              <p className='main-section_p'>Stay updated on comments and solutions other people post.</p>
              <Link className='btn btn-link ' to="/comments">Bug</Link>
              </div>
              <i className="bi bi-chat-fill mt-5">0</i>
            </li>
          </ul>
          </section>  
    )
}