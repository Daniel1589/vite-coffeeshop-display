import MainPagePicture from "../images/mainPage.jpg";
import Pic1 from "../images/pic1.jpg";
import Pic2 from "../images/pic2.jpg";
import Pic3 from "../images/pic3.jpg";
import CoffeeImage from "../images/pic4.jpg";

export const NavBarTheme = {
  container: "flex bg-[#fff7d8] p-[20px]",
  unorderedList1: "list-none flex gap-[30px] items-center",
  listItem1: "text-[40px] font-semibold",
  unorderedList2: "ml-auto list-none flex gap-[30px] items-center",
  logIn: "flex gap-[10px] items-center",
  logInIcon: "w-[25px] h-[25px]",
  button: "border-none py-[13px] px-6 bg-black text-white text-center",
};
export const TopSectionTheme = {
  container: "flex relative",
  header: "absolute text-white font-normal left-[80px] top-[25px] text-[100px]",
  imageSrc: MainPagePicture,
  image: "h-[100%] w-[100%]",
  button:
    "absolute border-2 border-black text-center text-[35px] font-normal bottom-[75px] right-[100px] py-[25px] px-[70px] bg-[#fff7d8]",
};
export const FactCardTheme = {
  container: "flex justify-center p-[150px] bg-[#fefbf1]",
  header: "text-[40px] font-normal",
};
export const MethodsTheme = {
  container: "flex p-[80px] flex-col items-center bg-[#fff7d8]",
  header: "text-center text-[45px] pb-[55px] font-normal",
  imageContainer: "flex gap-[50px]",
  images: "w-[550px] h-[550px]",
  insideHeader: "text-[25px] font-semibold",
  insideParagraph: "font-normal",
  src1: Pic1,
  src2: Pic2,
  src3: Pic3,
};
export const CoffeeImageTheme = {
  theme: "w-[100%] h-[100%]",
  src: CoffeeImage,
};
export const ProductListTheme = {
  container: "",
  cardContainer: "mt-20 flex",
  images: "w-[400px] h-[400px]",
  header: "text-[20px] font-normal",
  price: "text-[17px]",
};
