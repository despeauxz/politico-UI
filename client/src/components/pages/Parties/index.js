/* eslint-disable max-len */
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import SideNav from '@containers/shared/SideNav';
import AuthHeader from '@components/shared/Header/AuthHeader';
import Modal from '@components/shared/Modal';
import '@components/shared/SideNav/index.scss';
import Plus from '@components/shared/Plus';
import Preloader from '@components/shared/Preloader/Preloader';
import NewPartyForm from '@containers/shared/Form/Party/NewParty';
import EditPartyForm from '@containers/shared/Form/Party/EditParty';
import DeletePartyForm from '@components/shared/Form/Party/DeleteParty';
import './index.scss';



class Parties extends Component {
    static propTypes = {
        user: PropTypes.object.isRequired,
        toggle: PropTypes.bool.isRequired,
        parties: PropTypes.array.isRequired,
        loading: PropTypes.bool,
        toggleModal: PropTypes.func.isRequired,
        getParties: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);

        this.state = {
            type: '',
            party: {}
        };
    }

    componentDidMount() {
        const { getParties } = this.props;
        getParties();
    }

    displayModal = () => {
        const { toggle } = this.props;
        const { type, party } = this.state;
        switch (type) {
        case 'create':
            return <Modal toggle={toggle} title="Add Party">
                <NewPartyForm />
            </Modal>;
        case 'edit':
            return <Modal toggle={toggle} title="Edit Party">
                <EditPartyForm party={party} />
            </Modal>;
        case 'delete':
            return <Modal toggle={toggle} title="Are you sure you want delete this Party?">
                <DeletePartyForm party={party} />
            </Modal>;
        default:
            return '';
        }
    }

    create = () => {
        const { toggleModal, toggle } = this.props;
        toggleModal(!toggle);
        this.setState({
            type: 'create'
        });
    }

    edit(party) {
        const { toggleModal, toggle } = this.props;
        toggleModal(!toggle);
        this.setState({
            type: 'edit',
            party
        });
    }

    delete(party) {
        const { toggleModal, toggle } = this.props;
        toggleModal(!toggle);
        this.setState({
            type: 'delete',
            party
        });
    }

    render() {
        const { user, parties, loading } = this.props;
        const modal = this.displayModal();

        return (
            <Fragment>
                {loading && <Preloader
                    type="page"
                    style="Triangle"
                    width={80}
                    height={80}
                    color="blue"
                />}
                <div className="font-sans antialiased h-screen flex">
                    <SideNav />
                    <div className="flex-1 flex flex-col bg-white overflow-hidden">
                        <AuthHeader />

                        <div className="px-6 py-4 flex-1 overflow-y-scroll">
                            <div className="center text-center">
                                {user.isAdmin &&
                                    <button className="p-3 rounded text-white bg-teal-600 hover:bg-teal-700 shadow-lg" onClick={this.create}>
                                        <span className="inline-block mr-2">
                                            <Plus />
                                        </span>New Party
                                    </button>
                                }
                            </div>
                            <div className="mt-8 flex flex-wrap justify-between">
                                {parties.map((party, index) => {
                                    return (
                                        <div key={index.toString()} className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2 mb-4 relative">
                                            {user.isAdmin &&
                                                <div className="absolute top-0 right-0 more">
                                                    <i className="icon ion-ios-more" />
                                                    <ul>
                                                        <li><a href="#" onClick={this.edit.bind(this, party)}>Edit</a></li>
                                                        <li><a href="#" onClick={this.delete.bind(this, party)}>Delete</a></li>
                                                    </ul>
                                                </div>
                                            }
                                            <div className="md:flex items-center bg-white shadow-lg rounded-lg p-6">
                                                <img className="h-16 w-16 md:h-20 md:w-20 rounded-full mx-auto md:mx-0 md:mr-6 mb-4 md:mb-0 lg:mb-0" src={party.logourl} />
                                                <div className="text-center md:text-left">
                                                    <h2 className="text-normal text-semibold">{party.name}</h2>
                                                    <div className="text-purple-500">{party.fullname}</div>
                                                    <div className="text-gray-600">{party.hqaddress}</div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                { modal }
            </Fragment>
        );
    }
}

export default Parties;
