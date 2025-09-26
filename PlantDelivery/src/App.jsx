import React from "react";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Main from "./components/Layout/Main";
import Auth from "./components/Auth/Auth";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();
  const hideLayout = location.pathname === "/auth";
  return (
    <>
      {!hideLayout && <Navbar />}
      <div className={!hideLayout ? "flex-grow pt-16 bg-gray-100" : ""}>
        {children}
      </div>
      {!hideLayout && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Layout>
    </Router>
  );
};
export default App;
