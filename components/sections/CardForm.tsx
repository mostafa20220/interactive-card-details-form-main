import { Grid } from "@mui/material";
import React from "react";
import InputField from "../ui/InputField";
import Button from "../ui/Button";

export default function CardForm() {
  return (
    <Grid
      item
      xs={8}
      container
      alignItems={"center"}
      justifyContent={"center"}
      bgcolor={"white"}
      px={2}
    >
      <form
        style={{
          width: "100%",
          maxWidth: "20rem",
          gap: "1rem",
          display: "flex",
          flexDirection: "column",
        }}
        action=""
      >
        <InputField
          label="CARDHOLDER NAME"
          placeholder="e.g. Janes Appleseed"
          type="text"
        />
        <InputField
          label="CARD NUMBER"
          placeholder="e.g. 1234 5678 9012 0000"
          type="text"
        />

        <Grid container gap={2} justifyContent={"space-between"} width={"100%"}>
          <InputField
            width={"50%"}
            label="EXP. DATE (MM/YY)"
            placeholder="MM/YY"
            type="text"
          />

          <InputField
            width={"40%"}
            label="CVC"
            placeholder="e.g. 123"
            type="text"
          />
        </Grid>
        <Button sx={{ mt: 1 }}>Confirm</Button>
      </form>
    </Grid>
  );
}
