import { createBrowserHistory } from "history";
import { useSelector } from "react-redux";
import { Router, Switch, Route } from "react-router";
import Loading from "./components/Loading/Loading";
import Modal from "./components/Modal/Modal";
import AppComment from "./components/ModalCyberbugs/ModalComment";
import ModalAdmin from "./components/Admin/ModalAdmin/ModalAdmin";
import DrawerCyberbugs from "./HOC/CyberbugsHOC/DrawerCyberbugs";
import IndexCyberbugs from "./pages/Cyberbugs/IndexCyberbugs";
import ProjectManagement from "./pages/Cyberbugs/ProjectManagement/ProjectManagement";
import CreateProject from "./pages/Cyberbugs/ProjectSettings/CreateProject";
import Error from "./pages/Error/Error";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";
import AdminTemplate from "./templates/AminTemplate/AdminTemplate";
import CyberBugTemplate from "./templates/CyberBugTemPlate/CyberBugTemplate";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";
import UserTemplate from "./templates/UserTemplate/UserTemplate";
import Dashboard from "./components/Admin/Task/Dashboard";
import EditUser from "./components/Admin/User/EditUser";


// const CheckoutTemplateLazy = lazy(() => import('./templates/CheckoutTemplate/CheckoutTemplate'))

export const history = createBrowserHistory()

function App() {
  const { userLogin } = useSelector((state) => state.usersReducer);
  return (
    <Router history={history}>
      <Modal />
      <Loading />
      <DrawerCyberbugs />
      <ModalAdmin/>
      <Switch>
        <HomeTemplate path='/home' exact Component={Home} />
        <HomeTemplate path='/' exact Component={Home} />
        <HomeTemplate path='/profile' exact Component={Profile} />
        <UserTemplate path='/login' exact Component={Login} />
        <UserTemplate path='/register' exact Component={Register} />
        <CyberBugTemplate path='/cyberbugs' exact Component={IndexCyberbugs} />
        <CyberBugTemplate path='/createproject' exact Component={CreateProject} />
        <CyberBugTemplate path='/projectmanagement' exact Component={ProjectManagement} />
        <CyberBugTemplate path='/projectdetail/:projectId' exact Component={IndexCyberbugs} />
        

        <AdminTemplate path='/admin' exact Component={Dashboard}/>
        <AdminTemplate path='/admin/dashboard' exact Component={Dashboard}/>
        <AdminTemplate path='/admin/edit' exact Component={EditUser}/>
        <Route path='*' exact component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
