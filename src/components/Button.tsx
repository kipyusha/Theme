import { useTheme } from "../hooks/useTheme";

const Button = () => {
  const { theme } = useTheme();
  const bgColorClass = theme === "light" ? "bg-neutral-950" : "bg-neutral-100";
  const textColorClass = theme === 'light' ? 'text-white' : 'text-black'
  return (
    <div>
      <button className={`text-2xl ${bgColorClass} rounded ${textColorClass} px-4 py-2 cursor-pointer hover:bg-neutral-800`}>
        Отправить
      </button>
    </div>
  );
};

export default Button;
