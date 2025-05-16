import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; 
import Logo from '../assets/logo.jpeg'

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/movies');
    } catch (err) {
      setError(err.message);
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-xl shadow-md w-full max-w-md">
        <nav className="bg-gray-800 flex justify-between items-center fixed top-0 w-full p-2 z-50 left-0">
          <img src={Logo} alt="" className='rounded-full h-12 w-12'/>
          <div>
            <Link to="/" className="hover:text-blue-300">Home</Link>
          </div>
        </nav>
        <h2 className="text-2xl font-bold mb-6 text-center">Log in to NexTech</h2>
        {error && <p className="text-red-400 mb-4">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Name@example.com"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500 pr-12"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-sm text-blue-400 hover:text-blue-600 focus:outline-none"
                tabIndex={-1}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 transition px-4 py-2 rounded font-semibold"
          >
            Log In
          </button>
        </form>
        <p className="mt-4 text-sm text-center">
          Don't have an account?{' '}
          <Link to="/signup" className="text-blue-600 text-lg">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
