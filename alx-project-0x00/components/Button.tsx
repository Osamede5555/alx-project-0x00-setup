import React from "react";

interface ButtonProps {
  title: string;
  styles?: string; // optional, for custom Tailwind classes
  sizes: string; // e.g., 'small', 'medium', 'large'
  shapes: string
}

const Button: React.FC<ButtonProps> = ({ title, styles, sizes, shapes}) => {
  return (
    // <button
    //   className={`px-4 py-2 font-semibold text-white bg-blue-600 hover:bg-blue-700 transition ${styles}`}
    // >
    //   {title}
    // </button>
    <button className={`height${sizes} ${shapes} border px-3 py-1 text-lg mt-3 bg-blue-500 text-white ${styles}`}>
    {title}
</button>
  );
};

export default Button;
