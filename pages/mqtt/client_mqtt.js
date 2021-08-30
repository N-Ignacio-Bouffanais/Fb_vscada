import Amplify from "aws-amplify";
import awsconfig from "../../src/aws-exports";
import { PubSub, Auth } from "aws-amplify";
import { AWSIoTProvider } from "@aws-amplify/pubsub/lib/Providers";
import React, { useState, useEffect } from "react";

Amplify.configure(awsconfig);

Amplify.addPluggable(
  new AWSIoTProvider({
    aws_pubsub_region: "us-east-1",
    aws_pubsub_endpoint:
      "wss://a2991es8po3jmm-ats.iot.us-east-1.amazonaws.com/mqtt",
  })
);

//class App extends Component 
function App(){ 

  const [data, setData] = useState([]);
  const [temp,setData2] = useState([]);

  useEffect(async () => {
    PubSub.subscribe("topic_1").subscribe({
      next: (data) => {
        //const response = data.value.value; test
        const response = data.value.onoff;
        console.log(response);
        setData(response);
        const temp_recibida = data.value.temperature;
        console.log(temp_recibida);
        setData2(temp_recibida);
      },
      error: (error) => console.error(error),
      close: () => console.log("Done"),
    });
  }, []);

    const Encender = () => {
    let a = { type: "onoff", value: 1 };
    PubSub.publish("topic5", a);
    }
    const Apagar = () => {
    let b = { type: "onoff", value: 0 };
    PubSub.publish("topic5", b);
    }
    return (
      <div className="App">
        <div className="row">
          <div className="col-md-12">
            <div className="card card-body">
              <button onClick={Encender}>ON</button>
              <button onClick={Apagar}>OFF</button>
              <h2>{data}</h2>
              <h2>{temp}</h2>
            </div>
          </div>
        </div>
      </div>
    );
}

export default App;
