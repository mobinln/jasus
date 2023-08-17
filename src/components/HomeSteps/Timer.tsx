import { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { BsClockFill, BsArrowReturnLeft } from "react-icons/bs";

import useCounter from "hooks/useCounter";
import { useGameDuration } from "features/game/hooks";
import { formatSeconds } from "logic/date";
import Confirm from "components/Confirm";

export default function TimerStep({ onNext, onRestart }: { onNext: () => void; onRestart: () => void }) {
  const duration = useGameDuration();

  const [start, setStart] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const { time } = useCounter({ start, duration: duration || 0 });

  useEffect(() => {
    if (time === 0) {
      onNext();
    }
  }, [onNext, time]);

  return (
    <>
      <Confirm
        open={confirm}
        content="آیا مطمئنید که میخواهید از این بازی خارج شوید؟"
        onClose={() => setConfirm(false)}
        onConfirm={() => {
          onRestart();
          setConfirm(false);
        }}
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
          مسابقه
        </Typography>
        <Box display="flex" alignItems="center" justifyContent="center" gap={2} mb={8}>
          <Typography variant="h4" textAlign="center">
            زمان
          </Typography>
          <Typography variant="h4" textAlign="center">
            {formatSeconds(time)}
          </Typography>
        </Box>
        <Box width="100%" display="flex" alignItems="center" justifyContent="space-between">
          <Button variant="contained" endIcon={<BsClockFill />} onClick={() => setStart((p) => !p)}>
            {start ? "توقف" : "شروع"}
          </Button>
          <Button variant="contained" endIcon={<BsArrowReturnLeft />} onClick={() => setConfirm(true)}>
            شروع مجدد
          </Button>
        </Box>
      </motion.div>
    </>
  );
}
