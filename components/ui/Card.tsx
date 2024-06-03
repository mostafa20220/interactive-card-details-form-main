import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function Card() {
  return (
    <>
      <Box
        width={["70%", ,"90%"]}
        maxWidth={[250, ,"100%"]}
        height={["55%", ,"33%"]}
        sx={{
          position: "absolute",
          top: { xs: "50%", md: "65%" },
          left: { xs: "60%", md: "100%" },
          translate: "-50% -50%",
          backgroundImage: `url('/images/bg-card-back.png') `,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          borderRadius: ["0.5rem",, "1rem"],
        }}
        zIndex={100}
      >
        <Typography
          sx={{
            color: "white",
            position: "absolute",
            top: "51%",
            left: { xs: "83%", md: "85%" },
            transform: "translate(-50%, -50%)",
            fontSize: ["0.5rem", ,"1rem"],
          }}
        >
          000
        </Typography>
      </Box>

      <Box
        width={["70%", ,"90%"]}
        height={["55%", ,"32%"]}
        maxWidth={[250, ,"100%"]}
        sx={{
          position: "absolute",
          translate: { xs: "-50% 0%", md: "-70% 0%" },
          top: ["54%", ,"13%"],
          left: ["45%", ,"100%"],

          backgroundImage: `url('/images/bg-card-front.png')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          borderRadius: ["0.5rem", ,"1rem"],
        }}
        zIndex={100}
      >
        <Grid
          container
          direction={"column"}
          sx={{ width: "100%", height: "100%", p: [2,, 4] }}
        >
          <Image
            unoptimized
            src="/svg/card-logo.svg"
            alt="card-logo"
            width={50}
            height={15}
            className=" lg:w-[100px] lg:h-[50px]"
          />
          <Grid container direction={"column"} gap={1.5} mt={"auto"}>
            <Typography
              sx={{
                color: "white",
                fontSize: ["90%", ,"1.5rem"],
                letterSpacing: "0.08rem",
                wordSpacing: "0.15rem",
              }}
            >
              0000 0000 0000 0000
            </Typography>
            <Grid
              container
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Typography
                sx={{
                  color: "white",
                  fontSize: ["0.5rem", ,"1rem"],
                  letterSpacing: "0.05rem",
                }}
              >
                JANE APPLESEED
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontSize: ["0.5rem", ,"1rem"],
                }}
              >
                00/00
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
