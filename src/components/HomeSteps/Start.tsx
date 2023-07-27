import { Box, Typography, Button } from "@mui/material";
import { BiChevronRight } from "react-icons/bi";
import { motion } from "framer-motion";

export default function StartStep({ onNext }: { onNext: () => void }) {
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
      <Box width="100%" mt={2} display="flex" alignItems="center" justifyContent="space-between">
        <Button variant="contained" endIcon={<BiChevronRight />} onClick={onNext}>
          شروع
        </Button>
      </Box>
    </motion.div>
  );
}
