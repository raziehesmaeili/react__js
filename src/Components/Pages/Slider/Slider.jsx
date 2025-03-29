import { NavLink } from "react-router-dom";
import styles from './Slider.module.css';

const Slider = () => {
    return (
        <div style={{ direction: "rtl" }}>
            <nav className="navbar navbar-expand-sm bg-white navbar-white">
                <div className="container-fluid" style={{ marginBottom: "20px"}}>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? `${styles.navLinkCustom} ${styles.navLinkCustomActive}` : styles.navLinkCustom} to="/">خانه</NavLink>
                        </li>
                        <li className="nav-item" style={{marginRight:"20px"}}>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? `${styles.navLinkCustom} ${styles.navLinkCustomActive}` : styles.navLinkCustom} to="/محصولات پوستی"> محصولات پوستی
                            </NavLink>
                        </li>
                        <li className="nav-item" style={{marginRight:"20px"}}>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? `${styles.navLinkCustom} ${styles.navLinkCustomActive}` : styles.navLinkCustom} to="/لوازم آرایشی"> لوازم آرایشی
                            </NavLink>
                        </li>
                        <li className="nav-item" style={{marginRight:"20px"}}>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? `${styles.navLinkCustom} ${styles.navLinkCustomActive}` : styles.navLinkCustom} to="/محصولات مو"> محصولات مو
                            </NavLink>
                        </li>
                        <li className="nav-item" style={{marginRight:"20px"}}>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? `${styles.navLinkCustom} ${styles.navLinkCustomActive}` : styles.navLinkCustom} to="/تقویت کننده ها"> تقویت کننده ها
                            </NavLink>
                        </li>
                        <li className="nav-item" style={{marginRight:"20px"}}>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? `${styles.navLinkCustom} ${styles.navLinkCustomActive}` : styles.navLinkCustom} to="/محصولات بدن"> محصولات بدن
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Slider;
