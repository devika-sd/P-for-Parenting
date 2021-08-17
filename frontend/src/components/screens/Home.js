import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    constructor() {
        super();
        this.questions = ["why baby is crying in night?", "why baby is not sleeping well?", "why baby is vomitting after taking its food?"];
        this.state = { openIndex: -1 ,quesSet:[]}
    }
    componentDidMount()
    {
        fetch('http://localhost:8080/api/v1/allques')
            .then(response => response.json())
            .then(data=>{
                console.log(data);
                this.setState({quesSet:data});
            })
    }
    render() {
        let ques = this.state.quesSet.map((value, i) => {
            let loc = value.count.indexOf(Math.max(...value.count));
            console.log("maximum value's index is",loc)
            return (
                <div style={{ marginLeft: "20px", marginBottom: "10px" }}>
                    <Link to={"/questions/"+value._id} style={{ textDecoration: 'none' }}><span style={{ color: 'blue', fontSize: "20px" }}>{value.question}</span></Link><br />
                    <span>{value.answer.length>=1 ? value.answer[loc] + "(" + value.count[loc] +")" : "no answer available"}</span>
                </div>
            )
        })
        return (
            <div className="leftalign" style={{ marginTop: "20px",marginBottom:"20px" }}>
                <div>
                    <h2 style={{ textAlign: 'center' }}>Welcome to Parenting</h2>
                    <div style={{ marginBottom: '20px', marginTop: '20px', marginRight: '12px', padding: "15px 15px", height: "100%", backgroundColor: 'rgb(226, 226, 226)' }}>
                        <div className="row">
                            <div className="col-sm-12 col-md-8" >
                                {ques}
                                
                            </div>
                            <div className="col-sm-12 col-md-4" style={{ marginTop: "150px" }}>
                                <Link to="/parentlogin" style={{ textDecoration: 'none' }}><button type="button" style={{ width: "250px", margin: "20px" }} class="btn btn-primary">Parent</button></Link><br />
                                <Link to="/expertlogin" style={{ textDecoration: 'none' }}><button type="button" style={{ width: "250px", margin: "20px" }} class="btn btn-primary">Expert</button></Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Home;