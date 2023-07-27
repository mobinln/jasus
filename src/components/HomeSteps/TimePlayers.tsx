import { Typography, Button, Stack, TextField } from "@mui/material";
import { GiPlayButton } from "react-icons/gi";
import { motion } from "framer-motion";
import { Formik, Form } from "formik";
import { useAppDispatch } from "store";
import { generateGame } from "features/game/slice";

export default function TimePlayersStep({ onNext }: { onNext: () => void }) {
  const dispatch = useAppDispatch();

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
        تنظیمات
      </Typography>
      <Typography mt={2} textAlign="justify">
        اینجا میتونی تعداد بازیکن ها، تعداد جاسوس ها و مدت زمان بازی رو مشخص کنی
      </Typography>
      <Formik
        initialValues={{
          numberOfPlayers: 5,
          numberOfSpies: 1,
          gameDuration: 5,
        }}
        onSubmit={(data) => {
          dispatch(
            generateGame({
              numberOfPlayers: data.numberOfPlayers,
              numberOfSpies: data.numberOfSpies,
              gameDurationInSeconds: data.gameDuration * 60,
            })
          );

          onNext();
        }}
      >
        {({ getFieldProps, isSubmitting, isValid }) => (
          <Form style={{ width: "100%" }}>
            <Stack width="100%" gap={2}>
              <TextField {...getFieldProps("numberOfPlayers")} type="number" label="تعداد کل بازیکنان" fullWidth />
              <TextField {...getFieldProps("numberOfSpies")} type="number" label="تعداد جاسوس ها" fullWidth />
              <TextField {...getFieldProps("gameDuration")} type="number" label="مدت زمان کل بازی (دقیقه)" fullWidth />
              <Button type="submit" variant="contained" endIcon={<GiPlayButton />} disabled={isSubmitting || !isValid}>
                ساخت بازی
              </Button>
            </Stack>
          </Form>
        )}
      </Formik>
    </motion.div>
  );
}
