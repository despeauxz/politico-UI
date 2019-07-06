import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const BreadCrumbs = (props) => {
    return (
        <nav className="bg-grey-light p-3 rounded font-sans w-full m-4">
            <ol className="list-reset flex text-grey-dark">
                <li>
                    <Link to="#" className="text-blue font-bold">Home</Link>
                </li>
                <li><span className="mx-2">/</span></li>
                {props.children}
            </ol>
        </nav>
    );
};

BreadCrumbs.propTypes = {
    children: PropTypes.object
};

export default BreadCrumbs;
