import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastrarInvest from '../pages/CadastrarInvest';
import ListarInvest from '../pages/ListarInvest';

export default function Router () {

    return (

        <BrowserRouter>
            <Switch>

                <Route exact path="/" component={ListarInvest} />
                <Route exact path="/cadastrar-invest" component={CadastrarInvest} />
                <Route exact path="listar-invest" component={ListarInvest} />

            </Switch>
        </BrowserRouter>
    );
}