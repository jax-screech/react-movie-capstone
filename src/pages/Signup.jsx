// src/pages/Signup.jsx
import React, { useState } from 'react';
import { auth, db } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.jpeg';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        username,
        email,
        createdAt: new Date()
      });

      //  Redirect to login after successful signup
      navigate('/login');
    } catch (err) {
      if (err.message.includes("auth/email-already-in-use")) {
        setError("Email is already in use.");
      } else if (err.message.includes("auth/invalid-email")) {
        setError("Invalid email address.");
      } else if (err.message.includes("auth/weak-password")) {
        setError("Password is too weak (minimum 6 characters).");
      } else {
        setError("Signup failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };
  // After successful signup, user is redirected to login page via navigate('/login') in handleSignup.
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-xl shadow-md w-full max-w-md">
        <nav className="bg-gray-800 flex justify-between items-center fixed top-0 w-full p-2 z-50 left-0">
          <img src={Logo} alt="Logo" className="rounded-full h-12 w-12" />
          <div>
            <Link to="/" className="hover:text-blue-300">Home</Link>
          </div>
        </nav>
        <h2 className="text-2xl font-bold mb-6 text-center mt-14">Sign Up to NexTech</h2>
        {error && <p className="text-red-400 mb-4 text-sm">{error}</p>}
        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter a username"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="name@example.com"
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
                className="w-full px-4 py-2 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500 pr-16"
                placeholder="Set a password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-blue-400 hover:text-blue-600 focus:outline-none"
                tabIndex={-1}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          <button
          onClick={handleSignup}
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 transition px-4 py-2 rounded font-semibold"
            disabled={loading}
          >
            {loading ? "Signed Up succesfully..." : "Sign Up"}
          </button>
        </form>
        <p className="mt-4 text-sm text-center">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-400 hover:text-blue-500 font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
