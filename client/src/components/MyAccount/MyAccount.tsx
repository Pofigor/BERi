import React, { useContext, useEffect, useState } from 'react';

import styleMyAccount from './MyAccount.module.css';
import DeliveryAddresses from '../DeliveryAddresses/DeliveryAddresses';
import { Context } from '../../index';
import { useNavigate } from 'react-router-dom';

// import arrawLeft from '../../img/icons/arrow-left.svg';
import account from '../../img/icons/user-check.svg';
import UserProfile from '../UserProfile/UserProfile';

export default function MyAccount() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [navigatorSelector, setNavigatorSelector] = useState(0);
  const { storeContext } = useContext(Context);

  const userId = storeContext.user.id;
  const userIsAuth = storeContext.isAuth;

  return (
    <React.Fragment>
      <div className={styleMyAccount.wrapper}>
        {/* <p className={styleMyAccount.backArrow} onClick={() => navigate(-1)}>
          <img src={arrawLeft} alt="arrawLeft" />
          назад
        </p> */}
        <div className={styleMyAccount.conteiner}>
          <div className={styleMyAccount.title}>
            <img
              className={styleMyAccount.titleIcon}
              src={account}
              alt="account"
            />
            <h1>Личный кабинет</h1>
          </div>

          <div className={styleMyAccount.dashboard}>
            <div className={styleMyAccount.navigatorlink}>
              {/* <p
                className={styleMyAccount.dashboarlink}
                onClick={() => setNavigatorSelector(0)}
              >
                Информация
              </p> */}
              <p
                className={styleMyAccount.dashboarlink}
                onClick={() => setNavigatorSelector(1)}
              >
                Заказы
              </p>
              <p
                className={styleMyAccount.dashboarlink}
                onClick={() => setNavigatorSelector(2)}
              >
                Адреса доставки
              </p>
              <p
                className={styleMyAccount.dashboarlink}
                onClick={() => setNavigatorSelector(3)}
              >
                Регистрационные данные
              </p>
              <p
                className={styleMyAccount.dashboarlink}
                onClick={() => setNavigatorSelector(4)}
              >
                Избранное
              </p>
              <p
                className={styleMyAccount.dashboarlink}
                onClick={() => navigate('/')}
              >
                Выход
              </p>
            </div>

            <div className={styleMyAccount.navigatorinfo}>
              {!navigatorSelector && (
                <>
                  <h4 className={styleMyAccount.dashboardtitleinfo}>
                    Добро пожаловать на Вашу персональную страницу!
                  </h4>

                  <p>
                    Здесь Вы можете просматривать свои последние заказы, управлять адресами доставки и выставления счетов, <br />
                    а также редактировать свои регистрационные данные.
                  </p>
                  <p>
                    Для получения интересующей Вас информации используйте
                    навигационную панель в левой части страницы.
                  </p>
                </>
              )}

              {navigatorSelector === 1 && (
                <>
                  <h4 className={styleMyAccount.dashboardtitleinfo}>
                    Ваши последние заказы
                  </h4>

                  <p>Здесь отображаются данные о заказах пользователя.</p>
                </>
              )}

              {navigatorSelector === 2 && (
                <>
                  <h4 className={styleMyAccount.dashboardtitleinfo}>
                    Адреса доставки
                  </h4>
                  <DeliveryAddresses userId={userId} />
                </>
              )}

              {navigatorSelector === 3 && (
                <>
                  <h4 className={styleMyAccount.dashboardtitleinfo}>
                    Регистрационные данные пользователя
                  </h4>
                  <UserProfile />
                </>
              )}

              {navigatorSelector === 4 && (
                <>
                  <h4 className={styleMyAccount.dashboardtitleinfo}>
                    Избранное
                  </h4>

                  <p>Здесь отображаются избранные товары</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
