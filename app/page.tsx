import CardForm from "@/components/sections/CardForm";
import CardView from "@/components/sections/CardView";
import { Grid } from "@mui/material";

export default function Home() {
  return (
    <Grid container height={"100vh"} direction={{ xs: "column", sm: "row" }}>
        <CardView />
        <CardForm />
    </Grid>
  );
}
