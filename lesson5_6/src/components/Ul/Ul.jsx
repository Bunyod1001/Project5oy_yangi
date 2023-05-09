import { Btn } from "../Button";


export function AsideUl(){
    return(
        <ul className='aside-ul'>
            <li className='aside-1 py-3 '>
              <h1 className='aside-h1 mt-5  px-3'>Frontend Mentor</h1>
              <p className='aside-p px-3'>Feedback Board</p>
            </li>
            <li className='aside-2 mt-4'>
              <Btn/>
              </li>
            <li className='aside-3 mt-4'>
              <div className='d-flex'>
                <p className='aside-text px-2 m-3'>Roadmap</p>
                <a className='px-5 m-3' href="#">View</a>
              </div>
              <div className='d-flex'>
                <ul className='aside-3_text'>
                  <li>Planned</li>
                  <li className='py-2'>In-Progress</li>
                  <li>Live</li>
                </ul>
                <ul className='aside-3_number mx-4'>
                  <li>2</li>
                  <li className='py-2'>3</li>
                  <li>1</li>
                </ul>
              </div>
            </li>
          </ul>
    );
}