import { Box, Dialog, DialogTitle, Typography } from "@mui/material";

export default function HelpDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs">
      <DialogTitle sx={{ textAlign: "center" }}>آموزش بازی جاسوس</DialogTitle>
      <Box m={2}>
        <Typography textAlign="justify">
          بازی جاسوس یک بازی گروهیه که در اون بازیکن ها به دو دسته بازیکن عادی و جاسوس تقسیم میشن، بازیکنان عادی یک کلمه
          رو که بصورت اتفاقی انتخاب میشه میبینن اما جاسوس ها فقط متوجه میشن که جاسوسن، دقت کنین که جاسوس ها خودشون از
          بقیه جاسوس ها خبر ندارن و فقط میدونن که خودشون جاسوسن.
        </Typography>
        <Typography textAlign="justify">
          وظیفه جاسوس ها فهمیدن کلمه و لو نرفتنه و وظیفه بازیکن ها پیدا کردن و حدف کردن جاسوس هاست
        </Typography>
        <Typography textAlign="justify">
          اگر زمان تموم بشه و جاسوسی باقی مونده باشه عملا جاسوس برده و بقیه میبازن
        </Typography>
      </Box>
    </Dialog>
  );
}
