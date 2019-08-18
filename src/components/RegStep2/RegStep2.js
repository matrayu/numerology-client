import React, { Component } from 'react';


export default class RegStep2 extends Component {
    render() {
        let props = this.props

        return (
            <div>
                <p className='instructions'>Enter your name that was given at birth, exactly as it would have been written on your birth certificate. Do not include any suffix (i.e. Jr, II, III, etc).</p>
                <div className="form-group">
                    <label htmlFor="first_name">First Name</label>
                    <input
                        className="form-control"
                        id="first_name"
                        name="first_name"
                        type="text"
                        placeholder="Enter first name"
                        value={props.first_name}
                        onChange={props.handleChange}
                    />
            
                    <label htmlFor="middle_name">Middle Name</label>
                    <input
                        className="form-control"
                        id="middle_name"
                        name="middle_name"
                        type="text"
                        placeholder="Enter middle name"
                        value={props.middle_name}
                        onChange={props.handleChange}
                    />
            
                    <label htmlFor="last_name">Last Name</label>
                    <input
                        className="form-control"
                        id="last_name"
                        name="last_name"
                        type="text"
                        placeholder="Enter last name"
                        value={props.last_name}
                        onChange={props.handleChange}
                    /> 
                </div>
            </div>
        );
    }
}