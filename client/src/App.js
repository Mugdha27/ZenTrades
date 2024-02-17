import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
import UserListScreen from "./screens/UserListScreen";
import Test from "./components/Test";
import Header from "./components/Header";
import UserEditScreen from "./screens/USerEditScreen";
import MainFooter from "./components/MainFooter";
import LandingScreen from "./screens/LandingScreen";
import RecomScreen from "./screens/RecomScreen";
import DashboardScreen from "./screens/DashboardScreen";
import Page1 from "./screens/Page1/index";
import LandingHomeScreen from "./screens/LandingHomeScreen";
import TasksList from "./screens/TasksList";
import UserInfo from "./screens/UserInfo";
import { Container } from "react-bootstrap";
import MainHome from "./screens/MainHome";
const App = () => {
  return (
    <Router>
      <main>
        <Container>
          <Route path="/" component={LandingScreen} exact />
          <Header />
          <Route path="/recommendations" component={RecomScreen} />
          <Route path="/dashboard" component={DashboardScreen} />
          <Route path="/test" component={Test} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/profile" component={ProfileScreen} />
          <Route path="/admin/userlist" component={UserListScreen} />
          <Route path="/admin/user/:id/edit" component={UserEditScreen} />
          <Route path="/home" component={HomeScreen} exact />
          <Route path="/page1" component={Page1} />
          <Route path="/admin/tasks" component={TasksList} />
          <Route path="/admin/userinfo" component={UserInfo} />
          <Route path={"/homee"} component={MainHome} />
        </Container>
        <MainFooter />
      </main>
      <Route path="/LandingScreen" component={LandingScreen} exact />
      <Route path="/LandingHomeScreen" component={LandingHomeScreen} exact />
    </Router>
  );
};

export default App;
