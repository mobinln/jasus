import { useState } from "react";
import { Box, Card, Container, Button } from "@mui/material";
import { BiBook } from "react-icons/bi";
import { AnimatePresence } from "framer-motion";
import { Outlet } from "react-router-dom";
import HelpDialog from "components/Help";

export default function BaseLayout() {
  const [help, setHelp] = useState(false);

  return (
    <>
      <HelpDialog open={help} onClose={() => setHelp(false)} />
      <AnimatePresence>
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
                  minHeight: 500,
                  maxHeight: 600,
                  overflowY: "auto",
                  p: 2,
                  px: 6,
                }}
              >
                <Outlet />
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
                <Button variant="contained" endIcon={<BiBook />} onClick={() => setHelp(true)}>
                  آموزش
                </Button>
              </Box>
            </Box>
          </Container>
        </Box>
      </AnimatePresence>
    </>
  );
}
