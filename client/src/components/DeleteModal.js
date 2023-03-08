import { Close } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Flex, Heading, Text } from "rebass";
import { DELETE_SONG } from "../redux/saga/types";
import Modal from "./Modal";

export default function DeleteModal({ open, onClose }) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.songs);
  const songData = useSelector((state) => state.song);
  const handleDelete = () => {
    dispatch({ type: DELETE_SONG, payload: songData?.song?._id });
    onClose();
  };
  return (
    <Modal open={open}>
      <Card bg="#171717" px={4} py={3} sx={{ borderRadius: 10 }}>
        <Flex alignItems="center" justifyContent="space-between">
          <Heading as="h4">Delete Song</Heading>
          <Close onClick={onClose} sx={{ cursor: "pointer" }} />
        </Flex>
        <Text py={2}>Are you you want to delete {songData?.song?.title} ?</Text>
        <Flex justifyContent="flex-end" py={2}>
          <Button
            color="black"
            mx={2}
            onClick={onClose}
            sx={{ cursor: "pointer" }}
          >
            Cancel
          </Button>
          <Button bg="red" onClick={handleDelete} sx={{ cursor: "pointer" }}>
            Delete
          </Button>
        </Flex>
      </Card>
    </Modal>
  );
}
