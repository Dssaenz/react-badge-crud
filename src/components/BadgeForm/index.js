import React from 'react';

function BadgeForm(props) {
  return(
    <div>
      <h1>New attendant</h1>
      <form onSubmit={props.onSubmit}>
        <div className='form-group'>
          <label>First Name</label>
          <input 
            onChange={props.onChange}
            className='form-control'
            name='firstName'
            type='text'
            value={props.formValues.firstName}
          />
        </div>
        <div className='form-group'>
          <label>Last Name</label>
          <input 
            onChange={props.onChange}
            className='form-control'
            name='lastName'
            type='text'
            value={props.formValues.lastName}
          />
        </div>
        <div className='form-group'>
          <label>Email</label>
          <input 
            onChange={props.onChange}
            className='form-control'
            name='email'
            type='email'
            value={props.formValues.email}
          />
        </div>
        <div className='form-group'>
          <label>Job Title</label>
          <input 
            onChange={props.onChange}
            className='form-control'
            name='jobTitle'
            type='text'
            value={props.formValues.jobTitle}
          />
        </div>
        <div className='form-group'>
          <label>gitHub</label>
          <input 
            onChange={props.onChange}
            className='form-control'
            name='gitHub'
            type='text'
            value={props.formValues.gitHub}
          />
        </div>
        <button className='btn btn-primary'>
          Save
        </button>
        {props.error && (
          <p>{props.error.message}</p>
        )}
      </form>
    </div>
  );
}

export default BadgeForm;