import { createBrowserHistory } from "history";
import { Router, Switch } from "react-router";
import Loading from "./components/Loading/Loading";
import Modal from "./components/Modal/Modal";
import IndexCyberbugs from "./pages/Cyberbugs/IndexCyberbugs";
import CreateProject from "./pages/Cyberbugs/ProjectSettings/CreateProject";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";
import CyberBugTemplate from "./templates/CyberBugTemPlate/CyberBugTemplate";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";
import UserTemplate from "./templates/UserTemplate/UserTemplate";



// const CheckoutTemplateLazy = lazy(() => import('./templates/CheckoutTemplate/CheckoutTemplate'))

export const history = createBrowserHistory()

function App() {


  return (
    <Router history={history}>
      <Modal />
      <Loading />
      <Switch>
        <HomeTemplate path='/' exact Component={Home} />
        <HomeTemplate path='/home' exact Component={Home} />
        <HomeTemplate path='/profile' exact Component={Profile} />
        <UserTemplate path='/login' exact Component={Login} />
        <UserTemplate path='/register' exact Component={Register} />
        <CyberBugTemplate path='/cyberbugs' exact Component={IndexCyberbugs} />
        <CyberBugTemplate path='/createproject' exact Component={CreateProject} />
      </Switch>
    </Router>
  );
}

export default App;
