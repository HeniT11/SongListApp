import { Close } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Card, Flex, Text } from "rebass";
import { CREATE_SONG, UPDATE_SONG } from "../redux/saga/types";
import { Field } from "./Field";
import Modal from "./Modal";

export default function FormModal({ open, onClose, isEdit = false }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.songs);
  const songData = useSelector((state) => state.song);
  console.log({ songData });
  const onSubmit = (data) => {
    isEdit
      ? dispatch({
          type: UPDATE_SONG,
          payload: { id: songData?.song?._id, data },
        })
      : dispatch({ type: CREATE_SONG, payload: data });
  };
  return (
    <Modal open={open}>
      <Card bg="#171717" px={4} py={3} sx={{ borderRadius: 10 }}>
        <Flex alignItems="center" justifyContent="space-between">
          <Text>{isEdit ? "Edit Song Form" : "Add Song Form"}</Text>
          <Close onClick={onClose} sx={{ cursor: "pointer" }} />
        </Flex>
        <Box as="form" onSubmit={handleSubmit(onSubmit)} py={3}>
          <Field
            name="title"
            label="Title"
            error={errors?.title}
            helperText={errors?.title ? errors.title.message : null}
            defaultValue={isEdit ? songData?.song?.title : null}
            {...register("title", {
              required: "Required",
            })}
          />
          <Field
            name="artist"
            label="Artist"
            error={errors?.artist}
            helperText={errors?.artist ? errors.artist.message : null}
            defaultValue={isEdit ? songData?.song?.artist : null}
            {...register("artist", {
              required: "Required",
            })}
          />
          <Field
            name="album"
            label="Album"
            error={errors?.album}
            helperText={errors?.album ? errors.album.message : null}
            defaultValue={isEdit ? songData?.song?.album : null}
            {...register("album", {
              required: "Required",
            })}
          />
          <Field
            name="genre"
            label="Genre"
            error={errors?.genre}
            helperText={errors?.genre ? errors.genre.message : null}
            defaultValue={isEdit ? songData?.song?.genre : null}
            {...register("genre", {
              required: "Required",
            })}
          />
          <Button
            type="submit"
            color="#171717"
            disabled={data?.isLoading}
            sx={{ cursor: "pointer" }}
          >
            {isEdit ? "Save Song" : "Add Song"}
          </Button>
        </Box>
      </Card>
    </Modal>
  );
}
