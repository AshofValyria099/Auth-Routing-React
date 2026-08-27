import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { MyAuth } from "../Context/MyAppAuthContext";

const LoginPage = () => {
    console.log("LoginPage renders...")

  let Navigate = useNavigate();

  const { registeredUsers, loggedInUsers, setloggedInUsers } =
    useContext(MyAuth);

  let {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm();

  let formSubmit = (data) => {
    let foundedUser = registeredUsers.find((val) => {
      return val.Email === data.Email && val.Password === data.Password;
    });

    if (!foundedUser) {
      alert("User not found or invalid credentials");
      reset();
      return;
    }

    setloggedInUsers(foundedUser);
    localStorage.setItem("loggedInUsers",JSON.stringify(foundedUser))
    alert("User logged IN");
    Navigate("/main")
    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-zinc-900">Welcome Back</h1>

          <p className="mt-2 text-sm text-zinc-500">
            Login to continue to your account
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(formSubmit)} className="space-y-5">
          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-700">
              Email Address
            </label>

            <input
              {...register("Email", { required: "Email is required" })}
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-zinc-300 px-4 py-3 outline-none transition focus:border-black"
            />
            {errors.Email && (
              <p className="text-red-500">{errors.Email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-700">
              Password
            </label>

            <input
              {...register("Password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "minimum 6 characters required",
                },
              })}
              type="password"
              placeholder="Create a password"
              className="w-full rounded-lg border border-zinc-300 px-4 py-3 outline-none transition focus:border-black"
            />
            {errors.Password && (
              <p className="text-red-500">{errors.Password.message}</p>
            )}
          </div>
          {/* Remember Me */}
          <div className="flex items-center gap-2">
            <input type="checkbox" id="remember" />

            <label htmlFor="remember" className="text-sm text-zinc-600">
              Remember me
            </label>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-black py-3 font-medium text-white transition hover:bg-zinc-800"
          >
            Login
          </button>
        </form>

        {/* Register */}
        <p className="mt-6 text-center text-sm text-zinc-500">
          Don't have an account?{" "}
          <span
            onClick={() => {
              Navigate("/register");
            }}
            className="cursor-pointer font-medium text-black hover:underline"
          >
            Create account
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
