/* eslint-disable max-len */
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Plus from '@components/shared/Plus';
import './index.scss';


class Sidebar extends Component {
    static propTypes = {
        user: PropTypes.object.isRequired,
        logout: PropTypes.func
    }

    constructor(props) {
        super(props);

        this.state = {
            visible: false
        };
    }

    onClick = () => {
        const { visible } = this.state;
        this.setState({
            visible: !visible
        });
    }

    logout = () => {
        this.props.logout();
    }

    render() {
        const { user } = this.props;
        const { visible } = this.state;

        return (
            <Fragment>
                <div className="bg-indigo-900 text-purple-lighter flex-none w-64 pb-6 hidden md:block">
                    <div className="text-white mb-2 mt-3 px-4 flex justify-between">
                        <div className="flex-auto">
                            <Link to="/" className="font-semibold text-xl leading-tight mb-1 truncate">Politico</Link>
                            <div className="flex items-center my-4 relative">
                                <span className="bg-green-600 rounded-full block w-2 h-2 mr-2"></span>
                                <Link to="#" className="text-white opacity-50 text-sm" onClick={this.onClick}>{user.firstname} {user.lastname}</Link>
                                <div className={classNames('absolute w-64 p-6 rounded border top-25 z-10 h-auto bg-white text-black shadow-lg', { 'hidden': !visible })}>
                                    <div className="">
                                        <div className="flex mb-8">
                                            <img src="https://avatars2.githubusercontent.com/u/16857803?s=400&u=e8a05c3a90f7fd096d4ba8e7438d94704b0cc3a6&v=4" alt="avatar" className="w-8 h-8 rounded mr-4" />
                                            <h3 className="text-gray-900 font-black text-normal">{user.firstname} {user.lastname}</h3>
                                        </div>
                                        <div className="text-gray-900 text-base">
                                            <div className="block mb-4">
                                                <Link to="/profile">Profile and Settings</Link>
                                            </div>
                                            <div className="border block my-4"></div>
                                            <div className="block mb-4">
                                                <Link to="/" onClick={this.logout}>Sign out</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <svg className="h-6 w-6 fill-current text-white opacity-25" viewBox="0 0 20 20">
                                <path d="M14 8a4 4 0 1 0-8 0v7h8V8zM8.027 2.332A6.003 6.003 0 0 0 4 8v6l-3 2v1h18v-1l-3-2V8a6.003 6.003 0 0 0-4.027-5.668 2 2 0 1 0-3.945 0zM12 18a2 2 0 1 1-4 0h4z" fillRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                    <div className="my-8">
                        <div className="px-4 mb-2 text-white flex justify-between items-center">
                            <div className="opacity-75">Features</div>
                            <div>
                                <Plus />
                            </div>
                        </div>
                        <div className="flex items-center my-4">
                            <Link to="/parties" className="text-white opacity-75 block w-full p-4 hover:bg-teal-400">Parties</Link>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Sidebar;
