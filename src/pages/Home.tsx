import React, { Suspense, useState } from "react";
import { Box, Card, Container, Button } from "@mui/material";
import { BiBook } from "react-icons/bi";
import { AnimatePresence } from "framer-motion";
import Loading from "components/Loading";

const IntroStep = React.lazy(() => import("components/HomeSteps/Intro"));
const StartStep = React.lazy(() => import("components/HomeSteps/Start"));
const PlayersStep = React.lazy(() => import("components/HomeSteps/Players"));
const TimePlayersStep = React.lazy(() => import("components/HomeSteps/TimePlayers"));
const TimerStep = React.lazy(() => import("components/HomeSteps/Timer"));

export default function Home() {
  const [step, setStep] = useState<"intro" | "time-players" | "start" | "players" | "timer">("intro");

  return (
    <AnimatePresence>
      <Suspense fallback={<Loading />}>
        <Box
          sx={{
            background: "#0F2027",
            backgroundImage: "linear-gradient(to right, #2C5364, #203A43, #0F2027)",
          }}
        >
          <Container>
            <Box height="100vh" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
              <Card
                sx={{
                  width: { xs: "100%", sm: "75%", md: "50%" },
                  height: 500,
                  overflowY: "auto",
                  p: 2,
                  px: 6,
                }}
              >
                {step === "intro" && <IntroStep onNext={() => setStep("time-players")} />}
                {step === "time-players" && <TimePlayersStep onNext={() => setStep("start")} />}
                {step === "start" && <StartStep onNext={() => setStep("players")} />}
                {step === "players" && <PlayersStep onNext={() => setStep("timer")} />}
                {step === "timer" && (
                  <TimerStep onNext={() => setStep("intro")} onRestart={() => setStep("time-players")} />
                )}
              </Card>
              <Box
                mt={2}
                display="flex"
                alignItems="center"
                justifyContent="end"
                sx={{
                  width: { xs: "100%", sm: "75%", md: "50%" },
                }}
              >
                <Button variant="contained" endIcon={<BiBook />}>
                  آموزش
                </Button>
              </Box>
            </Box>
          </Container>
        </Box>
      </Suspense>
    </AnimatePresence>
  );
}
