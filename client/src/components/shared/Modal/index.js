/* eslint-disable max-len */
import React, { Component } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleModal } from '@actions/ui';
import './index.scss';


class Modal extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    exitModal = () => {
        const { toggleModal } = this.props;
        toggleModal(false);
    }

    render() {
        const { toggle, title, children } = this.props;
        return (
            <div className={classNames('modal', { 'is-visible': toggle })}>
                <div className="modal-container text-center relative">
                    <div className="absolute exit cursor-pointer bg-gray-300 hover:bg-gray-100" onClick={this.exitModal}>
                        <i className="icon ion-md-close" />
                    </div>
                    <div className="modal_title">
                        <h2 className="text-normal font-bold">{title}</h2>
                    </div>
                    <div className="modal_body">
                        {children}
                    </div>
                </div>
            </div>
        );
    }
}

Modal.propTypes = {
    toggle: PropTypes.bool,
    title: PropTypes.string.isRequired,
    toggleModal: PropTypes.func.isRequired,
    children: PropTypes.object
};

Modal.defaultProp = {
    toggle: false
};

const mapStateToProps = state => ({
    toggle: state.ui.toggle,
});


export default connect(mapStateToProps, { toggleModal })(Modal);
