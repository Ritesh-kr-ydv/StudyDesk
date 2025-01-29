import React, { useRef, useState } from "react";

const OTPInput = ({ otp, setOtp }) => {
  // Create refs for the input fields
  const inputsRef = useRef([]);

  // Handle input change
  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) return; // Only allow numeric input

    // Update the OTP state
    const otpArray = otp.split("");
    otpArray[index] = value;
    setOtp(otpArray.join(""));

    // Move to the next input when a digit is entered
    if (value.length === 1 && index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1].focus();
    }

    // Handle backspace
    if (value.length === 0 && e.nativeEvent.inputType === "deleteContentBackward" && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  return (
    <div className="flex justify-center items-center space-x-2">
      {[...Array(6)].map((_, index) => (
        <input
          key={index}
          ref={(el) => (inputsRef.current[index] = el)} // Attach refs dynamically
          type="text"
          maxLength="1"
          className="w-10 h-14 text-center text-2xl font-extrabold text-white bg-richblack-800 border border-slate-600 hover:border-indigo-400 appearance-none rounded-md outline-none focus:bg-richblack-700 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-300"
          value={otp[index] || ""} // Bind input value to the corresponding character in `otp`
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => {
            if (!e.key.match(/[0-9]/) && e.key !== "Backspace") {
              e.preventDefault(); // Allow only numeric input and backspace
            }
          }}
        />
      ))}
    </div>
  );
};

export default OTPInput;
