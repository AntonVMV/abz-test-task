import "./style.scss";
import Button from "@mui/material/Button";
import { styled } from "@mui/material";

const CustomButton = styled(Button)(({ theme }) => ({
  fontFamily: "Nunito",
  borderRadius: "80px",
  backgroundColor: "#F4E041",
  color: "#000",
  width: "148px",
  height: "50px",
  boxShadow: "none",
  lineHeight: "26px",
  textTransform: "none",
  fontSize: "16px",
  ":hover": {
    boxShadow: "none",
    backgroundColor: "#FFE302",
  },
}));

export const ButtonEl = ({
  text,
  onClick,
  disabled,
  href,
  type = "button",
}) => {
  return (
    <CustomButton
      onClick={onClick}
      disabled={disabled}
      type={type}
      variant="contained"
      href={href}
    >
      {text}
    </CustomButton>
  );
};
