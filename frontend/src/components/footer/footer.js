import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <div style={{textAlign:'center',backgroundColor:'black',position:"fixed",bottom:'0px',width:"100%"}}>
                    <a className="nav-link" aria-current="page" href="#" style={{color:'gray',fontSize:'12px'}}> @copy right P for Parenting</a>
                </div>
            </div>
        );
    }
}

export default Footer;