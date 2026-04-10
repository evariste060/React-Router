import { useState } from "react";
const ValidatePassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const validatePassword = (str) => {
    let hasUpper = false;
    let hasLower = false;
    let hasDigit = false;
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (char >= "0" && char <= "9") hasDigit = true;
      else if (char >= "A" && char <= "Z") hasUpper = true;
      else if (char >= "a" && char <= "z") hasLower = true;
      if (hasUpper && hasLower && hasDigit) break;
    }
    return {
      length: str.length >= 8,
      upper: hasUpper,
      lower: hasLower,
      digit: hasDigit,
    };
  };
  const validations = validatePassword(password);
  const isDisabled = !Object.values(validations).every(Boolean);
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="w-[60vw] border-2 border-black p-6">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold">Create password</h1>
          <p>Enter a secure password</p>
        </div>
        <form className="space-y-4">
          <div className="flex items-center">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="border p-2 w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <span
              className="-ml-8 cursor-pointer"
              onClick={() => setShowPassword(prev => !prev)}
            >
              👁️
            </span>
          </div>
          <h2 className="font-bold">Password requirements</h2>

          <Requirement
            label="At least 8 characters"
            checked={validations.length}
          />
          <Requirement
            label="Contains uppercase letter"
            checked={validations.upper}
          />
          <Requirement
            label="Contains lowercase letter"
            checked={validations.lower}
          />
          <Requirement
            label="Contains a digit"
            checked={validations.digit}
          />
          <button
            className={`p-3 text-white ${
              isDisabled ? "bg-gray-400" : "bg-blue-600"
            }`}
            disabled={isDisabled}
            onClick={(e) => {
              e.preventDefault();
              alert("Password accepted");
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
const Requirement = ({ label, checked }) => {
  return (
    <label className="flex items-center gap-2">
      <input type="checkbox" checked={checked} readOnly />
      <span>{label}</span>
    </label>
  );
};

export default ValidatePassword;