import React from 'react'
import useAuth from "../hooks/useAuth";


const RegisterPage = () => {
 let {handleSubmit,register,errors,Navigate,registerSubmit} = useAuth()
 

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-zinc-900">Create Account</h1>

          <p className="mt-2 text-sm text-zinc-500">Sign up to get started</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(registerSubmit)} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-700">
              Full Name
            </label>

            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              placeholder="Enter your full name"
              className="w-full rounded-lg border border-zinc-300 px-4 py-3 outline-none transition focus:border-black"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>

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

          {/* Confirm Password */}
          {/* <div>
            <label className="mb-2 block text-sm font-medium text-zinc-700">
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full rounded-lg border border-zinc-300 px-4 py-3 outline-none transition focus:border-black"
            />
          </div> */}

          {/* Terms */}
          {/* <div className="flex items-center gap-2">
            <input type="checkbox" id="terms" />

            <label htmlFor="terms" className="text-sm text-zinc-600">
              I agree to the terms and conditions
            </label>
          </div> */}

          {/* Register Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-black py-3 font-medium text-white transition hover:bg-zinc-800"
          >
            Create Account
          </button>
        </form>

        {/* Login */}
        <p className="mt-6 text-center text-sm text-zinc-500">
          Already have an account?{" "}
          <span
            onClick={() => {
              Navigate("/");
            }}
            className="cursor-pointer font-medium text-black hover:underline"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
