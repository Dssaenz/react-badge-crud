import React from 'react';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import {
    Home,
    Badges,
    NotFound,
    BadgeNew,
    BadgeEdit,
    BadgesDetailContainer,
} from './pages';
import { Layout } from './components';
import theme from './themes';

function App() {
  return(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
          <Switch>
            <Route path='/notFound' component={NotFound} /> 
            <Route exact path='/' component={Home} />
            <Route exact path='/badges' component={Badges} />
            <Route exact path='/badges/new' component={BadgeNew} />
            <Route exact path='/badges/:badgeId/edit' component={BadgeEdit} />
            <Route exact path='/badges/:badgeId' component={BadgesDetailContainer} />
          </Switch>
    </ThemeProvider>
  </BrowserRouter>
  )
}

export default App;