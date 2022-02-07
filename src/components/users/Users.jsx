import "./users.scss";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../store/thunk";
import { UserCard } from "./UserCard";
import React, { useEffect } from "react";
import { useInnerWidth } from "../../hook/useInnerWidth";
import { clearUsersAction } from "../../store/actions/actions";
import { ButtonEl } from "../elements/ButtonEl";
import CircularProgress from "@mui/material/CircularProgress";

const usersToLoad = {
  mobile: "3",
  tablet: "6",
  desktop: "9",
};

export const Users = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((store) => store.usersReducer);
  const size = useInnerWidth();

  useEffect(() => {
    if (size && !loading) {
      if (data) {
        dispatch(clearUsersAction());
      }
      const url = `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=${usersToLoad[size]}`;
      dispatch(getUsers(url));
    }
  }, [size]);

  const buttonHandler = () => {
    dispatch(getUsers(data.links.next_url));
  };

  return (
    <section className="users">
      <div className="main-container users__container">
        <h2 className="title-l users__title">Our cheerful users</h2>
        <h3 className="title-m users__subtitle">
          The best specialists are shown below
        </h3>
        <ul className="cards users__cards">
          {data &&
            data.users.map((item) => {
              return <UserCard key={item.id} user={item} />;
            })}
          {loading && (
            <div className="users__loading">
              <CircularProgress />
            </div>
          )}
        </ul>

        {data && data.page !== data.total_pages && (
          <div className="users__button">
            <ButtonEl
              onClick={buttonHandler}
              text={"Show more"}
              className="aaa"
            />
          </div>
        )}
      </div>
    </section>
  );
};
