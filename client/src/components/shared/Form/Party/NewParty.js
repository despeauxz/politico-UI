/* eslint-disable max-len */
import React, { Component, Fragment } from 'react';
import classNames from 'classnames';
import axios from 'axios';
import PropTypes from 'prop-types';
import RenderInput from '@components/shared/FormComponent/RenderInput';
import Preloader from '@components/shared/Preloader/Preloader';
import Plus from '@components/shared/Plus';
import './index.scss';

const instance = axios.create({
    headers: {}
});


class NewParty extends Component {
    static propTypes = {
        errors: PropTypes.shape({}),
        createParty: PropTypes.func.isRequired,
        loading: PropTypes.bool.isRequired
    }

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            fullname: '',
            hqAddress: '',
            logoUrl: '',
            errors: {},
            formErrors: {},
            formValid: false
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const { createParty } = this.props;
        const { name, fullname, hqAddress, logoUrl } = this.state;
        const values = {
            name,
            fullname,
            hqAddress,
            logoUrl
        };
        createParty(values);
    }

    handleChange(e) {
        e.preventDefault();
  
        const { name, value } = e.target;
  
        this.setState({
            [name]: value
        });
    }


    uploadImageCallBack = (file) => {
        const url = 'https://api.cloudinary.com/v1_1/druxgvyx3/image/upload';
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'politico');
        return instance.post(url, formData, { headers: { 'X-Requested-With': 'XMLHttpRequest' } });
    };

    uploadImage = (e) => {
        const file = e.target.files[0];
        this.uploadImageCallBack(file).then((result, error) => {
            this.setState({
                logoUrl: result.data.url
            });
            if (result.data.url) {
                return result.data.url;
            } else {
                console.log(error);
            }
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }

    render() {
        const { errors, formErrors, logoUrl, formValid } = this.state;
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
                        value={this.state.hqAddress}
                        className={classNames('form-control border border-indigo-700 text-gray-600', { 'error': errors.hqAddress })}
                        error={errors.hqAddress ? errors.hqAddress.msg : ''}
                        handleChange={this.handleChange.bind(this)}
                        onFocus={() => {}}
                    />

                    <div className="flex items-center justify-center">
                        <label className="w-64 flex flex-col items-center px-2 py-2 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue-600 hover:text-white">
                            <svg className="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                            </svg>
                            <span className="mt-2 text-base leading-normal">Select a file</span>
                            <input type='file' className="hidden upload-button" onChange={this.uploadImage} />
                        </label>
                    </div>
                    <div className="flex items-center justify-center">
                        {logoUrl !== '' ?
                            <span><i className="lowercase text-xs text-green-700">Image Uploaded!</i></span>
                            : ''
                        }
                        {errors.logoUrl ? 
                            <span><i className="lowercase text-xs text-red-700">Image Required!</i></span>
                            : ''
                        }
                    </div>

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
                            : <Fragment>
                                <span className="inline-block mr-2">
                                    <Plus />
                                </span> Create
                            </Fragment>}
                    </button>
                </form>
            </Fragment>
        );
    }
}

export default NewParty;
