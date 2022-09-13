import TodoPage from './Components/ToDoPage';
import './App.css';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <TodoPage />
      )}
    </Authenticator>

  );
}

export default App;
