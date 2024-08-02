import { Box, Stack } from "@mui/material";
import { Header } from "../components/Header";
import { List } from "../containers/List";
import { Detail } from "../containers/Detail";
import { useState } from "react";
import { customers } from "../mock/customers";
import { Details } from "../containers/types";

export const Layout = () => {
  const [details, setDetails] = useState<Details>(customers[0]);

  const subLayout = (
    <Box display="flex" height="90vh">
      <Box flexBasis="30%" overflow="scroll">
        <List cards={customers} setDetails={setDetails} />
      </Box>
      <Box flex={1}>
        <Detail details={details || customers[0]} />
      </Box>
    </Box>
  );

  return (
    <Stack>
      <Header />
      {subLayout}
    </Stack>
  );
};
