import Form from "../components/Form";
import { useTheme } from "../hooks/useTheme";

const HomePage = () => {
  const { theme } = useTheme();
  const textColorClass = theme === "light" ? "text-black" : "text-white";

  return (
    <div className="text-center mt-10">
      <h2 className={`text-4xl ${textColorClass}`}>
        Главная страница заполнения простой формы
      </h2>
      <Form />
    </div>
  );
};

export default HomePage;
