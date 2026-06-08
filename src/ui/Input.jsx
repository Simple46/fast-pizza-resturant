/* eslint-disable react/prop-types */
function Input({ type, name, required }) {
  return (
    <input
      type={type}
      name={name}
      required={required}
      className="w-full rounded-full border border-stone-200 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-500 focus:outline-none focus:ring focus:ring-yellow-400 md:px-6 md:py-3"
    />
  );
}

export default Input;
