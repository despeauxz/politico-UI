import React, { Fragment } from 'react';
import Header from '../../shared/Header/HomeHeader';


const NotFound = () => {
    return (
        <Fragment>
            <div className="container">
                <Header />

                <div>
                    <h1>Page Not Found</h1>
                </div>
            </div>
        </Fragment>
    );
};

export default NotFound;

