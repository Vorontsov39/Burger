import React from "react";
import { 
    Logo, 
    BurgerIcon, 
    ListIcon, 
    ProfileIcon 
} from '@ya.praktikum/react-developer-burger-ui-components'

import Styles from './AppHeader.module.css'


function AppHeader() {
    return(
        <header className={`${Styles.header} mt-4`}>
            <nav className={`${Styles.navigation} pt-4 pb-4`} >
                <menu className={Styles.menu}>
                    <li className={`${Styles.item} mr-7 ml-5`}>
                        <a className={`${Styles.links} `} href="#">
                            <BurgerIcon type="primary" />
                            <span className="ml-2 text text_type_main-default">Конструктор</span>
                        </a>
                    </li>
                    <li className={`${Styles.item} mr-30 ml-5 `}>
                        <a className={`${Styles.links} `} href="#">
                            <ListIcon type="primary" />
                            <span className="ml-2 text text_type_main-default">Лента заказов</span>
                        </a>
                    </li>
                    <li className={`${Styles.item} ml-3 mr-30`}>
                        <Logo />
                    </li>
                    <li className={`${Styles.item} ${Styles.item}  ml-30 pl-15`}>
                        <a className={`${Styles.links} `} href="#">
                            <ProfileIcon type="primary" />
                            <span className="ml-2 text text_type_main-default">Личный кабинет</span>
                        </a>
                    </li>
                </menu>

            </nav>
        </header>
    )
}

export default AppHeader;
