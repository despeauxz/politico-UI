/* eslint-disable max-len */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteParty } from '@actions/parties';
import { toggleModal } from '@actions/ui';

class DeleteParty extends Component {
    static propTypes = {
        party: PropTypes.object.isRequired,
        toggleModal: PropTypes.func.isRequired,
        deleteParty: PropTypes.func.isRequired,
    }

    constructor(props) {
        super(props);
    }

    closeModal = () => {
        const { toggleModal } = this.props;
        toggleModal(false);
    }

    remove = () => {
        const { deleteParty, party: { id } } = this.props;
        deleteParty(id);
    }

    render() {
        return (
            <div className="mt-4">
                <button className="py-2 px-6 mr-6 text-white bg-green-500 rounded" onClick={this.remove}>Yes</button>
                <button className="py-2 px-6 text-white bg-red-500 rounded" onClick={this.closeModal}>No</button>
            </div>
        );
    }
}

export default connect(null, { deleteParty, toggleModal })(DeleteParty);
