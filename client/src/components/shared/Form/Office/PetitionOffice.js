/* eslint-disable max-len */
import React, { Component, Fragment } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import RenderInput from '@components/shared/FormComponent/RenderInput';
import Preloader from '@components/shared/Preloader/Preloader';
import '../Party/index.scss';


class PetitionOffice extends Component {
    static propTypes = {
        errors: PropTypes.shape({}),
        petitionOffice: PropTypes.func.isRequired,
        loading: PropTypes.bool.isRequired,
        office: PropTypes.object
    }

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            text: '',
            errors: {},
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const { petitionOffice, office: { id: officeId } } = this.props;
        const { title, text } = this.state;
        const values = {
            title,
            text
        };
        petitionOffice(values, officeId);
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
        const { errors, title, text } = this.state;
        const { loading } = this.props;

        return (
            <Fragment>
                <form onSubmit={this.handleSubmit.bind(this)} className="mt-6">
                    <RenderInput
                        label="Title"
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Title"
                        value={title}
                        className={classNames('border border-indigo-700 text-gray-600', { 'error': errors.title })}
                        error={errors.title ? errors.title.msg : ''}
                        handleChange={this.handleChange.bind(this)}
                        onFocus={() => {}}
                    />
                    
                    <div className="form-group">
                        <label htmlFor="type" className="control-label">Message</label>
                        <textarea className="form-control border border-indigo-700 text-gray-600" rows="3" name="text" value={text} onChange={this.handleChange.bind(this)}></textarea>
                        {errors.text && <div className="text-red-600 text-xs text-left">{errors.text.msg}</div>}
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
                            : 'Petition'}
                    </button>
                </form>
            </Fragment>
        );
    }
}

export default PetitionOffice;
