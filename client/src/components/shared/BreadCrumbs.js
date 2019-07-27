import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const BreadCrumbs = (props) => {
    return (
        <nav className="bg-grey-light rounded font-sans w-full flex mb-4 items-start text-sm">
            <ol className="list-reset flex text-grey-dark">
                <li>
                    <Link to="#" className="text-black font-bold">Home</Link>
                </li>
                {props.children}
            </ol>
        </nav>
    );
};

BreadCrumbs.propTypes = {
    children: PropTypes.object
};

export default BreadCrumbs;
