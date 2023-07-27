import { Box, Typography, Button } from "@mui/material";
import { BiChevronRight } from "react-icons/bi";
import { motion } from "framer-motion";

export default function IntroStep({ onNext }: { onNext: () => void }) {
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
        سلام، به بازی جاسوس خوش اومدی، احتمالا با این بازی آشنا هستین اما اگر نه روی لینک زیر کلیک کنین تا براتون توضیح
        بدم 😄
      </Typography>
      <Box width="100%" mt={2} display="flex" alignItems="center" justifyContent="space-between">
        <Button variant="contained" endIcon={<BiChevronRight />} onClick={onNext}>
          بعدی
        </Button>
      </Box>
    </motion.div>
  );
}
