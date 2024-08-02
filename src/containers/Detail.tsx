import { Grid, Box, Typography, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { DetailProps } from "./types";
import { isEmpty, uniqueId } from "lodash";
import { DELAY_IN_MS, IMAGE_API_URL, NUMBER_OF_IMAGES } from "./constants";
import { LIGHTGRAY } from "../theme/palette";

export const Detail = ({ details }: DetailProps) => {
  const [images, setImages] = useState<string[]>([]);
  const [isFetching, setIsFetching] = useState(false);

  const fetchImages = async () => {
    setIsFetching(true);

    try {
      const requests = Array(NUMBER_OF_IMAGES)
        .fill(null)
        .map((_, index) =>
          axios.get(`${IMAGE_API_URL}?random=${index}-${uniqueId()}`, {
            responseType: "blob",
          })
        );

      const responses = await Promise.all(requests);
      const imageUrls = responses.map((response) =>
        URL.createObjectURL(response.data)
      );

      setImages(imageUrls);
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    fetchImages();

    const intervalId = setInterval(() => {
      fetchImages();
    }, DELAY_IN_MS);

    return () => clearInterval(intervalId);
  }, [details]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100%"
      bgcolor={LIGHTGRAY}
      justifyContent="center"
      overflow="scroll"
      gap={3}
      p={4}
    >
      <Typography variant="h5" textAlign="center" position="relative" mt={4}>
        {details.name}
      </Typography>
      <Typography
        variant="subtitle1"
        textAlign="center"
        maxWidth={800}
        margin="0 auto"
      >
        {details.description}
      </Typography>
      <Box height={600}>
        <Box display="flex" alignItems="center" justifyContent="center">
          {isFetching && <CircularProgress />}
        </Box>
        {!isFetching && !isEmpty(images) && (
          <Grid container spacing={3} px={16}>
            {images.map((url, index) => (
              <Grid item xs={4} key={index}>
                <Box
                  component="img"
                  src={url}
                  style={{
                    width: "100%",
                    height: "140px",
                    borderRadius: "10%",
                  }}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Box>
  );
};
