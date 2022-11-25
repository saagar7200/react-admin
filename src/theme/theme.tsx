// In theme.js
import { defaultTheme } from "react-admin";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme(defaultTheme, {
  palette: {
    // Your theme goes here
    priamry: {
      main: "#9FFFF8",
    },
    secondary: {
      main: "#312A91", // Not far from orange
    },
  },
  components: {
    ...defaultTheme.components,
    RaLayout: {
      styleOverrides: {
        root: {
          "& .RaLayout-contentWithSidebar": {
            // backgroundColor: "#312A91",
          },
          "& .MuiList-root": {
            margin: 0,
          },
          "& .RaSidebar-fixed": {
            borderRight: "2px solid #D2D2D2",
          },
        },
      },
    },
    RaMenuItemLink: {
      styleOverrides: {
        root: {
          color: "rgba(0, 0, 0, 0.87)",
          padding: "14px",
          "&.RaMenuItemLink-active": {
            background: "#D2D2D2",
            color: "#fff",
          },
        },
      },
    },
    RaSidebar: {
      styleOverrides: {
        root: {
          borderRight: "2px solid #D2D2D2",
        },
      },
    },
    RaMenu: {
      styleOverrides: {
        root: {
          paddingTop: "30px",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          padding: "14px",
          p: {
            color: "#fff",
          },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: "#fff",
          "&.RaMenuItemLink-icon": {
            color: "rgba(0, 0, 0, 0.87)",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorSecondary: {
          color: "#312A91",
          backgroundColor: "#fff",
          border: "1px solid rgb(224, 224, 227)",
          boxShadow: "none",
          textAlign: "center",
          fontSize: "20px",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: "15px",
        },
      },
    },
  },
});
