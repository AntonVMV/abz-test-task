import {
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  styled,
  FormHelperText,
  FormControl,
} from "@mui/material";
import "../style.scss";
import { useState, useEffect } from "react";

const CustomRadio = styled(Radio)({
  padding: "4px 9px",
});

const CustomRadioGroup = styled(RadioGroup)({
  marginTop: "10px",
});

export const RadioGrp = ({ onChange, error }) => {
  const [positions, setPositions] = useState();

  useEffect(() => {
    const pos = fetch(
      "https://frontend-test-assignment-api.abz.agency/api/v1/positions"
    )
      .then((resp) => resp.json())
      .then((result) => setPositions(result));
  }, []);

  return (
    <FormControl error={!!error}>
      <FormLabel id="demo-radio-buttons-group-label">
        Select your position
      </FormLabel>
      <CustomRadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
        onChange={(e) => onChange({ position_id: e.target.value })}
      >
        {positions &&
          positions.positions.map((item) => {
            return (
              <FormControlLabel
                key={item.id}
                value={item.id}
                control={<CustomRadio />}
                label={item.name}
              />
            );
          })}
      </CustomRadioGroup>
      <FormHelperText>{error}</FormHelperText>
    </FormControl>
  );
};
