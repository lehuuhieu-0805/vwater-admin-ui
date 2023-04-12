import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";

export default function RadioButtonElement({
  name,
  control,
  defaultValue,
  label,
  options,
  ...props
}) {
  return (
    <>
      {/* {label} */}
      <FormControl>
        <FormLabel color="success" id="demo-radio-buttons-group-label">
          {label}
        </FormLabel>
        <Controller
          control={control}
          name={name}
          defaultValue={defaultValue}
          render={({
            field: { onChange, value },
            fieldState: { invalid, isTouched, isDirty, error },
          }) => (
            <>
              <RadioGroup
                row
                defaultValue={defaultValue}
                name="radio-buttons-group"
                onChange={onChange}
                value={value}
                {...props}
              >
                {options.map((item) => (
                  <FormControlLabel
                    value={item.value}
                    control={<Radio color="success" />}
                    label={item.label}
                  />
                ))}
              </RadioGroup>
              <FormHelperText
                sx={{
                  color: "red !important",
                  fontFamily: "Inter Regular",
                  fontSize: 13,
                }}
              >
                {error && error.message}
              </FormHelperText>
            </>
          )}
        />
      </FormControl>
    </>
  );
}
