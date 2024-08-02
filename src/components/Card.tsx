import { CardActionArea, Stack, Typography } from "@mui/material";
import { Details } from "../containers/types";
import { GRAY } from "../theme/palette";

export const Card = ({
  onCardClick,
  isActive,
  data,
}: {
  isActive: boolean;
  onCardClick: () => void;
  data: Details;
}) => {
  return (
    <CardActionArea
      onClick={onCardClick}
      style={{ background: isActive ? GRAY : undefined }}
    >
      <Stack gap={2} p={2}>
        <Typography variant="h6">{data.name}</Typography>
        <Typography variant="subtitle2">{data.description}</Typography>
      </Stack>
    </CardActionArea>
  );
};
