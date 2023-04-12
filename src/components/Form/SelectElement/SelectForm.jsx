/* eslint-disable @typescript-eslint/naming-convention */
import React, { useState, useEffect, useRef } from "react";
import { Control, Controller } from "react-hook-form";
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { useStyles } from "./CustomSelectStyle";
import FormHelperText from "@mui/material/FormHelperText";
import clsx from "clsx";
import CloseIcon from "@mui/icons-material/Close";

const SelectForm = ({
  label,
  options,
  disabled = false,
  name,
  control,
  size,
  props,
}) => {
  const styles = useStyles();
  return (
    <FormControl fullWidth variant="outlined" size="medium">
      <Controller
        name={name}
        control={control}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { invalid, isTouched, isDirty, error },
        }) => {
          // set margin paper when have value
          return (
            <>
              <InputLabel color="success">{label}</InputLabel>
              <Select
                variant="outlined"
                color="success"
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                disabled={disabled}
                label={label}
                error={error}
                size={size}
                {...props}
              >
                {options &&
                  options.map((option, index) => (
                    <MenuItem key={option.value} value={option.value}>
                      <Typography
                        sx={{
                          whiteSpace: "initial",
                        }}
                      >
                        {option.label}
                      </Typography>
                    </MenuItem>
                  ))}
              </Select>
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
          );
        }}
      />
    </FormControl>
  );
};

export default SelectForm;
