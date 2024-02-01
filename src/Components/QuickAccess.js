import React from "react";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import { Home, ArrowBack, List } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const QuickAccess=()=>{
    const navigator = useNavigate();
    const actions = [
        {
          icon: <Home />,
          name: "Home",
          click: () => {
            navigator("/");
          },
        },
        {
          icon: <ArrowBack />,
          name: "Back",
          click: () => {
            navigator("/");
          },
        },
        {
          icon: <List />,
          name: "All",
          click: () => {
            navigator("/Display");
          },
        },
        {
          icon: <ShareIcon />,
          name: "Share",
          click: () => {
            try {
              const response =axios.post(
                "http://localhost:8040/delete"
              );
              console.log(response);
              
            } catch (e) {
              console.log(e);
            }
          },
        },
      ];
    
    return (
        <SpeedDial
    ariaLabel="SpeedDial basic example"
    sx={{ position: "fixed", bottom: 16, right: 16 }}
    icon={<SpeedDialIcon />}
  >
    {actions.map((action) => (
      <SpeedDialAction
        key={action.name}
        icon={action.icon}
        tooltipTitle={action.name}
        onClick={action.click}
      />
    ))}
  </SpeedDial>
    )
}