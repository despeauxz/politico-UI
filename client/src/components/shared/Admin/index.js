/* eslint-disable max-len */
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import BreadCrumbs from '@components/shared/BreadCrumbs';

class Admin extends Component {
    static propTypes = {
        data: PropTypes.object.isRequired,
        appDataCount: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);

        this.state = {

        };
    }

    componentDidMount() {
        this.props.appDataCount();
    }

    render() {
        const { data } = this.props;
        return (
            <Fragment>
                <BreadCrumbs />
                <div className="flex flex-wrap -mx-1 lg:-mx-4 mx-auto">
                    <div className="my-1 px-1 w-full md:w-1/2 h-auto lg:my-4 lg:px-4 lg:w-1/3 text-center">
                        <article className="overflow-hidden py-4 rounded-lg shadow-lg h-auto center">
                            <h1 className="text-md font-bold">Users</h1>
                            <h2 className="font-black text-lg">{data.users}</h2>
                        </article>
                    </div>
                    <div className="my-1 px-1 w-full md:w-1/2 h-auto lg:my-4 lg:px-4 lg:w-1/3 text-center">
                        <article className="overflow-hidden py-4 rounded-lg shadow-lg h-auto center">
                            <h1 className="text-md font-bold">Offices</h1>
                            <h2 className="font-black text-lg">{data.offices}</h2>
                        </article>
                    </div>
                    <div className="my-1 px-1 w-full md:w-1/2 h-auto lg:my-4 lg:px-4 lg:w-1/3 text-center">
                        <article className="overflow-hidden py-4 rounded-lg shadow-lg h-auto center">
                            <h1 className="text-md font-bold">Parties</h1>
                            <h2 className="font-black text-lg">{data.parties}</h2>
                        </article>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Admin;
