import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import SideNav from '@containers/shared/SideNav';
import Modal from '@components/shared/Modal';
import AuthHeader from '@components/shared/Header/AuthHeader';
import RenderInput from '@components/shared/FormComponent/RenderInput';

class Profile extends Component {
    static propTypes = {
        user: PropTypes.object.isRequired,
        toggle: PropTypes.bool.isRequired,
        toggleModal: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        const { firstname, lastname } = this.props.user;

        this.state = {
            firstname,
            lastname
        };
    }

    toggleModal = () => {
        const { toggleModal } = this.props;
        toggleModal(true);
    }

    render() {
        const { user, toggle } = this.props;
        const { firstname, lastname } = this.state;

        return (
            <Fragment>
                <div className="font-sans antialiased h-screen flex">
                    <SideNav />
                    <div className="flex-1 flex flex-col bg-white overflow-hidden">
                        <AuthHeader />

                        <div className="mt-8 container mx-auto">
                            <div className="flex justify-center flex-col mx-auto">
                                <div className="w-full h-64">
                                    <img src={user.avatar} alt={user.firstname} className="rounded-full w-32 h-32 mx-auto" />
                                    <h2 className="mt-6 font-semibold text-xl">{`${user.firstname} ${user.lastname}`}</h2>
                                    <button type="button" className="py-2 px-4 shadow rounded text-white bg-teal-500 hover:bg-teal-600 mt-4" onClick={this.toggleModal}>Edit Profile</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal toggle={toggle} title="Edit Profile">
                    <div className="mt-4">
                        <img src={user.avatar} alt={user.firstname} className="rounded-full w-32 h-32 mx-auto" />
                        <div className="mx-8">
                            <RenderInput
                                type="text"
                                name="firstname"
                                id="firstname"
                                label="Firstname"
                                value={firstname}
                                className=""
                                handleChange={() => {}}
                            />
                        </div>
                    </div>
                </Modal>
            </Fragment>
        );
    }
}

export default Profile;
