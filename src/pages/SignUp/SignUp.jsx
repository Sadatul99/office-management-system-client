import { useContext } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import axios from "axios";

const SignUp = () => {
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleImageUpload = async (imageFile) => {
        const formData = new FormData();
        formData.append("image", imageFile);

        const { data } = await axios.post(
            `https://api.imgbb.com/1/upload?key=9619387f31898c3d9b124bfec7cbe6ba`,
            formData
        );

        return data.data.display_url;
    };

    const onSubmit = async (data) => {
        try {
            const uploadedPhotoURL = await handleImageUpload(data.photo[0]); // Upload photo to imgbb
            
            // Create user in Firebase Authentication
            const result = await createUser(data.email, data.password);
            const loggedUser = result.user;
            console.log(loggedUser)

            // Update user profile with display name and photo URL
            await updateUserProfile(data.name, uploadedPhotoURL);
            
            const userInfo = {
                name: data.name,
                email: data.email,
                role: data.role,
                designation: data.designation,
                bank_account_no: data.bank_account_no,
                salary: data.salary,
                photo: uploadedPhotoURL,
            };

            // Save user data in Firebase
            const res = await axiosPublic.post('/users', userInfo);
            if (res.data.insertedId) {
                reset();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User created successfully.',
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/');
            }
        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.message,
            });
        }
    };

    return (
        <>
            <Helmet>
                <title>WorkNest | Sign Up</title>
            </Helmet>

            <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg flex flex-col md:flex-row overflow-hidden">
                    <div className="w-full md:w-1/2 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 text-white p-8 flex flex-col justify-center">
                        <h1 className="text-4xl font-bold mb-4">Welcome to WorkNest!</h1>
                        <p className="text-lg">
                            Join us today and streamline your office management tasks with ease. Your journey to efficiency starts here.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 bg-gray-50 p-8">
                        <h2 className="text-3xl font-semibold text-gray-700 text-center">Sign Up</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-4">
                            <div className="form-control">
                                <label className="block text-sm font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    {...register("name", { required: true })}
                                    placeholder="Enter your name"
                                    className="input input-bordered w-full border-gray-300 focus:ring-primary focus:border-primary"
                                />
                                {errors.name && <p className="text-sm text-red-600 mt-1">Name is required</p>}
                            </div>
                            <div className="form-control">
                                <label className="block text-sm font-medium text-gray-700">Photo</label>
                                <input
                                    type="file"
                                    {...register("photo", { required: true })}
                                    className="file-input file-input-bordered w-full"
                                />
                                {errors.photo && <p className="text-sm text-red-600 mt-1">Photo is required</p>}
                            </div>
                            <div className="form-control">
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    {...register("email", { required: true })}
                                    placeholder="Enter your email"
                                    className="input input-bordered w-full border-gray-300 focus:ring-primary focus:border-primary"
                                />
                                {errors.email && <p className="text-sm text-red-600 mt-1">Email is required</p>}
                            </div>
                            <div className="form-control">
                                <label className="block text-sm font-medium text-gray-700">Password</label>
                                <input
                                    type="password"
                                    {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/
                                    })}
                                    placeholder="Create a password"
                                    className="input input-bordered w-full border-gray-300 focus:ring-primary focus:border-primary"
                                />
                                {errors.password?.type === "required" && <p className="text-sm text-red-600 mt-1">Password is required</p>}
                                {errors.password?.type === "minLength" && (
                                    <p className="text-sm text-red-600 mt-1">Password must be at least 6 characters</p>
                                )}
                                {errors.password?.type === "pattern" && (
                                    <p className="text-sm text-red-600 mt-1">
                                        Password must include an uppercase letter and a special character
                                    </p>
                                )}
                            </div>
                            <div className="form-control">
                                <label className="block text-sm font-medium text-gray-700">Role</label>
                                <select
                                    {...register("role", { required: true })}
                                    className="select select-bordered w-full"
                                >
                                    <option value="">Select Role</option>
                                    <option value="Employee">Employee</option>
                                    <option value="HR">HR</option>
                                </select>
                                {errors.role && <p className="text-sm text-red-600 mt-1">Role is required</p>}
                            </div>
                            <div className="form-control">
                                <label className="block text-sm font-medium text-gray-700">Designation</label>
                                <input
                                    type="text"
                                    {...register("designation", { required: true })}
                                    placeholder="Enter your designation"
                                    className="input input-bordered w-full border-gray-300 focus:ring-primary focus:border-primary"
                                />
                                {errors.designation && <p className="text-sm text-red-600 mt-1">Designation is required</p>}
                            </div>
                            <div className="form-control">
                                <label className="block text-sm font-medium text-gray-700">Bank Account No</label>
                                <input
                                    type="text"
                                    {...register("bank_account_no", { required: true })}
                                    placeholder="Enter your bank account number"
                                    className="input input-bordered w-full border-gray-300 focus:ring-primary focus:border-primary"
                                />
                                {errors.bank_account_no && <p className="text-sm text-red-600 mt-1">Bank account number is required</p>}
                            </div>
                            <div className="form-control">
                                <label className="block text-sm font-medium text-gray-700">Salary</label>
                                <input
                                    type="number"
                                    {...register("salary", { required: true })}
                                    placeholder="Enter your salary"
                                    className="input input-bordered w-full border-gray-300 focus:ring-primary focus:border-primary"
                                />
                                {errors.salary && <p className="text-sm text-red-600 mt-1">Salary is required</p>}
                            </div>
                            <button
                                type="submit"
                                className="btn bg-gradient-to-br from-gray-800 to-gray-600 text-white w-full hover:from-gray-700 hover:to-gray-500"
                            >
                                Sign Up
                            </button>
                        </form>
                        <p className="text-center text-sm mt-4 text-gray-500">
                            Already have an account? <Link to="/login" className="text-primary hover:underline">Login</Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;
