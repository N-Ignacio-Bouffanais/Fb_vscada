import React, { Component } from "react";
import Amplify from "aws-amplify";
import awsconfig from "../../src/aws-exports";
import { PubSub, Auth } from "aws-amplify";
import { AWSIoTProvider } from "@aws-amplify/pubsub/lib/Providers";

Amplify.configure(awsconfig);

Amplify.addPluggable(
  new AWSIoTProvider({
    aws_pubsub_region: "us-east-1",
    aws_pubsub_endpoint:
      "wss://a2991es8po3jmm-ats.iot.us-east-1.amazonaws.com/mqtt",
  })
);

class App extends Component {

  async componentDidMount() {
    PubSub.subscribe("topic_1").subscribe({
      next: (data) => {
        const response = data.value.value;
        console.log(response)

      },
      error: (error) => console.error(error),
      close: () => console.log("Done"),
    });
  }

  Encender(e) {
    e.preventDefault();
    let a = { type: "onoff", value: 1 };
    PubSub.publish("topic_1", a);
  }
  Apagar(e) {
    e.preventDefault();
    let b = { type: "onoff", value: 0 };
    PubSub.publish("topic_1", b);
  }
  
  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="col-md-12">
            <div className="card card-body">
              <button onClick={this.Encender}>ON</button>
              <button onClick={this.Apagar}>OFF</button>
              <p>{datos}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
