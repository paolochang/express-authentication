import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/common/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { routes } from "./routes";

const App: React.FC = () => {
  const isLoggedIn = false;
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route
            path={routes.home}
            element={<Layout>{isLoggedIn ? <Home /> : <Login />}</Layout>}
          />
          <Route
            path={routes.register}
            element={
              <Layout>
                <Register />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </React.Fragment>
  );
};

export default App;
