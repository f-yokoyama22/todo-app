import './App.css';
import outputs from '../amplify_outputs.json';
import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import TodoPage from './features/TodoPage.tsx';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(outputs);

function App() {
  return (
    <>
        <Authenticator>
            {({ signOut, user }) => (
                <main>
                    <h1>Hello {user?.username}</h1>
                    <button onClick={signOut}>Sign out</button>
                    <TodoPage />
                </main>
            )}
        </Authenticator>
    </>
  )
}

export default App
