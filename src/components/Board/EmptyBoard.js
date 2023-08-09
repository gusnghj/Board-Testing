import { Box, SpaceBetween } from "@cloudscape-design/components";
import React, { memo } from "react";


export const EmptyBoard = memo(() => {
    return (
        <Box margin={{ vertical: "xs" }} textAlign="center" color="text-body-secondary">
          <SpaceBetween size="xxs">
              <Box variant="strong" color="inherit" >
                No Items
              </Box>
              <Box variant="p" color="inherit">
                Add Widgets to the Dasboard
              </Box>
          </SpaceBetween>
        </Box>
  );
});
