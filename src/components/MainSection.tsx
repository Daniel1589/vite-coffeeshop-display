import { FactCard } from "./FactCard";
import { Methods } from "./Methods";
import { CoffeeImageTheme } from "../constants/styles";
export const MainSection = () => {
  return (
    <div>
      <FactCard />
      <Methods />
      <img className={CoffeeImageTheme.theme} src={CoffeeImageTheme.src}></img>
    </div>
  );
};
