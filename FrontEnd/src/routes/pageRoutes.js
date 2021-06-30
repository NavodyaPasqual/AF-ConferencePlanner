import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// UI Components
import Home from "../home/home";
import NavBar from "../home/navBar";
import Footer from "../home/footer";
import Register from "../register/register";
import WorkShop from "../workShop/workShop";
import CreateWorkShop from "../workShop/createWorkShop";
import AttendeeWorkshopRegistration from "../attendee/attendeeWorkshopRegistration";
import AttendeeWorkShopPayment from "../attendee/attendeeWorkShopPayment";
import Researcher from "../researcher/researcher";
import Reviewer from "../reviewer/reviewer";
import Editor from "../editor/editor";
import View from "../editor/view";
import ManageConference from "../editor/manageConference";
import UpdateConference from "../editor/updateConference";
import CreateConference from "../editor/addConference";
import EditorDashboard from "../editor/editor";
import UpdateSpeaker from "../editor/updateSpeaker";
import CreateSpeaker from "../editor/addSpeaker";
import ManageSpeakers from "../editor/manageSpeakers";

function PageRoutes() {
    return (
        <div>
            <Router>
                <NavBar />
                <section className="content">
                    <Switch>
                        <Route path="/reviewer" component={Reviewer}/>
                        <Route path="/researcher" component={Researcher}/>
                        <Route path="/editor" component={EditorDashboard}/>
                        <Route path="/workshop-payment" component={AttendeeWorkShopPayment}/>
                        <Route path="/workshop-attendee" component={AttendeeWorkshopRegistration}/>
                        <Route path="/create-workshop" component={CreateWorkShop}/>
                        <Route path="/workshop" component={WorkShop}/>
                        <Route path="/registration" component={Register}/>
                        <Route path="/" component={Home} exact/>
                        <Route path="/view" component={View} />
                        <Route path="/create-conference" component={CreateConference}/>
                        <Route path="/manage-conference" component={ManageConference} />
                        <Route path="/conference/update/:conferenceId" component={UpdateConference} />
                        <Route path="/create-speaker" component={CreateSpeaker}/>
                        <Route path="/manage-speaker" component={ManageSpeakers}/>
                        <Route path="/speaker/update/:speakerId" component={UpdateSpeaker}/>
                    </Switch>
                </section>
                <Footer/>
            </Router>
        </div>
    );
}

export default PageRoutes;

