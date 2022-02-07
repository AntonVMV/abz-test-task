import { Button, styled, TextField } from "@mui/material";
import "../style.scss";

const Container = styled("div")({
  position: "absolute",
  width: "100%",
  left: 0,
  zIndex: 1,
  height: "100%",
  cursor: "poiner",
});

const Input = styled("input")({
  display: "none",
});

const CutomButton = styled(Button)({
  fontFamily: "Nunito",
  fontSize: "16px",
  textTransform: "none",
  minWidth: "83px",
  color: "#000",
  border: "1px solid black",
  position: "absolute",
  left: 0,
  height: "100%",
  borderRadius: "3px 0 0 3px",
  "&:hover": {
    backgroundColor: "transparent",
  },
});

export const UploadField = ({ onChange, value, error }) => {
  return (
    <div className="register__upload">
      <label htmlFor="upload-input">
        <TextField
          fullWidth
          value={value ? value.name : ""}
          error={!!error}
          helperText={error}
          InputProps={{
            style: { paddingLeft: 99, cursor: "pointer" },
            readOnly: true,
            startAdornment: (
              <>
                <Container />
                <CutomButton variant="text">Upload</CutomButton>
              </>
            ),
          }}
          placeholder="Upload tour photo"
        />
      </label>
      <Input
        id="upload-input"
        type="file"
        onChange={(e) => onChange({ photo: e.target.files[0] })}
      />
    </div>
  );
};
