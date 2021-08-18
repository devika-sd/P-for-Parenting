import React, { Component } from 'react';

class Questions extends Component {
    constructor() {
        super();
        this.state = { data: {answer:[],question:""} };
    }
    componentDidMount() {
        fetch('http://localhost:8080/api/v1/parenting/ques/' + this.props.match.params.id)
            .then(response => response.json())
            .then(res => {
                console.log(res);
                this.setState({ data: res })
            })
        // console.log(this.props.match.params.id)
    }
    render() {
        var ansElement = null;
        console.log(this.state.data.answer.length)
        if(this.state.data.answer.length>0)
        {
            ansElement = this.state.data.answer.map((value, i) => {
                return (
                    <div style={{ backgroundColor: 'rgb(246, 248, 250)', margin: '20px', padding: '20px' }}>
                        <span><i className="fa fa-hand-point-right" />&nbsp;&nbsp;{value}
                            <span style={{ fontWeight: 'bold', color: 'rgba(93, 170, 166, 0.788)' }}>&nbsp;({this.state.data.count[i]})</span>
                        </span>
                    </div>
                )
            })
        }
        else
        {
            ansElement =(
                <div style={{ backgroundColor: 'rgb(246, 248, 250)', margin: '20px', padding: '20px' }}>
                        <span>No answer available
                        </span>
                    </div>
            )  
        }
        
        return (
            <div>
                <div style={{ marginBottom: 20, marginTop: 20, marginRight: 12, padding: '15px 15px', height: '100%', marginBottom: "20px" }}>
                    <div className="row" style={{ margin: '10px 100px' }}>
                        <div className="col-sm-12 col-md-8 mx-auto" style={{ backgroundColor: 'rgb(226, 226, 226)', borderRadius: 10 }}>
                            <div style={{ marginLeft: 20, marginBottom: 10, margin: 20 }}>
                                <span style={{ color: 'black', fontSize: 25, marginLeft: '20px' }}>
                                    {this.state.data.question}
                                </span>
                                <br /><br />
                                <div style={{ padding: 5 }}>
                                    {ansElement}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Questions;