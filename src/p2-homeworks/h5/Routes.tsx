import React from "react";
import {HashRouter, Switch, Route, Redirect, BrowserRouter} from "react-router-dom";
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404/Error404";
import JuniorPlus from "./pages/JuniorPlus";


export const PATH = {
    PRE_JUNIOR: "/pre-junior",
    JUNIOR_PLUS: "/junior-plus"
};

function Routes() {
    return (
        <HashRouter>
            <div>
                {/*Switch выбирает первый подходящий роут*/}
                <Switch>
                    {/*в начале мы попадаем на страницу "/" и переходим сразу на страницу PRE_JUNIOR*/}
                    {/*exact нужен чтоб указать полное совподение (что после "/" ничего не будет)*/}
                    {/*<Route path={"/"} exact render={() => <Redirect to={PATH.PRE_JUNIOR}/>}/>*/}

                    <Route path={PATH.PRE_JUNIOR} render={() => <PreJunior/>}/>
                    <Route path={PATH.JUNIOR_PLUS} render={() => <JuniorPlus/>}/>

                    {/*// add routes*/}

                    {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                    <Route render={() => <Error404/>}/>
                </Switch>
            </div>
        </HashRouter>
    );
}

export default Routes;
