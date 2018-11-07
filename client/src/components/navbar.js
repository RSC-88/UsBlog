import React from 'react';
import PropTypes from 'prop-types';
import { Toolbar, Typography, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'

const styles = theme => ({
  toolbarMain: {
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
    height: '100%',
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-evenly',
  },
  titleLink: {
    textDecoration: 'none',
    color: 'black'
  },
  link: {
    color: 'inherit',
    textDecoration: 'none',
  }
});

const Navbar = React.memo((props) => {
  const { title, classes } = props;
  return (
    <React.Fragment>
      <div style={{height: 10 + '%'}}>
        <Toolbar className={classes.toolbarMain}>
          <Typography
                component="h2"
                variant="h5"
                color="inherit"
                align="center"
                noWrap
                className={classes.toolbarTitle}
              >
                <Link to={'/'} className={classes.titleLink}>{title}</Link>
          </Typography>
          <Button size="small">Kontakt</Button>
        </Toolbar>
      </div>
      <div style={{height: 7 + '%'}}>
        <Toolbar variant="dense" className={classes.toolbarSecondary}>
          <Link to={"/sience"} className={classes.link}>
            <Typography color="inherit" noWrap>
              Nauka
            </Typography>
          </Link>
          <Link to={"/technology"} className={classes.link}>
            <Typography color="inherit" noWrap>
              Technologia
            </Typography>
          </Link>
          <Link to={"/entertainment"} className={classes.link}>
            <Typography color="inherit" noWrap>
              Rozrywka
            </Typography>
          </Link>
        </Toolbar>
      </div>
    </React.Fragment>
  )
});

Navbar.propTypes = {
  title: PropTypes.string,
  classes: PropTypes.instanceOf(Object)
}

export default withStyles(styles)(Navbar);