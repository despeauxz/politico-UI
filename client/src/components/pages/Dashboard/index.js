import React, { Component, Fragment } from 'react';
import SideNav from '@components/shared/SideNav';
import Header from '@containers/shared/Header';


class Dashboard extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <Fragment>
                <Header />
                <SideNav />

                <div className="container mx-auto">
                    
                </div>
            </Fragment>
        );
    }
}

export default Dashboard;
