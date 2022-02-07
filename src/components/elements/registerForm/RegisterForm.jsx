import { TextField } from "@mui/material";
import { RadioGrp } from "./RadioGrp";
import { UploadField } from "./UploadField";
import { ButtonEl } from "../ButtonEl";
import "../style.scss";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postUser } from "../../../store/thunk";

const fields = { name: "Your name", email: "Email", phone: "Phone" };

export const RegisterForm = () => {
  const [formData, setFormData] = useState({});

  const { postData } = useSelector((store) => store.usersReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (postData && postData.success) {
      setFormData({});
    }
  }, [postData]);

  const changeHandler = (value) => {
    setFormData({ ...formData, ...value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach((item) => {
      data.append(item, formData[item]);
    });
    dispatch(postUser(data));
  };

  return (
    <form onSubmit={submitHandler} className="register__form">
      <div className="register__inputs">
        {Object.keys(fields).map((item, index) => {
          return (
            <TextField
              key={index}
              label={fields[item]}
              error={!!postData?.fails?.[item]}
              helperText={postData?.fails?.[item]}
              className="register__input"
              onChange={(e) =>
                changeHandler({ [e.target.name]: e.target.value })
              }
              name={item}
              value={formData[item] || ""}
            />
          );
        })}
      </div>
      <RadioGrp onChange={changeHandler} error={postData?.fails?.position_id} />
      <UploadField
        onChange={changeHandler}
        value={formData.photo}
        error={postData?.fails?.photo}
      />
      <div className="register__button">
        <ButtonEl
          text={"Sign up"}
          disabled={Object.keys(formData) < 1}
          type={"submit"}
        />
      </div>
    </form>
  );
};
