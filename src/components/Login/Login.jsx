import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <div className="w-[50%] mx-auto mt-12">
        <h2 className="text-4xl font-bold text-center mb-10">Please Login</h2>
        <form>
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

export default Login;
