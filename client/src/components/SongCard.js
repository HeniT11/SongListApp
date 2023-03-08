import { Delete, Edit, Headphones } from "@mui/icons-material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Box, Card, Flex, Image, Text } from "rebass";
import { setSongState } from "../redux/slice/songState";
import DeleteModal from "./DeleteModal";
import IconButton from "./IconButton";

export default function SongCard({ song, handleEdit }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleDelete = (song) => {
    dispatch(setSongState(song));
    setOpen(true);
  };
  return (
    <Card bg="#21212D" m={2} width={250} sx={{ borderRadius: 10 }}>
      <Box>
        <Image
          src="https://w0.peakpx.com/wallpaper/411/929/HD-wallpaper-colorful-music-note-headphone-background-music.jpg"
          sx={{ borderRadius: 10 }}
        />
        <Box px={3} py={2}>
          <Text fontWeight="bold">{song?.title}</Text>
          <Flex justifyContent="space-between">
            <Text fontSize={1}>{song?.artist}</Text>
            <Text fontSize={1}>{song?.album}</Text>
          </Flex>
        </Box>
        <Flex alignItems="center" justifyContent="space-around" py={2}>
          <Box bg="#000000" px={3} py={2} sx={{ borderRadius: 30 }}>
            <Text>{song?.genre}</Text>
          </Box>
          <IconButton icon={<Headphones />} />
          <IconButton icon={<Edit />} onClick={() => handleEdit(song)} />
          <IconButton icon={<Delete />} onClick={() => handleDelete(song)} />
        </Flex>
      </Box>
      <DeleteModal open={open} onClose={() => setOpen(false)} />
    </Card>
  );
}
