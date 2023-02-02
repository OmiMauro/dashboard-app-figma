import React from 'react';
import styles from './Sidebar.module.scss';
import samanthaImg from '../../assets/png/samantha.png';
import { Link, useLocation } from 'react-router-dom';
const Sidebar = () => {
  const navLinks = ['dashboard', 'expenses', 'wallets', 'summary', 'accounts', 'settings'];
  const location = useLocation();
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarContent}>
        <div className={styles.profileDetails}>
          <div className={styles.profileImageDiv}>
            <img className={styles.profileImage} alt='Samantha' src={samanthaImg}></img>
            <p className={styles.notifications}>4</p>
          </div>
          <p className={styles.userName}>Samantha</p>
          <p className={styles.userEmail}>Samantha@email.com</p>
        </div>
        <nav className={styles.sidebarNav}>
          <ul>
            {navLinks.map((link) => (
              <li className={styles.sidebarNavItem} key={link}>
                <Link
                  className={
                    location.pathname.slice(1) === link
                      ? styles.sidebarNavLinkActive
                      : styles.sidebarNavLink
                  }
                  to={`/${link}`}
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
