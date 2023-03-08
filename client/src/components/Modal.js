import { Box } from "rebass";

export default function Modal({ open, children }) {
  return (
    open && (
      <Box
        sx={{
          position: "fixed",
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children}
      </Box>
    )
  );
}
