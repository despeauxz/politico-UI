/* eslint-disable max-len */
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import SideNav from '@containers/shared/SideNav';
import AuthHeader from '@components/shared/Header/AuthHeader';
import Modal from '@components/shared/Modal';
import Plus from '@components/shared/Plus';
import Preloader from '@components/shared/Preloader/Preloader';
import NewOffice from '@containers/shared/Form/Office/NewOffice';
import EditOfficeForm from '@containers/shared/Form/Office/EditOffice';
import DeleteOfficeForm from '@components/shared/Form/Office/DeleteOffice';
import AspireOfficeForm from '@components/shared/Form/Office/AspireOffice';
import PetitionOffice from '@containers/shared/Form/Office/PetitionOffice';
import '@components/shared/SideNav/index.scss';


class Office extends Component {
    static propTypes = {
        loading: PropTypes.bool.isRequired,
        user: PropTypes.object.isRequired,
        toggle:PropTypes.bool.isRequired,
        offices: PropTypes.array.isRequired,
        toggleModal: PropTypes.func,
        getOffices: PropTypes.func.isRequired
    }
    constructor(props) {
        super(props);

        this.state = {
            type: '',
            office: {}
        };
    }

    componentDidMount() {
        const { getOffices } = this.props;
        getOffices();
    }

    create = () => {
        const { toggleModal, toggle } = this.props;
        toggleModal(!toggle);
        this.setState({
            type: 'create'
        });
    }

    edit(office){
        const { toggleModal, toggle } = this.props;
        toggleModal(!toggle);
        this.setState({
            type: 'edit',
            office
        });
    }

    remove(office){
        const { toggleModal, toggle } = this.props;
        toggleModal(!toggle);
        this.setState({
            type: 'delete',
            office
        });
    }

    vote(office){
        const { toggleModal, toggle } = this.props;
        toggleModal(!toggle);
        this.setState({
            type: 'vote',
            office
        });
    }

    aspire(office){
        const { toggleModal, toggle } = this.props;
        toggleModal(!toggle);
        this.setState({
            type: 'aspire',
            office
        });
    }

    petition(office){
        const { toggleModal, toggle } = this.props;
        toggleModal(!toggle);
        this.setState({
            type: 'petition',
            office
        });
    }

    displayModal = () => {
        const { toggle } = this.props;
        const { type, office } = this.state;
        switch (type) {
        case 'create':
            return <Modal toggle={toggle} title="Add Party">
                <NewOffice />
            </Modal>;
        case 'vote':
            return <Modal toggle={toggle} title="Vote for Candidate">
                Vote
            </Modal>;
        case 'aspire':
            return <Modal toggle={toggle} title="Aspire for Office">
                <AspireOfficeForm office={office} />
            </Modal>;
        case 'petition':
            return <Modal toggle={toggle} title="Petition">
                <PetitionOffice office={office} />
            </Modal>;
        case 'edit':
            return <Modal toggle={toggle} title="Edit Office">
                <EditOfficeForm office={office} />
            </Modal>;
        case 'delete':
            return <Modal toggle={toggle} title="Are you sure you want to Delete Office?">
                <DeleteOfficeForm office={office} />
            </Modal>;
        default:
            return '';
        }
    }

    render() {
        const { loading, user, offices } = this.props;
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
                                  </span>New Office
                              </button>
                                }
                                {<div className="mt-8 flex flex-wrap justify-between">
                                    {offices.map((office, index) => {
                                        return (
                                            <div key={index.toString()} className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2 mb-4 relative">
                                                <div className="absolute top-0 right-0 more">
                                                    <i className="icon ion-ios-more" />
                                                    <ul>
                                                        <li><a href="#" onClick={this.vote.bind(this, office)}>Vote</a></li>
                                                        <li><a href="#" onClick={this.aspire.bind(this, office)}>Aspire</a></li>
                                                        <li><a href="#" onClick={this.petition.bind(this, office)}>Petition</a></li>
                                                    </ul>
                                                </div>
                                                {user.isAdmin &&
                                                    <div className="absolute top-0 left-0 more-left">
                                                        <i className="icon ion-ios-more" />

                                                        <ul>
                                                            <li><a href="#" onClick={this.edit.bind(this, office)}>Edit</a></li>
                                                            <li><a href="#" onClick={this.remove.bind(this, office)}>Delete</a></li>
                                                        </ul>
                                                    </div>
                                                }
                                                <div className="items-center bg-white shadow-lg border border-gray-200 rounded-lg p-6">
                                                    <div className="text-center md:text-left">
                                                        <h2 className="text-xl text-bold mb-2">{office.name}</h2>
                                                        <div className="text-purple-500 mb-2">Office Type: {office.type}</div>
                                                        <div className="text-gray-600 mb-2">Election Date: {moment(office.electiondate).format('MMMM Do, YYYY')}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>

                {modal}
            </Fragment>
        );
    }
}

export default Office;
