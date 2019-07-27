import React, { Fragment } from 'react';

const AuthHeader = () => {
    return (
        <Fragment>
            <div className="border-b flex px-6 py-2 items-center flex-none">
                <div className="flex flex-col">
                    <h3 className="text-grey-darkest mb-1 font-extrabold">#Politico</h3>
                </div>
                <div className="mx-auto md:block">
                    <div className="relative">
                        <input type="search" placeholder="Search" className="appearance-none border border-grey rounded-lg pl-8 pr-4 py-2" />
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default AuthHeader;
