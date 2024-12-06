import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Controller, useForm } from "react-hook-form";

const WorkSheet = () => {
    const { register, handleSubmit, control } = useForm()

    const onSubmit = (data) => {
        console.log(data);
        // Handle form submission
      };


    return (
        <div className="max-w-4xl mx-auto mt-8 bg-gray-50 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Work Sheet</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-center space-x-4 bg-white p-4 rounded-md shadow-sm"
      >
        {/* Task Dropdown */}
        <select
          {...register("task", { required: true })}
          className="border border-gray-300 p-2 rounded-md w-1/4 focus:ring-2 focus:ring-blue-500"
        >
          <option value="Sales">Sales</option>
          <option value="Support">Support</option>
          <option value="Content">Content</option>
          <option value="Paper-work">Paper-work</option>
        </select>

        {/* Hours Worked Input */}
        <input
          type="number"
          {...register("hoursWorked", { required: true, min: 1 })}
          placeholder="Hours Worked"
          className="border border-gray-300 p-2 rounded-md w-1/4 focus:ring-2 focus:ring-blue-500"
        />

        {/* Date Picker */}
        <Controller
          name="date"
          control={control}
          defaultValue={new Date()}
          render={({ field }) => (
            <DatePicker
              {...field}
              selected={field.value}
              className="border border-gray-300 p-2 rounded-md w-1/4 focus:ring-2 focus:ring-blue-500"
            />
          )}
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white px-4 py-2 rounded-md hover:from-gray-600 hover:to-gray-800 transition"
        >
          Add / Submit
        </button>
      </form>
    </div>
    );
};

export default WorkSheet;