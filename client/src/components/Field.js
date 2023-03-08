import { Input, Label } from "@rebass/forms";
import React from "react";
import { Box, Text } from "rebass";

export const Field = React.forwardRef(
  ({ name, label, error, helperText, ...props }, ref) => {
    return (
      <Box my={2}>
        <Label htmlFor={name}>{label}</Label>
        <Input
          ref={ref}
          name={name}
          mt={1}
          {...props}
          sx={{
            ...(error && { borderColor: "red" }),
          }}
        />
        <Text fontSize={1} pt={1} color="red">
          {helperText}
        </Text>
      </Box>
    );
  }
);
