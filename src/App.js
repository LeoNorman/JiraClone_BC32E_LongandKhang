import { createBrowserHistory } from "history";
import { Router, Switch } from "react-router";
import Loading from "./components/Loading/Loading";
import Modal from "./components/Modal/Modal";
import DrawerCyberbugs from "./HOC/CyberbugsHOC/DrawerCyberbugs";
import IndexCyberbugs from "./pages/Cyberbugs/IndexCyberbugs";
import ProjectManagement from "./pages/Cyberbugs/ProjectManagement/ProjectManagement";
import CreateProject from "./pages/Cyberbugs/ProjectSettings/CreateProject";
import DemoDragDrop from "./pages/DemoDragDrop/DemoDragDrop";
import DragDropDnd from "./pages/DragDropDnd/DragDropDnd";
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
      <DrawerCyberbugs />
      <Switch>
        <HomeTemplate path='/home' exact Component={Home} />
        <HomeTemplate path='/profile' exact Component={Profile} />
        <HomeTemplate path='/dragdrop' exact Component={DemoDragDrop} />
        <HomeTemplate path='/dragdropdnd' exact Component={DragDropDnd} />
        <UserTemplate path='/login' exact Component={Login} />
        <UserTemplate path='/register' exact Component={Register} />
        <CyberBugTemplate path='/cyberbugs' exact Component={IndexCyberbugs} />
        <CyberBugTemplate path='/createproject' exact Component={CreateProject} />
        <CyberBugTemplate path='/projectmanagement' exact Component={ProjectManagement} />
        <CyberBugTemplate path='/' exact Component={ProjectManagement} />
        <CyberBugTemplate path='/projectdetail/:projectId' exact Component={IndexCyberbugs} />
      </Switch>
    </Router>
  );
}

export default App;
