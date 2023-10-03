import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchServiceDetailsRequest } from "../../redux/actions";

import { Link } from "react-router-dom";

import styles from "./ServiceDetails.module.css";

import { Error } from "../../components/Error/Error";
export const ServiceDetails = () => {
  const { id } = useParams();
  const { service, loading, errorMessage } = useSelector(
    state => state.servicesDetails
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchServiceDetailsRequest(id));
  }, [dispatch, id]);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : errorMessage ? (
        <div>
          <Link to="/">К списку услуг</Link>
          <Error request={fetchServiceDetailsRequest} id={id} />
        </div>
      ) : (
        <div>
          <Link to="/">К списку услуг</Link>
          <div className={styles.serviceCard}>
            <h2>{service.name}</h2>
            <p>{service.content}</p>
            <span>{service.price}</span>
          </div>
        </div>
      )}
    </div>
  );
};
