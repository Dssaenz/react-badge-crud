import React from 'react';
import {
    Navbar,
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
            <div>
                <Navbar />
                <Header />
                <div className='container'>
                    <div className='row'>
                        <div className='col-6'>
                        <Badge 
                            firstName={this.state.form.firstName}
                            lastName={this.state.form.lastName}
                            jobTitle={this.state.form.jobTitle}
                            email={this.state.form.email}
                            github={this.state.form.github}
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
            </div>
        )
    }    
};

export default BadgeNew;