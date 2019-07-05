import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';


class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <Fragment>
                <div className="bg-white shadow w-64 my-2 h-full fixed">
                    <ul className="list-reset">
                        <li >
                            <Link to="/" className="block p-4 text-grey-darker font-bold border-purple hover:bg-grey-lighter border-r-4">Home</Link>
                        </li>
                        <li >
                            <a href="#" className="block p-4 text-grey-darker font-bold border-grey-lighter hover:border-purple-light hover:bg-grey-lighter border-r-4">About us</a>
                        </li>
                        <li >
                            <a href="#" className="block p-4 text-grey-darker font-bold border-grey-lighter hover:border-purple-light hover:bg-grey-lighter border-r-4">Services</a>
                        </li>
                        <li >
                            <a href="#" className="block p-4 text-grey-darker font-bold border-grey-lighter hover:border-purple-light hover:bg-grey-lighter border-r-4">Contact us</a>
                        </li>
                    </ul>
                </div>
            </Fragment>
        );
    }
}

export default Sidebar;
