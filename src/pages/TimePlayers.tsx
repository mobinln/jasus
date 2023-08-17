import { Typography, Button, Stack, TextField, Slider, MenuItem } from "@mui/material";
import { GiPlayButton } from "react-icons/gi";
import { motion } from "framer-motion";
import { Formik, Form } from "formik";
import { useAppDispatch } from "store";
import { generateGame } from "features/game/slice";
import { useNavigate } from "react-router-dom";

export default function TimePlayersStep() {
  const navigate = useNavigate();
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

          navigate("/start");
        }}
      >
        {({ getFieldProps, isSubmitting, isValid, values }) => (
          <Form style={{ width: "100%" }}>
            <Stack mt={2} width="100%" gap={2}>
              <Typography>تعداد کل بازیکنان</Typography>
              <Slider valueLabelDisplay="auto" min={2} max={40} {...getFieldProps("numberOfPlayers")} />
              <Typography>تعداد جاسوس ها</Typography>
              <Slider
                valueLabelDisplay="auto"
                min={1}
                max={values.numberOfPlayers ? values.numberOfPlayers - 1 : 100}
                {...getFieldProps("numberOfSpies")}
              />
              <Typography>مدت زمان کل بازی (دقیقه)</Typography>
              <TextField
                {...getFieldProps("gameDuration")}
                type="number"
                placeholder="مدت زمان کل بازی (دقیقه)"
                fullWidth
                select
              >
                {[1, 2, 5, 10, 15, 20, 30, 45, 60, 75, 90, 120].map((v) => (
                  <MenuItem key={v} value={v}>
                    {v}
                  </MenuItem>
                ))}
              </TextField>
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
