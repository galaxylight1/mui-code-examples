import "./App.css";
import {
  AppBar,
  Typography,
  Toolbar,
  Drawer,
  List,
  ListItem,
} from "@mui/material";
import ContactForm from "./components/ContactForm";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const drawerWidth = 240;

const simpleStyles = {
  drawer: {
    width: drawerWidth,
    "& .MuiBackdrop-root": {
      display: "none",
    },
  },
  drawerPaper: {
    width: drawerWidth,
    // backgroundColor: "rgba(120,120,120,0.2)",
  },
  content: {
    marginLeft: drawerWidth + 30,
    marginTop: "2vh",
  },
};

const themedStyles = (theme) => {
  return {
    appBar: {
      zIndex: theme.zIndex.drawer + 1
    }
  };
};

function App() {
  const theme = useTheme();
  return (
    <BrowserRouter>
      <div>
        <AppBar position="fixed" sx={themedStyles(theme).appBar}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              Advanced Material UI
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="temporary"
          open={true}
          sx={simpleStyles.drawer}
          PaperProps={{ sx: simpleStyles.drawerPaper, elevation: 9 }}
        >
          <Toolbar />
          <List>
            {[
              { text: "Input Form", route: "/form" },
              { text: "Contact Card Grid", route: "/grid" },
              { text: "Contact Table", route: "/table" },
              { text: "Contact Data Grid", route: "/datagrid" },
            ].map((nav, index) => (
              <ListItem key={nav.text}>
                <Link to={nav.route}>{nav.text}</Link>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <main style={simpleStyles.content}>
          <Toolbar />
          <Routes>
            <Route path="/form" element={<ContactForm />}></Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
