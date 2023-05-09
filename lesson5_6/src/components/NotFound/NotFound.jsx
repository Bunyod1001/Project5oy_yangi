import React from 'react'
// import { Link } from "react-router-dom";
import Aside from '../Aside/Aside';
// import imgNotFound from '../images/Group 16.png'
import { Nav } from '../Nav';
import { NotNav } from './NotNav';

export function NotFound() {
    return (
        <div className='container d-flex '>
            <Aside />
            <div>
                <Nav />
                <NotNav />
            </div>
        </div>
    );
}
