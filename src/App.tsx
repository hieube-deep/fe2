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
import { Button, Switch, Avatar, Typography } from "antd";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
function App() {
  const context = useContext(UserContext);
  const themeCtx = useContext(ThemeContext);
  if (!context || !themeCtx) {
    return (
      <div>loading....</div>
    )
  }

  const { user, setUser } = context;
  const { isDarkMode, toggleTheme } = themeCtx;

  const handleLogin = () => {
    setUser({
      name: "hiếu 123",
      avatar: "https://i.pravatar.cc/150",
    });
  };

  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div style={{ minHeight: "100vh", backgroundColor: isDarkMode ? "#141414" : "#ffffff", color: isDarkMode ? "#ffffff" : "#000000" }}>
      <nav className={`shadow ${isDarkMode ? "bg-gray-900 text-white" : "bg-blue-600 text-white"}`}>
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="#" className="text-xl font-semibold">
            <strong>WEB2091 App</strong>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/login" className="hover:text-gray-200">
              Trang chủ
            </Link>
            <Link to="/list" className="hover:text-gray-200">
              Danh sách
            </Link>
            <Link to="/lap4" className="hover:text-gray-200">
              Thêm mới
            </Link>
            <Link to="/lap2" className="hover:text-gray-200">
              sửa
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {/* <Switch
              checked={isDarkMode}
              onChange={toggleTheme}
              checkedChildren="Dark"
              unCheckedChildren="Light"
            />
            {user ? (
              <div className="flex items-center space-x-3">
                <Avatar src={user.avatar} />
                <Typography.Text style={{ color: "white", margin: 0 }}>
                  {user.name}
                </Typography.Text>
                <Button danger type="primary" onClick={handleLogout}>
                  Logout
                </Button>
              </div>
            ) : (
              <>
                <Button type="primary" onClick={handleLogin}>
                  Đăng nhập
                </Button>
                <Link to="/lap4" className="hover:text-gray-200">
                  Đăng ký
                </Link>
              </>
            )} */}
            <Link to="/login" className="hover:text-gray-200">
              Đăng nhập
            </Link>
            <Link to="/register" className="hover:text-gray-200">
              Đăng ký
            </Link>
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
