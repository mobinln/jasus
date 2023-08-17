import { useState } from "react";
import { Typography, Button, LinearProgress, Box } from "@mui/material";
import { BiChevronRight } from "react-icons/bi";
import { BsPlusCircleDotted } from "react-icons/bs";
import { GiTabletopPlayers, GiSpy, GiPerson } from "react-icons/gi";
import { motion } from "framer-motion";

import { useGamePlayers, useGameWord } from "features/game/hooks";
import { useAppDispatch } from "store";
import { selectNewWord } from "features/game/slice";
import Confirm from "components/Confirm";

export default function PlayersStep({ onNext }: { onNext: () => void }) {
  const players = useGamePlayers();
  const word = useGameWord();
  const dispatch = useAppDispatch();
  const [progress, setProgress] = useState(0);
  const [progressBar, setProgressBar] = useState(0);
  const [show, setShow] = useState(false);
  const [confirm, setConfirm] = useState(false);

  const isCurrentPlayerSpy = players?.[progress]?.type === "spy";

  const handleShow = () => {
    if (!show) {
      setShow(true);
    } else {
      setShow(false);
      setProgress((p) => p + 1);
      setProgressBar(((progress + 1) * 100) / (players?.length || 0));
      if (progress + 1 === players?.length) {
        onNext();
      }
    }
  };

  const handleNewWord = () => {
    dispatch(selectNewWord());
    setConfirm(false);
  };

  return (
    <>
      <Confirm
        open={confirm}
        disabled={isCurrentPlayerSpy}
        content={
          isCurrentPlayerSpy
            ? "شما که جاسوس هستید...حتما دستت خورده :)"
            : "آیا مطمئنید که دستتان به این دکمه اشتباهی نخورده؟"
        }
        onClose={() => setConfirm(false)}
        onConfirm={handleNewWord}
      />
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 100, opacity: 0 }}
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h4" textAlign="center">
          بازیکن شماره {progress + 1}
        </Typography>
        <Box mt="auto">
          {show ? (
            <>
              <Typography textAlign="center" variant="h4">
                {isCurrentPlayerSpy ? <GiSpy /> : <GiPerson />}
              </Typography>
              <Typography textAlign="center" variant="h4">
                {isCurrentPlayerSpy ? "شما جاسوس هستید" : word}
              </Typography>
            </>
          ) : (
            <Typography textAlign="justify" variant="h4">
              <GiTabletopPlayers />
            </Typography>
          )}
        </Box>
        <Box display="flex" alignItems="center" justifyContent="space-between" width="100%" mt="auto" mb={2}>
          <Button variant="contained" endIcon={<BiChevronRight />} onClick={handleShow}>
            {progress < (players?.length || 0) ? "نمایش" : "شروع بازی"}
          </Button>
          {progress < 1 && (
            <Button variant="contained" endIcon={<BsPlusCircleDotted />} onClick={() => setConfirm(true)}>
              تعویض کلمه
            </Button>
          )}
        </Box>
        <LinearProgress variant="determinate" color="primary" value={progressBar} sx={{ width: "100%" }} />
      </motion.div>
    </>
  );
}
