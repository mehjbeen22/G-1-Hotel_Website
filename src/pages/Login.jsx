import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useAuth } from './AuthContext';

const Login = () => {
  const [showPswrd, setShowPswrd] = useState(false);
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const { login } = useAuth();
  const navigate = useNavigate();

  const LoginHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:3005/login',
        loginData,
      );
      toast.success(response.data.message);
      login(); // Update the auth state
      navigate('/home');
    } catch (error) {
      const errorMessage =
        error.response?.data?.error ||
        'Login failed. Please check your credentials.';
      toast.error(errorMessage);
    }
  };

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleShowPswrd = () => {
    setShowPswrd(!showPswrd);
  };

  return (
    <main className="bg-gray-100 flex justify-center items-center h-screen">
      <ToastContainer />
      <form
        onSubmit={LoginHandler}
        className="bg-white flex flex-col gap-3 w-[35%] p-4 shadow-2xl"
      >
        <h1 className="text-black font-bold text-3xl text-center">LOGIN</h1>
        <label htmlFor="email">Email </label>
        <input
          name="email"
          type="email"
          className="border p-2 rounded outline-none"
          placeholder="Enter Email"
          onChange={inputHandler}
        />

        <label htmlFor="password"> Password</label>
        <div className="flex border rounded items-center">
          <input
            type={showPswrd ? 'text' : 'password'}
            name="password"
            placeholder="Enter Password"
            className="p-2 outline-none w-[90%]"
            onChange={inputHandler}
          />
          {showPswrd ? (
            <VisibilityIcon onClick={handleShowPswrd} />
          ) : (
            <VisibilityOffIcon onClick={handleShowPswrd} />
          )}
        </div>

        <button className="bg-blue-500 text-white p-2 rounded text-lg">
          Login
        </button>

        <p className="text-center">
          Create account{' '}
          <Link to="/" className="underline">
            Signup
          </Link>
        </p>
      </form>
    </main>
  );
};

export default Login;
