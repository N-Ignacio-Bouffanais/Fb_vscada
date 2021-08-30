import Layout from "../components/Layouts";
import Amplify from "aws-amplify";
import awsconfig from "../src/aws-exports";
import { AmplifySignOut, withAuthenticator } from "@aws-amplify/ui-react";
//import { PubSub, Auth } from "aws-amplify";
//import { AWSIoTProvider } from "@aws-amplify/pubsub/lib/Providers";


Amplify.configure(awsconfig);

function Dashboard() {
  return (
    <Layout>
      <AmplifySignOut />
      <h2>Tablero</h2>
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body">
            <button
              className="btn btn-success"
              //onClick={Encender}
              type="button"
            >
              ON
            </button>
            <button className="btn btn-warning" 
            //onClick={Apagar} 
            type="button">
              OFF
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
export default withAuthenticator(Dashboard);
