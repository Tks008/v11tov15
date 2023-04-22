import React, { Component } from "react";

export default class ClassState extends Component {

    constructor() {
        super();
        this.state = { data: "TKS" }
    }
    alertcall() {
        this.setState({ data: "this.state.data" })
        console.log("Hi Tushar");
    }

    render() {
        return (
            <div>
                <h1>Class State {this.state.data}</h1>
                <button onClick={() => this.alertcall()}>Click Me</button>
            </div>
        );
    }
}