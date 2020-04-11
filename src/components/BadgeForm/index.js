import React from 'react';

class BadgeForm extends React.Component{
    // handleChange = (e) => {
    //     // console.log({
    //     //     name: e.target.name,
    //     //     value: e.target.value,
    //     // });
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    // };

    handleClick= (e) => {
        console.log('was save')
    };

    handleSubmit = (e) => {
        e.preventDefault()
        console.log('form submit')
        console.log(this.state)
    };

    render(){
        return(
            <div>
                <h1>New attendant</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <label>First Name</label>
                        <input 
                            onChange={this.props.onChange}
                            className='form-control'
                            name='firstName'
                            type='text'
                            value={this.props.formValues.firstName}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Last Name</label>
                        <input 
                            onChange={this.props.onChange}
                            className='form-control'
                            name='lastName'
                            type='text'
                            value={this.props.formValues.lastName}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Email</label>
                        <input 
                            onChange={this.props.onChange}
                            className='form-control'
                            name='email'
                            type='email'
                            value={this.props.formValues.email}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Job Title</label>
                        <input 
                            onChange={this.props.onChange}
                            className='form-control'
                            name='jobTitle'
                            type='text'
                            value={this.props.formValues.jobTitle}
                        />
                    </div>
                    <div className='form-group'>
                        <label>GitHub</label>
                        <input 
                            onChange={this.props.onChange}
                            className='form-control'
                            name='github'
                            type='text'
                            value={this.props.formValues.github}
                        />
                    </div>
                    <button onClick={this.handleClick} className='btn btn-primary'>
                    Save
                    </button>
                </form>
            </div>
        );
    }
}

export default BadgeForm;