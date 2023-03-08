import { Dashboard, MusicNote } from "@mui/icons-material";
import { Link, Outlet } from "react-router-dom";
import { Box, Flex, Image, Text } from "rebass";

export default function Layout() {
  return (
    <Box>
      <Flex
        p={2}
        color="white"
        bg="#21212D"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex alignItems="center">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <Flex alignItems="center">
              <Dashboard />
              <Text>Dashboard</Text>
            </Flex>
          </Link>
          <Link to="songs" style={{ textDecoration: "none", color: "white" }}>
            <Flex alignItems="center" px={3}>
              <MusicNote />
              <Text>Songs</Text>
            </Flex>
          </Link>
        </Flex>
        <Image
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="H"
          sx={{
            width: 48,
            height: 48,
            borderRadius: 9999,
          }}
        />
      </Flex>
      <Box minHeight="90.4vh" color="white" bg="#171721">
        <Outlet />
      </Box>
    </Box>
  );
}
