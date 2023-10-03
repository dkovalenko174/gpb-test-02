import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Error } from "../../components/Error/Error";
import styles from "./ServiceList.module.css";
import { fetchServicesRequest } from "../../redux/actions";

export const ServiceList = () => {
  const dispatch = useDispatch();
  const services = useSelector(state => state.services.services);
  const loading = useSelector(state => state.services.loading);
  const errorMessage = useSelector(state => state.services.errorMessage);

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;
    dispatch(fetchServicesRequest(signal));

    return () => {
      abortController.abort();
    };
  }, [dispatch]);

  return (
    <div>
      <h1>Services List</h1>

      {loading ? (
        <div>Loading...</div>
      ) : errorMessage ? (
        <Error request={fetchServicesRequest} />
      ) : services.length > 0 ? (
        <ul className={styles.list}>
          {services.map(service => (
            <li key={service.id}>
              <Link to={`/${service.id}/details`}>{service.name}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <Error request={fetchServicesRequest} />
      )}
    </div>
  );
};
