import { FactCardTheme } from "../constants/styles";
export const FactCard = () => {
  return (
    <div className={FactCardTheme.container}>
      <h1 className={FactCardTheme.header}>
        Globally sourced but locally brewed our
        <br /> flavorful, full-bodied roasts taste as good
        <br /> as they smell.
      </h1>
    </div>
  );
};
