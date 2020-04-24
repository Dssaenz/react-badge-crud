import React from 'react';
import api from '../../api';
import md5 from 'md5';
import {
    Header,
    Badge,
    BadgeForm,
    Loading,
} from '../../components';


class BadgeEdit extends React.Component {
    state= {
        loading: true,
        error: null,
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            gitHub: '',
    } };
    
    componentDidMount() {
        this.fetchData()
    }

    fetchData = async e => {
        this.setState({ loading: true, error: null})
        try {
            const data = await api.badges.read(
                this.props.match.params.badgeId
            )
            this.setState({ loading: false, form: data})
        } catch(error) {
            this.setState({ loading: false, error: error})
        }
    }

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    };

    handleSubmit = async e => {
        // PreventDefault() detiene el evento para que el navegador no envie datos a páginas que no
        // se han manejado o que no se han especificado. 
        e.preventDefault()
        this.setState({ loading: true, error: null })
        const avatarUrl = 'https://www.gravatar.com/avatar/*.*?d=identicon'
        const hash = md5(this.state.form.email)
        this.state.form.avatarUrl = avatarUrl.replace('*.*', hash)

        try {
            // Se le pasan los datos iniciales del estado (form)
            // Se espera la petición a la api
            // Para obtener los datos del id en donde se encuentra se usa match.params
            await api.badges.update(this.props.match.params.badgeId, this.state.form);
            // Se cambia el estado del loading a false
            this.setState({ loading: false })
            // En el caso de formulario creado se recibe una propiedad llamada history de react router,
            // la cual redirige al usuario a la pagina deseada.
            this.props.history.push('/badges')

        } catch(error) {
            this.setState({ loading: false, error: error })
        }
    };

    render(){
        if(this.state.loading) {
            return <Loading />
        }
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
                            gitHub={this.state.form.gitHub || 'Github'}
                        />
                        </div>
                        <div className='col-6'>
                            <BadgeForm 
                                onChange={this.handleChange}
                                onSubmit={this.handleSubmit}
                                formValues={this.state.form}
                                error={this.state.error}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }    
};

export default BadgeEdit;




// Añadir prop types y default props