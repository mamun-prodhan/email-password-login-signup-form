import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import auth from "../firebase/firebase.config";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const emailRef = useRef(null);

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setError("");
    setSuccess("");
    // sign in with email and password
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess("Successfully logged in");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        setError(errorMessage);
      });
  };

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      setError("Please write a valid email");
      return;
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    ) {
      setError("Please write a valid email");
      return;
    }
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Password reset email sent, please check");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return (
    <div>
      <div className="w-[50%] mx-auto mt-12">
        <h2 className="text-4xl font-bold text-center mb-10">Please Login</h2>
        <form onSubmit={handleSignIn}>
          <input
            ref={emailRef}
            className="py-3 px-6 w-full mb-4"
            type="email"
            name="email"
            id="email"
            placeholder="Your email"
          />
          <input
            className="py-3 px-6 w-full mb-4 relative"
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Your Password"
          />
          <span
            className="cursor-pointer absolute translate-x-[-200%] translate-y-[90%]"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
          <br />
          {error && <p className="font-bold text-red-600">{error}</p>}
          {success && <p className="font-bold text-green-600">{success}</p>}
          <input
            className="btn btn-secondary w-full"
            type="submit"
            value="Login"
          />
          <p onClick={handleForgetPassword} className="cursor-pointer">
            Forget Password?
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
