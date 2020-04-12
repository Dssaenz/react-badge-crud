import React from 'react';
import { BrowserRouter,Switch, Route } from 'react-router-dom'; 
import {
    Home,
    Badges,
    NotFound,
    BadgeNew,
} from './pages';
import { Layout } from './components';

function App() {
    return(
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path='/badges' component={Badges} />
                <Route exact path='/badges/new' component={BadgeNew} />
                <Route exact path='/' component={Home} />
                <Route path='/notFound' component={NotFound} /> 
            </Switch>
        </Layout>
    </BrowserRouter>
    )
}

export default App;