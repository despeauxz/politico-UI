import React, { Component, Fragment } from 'react';
import SideNav from '@containers/shared/SideNav';
import Admin from '@containers/shared/Admin';
import Home from '@containers/shared/Home';
import AuthHeader from '@components/shared/Header/AuthHeader';
import { userPropType } from '@helpers/proptypes';


class Dashboard extends Component {
    constructor(props) {
        super(props);

    }

    static propTypes = {
        ...userPropType
    }

    getPageRender = () => {
        switch (this.props.user.isAdmin) {
        case true:
            return <Admin />;
        default:
            return <Home />;
        }
    }


    render() {
        const page = this.getPageRender();

        return (
            <Fragment>
                <div className="font-sans antialiased h-screen flex">
                    <SideNav />
                    <div className="flex-1 flex flex-col bg-white overflow-hidden">
                        <AuthHeader />

                        <div className="px-6 py-4 flex-1 overflow-y-scroll">
                            { page }
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}


export default Dashboard;
