import React from "react";
import { Outlet } from "react-router-dom";

import styles from "./Layout.module.css";

export const Layout = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>Header</header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}>Footer</footer>
    </div>
  );
};
