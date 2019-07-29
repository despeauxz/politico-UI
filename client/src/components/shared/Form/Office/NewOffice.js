/* eslint-disable max-len */
import React, { Component, Fragment } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import RenderInput from '@components/shared/FormComponent/RenderInput';
import Preloader from '@components/shared/Preloader/Preloader';
import Plus from '@components/shared/Plus';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../Party/index.scss';


class NewOffice extends Component {
    static propTypes = {
        errors: PropTypes.shape({}),
        createOffice: PropTypes.func.isRequired,
        loading: PropTypes.bool.isRequired
    }

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            type: '',
            electionDate: '',
            errors: {},
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const { createOffice } = this.props;
        const { name, type, electionDate } = this.state;
        const values = {
            name,
            type,
            electionDate,
        };
        createOffice(values);
    }

    handleChange(e) {
        e.preventDefault();
  
        const { name, value } = e.target;
  
        this.setState({
            [name]: value
        });
    }

    handleDateChange = (date) => {
        this.setState({
            electionDate: date
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }

    render() {
        const { errors, name, type } = this.state;
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
                        value={name}
                        className={classNames('form-control border border-indigo-700 text-gray-600', { 'error': errors.name })}
                        error={errors.name ? errors.name.msg : ''}
                        handleChange={this.handleChange.bind(this)}
                        onFocus={() => {}}
                    />

                    <div className="form-group">
                        <label htmlFor="type" className="control-label">Type</label>
                        <select onChange={this.handleChange.bind(this)} name="type" value={this.state.type} className="form-control border border-indigo-700 text-gray-600">
                            <option value="Federal" defaultValue="Federal">Federal</option>
                            <option value="Legislative">Legislative</option>
                            <option value="State">State</option>
                            <option value="Local">Local</option>
                        </select>
                        {errors.type && <div className="text-red-600 text-xs text-left">{errors.type.msg}</div>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="date" className="control-label">Election Date</label>
                        <DatePicker
                            selected={this.state.electionDate}
                            onChange={this.handleDateChange}
                            className="text-black block"
                            placeholder="Select election date"
                        />
                        {errors.electionDate && <div className="text-red-600 text-xs text-left">{errors.electionDate.msg}</div>}
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

export default NewOffice;
