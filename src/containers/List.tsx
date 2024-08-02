import React, { useState } from "react";
import { Box, Divider, Stack } from "@mui/material";
import { Card } from "../components/Card";
import { Details, ListProps } from "./types";

export const List = ({ setDetails, cards }: ListProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const onCardClick = (index: number, cardDetails: Details) => {
    setDetails(cardDetails);
    setActiveIndex(index);
  };

  return (
    <Box height="100%">
      <Stack gap={2}>
        {cards?.map((card, index) => (
          <React.Fragment key={index}>
            <Card
              onCardClick={() => onCardClick(index, card)}
              isActive={activeIndex === index}
              data={card}
            />
            {index < cards.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </Stack>
    </Box>
  );
};
