import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing";
import DashLayout from './layouts/Dashboard'
import Profile from "./pages/dashboard/Profile";
import Home from "./pages/dashboard/Home";

import UploadVideo from "./pages/dashboard/UploadVideo";
import Subsribed from "./pages/dashboard/Subsribed";
import Analytics from "./pages/dashboard/Analytics";
// import YourVideos from "./pages/dashboard/YourVideos";
import YourVideos from "./pages/dashboard/YourVideos";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          {/* <Route path="/searchVideo" element={<SearchVideo />} />
          <Route path="/video" element={<Video />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/insmetamask" element={<ErrorPage />} /> */}
          {/* <Route path="/test" element={<Test />} /> */}
          {/* <Route path="/upload" element={<UploadVideo />} />
          <Route path='/single' element={<SingleVideo/>}/> */}
          <Route element={<DashLayout />}>
            <Route
              path="/dashboard"
              element={<Navigate to="/dashboard/home" replace />}
            />
            <Route path="/dashboard/home" element={<Home />} />
            <Route path="/dashboard/yourvideos" element={<YourVideos />} />
            <Route path="/dashboard/profile" element={<Profile />} />
            <Route path="/dashboard/uploadvideo" element={<UploadVideo />} />
            <Route path="/dashboard/subscribed" element={<Subsribed />} />
            <Route path="/dashboard/analytics" element={<Analytics />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
