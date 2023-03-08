import { Box } from "rebass";

export default function IconButton({ icon, onClick }) {
  return (
    <Box
      p={1}
      bg="#000000"
      sx={{
        borderRadius: "100%",
        cursor: "pointer",
        "&:hover": {
          color: "#000",
          backgroundColor: "#171721",
        },
      }}
      onClick={onClick}
    >
      {icon}
    </Box>
  );
}
