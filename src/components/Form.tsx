import { useTheme } from "../hooks/useTheme";
import Button from "./Button";

const Form = () => {
  const { theme } = useTheme();
  const textColorClass = theme === "light" ? "text-black" : "text-white";
  return (
    <div className="flex justify-center gap-2 ">
      <form className="flex gap-2 justify-center mt-5">
        <label htmlFor="name" className={`text-2xl ${textColorClass}`}>
          Имя
        </label>
        <input
          id="name"
          type="text"
          placeholder="Введите Ваше имя..."
          className="border-black bg-neutral-950 rounded p-2 text-white"
        />
        <Button />
      </form>
    </div>
  );
};

export default Form;
