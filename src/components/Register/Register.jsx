import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
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
    console.log(name, photoURL, email, password);
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
          />
          <input
            className="py-3 px-6 w-full mb-4"
            type="text"
            name="photoURL"
            id="photoURL"
            placeholder="Enter your photoURL"
          />
          <input
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
        </form>
      </div>
    </div>
  );
};

export default Register;
