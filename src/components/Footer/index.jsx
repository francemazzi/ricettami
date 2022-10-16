import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function FooterFavorites() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }} style={{ marginTop: "2rem" }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Recenti" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Preferiti" icon={<FavoriteIcon />} />
      </BottomNavigation>
    </Box>
  );
}
