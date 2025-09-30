"use client";
import { useGetCategoriesQuery, useGetProductsQuery } from "@/api/api";
import styles from "./FiltersProducts.module.css";
import { useEffect, useMemo, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { IProducts } from "@/types/interfaces";
import Select from "../Select/Select";
import Blur from "../Blur/Blur";
import { Slider } from "@mui/material";
import { useFilters } from "@/hooks/useFilters";
import { useAppDispatch } from "@/store/store";
import { setCategoryId, setRangeValue } from "@/store/slices/filterSlice";
import { useDebounce } from "@/hooks/useDebounce";
import Pagination from "../Pagination/Pagination";

interface IProps {
  products: IProducts[];
}

function FiltersProducts({ products }: IProps) {
  const dispatch = useAppDispatch();
  const { categoryId, rangeValue } = useFilters();

  const debouncedRange = useDebounce(rangeValue, 1000);

  const { data: categories } = useGetCategoriesQuery(null);
  const { data: productsData = products } = useGetProductsQuery({
    categoryId: categoryId,
    price_min: debouncedRange[0],
    price_max: debouncedRange[1],
  });

  const [currentPage, setCurrentPage] = useState(1);

  const PAGE_SIZE = 6;
  const firstIndex = currentPage * PAGE_SIZE - PAGE_SIZE;
  const endIndex = firstIndex + PAGE_SIZE;
  const totalPages = Math.ceil(productsData.length / PAGE_SIZE);

  const handleChange = (_: Event, newValue: number[]) => {
    dispatch(setRangeValue(newValue));
  };

  const maxPriceProduct = useMemo(
    () =>
      productsData.reduce(
        (acc, el) => (el.price > acc ? (acc = el.price) : acc),
        0
      ),
    []
  );
  useEffect(() => {
    dispatch(setRangeValue([1, maxPriceProduct]));
  }, []);

  return (
    <section className={styles.wrapper}>
      <Blur />
      <div className="container">
        <div className={styles.top}>
          <ol className={styles.categories}>
            {categories?.map((el) => (
              <li
                onClick={() =>
                  dispatch(setCategoryId(el.id === categoryId ? 0 : el.id))
                }
                key={el.id}
                className={`${styles.categoryItem} ${
                  categoryId === el.id && styles.active
                }`}
              >
                {el.name}
              </li>
            ))}
          </ol>
          <div className={styles.sort}>
            Сортировать <Select title="по умолчанию" />
          </div>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.filters}>
          <div className={styles.filtersContent}>
            <Slider
              value={rangeValue}
              onChange={handleChange}
              valueLabelDisplay="auto"
              min={1}
              max={maxPriceProduct}
            />
            <div className={styles.range}>
              <div>от {rangeValue[0]}$</div>
              <div>до {rangeValue[1]}$</div>
            </div>
            <ul className={styles.advantages}>
              <li className={styles.advantagesCard}>
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 32H32V35.5H11V32ZM7.5 23.25H25V26.75H7.5V23.25Z"
                    fill="#0071E4"
                  />
                  <path
                    d="M56.3583 33.0605L51.1083 20.8105C50.9735 20.4956 50.7493 20.2273 50.4634 20.0388C50.1775 19.8502 49.8425 19.7498 49.5 19.75H44.25V16.25C44.25 15.7859 44.0656 15.3408 43.7374 15.0126C43.4093 14.6844 42.9641 14.5 42.5 14.5H14.5V18H40.75V39.973C39.9526 40.436 39.2547 41.0524 38.6967 41.7864C38.1386 42.5205 37.7314 43.3578 37.4985 44.25H26.5015C26.0756 42.6003 25.0626 41.1627 23.6525 40.2064C22.2424 39.2502 20.5319 38.8411 18.8418 39.0558C17.1516 39.2705 15.5977 40.0942 14.4714 41.3726C13.3452 42.651 12.7238 44.2962 12.7238 46C12.7238 47.7038 13.3452 49.349 14.4714 50.6274C15.5977 51.9058 17.1516 52.7295 18.8418 52.9442C20.5319 53.1589 22.2424 52.7498 23.6525 51.7936C25.0626 50.8373 26.0756 49.3997 26.5015 47.75H37.4985C37.8792 49.2519 38.7498 50.584 39.9726 51.5356C41.1954 52.4871 42.7006 53.0037 44.25 53.0037C45.7994 53.0037 47.3046 52.4871 48.5274 51.5356C49.7502 50.584 50.6208 49.2519 51.0015 47.75H54.75C55.2141 47.75 55.6593 47.5656 55.9874 47.2374C56.3156 46.9093 56.5 46.4641 56.5 46V33.75C56.5001 33.5129 56.4519 33.2783 56.3583 33.0605ZM19.75 49.5C19.0578 49.5 18.3811 49.2947 17.8055 48.9101C17.2299 48.5256 16.7813 47.9789 16.5164 47.3394C16.2515 46.6999 16.1822 45.9961 16.3173 45.3172C16.4523 44.6383 16.7856 44.0146 17.2751 43.5251C17.7646 43.0356 18.3883 42.7023 19.0672 42.5673C19.7461 42.4322 20.4499 42.5015 21.0894 42.7664C21.7289 43.0313 22.2756 43.4799 22.6601 44.0555C23.0447 44.6311 23.25 45.3078 23.25 46C23.2491 46.928 22.88 47.8177 22.2239 48.4739C21.5677 49.13 20.678 49.4991 19.75 49.5ZM44.25 23.25H48.345L52.097 32H44.25V23.25ZM44.25 49.5C43.5578 49.5 42.8811 49.2947 42.3055 48.9101C41.7299 48.5256 41.2813 47.9789 41.0164 47.3394C40.7515 46.6999 40.6822 45.9961 40.8173 45.3172C40.9523 44.6383 41.2856 44.0146 41.7751 43.5251C42.2646 43.0356 42.8883 42.7023 43.5672 42.5673C44.2461 42.4322 44.9499 42.5015 45.5894 42.7664C46.2289 43.0313 46.7756 43.4799 47.1601 44.0555C47.5447 44.6311 47.75 45.3078 47.75 46C47.7491 46.928 47.38 47.8177 46.7239 48.4739C46.0677 49.13 45.178 49.4991 44.25 49.5ZM53 44.25H51.0015C50.616 42.751 49.744 41.4223 48.5222 40.4722C47.3003 39.5221 45.7978 39.0043 44.25 39V35.5H53V44.25Z"
                    fill="#0071E4"
                  />
                </svg>
                <div>
                  <h3>Доставка за 2 часа</h3>
                  <p>Быстро и бесплатно доставляем все заказы по Москве</p>
                </div>
              </li>
              <li className={styles.advantagesCard}>
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M43.6667 25V20.3333C43.6667 19.0956 43.175 17.9086 42.2998 17.0335C41.4247 16.1583 40.2377 15.6666 39 15.6666H15.6667C14.429 15.6666 13.242 16.1583 12.3668 17.0335C11.4917 17.9086 11 19.0956 11 20.3333V34.3333C11 35.571 11.4917 36.758 12.3668 37.6331C13.242 38.5083 14.429 39 15.6667 39H20.3333M25 48.3333H48.3333C49.571 48.3333 50.758 47.8416 51.6332 46.9665C52.5083 46.0913 53 44.9043 53 43.6666V29.6666C53 28.4289 52.5083 27.242 51.6332 26.3668C50.758 25.4916 49.571 25 48.3333 25H25C23.7623 25 22.5753 25.4916 21.7002 26.3668C20.825 27.242 20.3333 28.4289 20.3333 29.6666V43.6666C20.3333 44.9043 20.825 46.0913 21.7002 46.9665C22.5753 47.8416 23.7623 48.3333 25 48.3333ZM41.3333 36.6666C41.3333 37.9043 40.8417 39.0913 39.9665 39.9665C39.0913 40.8416 37.9043 41.3333 36.6667 41.3333C35.429 41.3333 34.242 40.8416 33.3668 39.9665C32.4917 39.0913 32 37.9043 32 36.6666C32 35.429 32.4917 34.242 33.3668 33.3668C34.242 32.4916 35.429 32 36.6667 32C37.9043 32 39.0913 32.4916 39.9665 33.3668C40.8417 34.242 41.3333 35.429 41.3333 36.6666V36.6666Z"
                    stroke="#0071E4"
                    stroke-width="3.67"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <div>
                  <h3>Оплата</h3>
                  <p>Все виды наличного и безналичного расчета</p>
                </div>
              </li>
              <li className={styles.advantagesCard}>
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5 27.5H17V39.5H14C13.6022 39.5 13.2206 39.658 12.9393 39.9393C12.658 40.2206 12.5 40.6021 12.5 41C12.5 41.3978 12.658 41.7793 12.9393 42.0606C13.2206 42.3419 13.6022 42.5 14 42.5H50C50.3978 42.5 50.7794 42.3419 51.0607 42.0606C51.342 41.7793 51.5 41.3978 51.5 41C51.5 40.6021 51.342 40.2206 51.0607 39.9393C50.7794 39.658 50.3978 39.5 50 39.5H47V27.5H51.5C51.826 27.4994 52.1429 27.3926 52.4028 27.1959C52.6626 26.9991 52.8514 26.7231 52.9403 26.4095C53.0293 26.0959 53.0138 25.7619 52.896 25.4579C52.7782 25.154 52.5646 24.8967 52.2875 24.725L32.7875 12.725C32.5515 12.5769 32.2786 12.4983 32 12.4983C31.7214 12.4983 31.4485 12.5769 31.2125 12.725L11.7125 24.725C11.4354 24.8967 11.2218 25.154 11.104 25.4579C10.9862 25.7619 10.9707 26.0959 11.0597 26.4095C11.1486 26.7231 11.3374 26.9991 11.5972 27.1959C11.8571 27.3926 12.174 27.4994 12.5 27.5ZM20 27.5H26V39.5H20V27.5ZM35 27.5V39.5H29V27.5H35ZM44 39.5H38V27.5H44V39.5ZM32 15.7625L46.1937 24.5H17.8062L32 15.7625ZM54.5 47C54.5 47.3978 54.342 47.7793 54.0607 48.0606C53.7794 48.3419 53.3978 48.5 53 48.5H11C10.6022 48.5 10.2206 48.3419 9.93934 48.0606C9.65804 47.7793 9.5 47.3978 9.5 47C9.5 46.6021 9.65804 46.2206 9.93934 45.9393C10.2206 45.658 10.6022 45.5 11 45.5H53C53.3978 45.5 53.7794 45.658 54.0607 45.9393C54.342 46.2206 54.5 46.6021 54.5 47Z"
                    fill="#0071E4"
                  />
                </svg>

                <div>
                  <h3>Кредит</h3>
                  <p>
                    Выгодные кредитные предложения от самых популярных банков
                  </p>
                </div>
              </li>
              <li className={styles.advantagesCard}>
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M34.5776 53.793L38.4743 51.0677C43.4561 47.5802 47.3121 42.7149 49.5697 37.0683C51.8272 31.4217 52.3883 25.2391 51.184 19.2783C51.1245 18.9846 50.9982 18.7085 50.815 18.4714C50.6317 18.2343 50.3963 18.0425 50.127 17.911L31.9013 9L13.678 17.911C13.4083 18.0423 13.1724 18.2339 12.9887 18.471C12.805 18.7081 12.6783 18.9844 12.6186 19.2783C11.4146 25.2393 11.976 31.4221 14.234 37.0687C16.492 42.7153 20.3484 47.5805 25.3306 51.0677L29.2273 53.793C30.0115 54.3416 30.9454 54.6359 31.9025 54.6359C32.8595 54.6359 33.7934 54.3416 34.5776 53.793V53.793Z"
                    stroke="#0071E4"
                    stroke-width="3.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <div>
                  <h3>Гарантия</h3>
                  <p>Предоставляем целый год сервисного обслуживания</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.products}>
          {productsData?.slice(firstIndex, endIndex).map((product) => (
            <ProductCard {...product} key={product.id} />
          ))}
        </div>
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </section>
  );
}

export default FiltersProducts;
