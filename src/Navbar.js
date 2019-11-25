// Navbar.js

import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TypoGraphy from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
const NavBar = () => {
    return(
        <div>
        <AppBar position="static">
            <Toolbar>
                Dashboard
                <List component="nav">
                    <ListItem component="div">
                        <ListItem button>
                            <ListItemText inset>
                                <TypoGraphy color="inherit" variant="title">
                                    Home
                                </TypoGraphy>
                            </ListItemText>
                        </ListItem>
                        <ListItem button>
                            <ListItemText inset>
                                <TypoGraphy color="inherit" variant="title">
                                    Machine Learning
                                </TypoGraphy>
                            </ListItemText>
                        </ListItem>
                        <ListItem button>
                            <ListItemText inset>
                                <TypoGraphy color="inherit" variant="title">
                                    Analytics
                                </TypoGraphy>
                            </ListItemText>
                        </ListItem>
                    </ListItem >
                </List>
            </Toolbar>
        </AppBar>
        </div>
    )
}
export default NavBar;