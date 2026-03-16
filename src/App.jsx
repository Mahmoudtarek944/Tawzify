import { Route, Routes } from "react-router-dom";
import NotFound from "./components/notFound/NotFound";
import Home from "./components/pages/Home";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import MainLayout from "./components/layout/MainLayout";
import HeroPage from "./components/pages/HeroPage";
import HeroLayout from "./components/layout/HeroLayput";
import Footer from "./components/share/Footer";
import JobDetails from "./components/pages/JobDetails";
import JobDetailsLayout from "./components/layout/JobDetailsLayout";
function App() {
  return (
    <>
      <Routes>
        <Route element={<HeroLayout />}>
          <Route path="/" element={<HeroPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>

        <Route element={<MainLayout />}>
          <Route path="/home" element={<Home />} />
        </Route>

        <Route element={<JobDetailsLayout />}>
          <Route path="/job-details/:id" element={<JobDetails />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
