import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Lap2 from "./lap1/bài2"
import UserList from "./lap1/bài3"
import E1 from "./lap2/E1";
import LoginForm from "./lap3/E1";
import E2 from "./lap3/E2";
import Lap4 from "./lap4/Lap4";
import { ListStory } from "./lap5/Lap5";
import { useContext } from "react";
import { UserContext } from "./context/userContext";
import { ThemeContext } from "./context/themeContext";
import { Button, Avatar, Typography, Tag } from "antd";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { useAuthStore } from "./useAuth/userAuth";
function App() {
  const context = useContext(UserContext);
  const themeCtx = useContext(ThemeContext);

  const { user, logout } = useAuthStore();

  if (!context || !themeCtx) {
    return <div>loading....</div>;
  }

  const { isDarkMode } = themeCtx;

  return (
    <div style={{ minHeight: "100vh", backgroundColor: isDarkMode ? "#141414" : "#ffffff", color: isDarkMode ? "#ffffff" : "#000000" }}>
      <nav style={{ background: "#1677ff", boxShadow: "0 2px 8px rgba(0,0,0,0.15)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 16px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>

          <Link to="#" style={{ color: "white", fontSize: 20, fontWeight: 700, textDecoration: "none" }}>
            WEB2091 App
          </Link>

          <div style={{ display: "flex", gap: 24 }}>
            <Link to="/login" style={{ color: "white", textDecoration: "none" }}>Trang chủ</Link>
            <Link to="/list" style={{ color: "white", textDecoration: "none" }}>Danh sách</Link>
            <Link to="/lap4" style={{ color: "white", textDecoration: "none" }}>Thêm mới</Link>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            {user ? (
              <>
                <Avatar style={{ backgroundColor: "#fff", color: "#1677ff", fontWeight: 700 }}>
                  {user.email?.[0]?.toUpperCase() ?? "U"}
                </Avatar>
                <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.3 }}>
                  <Typography.Text style={{ color: "white", fontSize: 13, fontWeight: 600 }}>
                    {user.email}
                  </Typography.Text>
                  <Tag color="green" style={{ width: "fit-content", fontSize: 11, lineHeight: "16px" }}>
                    ✓ Đã đăng nhập
                  </Tag>
                </div>
                <Button danger type="primary" size="small" onClick={logout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Tag color="default" style={{ color: "#fff", background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.4)", fontSize: 12 }}>
                  Chưa đăng nhập
                </Tag>
                <Link to="/login" style={{ color: "white", textDecoration: "none" }}>Đăng nhập</Link>
                <Link to="/register" style={{ color: "white", textDecoration: "none" }}>Đăng ký</Link>
              </>
            )}
          </div>
        </div>
      </nav>
      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto mt-10 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Chào mừng đến với WEB2091</h1>
      </div>
      <Routes>
        <Route path="/add" element={<Lap2 />} />
        <Route path="/edit" element={<UserList />} />
        <Route path="/lap2" element={<E1 />} />
        <Route path="/E2" element={<E2 />} />
        <Route path="/lap4" element={<Lap4 />} />
        <Route path="/list" element={<ListStory />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
