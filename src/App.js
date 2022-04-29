import './App.css';
import State from './Components/State/State.jsx'
import Effect from './Components/Effect/Effect.jsx'
import Login from './Components/Login/Login.jsx'
import Props from './Components/props/Props.jsx'
import Logins from './Components/Logins/Logins.jsx'
import Login_hook from './Components/Logins/Login_hook';
import Form from './Components/Form/Form.jsx'
import Timeout from './Components/Effect/Timeout';
// import Reduce from './Components/reducer/Reduce'
// import Context from './Components/Context/Context'
import Comment from './Components/Comment/Comment'

const App = () => {
  return (
    <div>
      <h1>Form Component</h1>
      <Form />
      
      <Comment />
    </div>
  );
}

export default App;
