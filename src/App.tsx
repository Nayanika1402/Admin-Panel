import { BrowserRouter as Router, Routes, Route } from "react-router";
import NotFound from "./pages/NotFound";
import UserProfiles from "./pages/UserProfiles";
import Calendar from "./pages/Calendar";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Login from "./components/auth/Login";

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
        <Route path="/login" element={<Login />} />
        
          <Route element={<AppLayout />}>

            <Route path="/profile" element={<UserProfiles />} />
  
            <Route path="/calendar" element={<Calendar />} />




          </Route>

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
