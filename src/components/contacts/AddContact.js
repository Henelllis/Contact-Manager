import React, { Component } from 'react';

class AddContact extends Component {

    state = {
        name:'',
        email:'',
        phone:''
    }

    render() {
        return (
            <div className="card mb-3">
                <div className="card-header">Add Contact</div>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text" 
                            name="name"
                            className="form-control from-control-lg"
                            placeholder="Enter Name..."
                            value={this.state.name}/>
                        </div>
                        <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="text" 
                            name="email"
                            className="form-control from-control-lg"
                            placeholder="Enter Email..."
                            value={this.state.email}/>
                        </div>
                        <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input 
                            type="text" 
                            name="phone"
                            className="form-control from-control-lg"
                            placeholder="Enter Phone Number..."
                            value={this.state.phone}/>
                        </div>
                        <input type="text" type="submit" value="Add Contact" 
                        className="btn btn-light btn-block"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddContact;