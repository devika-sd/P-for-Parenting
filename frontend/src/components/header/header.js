import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor()
    {
        super();
        this.state ={open:"collapse navbar-collapse"}
    }
    toggleCollape()
    {
        if(this.state.open === "collapse navbar-collapse")
        {
            this.setState({open:"collapse navbar-collapse show"})
        }
        else
        {
            this.setState({open:"collapse navbar-collapse"})
        }
    }
    render() {
        return (
            <div style={{ height: "10%" }}>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
                    <div className="container-fluid">
                    <Link to="/" style={{ textDecoration: "none" }}><a className="navbar-brand" style={{fontSize:"22px"}}>P for Parenting</a></Link>
                        <button onClick={this.toggleCollape.bind(this)} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className={this.state.open} id="navbarColor01">
                            <ul className="navbar-nav me-auto">
                                
                            </ul>
                            <form className="d-flex">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">FAQ&nbsp;<i class="fas fa-question-circle"></i></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About&nbsp;<i class="fas fa-info-circle"></i></a>
                                </li>
                            </ul>
                            </form>
                        </div>
                    </div>
                </nav>

                {/* <nav className="navbar navbar-expand-lg navbar-dark bg-primary" style={{ position: 'fixed', top: '0', width: '100%' }}>
                    <div className="container-fluid">
                        <Link to="/" style={{ textDecoration: "none" }}><a className="navbar-brand leftalign">P for Parenting</a></Link>
                        <div class="collapse navbar-collapse" id="navbarColor01">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">FAQ&nbsp;<i class="fas fa-question-circle"></i></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About&nbsp;<i class="fas fa-info-circle"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav> */}

            </div>
        );
    }
}


export default Header;