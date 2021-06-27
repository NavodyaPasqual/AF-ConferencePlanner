import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// UI Components
import Home from "../home/home";
import NavBar from "../home/navBar";
import Footer from "../home/footer";
import Register from "../register/register";
import WorkShop from "../workShop/workShop";
import CreateWorkShop from "../workShop/createWorkShop";
import Attendee from "../attendee/attendee";
import Researcher from "../researcher/researcher";
import Reviewer from "../reviewer/reviewer";
import Editor from "../editor/editor";

function PageRoutes() {
    return (
        <div>
            <Router>
                <NavBar />
                <section className="content">
                    <Switch>
                        <Route path="/reviewer" component={Reviewer}/>
                        <Route path="/researcher" component={Researcher}/>
                        <Route path="/editor" component={Editor}/>
                        <Route path="/workshop-attendee" component={Attendee}/>
                        <Route path="/create-workshop" component={CreateWorkShop}/>
                        <Route path="/workshop" component={WorkShop}/>
                        <Route path="/registration" component={Register}/>
                        <Route path="/" component={Home} exact/>
                    </Switch>
                </section>
                <Footer/>
            </Router>
        </div>
    );
}

export default PageRoutes;

