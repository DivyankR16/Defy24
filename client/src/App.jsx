import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import DashLayout from "./layouts/Dashboard";
import Home from "./pages/dashboard/Home";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DashLayout />}>
            <Route
              path="/dashboard"
              element={<Navigate to="/dashboard/home" replace />}
            />
            <Route path="/dashboard/home" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
