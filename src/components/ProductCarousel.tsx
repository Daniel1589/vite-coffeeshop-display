import { useState } from "react";
import productsData from "../data/products.json";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { ProductCarouselTheme } from "../constants/styles";

export const ProductCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const products = productsData.products;
  const itemsPerPage = 4;

  const nextProducts = () => {
    const newStartIndex = (startIndex + 1) % products.length;
    setStartIndex(newStartIndex);
  };

  const prevProducts = () => {
    const newStartIndex = (startIndex - 1 + products.length) % products.length;
    setStartIndex(newStartIndex);
  };

  return (
    <div className={ProductCarouselTheme.body}>
      <div className={ProductCarouselTheme.mainContainer}>
        <div className={ProductCarouselTheme.productContainer}>
          <div className={ProductCarouselTheme.cards}>
            {[...products, ...products, ...products]
              .slice(startIndex, startIndex + itemsPerPage)
              .map((product, index) => (
                <div key={index} className={ProductCarouselTheme.mapContainer}>
                  <div>
                    <img
                      src={product.src}
                      alt={product.name}
                      className={ProductCarouselTheme.productImg}
                    />
                    <div>
                      <div className={ProductCarouselTheme.header}>
                        {product.name}
                      </div>
                    </div>
                    <div>
                      <p className={ProductCarouselTheme.price}>
                        {product.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <IoIosArrowBack
            className={ProductCarouselTheme.arrowBack}
            values="Previous"
            onClick={prevProducts}
          />

          <IoIosArrowForward
            className={ProductCarouselTheme.arrowForward}
            values="Previous"
            onClick={nextProducts}
          />
        </div>
      </div>
      <div className={ProductCarouselTheme.buttonContainer}>
        <button className={ProductCarouselTheme.button}>SHOP ALL</button>
      </div>
    </div>
  );
};
