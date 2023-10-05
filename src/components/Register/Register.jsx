import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import auth from "../firebase/firebase.config";
import { Link } from "react-router-dom";
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;
    console.log(name, photoURL, email, password, terms);
    setError("");
    setSuccess("");
    // password and email validation
    if (password.length < 6) {
      setError("Password must be 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setError("Password should have at least one uppercase characters");
      return;
    } else if (!terms) {
      setError("Please accept our terms and conditions");
      return;
    }
    // create user with email and password
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setSuccess("Register successfull");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return (
    <div>
      <div className="w-[50%] mx-auto mt-12">
        <h2 className="text-4xl font-bold text-center mb-10">
          Please Register
        </h2>
        <form onSubmit={handleRegister}>
          <input
            className="py-3 px-6 w-full mb-4"
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            required
          />
          <input
            className="py-3 px-6 w-full mb-4"
            type="text"
            name="photoURL"
            id="photoURL"
            placeholder="Enter your photoURL"
            required
          />
          <input
            className="py-3 px-6 w-full mb-4"
            type="email"
            name="email"
            id="email"
            placeholder="Your email"
            required
          />
          <input
            className="py-3 px-6 w-full mb-4 relative"
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Your Password"
            required
          />
          <span
            className="cursor-pointer absolute translate-x-[-200%] translate-y-[90%]"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
          <br />
          <input
            type="checkbox"
            name="terms"
            id="terms"
            className="mb-4 me-4"
          />
          <label htmlFor="terms">
            Please accept our{" "}
            <Link to="/" className=" text-fuchsia-500">
              Terms & Conditions
            </Link>
          </label>
          <br />
          {error && <p className="font-bold text-red-600">{error}</p>}
          {success && <p className="font-bold text-green-600">{success}</p>}
          <input
            className="btn btn-secondary w-full"
            type="submit"
            value="Register"
          />
        </form>
      </div>
    </div>
  );
};

export default Register;
