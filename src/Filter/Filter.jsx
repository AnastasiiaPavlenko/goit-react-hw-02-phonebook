import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import styles from './Filter.module.css';

class Filter extends Component {
    static propTypes = {
        handleFilter: PropTypes.func.isRequired,
    }

    state = {
        value: '',
    };

    handleChange(event) {
        this.setState({ value: event.target.value });
        this.props.handleFilter(this.state.value);
    }

    reset = () => {
        this.setState({ name: '' });
    }

    handleChange = this.handleChange.bind(this);

    render() {
        return <>
            <label htmlFor="filter">Find contacts by name</label>
            <input id="filter" type="text" name="filter" value={this.state.value} className="input" onChange={this.handleChange} />
        </>
    };
};

export default Filter;