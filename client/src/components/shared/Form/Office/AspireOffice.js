/* eslint-disable max-len */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { aspireOffice } from '@actions/office';
import { toggleModal } from '@actions/ui';

class DeleteParty extends Component {
    static propTypes = {
        user: PropTypes.object.isRequired,
        office: PropTypes.object.isRequired,
        toggleModal: PropTypes.func.isRequired,
        aspireOffice: PropTypes.func.isRequired,
    }

    constructor(props) {
        super(props);
    }

    closeModal = () => {
        const { toggleModal } = this.props;
        toggleModal(false);
    }

    aspire() {
        const { user: { partyId, id: userId } } = this.props;
        const { aspireOffice, office: { id: officeId } } = this.props;
        if (partyId === null) {
            toast.error('Please join a party before proceeding');
        }
        aspireOffice(userId, officeId, partyId);
    }

    render() {
        return (
            <div className="mt-4">
<<<<<<< HEAD
                <button className="py-2 px-6 mr-6 text-white bg-green-500 rounded" onClick={this.aspire.bind(this)}>Yes</button>
                <button className="py-2 px-6 text-white bg-red-500 rounded" onClick={this.closeModal}>No</button>
=======
                <button className="py-4 px-6 mr-6 text-white bg-green-500 rounded" onClick={this.aspire.bind(this)}>Yes</button>
                <button className="py-4 px-6 text-white bg-red-500 rounded" onClick={this.closeModal}>No</button>
>>>>>>> develop
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.auth.user
});

export default connect(mapStateToProps, { aspireOffice, toggleModal })(DeleteParty);
