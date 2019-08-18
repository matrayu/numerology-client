import React, { Component } from 'react';

export default class RegStep3 extends Component {
    render() {
        let props = this.props

        return (
            <div className="form-group">
                <label htmlFor="dob">Date of Birth</label>
                <input
                    className="form-control"
                    id="dob"
                    name="dob"
                    type="date"
                    value={this.props.dob}
                    onChange={props.handleChange}
                />      
            </div>
        );
    }
}