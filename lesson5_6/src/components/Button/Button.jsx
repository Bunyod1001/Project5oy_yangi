import { Link } from "react-router-dom";
export function Btn (){
    return(<>
    <Link className='btn btn-link' to="/">All</Link>
    <Link className='btn btn-link m-2' to="/commnts">UI</Link>
    <Link className='btn btn-link' to="/comments">UX</Link>
    <Link className='btn btn-link' to="/comments">Enhancement</Link>
    <Link className='btn btn-link m-2' to="/comments">Bug</Link>
    <Link className='btn btn-link mt-2' to="/comments">Feature</Link>
        {/* <button className='btn btn-link'>All</button> */}
        {/* <button className='btn btn-link m-2'>UI</button>
        <button className='btn btn-link '>UX</button>
        <button className='btn btn-link '>Enhancement</button>
        <button className='btn btn-link m-2'>Bug</button>
        <button className='btn btn-link mt-2'>Feature</button> */}
        </>
    );
}