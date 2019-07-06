import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Modal = (props) => {
    return (
        <div className={classNames('modal', { 'is-visible': props.toggle })}>
            <div className="modal-container">
                <div className="modal_title">
                    <h2>{props.title}</h2>
                </div>
                <div className="modal_body">
                    {props.children}
                </div>
            </div>
        </div>
    );
};

Modal.propTypes = {
    toggle: PropTypes.bool,
    title: PropTypes.string.isRequired,
    children: PropTypes.object
};

Modal.defaultProp = {
    toggle: false
};



export default Modal;
