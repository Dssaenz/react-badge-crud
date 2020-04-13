import React from 'react';
import {
    Header,
    Badge,
    BadgeForm,
} from '../../components';

class BadgeNew extends React.Component {
    state= { form: {
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: '',
        github: '',
    } };
    
    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    render(){
        return(
            <React.Fragment>
                <Header />
                <div className='container'>
                    <div className='row'>
                        <div className='col-6'>
                        <Badge 
                            firstName={this.state.form.firstName || 'Nombres'}
                            lastName={this.state.form.lastName || 'Apellidos'}
                            jobTitle={this.state.form.jobTitle || 'Cargo'}
                            email={this.state.form.email || 'Correo'}
                            github={this.state.form.github || 'GitHub'}
                        />
                        </div>
                        <div className='col-6'>
                            <BadgeForm 
                                onChange={this.handleChange}
                                formValues={this.state.form}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }    
};

export default BadgeNew;