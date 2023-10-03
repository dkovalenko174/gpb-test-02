import React from "react";
import styles from "./Error.module.css";

import { useDispatch } from "react-redux";

export const Error = ({ request, id }) => {
  const dispatch = useDispatch();
  const handleRetryClick = () => {
    dispatch(request(id ? id : ""));
  };

  return (
    <div className={styles.error}>
      <div className={styles.error__title}>Произошла ошибка</div>
      <button className={styles.error__button} onClick={handleRetryClick}>
        Повторить запрос
      </button>
    </div>
  );
};
