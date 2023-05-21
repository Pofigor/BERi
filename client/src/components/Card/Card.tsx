import React, { useEffect, useState } from 'react';
import { El } from '../../types/types';
import style from '../Card/Card.module.css';
import Rating from '../Rating/Rating';
import arrowRight from '../../img/icons/arrowRight.svg';
import { productType } from '../../types/product';
import { useAppDispatch } from '../../redux/hooks/hooks';
import { addGoodsReducer } from '../../redux/slices/shopCard/card.slice';

export default function Card({ el }: El): JSX.Element {
  const dispatch = useAppDispatch();

  const handleAddToCart = (product: productType) => {
    //позже кнопку "в корзину" изменить на инкремент дикремент?

    const getItemLocalStorage = localStorage.getItem('GoodsForShopCart')
      ? JSON.parse(localStorage.getItem('GoodsForShopCart') as string)
      : [];

    const findItem = getItemLocalStorage.find(
      (el: productType) => el.id === product.id
    );

    if (findItem) {
      const quantityProductFilter = getItemLocalStorage.map((el: any) =>
        el.id === product.id ? { ...el, quantity: el.quantity + 1 || 1 } : el
      );

      localStorage.setItem(
        'GoodsForShopCart',
        JSON.stringify(quantityProductFilter)
      );

      dispatch(addGoodsReducer(quantityProductFilter));
    } else {
      localStorage.setItem(
        'GoodsForShopCart',
        JSON.stringify([
          ...getItemLocalStorage,
          { ...product, quantity: 1, price: el.minPrice },
        ])
      );
      const firtsAddProductInLocalStorage = JSON.parse(
        localStorage.getItem('GoodsForShopCart') as string
      );
      dispatch(addGoodsReducer(firtsAddProductInLocalStorage));
    }
  };

  return (
    <div className={style.card}>
      <img className={style.img} src={el.img} alt="cloth" />
      <Rating el={el} />
      <p>{el.name}</p>
      <p>От {el.minPrice} ₽</p>

      <button
        className={style.sliderDescriptionBtn}
        onClick={() => handleAddToCart(el)}
      >
        Добавить в корзину
        <img src={arrowRight} alt="arrowRight" />
      </button>
    </div>
  );
}
