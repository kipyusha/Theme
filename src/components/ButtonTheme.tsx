import { IoSunnyOutline } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
import { useTheme } from "../hooks/useTheme";

const ButtonTheme = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <button
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        className="p-2 px-4 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300 ease-in-out flex items-center justify-center gap-2"
      >
        {theme === "light" ? (
          <IoSunnyOutline size={24} className="text-yellow-500" />
        ) : (
          <FaMoon size={24} className="text-blue-400" />
        )}
        <span className="hidden sm:inline">
          {theme === "light" ? "Светлая тема" : "Темная тема"}
        </span>
      </button>
    </>
  );
};

export default ButtonTheme;
