import './App.css';
import MainPage from './pages/MainPage';
import SubPage from './pages/SubPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Switch>
	      <Route exact path='/a/:id' component={SubPage} />
        <Route exact path='/' component={MainPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
