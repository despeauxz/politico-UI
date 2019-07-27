/* eslint-disable max-len */
import React, { Component, Fragment } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import RenderInput from '@components/shared/FormComponent/RenderInput';
import Preloader from '@components/shared/Preloader/Preloader';
import Plus from '@components/shared/Plus';
import './index.scss';


class NewParty extends Component {
    static propTypes = {
        errors: PropTypes.shape({}),
        editParty: PropTypes.func.isRequired,
        loading: PropTypes.bool.isRequired,
        party: PropTypes.object
    }

    constructor(props) {
        super(props);
        const { name, fullname, hqaddress } = this.props.party;
        this.state = {
            name,
            fullname,
            hqAddress: hqaddress,
            errors: {},
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const { editParty, party: { id } } = this.props;
        const { name } = this.state;
        const values = { name };
        editParty(id, values);
    }

    handleChange(e) {
        e.preventDefault();
  
        const { name, value } = e.target;
  
        this.setState({
            [name]: value
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }

    render() {
        const { errors } = this.state;
        const { loading } = this.props;

        return (
            <Fragment>
                <form onSubmit={this.handleSubmit.bind(this)} className="mt-6">
                    <RenderInput
                        label="Name"
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        value={this.state.name}
                        className={classNames('form-control border border-indigo-700 text-gray-600', { 'error': errors.name })}
                        error={errors.name ? errors.name.msg : ''}
                        handleChange={this.handleChange.bind(this)}
                        onFocus={() => {}}
                    />
                    <RenderInput
                        label="Full Name"
                        type="text"
                        name="fullname"
                        id="fullname"
                        disabled
                        placeholder="Full Name"
                        value={this.state.fullname}
                        className={classNames('form-control border border-indigo-700 text-gray-600', { 'error': errors.fullname })}
                        error={errors.fullname ? errors.fullname.msg : ''}
                        handleChange={this.handleChange.bind(this)}
                        onFocus={() => {}}
                    />
                    <RenderInput
                        label="HQ Address"
                        type="text"
                        name="hqAddress"
                        id="hqAddress"
                        placeholder="HQ Address"
                        disabled
                        value={this.state.hqAddress}
                        className={classNames('form-control border border-indigo-700 text-gray-600', { 'error': errors.hqAddress })}
                        error={errors.hqAddress ? errors.hqAddress.msg : ''}
                        handleChange={this.handleChange.bind(this)}
                        onFocus={() => {}}
                    />

                    <button className="py-3 px-6 my-8 rounded text-white bg-teal-600 hover:bg-teal-700 shadow-lg" disabled={loading} type="submit">
                        {loading === true ?
                            <Preloader
                                className="py-1 px-8"
                                type="button"
                                style="TailSpin"
                                height={12}
                                width={12}
                                color="white"
                            />
                            : 'Edit'}
                    </button>
                </form>
            </Fragment>
        );
    }
}

export default NewParty;
