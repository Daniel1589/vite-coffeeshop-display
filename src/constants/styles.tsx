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
export const ProductCarouselTheme = {
  body: "py-20 bg-[#f2f1ed]",
  mainContainer: "flex bg-[#f2f1ed] relative justify-center",
  productContainer: "py-4 px-12 bg-[#f2f1ed]",
  cards: "flex w-[1750px] gap-[20px]",
  mapContainer: "w-full",
  productImg: "w-full h-102 object-cover",
  header: "text-2xl ",
  price: "text-gray-600",
  arrowBack:
    "absolute top-[250px] left-2 text-black size-6 hover:cursor-pointer",
  arrowForward:
    "absolute top-[250px] right-2 text-black size-6 hover:cursor-pointer",
  buttonContainer: "flex justify-center",
  button:
    "border-[1px] border-black text-center text-[35px] font-normal bottom-[75px] right-[100px] py-[25px] px-[70px] bg-[#fff7d8]",
};
export const FooterTheme = {
  mainContainer: "bg-[#d2e1ee] p-[320px] relative",
  bottomInfo:
    "absolute left-1/2 bottom-8 transform translate-x-[-50%] translate-y-[50%]",
  ul1: "flex gap-[45px]",
  copyright: "flex justify-center items-center",
  icon: "w-[10px] h-[10px]",
  info1: "absolute left-[250px] top-[75px] text-[17px]",
  header: "font-semibold text-[25px]",
  ul2: "list-none pt-8",
  ul3: "list-none pt-8 leading-[1.8]",
  ul4: "list-none pt-8 leading-[1.8]",
  info2: "absolute right-[100px] top-[100px]",
  ul5: "pt-6",
  subscribebox: "pt-[150px]",
  header2: "pb-2",
  textArea:
    "bg-[#d2e1ee] border-2 border-black py-[12px] pr-[150px] pl-[15px] text-slate-600",
  button: "bg-black text-white py-[14px] px-6",
};
