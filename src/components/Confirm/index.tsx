import { Box, Button, Dialog, DialogTitle, Typography } from "@mui/material";

export default function Confirm({
  open,
  content,
  disabled,
  onClose,
  onConfirm,
}: {
  open: boolean;
  content: string;
  disabled?: boolean;
  onClose: () => void;
  onConfirm: () => void;
}) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle sx={{ textAlign: "center" }}>اخطار</DialogTitle>
      <Box m={2}>
        <Typography>{content}</Typography>
        <Box mt={2} width="100%" display="flex" alignItems="center" justifyContent="space-between">
          <Button sx={{ color: "white", bgcolor: "black" }} variant="contained" onClick={onConfirm} disabled={disabled}>
            بله
          </Button>
          <Button
            sx={{ color: "black", borderColor: "black" }}
            variant="outlined"
            onClick={onClose}
            disabled={disabled}
          >
            خیر
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
}
