import logo from './logo.svg';
import './App.css';
import Amplify from 'aws-amplify';
import { ActionCard } from './ui-components';
import { Frame439 } from './ui-components';
import { Desktop1 } from './ui-components';
import { ActionCardCollection } from './ui-components';
import { NavBar } from './ui-components';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsconfig from "./aws-exports"


function App({ signOut, user}) {
  return (
    <div className="App">
        <div><Frame439 width="100%"/></div>
        <button onClick={signOut}>Sign out</button>
    </div>
  );
}

export default withAuthenticator(App);
