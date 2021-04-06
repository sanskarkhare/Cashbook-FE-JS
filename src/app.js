import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CashInPage from './components/Pages/CashInPage';
import HomePage from './components/HomePage';
import CashOutPage from './components/Pages/CashOutPage';
import { AppProvider } from './context/GlobalState'
import EditEntry from './components/Pages/EditEntryPage';
import PageNotFound from './PageNotFound';



const App = () => {

  return (
    <>
      
     <AppProvider>
          <Router>
              <Switch>
                  <Route path="/"  exact render={() => <HomePage />} />
                  <Route path="/EditEntryPage/:id"  exact render={() => <EditEntry />} />
                  <Route path="/CashInPage" exact render={() => <CashInPage />} />
                  <Route path="/CashOutPage" exact render={() => <CashOutPage />} />
                  <Route path="/*" exact render={() => <PageNotFound />} />

              </Switch>
            </Router>
      </AppProvider>
    </>
  )
}

export default App;
