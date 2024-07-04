import { MethodsTheme } from "../constants/styles";
export const Methods = () => {
  return (
    <div className={MethodsTheme.container}>
      <h1 className={MethodsTheme.header}>GRAB IT ON THE GO</h1>
      <div className={MethodsTheme.imageContainer}>
        <div>
          <img className={MethodsTheme.images} src={MethodsTheme.src1}></img>
          <h1 className={MethodsTheme.insideHeader}>Espresso</h1>
          <p className={MethodsTheme.insideParagraph}>
            Hmmm tasty, and makes my heart go brrrrr
          </p>
        </div>
        <div>
          <img className={MethodsTheme.images} src={MethodsTheme.src2}></img>
          <h1 className={MethodsTheme.insideHeader}>Pour-Over</h1>
          <p className={MethodsTheme.insideParagraph}>
            Nice, balanced, sometimes tastes like shit.
          </p>
        </div>
        <div>
          <img className={MethodsTheme.images} src={MethodsTheme.src3}></img>
          <h1 className={MethodsTheme.insideHeader}>Drip</h1>
          <p className={MethodsTheme.insideParagraph}>
            If you're lazy, buy one of em' drip coffee makers.
          </p>
        </div>
      </div>
    </div>
  );
};
