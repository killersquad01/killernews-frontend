import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from "./views/app-views/HomePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
