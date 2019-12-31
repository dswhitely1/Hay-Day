import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {ActionsProvider} from "../contexts/actions.context";
import {useActions} from "../store/actions";
import HomePage from "./home-page/homepage.component";

function App() {
    const actions = useActions();
    return (
        <ActionsProvider value={actions}>
            <Switch>
                <Route exact path='/' component={HomePage}/>
            </Switch>
        </ActionsProvider>
    )
}

export default App;
