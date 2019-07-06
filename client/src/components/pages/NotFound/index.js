import React, { Fragment } from 'react';
import Header from '@containers/shared/Header';
import ErrorImage from '@base/img/404-page.jpg';


const NotFound = () => {
    return (
        <Fragment>
            <Header />
            <div className="">
                <div className="">
                    <img src={ErrorImage} alt="404-page" className="w-screen" />
                </div>
            </div>
        </Fragment>
    );
};

export default NotFound;

