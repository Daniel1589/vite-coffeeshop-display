import { TopSectionTheme } from "../constants/styles";

export const TopSection = () => {
  return (
    <div className={TopSectionTheme.container}>
      <h1 className={TopSectionTheme.header}>
        FOR THE LOVE <br></br>OF COFFEE
      </h1>
      <img
        className={TopSectionTheme.image}
        src={TopSectionTheme.imageSrc}
      ></img>
      <input
        className={TopSectionTheme.button}
        type="button"
        value="Shop Blends"
      ></input>
    </div>
  );
};
