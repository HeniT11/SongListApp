import { Add } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Flex } from "rebass";
import SongCard from "../components/SongCard";
import { GET_SONGS, GET_STATS } from "../redux/saga/types";
import { useSnackbar } from "notistack";
import FormModal from "../components/FormModal";
import { setSongState } from "../redux/slice/songState";
import { Label, Select } from "@rebass/forms";
import Lottie from "lottie-react";
import error from "../assets/animations/error.json";

export default function Songs() {
  const data = useSelector((state) => state.songs);
  const statData = useSelector((state) => state.stats);
  const [params, setParams] = useState();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    dispatch({ type: GET_SONGS, payload: params });
    dispatch({ type: GET_STATS });
  }, [params]);

  const handleEdit = (song) => {
    dispatch(setSongState(song));
    setOpenEdit(true);
  };

  useEffect(() => {
    if (data?.successMessage) {
      enqueueSnackbar(data?.successMessage, {
        preventDuplicate: true,
        variant: "success",
      });
      setOpen(false);
      setOpenEdit(false);
    } else if (data?.isError) {
      enqueueSnackbar(
        data?.error?.response?.data?.error?.message || data?.error?.message,
        {
          preventDuplicate: true,
          variant: "error",
        }
      );
    }
  }, [data?.successMessage, data?.isError]);
  if (data?.isError) {
    return (
      <Flex height={"90vh"} alignItems="center" justifyContent="center">
        <Lottie animationData={error} loop={true} />
      </Flex>
    );
  }
  return (
    <Box px={3}>
      <Flex flexWrap="wrap" justifyContent="center">
        <Box>
          <Flex
            flexWrap="wrap"
            px={5}
            justifyContent="center"
            alignItems="flex-end"
          >
            <Button
              color="black"
              mt={2}
              onClick={() => setOpen(true)}
              sx={{ cursor: "pointer" }}
            >
              Add New
            </Button>
            <Box px={3} mt={2}>
              <Label htmlFor="genre">Genre</Label>
              <Select
                name="genre"
                width={200}
                onChange={(e) =>
                  setParams({ name: e.target.name, value: e.target.value })
                }
              >
                {statData?.stats?.totalSongsInGenres?.map((item) => (
                  <option key={item._id} style={{ color: "black" }}>
                    {item._id}
                  </option>
                ))}
              </Select>
            </Box>
            <Box>
              <Label htmlFor="artist">Artist</Label>
              <Select
                name="artist"
                width={200}
                onChange={(e) =>
                  setParams({ name: e.target.name, value: e.target.value })
                }
              >
                {statData?.stats?.totalArtistSongs?.map((item) => (
                  <option key={item._id} style={{ color: "black" }}>
                    {item._id}
                  </option>
                ))}
              </Select>
            </Box>
            <Box px={3}>
              <Label htmlFor="album">Album</Label>
              <Select
                name="album"
                width={200}
                onChange={(e) =>
                  setParams({ name: e.target.name, value: e.target.value })
                }
              >
                {statData?.stats?.totalSongsInAlbums?.map((item) => (
                  <option key={item._id} style={{ color: "black" }}>
                    {item._id}
                  </option>
                ))}
              </Select>
            </Box>
            <Flex
              px={2}
              py={2}
              mt={2}
              width={200}
              justifyContent="center"
              onClick={() => setParams()}
              sx={{ cursor: "pointer", border: "1px solid white" }}
            >
              All
            </Flex>
          </Flex>
          <Box
            px={3}
            py={1}
            sx={{
              display: "flex",
              height: 530,
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              overflowY: "auto",
              "&::-webkit-scrollbar": {
                width: 4,
              },
              "&::-webkit-scrollbar-thumb": {
                borderRadius: 20,
                border: "3px solid #000",
              },
            }}
          >
            {data?.songs?.map((song) => (
              <SongCard song={song} handleEdit={handleEdit} />
            ))}
            <Flex
              width={260}
              height={250}
              justifyContent="center"
              alignItems="center"
              sx={{
                borderRadius: 10,
                border: "1px dashed black",
                cursor: "pointer",
              }}
              onClick={() => setOpen(true)}
            >
              <Add sx={{ width: 100, height: 100 }} />
            </Flex>
          </Box>
        </Box>
      </Flex>
      <FormModal open={open} onClose={() => setOpen(false)} />
      <FormModal
        open={openEdit}
        onClose={() => setOpenEdit(false)}
        isEdit={true}
      />
    </Box>
  );
}
