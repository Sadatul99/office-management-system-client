import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    console.log("State in the location login page:", location.state);

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then((result) => {
                const user = result.user;
                console.log("Logged in user:", user);

                Swal.fire({
                    title: "Login Successful!",
                    icon: "success",
                    showClass: {
                        popup: "animate__animated animate__fadeInDown",
                    },
                    hideClass: {
                        popup: "animate__animated animate__fadeOutUp",
                    },
                });

                // Navigate to the intended page or fallback to "/"
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.error("Login error:", error);
                Swal.fire({
                    title: "Login Failed",
                    text: error.message,
                    icon: "error",
                    confirmButtonText: "Try Again",
                });
            });
    };

    return (
        <div>
            <Helmet>
                <title>WorkNest | Login</title>
            </Helmet>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row-reverse">
                    {/* Login Information Section */}
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold text-gray-800">Login now!</h1>
                        <p className="py-6 text-gray-600">
                            Welcome back to WorkNest! Log in to manage your office operations seamlessly.
                        </p>
                    </div>

                    {/* Login Form */}
                    <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            {/* Email Field */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-700">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    className="input input-bordered border-gray-300 focus:ring-primary focus:border-primary"
                                    required
                                />
                            </div>

                            {/* Password Field */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-700">Password</span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    className="input input-bordered border-gray-300 focus:ring-primary focus:border-primary"
                                    required
                                />
                                <label className="label">
                                    <a href="#" className="label-text-alt text-primary hover:underline">
                                        Forgot password?
                                    </a>
                                </label>
                            </div>

                            {/* Submit Button */}
                            <div className="form-control mt-6">
                                <button
                                    type="submit"
                                    className="btn bg-gradient-to-br from-gray-800 to-gray-600 text-white hover:from-gray-700 hover:to-gray-500"
                                >
                                    Login
                                </button>
                            </div>
                        </form>

                        {/* Sign Up Link */}
                        <p className="px-6 py-4 text-center text-sm text-gray-500">
                            New Here?{" "}
                            <Link to="/signup" className="text-primary hover:underline">
                                Create an account
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
