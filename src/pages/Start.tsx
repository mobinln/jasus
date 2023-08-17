import { Box, Typography, Button, Table } from "@mui/material";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { motion } from "framer-motion";
import { Navigate, useNavigate } from "react-router-dom";
import { useGame } from "features/game/hooks";
import { useDispatch } from "react-redux";
import { startGame } from "features/game/slice";

export default function StartStep() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const gameInfo = useGame();

  const handleStart = () => {
    dispatch(startGame());
    navigate("/players");
  };

  if (gameInfo.status !== "generated") {
    return <Navigate to="/" />;
  }

  return (
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
        جاسوس
      </Typography>
      <Typography my={3} textAlign="justify">
        بازیتون ساخته شد، آماده شروع مسابقه هستین؟
      </Typography>
      <Table
        sx={{
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          "& td, & th": {
            border: "none",
            padding: "12px 15px",
            textAlign: "center",
          },
          "& th": {
            borderBottom: "1px solid white",
          },
          "& tr:nth-of-type(even)": {
            backgroundColor: "#f5f5f5",
          },
        }}
      >
        <thead>
          <tr>
            <th>تعداد کل بازیکنان</th>
            <th>تعداد جاسوس ها</th>
            <th>زمان بازی (دقیقه)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{gameInfo.numberOfPlayers}</td>
            <td>{gameInfo.numberOfSpies}</td>
            <td>{(gameInfo.gameDurationInSeconds || 0) / 60}</td>
          </tr>
        </tbody>
      </Table>
      <Box width="100%" mt={2} display="flex" alignItems="center" justifyContent="space-between">
        <Button variant="contained" endIcon={<BiChevronRight />} onClick={handleStart}>
          شروع
        </Button>
        <Button variant="contained" startIcon={<BiChevronLeft />} onClick={() => navigate("/time-players")}>
          بازگشت
        </Button>
      </Box>
    </motion.div>
  );
}
