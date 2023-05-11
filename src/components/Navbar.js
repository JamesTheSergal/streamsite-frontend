import * as mui from '@mui/material';
import * as React from 'react';
import '../styles/App.css';

function Navbar() {
    return (
        <React.Fragment>
            <nav className="navbar">
                <mui.Typography variant="h4" component="div" align="center" sx={{ flexGrow: 16 }}>Sergal Live</mui.Typography>
            </nav>
        </React.Fragment>
        
    );
}

export default Navbar
