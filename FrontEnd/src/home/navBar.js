import React,{useState,useEffect} from "react";  
import {useHistory,useLocation ,Link} from "react-router-dom"; 
import logo from'./image/logo.jpg';

const Navbar = () =>{     
    const history = useHistory();
    const location = useLocation();
    const localUser = JSON.parse(localStorage.getItem('User')) || null;
    let [user,setUser] = useState(localUser);
 
    const isActive = (history, path) => {
        if(history.location.pathname === path){
            return { color: "#ff9900"}
        } else {
            return { color: "#ffffff"}
        }
       
    
    };

    useEffect(()=>{
        const token = user?.token;
        setUser(JSON.parse(localStorage.getItem('User')));
        console.log("data " +user);

    },[location]);

  

    const logOut=()=>{ 
        localStorage.clear();
        setUser(null);
    }
    return (
        <div data-testid="nav-1 row">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
        <a className="navbar-brand" href="/">
        <img src={logo} alt="" width="30" height="24" className="d-inline-block align-text-top"/>
        &nbsp;I<span>CAF</span>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
    data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
    aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="nav collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ">
    

                    {user?(
                      <>       
                          {user.type=="Presenter" &&
                           <>
                            (
                                {/* With WorkShop Conductor Login */}
                                    <li className="nav-item">
                                    <Link className="nav-link" style={isActive(history, '/')} to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link className="nav-link" style={isActive(history, '/workshop')} to="/workshop">WorkShop</Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link className="nav-link" style={isActive(history, '/workshop/my')} to="/workshop/my">My WorkShop</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" style={isActive(history, '/workshop/registration')} to="/workshop/registration">Workshop Registration</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" style={isActive(history, '/workshop-template-download')} to="/workshop-template-download">Download Template</Link>
                                    </li>

                            )
                            </>}
                            
                            {user.type=="Attendee" &&
                           <>
                            (
                                 {/* With Attendee Login */}
                                <li className="nav-item">
                                    <Link className="nav-link" style={isActive(history, '/')} to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                     <Link className="nav-link" style={isActive(history, '/workshop')} to="/workshop">WorkShop</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" style={isActive(history, '/workshop-attendee')} to="/workshop-attendee">My WorkShop</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" style={isActive(history, '/workshop-attendee/registration')} to="/workshop-attendee/registration">WorkShop Registration</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" style={isActive(history, '/workshop-payment')} to="/workshop-payment">My Payments</Link>
                                </li>
                            )
                            </>}

                            {user.type=="Admin" &&
                           <>
                            (
                               {/* With Admin Login */}
                                    <li className="nav-item">
                                    <Link className="nav-link" style={isActive(history, '/admin')} to="/admin">Dashboard</Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link className="nav-link" style={isActive(history, '/admin/workshop')} to="/admin/workshop">Workshop</Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link className="nav-link" style={isActive(history, '/admin/attendee-workshop')} to="/admin/attendee-workshop">WorkShop Attendee</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" style={isActive(history, '/admin/attendee-payments')} to="/admin/attendee-payments">Attendee Payment</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" style={isActive(history, '/admin-editor')} to="/admin-editor">Conference</Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link className="nav-link" style={isActive(history, '/research-paper')} to="/research-paper">Researcher</Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link className="nav-link" style={isActive(history, '/user-details')} to="/user-details">Users</Link>
                                    </li>
                            )
                            </>}
                           
                            {user.type=="Editor" &&
                           <>
                            (
                                {/* With Editor Login */}
                                <li className="nav-item">
                                    <Link className="nav-link" style={isActive(history, '/editor')} to="/editor">Dashboard</Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link className="nav-link" style={isActive(history, '/create-conference')} to="/create-conference">Create Conference</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" style={isActive(history, '/create-speaker')} to="/create-speaker">Create Speaker</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" style={isActive(history, '/create-topic')} to="/create-topic">Create Topic</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" style={isActive(history, '/manage-conference')} to="/manage-conference">Manage Conference</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" style={isActive(history, '/manage-speaker')} to="/manage-speaker">Manage Speaker</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" style={isActive(history, '/manage-topics')} to="/manage-topics">Manage Topics</Link>
                                </li>

                            )
                            </>}
                            {user.type=="Researcher" &&
                            <>
                                (
                                {/* With Researcher Login */}
                                    <li className="nav-item">
                                        <Link className="nav-link" style={isActive(history, '/')} to="/">Home</Link>
                                        </li>
                                        <li className="nav-item">
                                        <Link className="nav-link" style={isActive(history, '/researcher')} to="/researcher">Researcher</Link>
                                        </li>
                                        <li className="nav-item">
                                        <Link className="nav-link" style={isActive(history, '/research-paper')} to="/research-paper">Research Papers</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" style={isActive(history, '/research-payment-details')} to="/research-payment-details">Research Payment</Link>
                                    </li>
                                )
                            </>}

                          {user.type=="Reviewer" &&
                                    <>
                                        (
                                          {/* With Reviewer Login */}
                                            <li className="nav-item">
                                                <Link className="nav-link" style={isActive(history, '/')} to="/">Home</Link>
                                                </li>
                                                <li className="nav-item">
                                                <Link className="nav-link" style={isActive(history, '/reviewe-workshop')} to="/reviewe-workshop">WorkShop</Link>
                                                </li>
                                                <li className="nav-item">
                                                <Link className="nav-link" style={isActive(history, '/reviewe-research-paper')} to="/reviewe-research-paper">Research Papers</Link>
                                            </li>
                                        )
                                        </>}
                            
                        </>
                    ):(
                        <>
                            <li className="nav-item">
                            <Link className="nav-link" style={isActive(history, '/')} to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" style={isActive(history, '/workshop')} to="/workshop">WorkShop</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" style={isActive(history, '/view')} to="/view">Conference</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" style={isActive(history, '/workshop-template-download')} to="/workshop-template-download">Download Template</Link>
                            </li>  
                            <li className="nav-item">
                            <Link className="nav-link" style={isActive(history, '/about-us')} to="/about-us">AboutUs</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" style={isActive(history, '/contact-us')} to="/contact-us">ContactUs</Link>
                            </li>
                        </>
                        )}
                        </ul>
                        
            </div>
            {user?(
                <>    
                 <ul className="nav navbar-nav navbar-right"> 
                     <li className="m-1">
                        <p style={{color:'#ffffff'}}><i className='fa fa-user-alt mr-6'></i> &nbsp;{user.email} &nbsp;</p>
                    </li>
                    <li>
                        <button className="btn-sm btn-danger" onClick={logOut}><i className="fa fa-power-off "></i> Log out </button>
                    </li>
                </ul>
                </>
            ):
            <>    
                 <ul className="nav navbar-nav navbar-right"> 
                    <li> 
                        <Link style={{textDecoration:'none'}} className="btn-sm btn-success mr-5" to="/registration" ><i className="fa fa-user-plus "></i> Sign Up </Link> &nbsp; &nbsp;
                        <Link  style={{textDecoration:'none'}} className="btn-sm btn-warning ml-5"  to="/signin" ><i className="fa fa-sign-in-alt"></i> Sign In </Link>
                    </li>
                </ul>
                </>
            }
            </div>
            </nav>
            </div>
 
    )
}

export default Navbar
