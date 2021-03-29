import { AppBar, Button, Container, CssBaseline, Divider, Drawer, IconButton, List, makeStyles, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import clsx from 'clsx';
import React, { FunctionComponent, useState, useContext, useEffect, useRef, Ref, SyntheticEvent } from 'react'
import MenuListItems from '../core/MenuListItems';
import CopyRight from '../core/CopyRight';
import { AppContext } from '../../context/AppProvider';
import { UserContext } from '../../context/UserProvider';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Route, Switch, useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import { APP_MODULES } from '../../utils/constants';
import { Person } from '@material-ui/icons';
import * as authService from '../../services/auth-service'
import { AuthUser } from '../../types/User';
import NotAuthorizedPage from '../../pages/NotAuthorizedPage';
import ErrorBoundary from '../ErrorBoundary';

const HomePage = React.lazy(()=> import('../../pages/HomePage'))
const DepartmentIndexPage = React.lazy(() => import('../../pages/department/DapartmentIndexPage'))
const SupplierIndexPage = React.lazy(()=> import('../../pages/supplier/SupplierIndexPage'))
const UserIndexPage = React.lazy(() => import('../../pages/user/UserIndexPage'))
const ItemRequestIndexPage = React.lazy(() => import('../../pages/item-request/ItemRequestIndexPage'))
const SettingsIndexPage = React.lazy(() => import('../../pages/configuration/SettingsIndexPage'))

const drawerWidth = 240;

const useStyles = makeStyles(theme=> ({
  root: {
    display: 'flex'
  },
  toolbar: {
    paddingRight: 24,
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
    textAlign: 'left'
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  mainContainer: {
    width: '100%',
    flexGrow: 1,
    padding: '10px'
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));



// const user:User = {
//   id: 562,
//   firstName: 'etornam',
//   lastName: 'anyidoho',
//   username: 'etoretornam',
//   email: 'etornamanyidoho@gmail.com',
//   phoneNumber: '0548556086',
//   employeeLevel: 'junior'
// }

const AppLayout:FunctionComponent = ()=> {
  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(true);
  const [openProfileMenu, setOpenProfileMenu] = useState<boolean>(false)
  const [anchorEl, setAnchorEl] = useState<any>(null)
  const userContext = useContext(UserContext)
  const appContext = useContext(AppContext)

  const menuAchorRef = useRef(null)

  //get location
  const location = useLocation();
  const { path } = useRouteMatch()
  const history = useHistory()

  const handleProfileMenuButtonClick = (event: SyntheticEvent) => {
    setAnchorEl(event.currentTarget);
  }

  const handleProfileMenuClose = () => {
    setAnchorEl(null)
  }

  const handleDrawerOpen = ()=> {
    setOpen(true);
  }

  const handleDrawerClose = ()=> {
    setOpen(false);
  }

  // const initUserState = ()=> {
  //   if(authService.getUserDetailsFromStorage()) {
  //     userContext.saveUser(authService.getUserDetailsFromStorage() as AuthUser)
  //   }
  // }

  const handleLogout = ()=> {
    handleProfileMenuClose()
    authService.logout()
    history.push('/login')
  }

  const handleProfileClick = ()=> {
    console.log('profile')
  }

  //useAuthentication({})
  useEffect(() => {
    const authUser = authService.getUserDetailsFromStorage() as AuthUser
    if(!authUser) {
      console.log('path', path)
      return history.push(`/login`)
    }
  })
 

  //const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <div style={{marginRight: '20px'}}>
            <img width="40" height="50" src="https://www.blueskies.com/wp-content/uploads/2017/10/logo-01.png" alt="" loading="eager" />
          </div>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            {appContext.currentPage}
          </Typography>
          <div style={{marginLeft: '10px'}}>
            <Button style={{color: '#ffffff'}} aria-haspopup="true" onClick={handleProfileMenuButtonClick}>
              {userContext.user.fullName}
              <Person />
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleProfileMenuClose}
            >
              <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <MenuListItems authUser={authService.getUserDetailsFromStorage()} />
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer}/>
        <Container maxWidth="lg" className={classes.container}>
          <div className={classes.mainContainer}>
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                classNames="fade"
                timeout={300}
              >
                <React.Suspense fallback={<span>Loading...</span>}>
                  <Switch location={location}>
                    <Route path={`${path}${APP_MODULES.SETTINGS_MODULE.path}`} component={SettingsIndexPage}/>
                    <Route path={`${path}department-module`}>
                      <DepartmentIndexPage authUser={userContext.user} />
                    </Route>
                    <Route path={`${path}supplier-module`} component={SupplierIndexPage} />
                    <Route path={`${path}user-management-module/users`} component={UserIndexPage} />
                    <Route path={`${path}${APP_MODULES.REQUEST_ITEM_MODULE.path}`} component={ItemRequestIndexPage} />
                    <Route path="/not-authorized" component={NotAuthorizedPage} />
                    <Route exact path={`${path}`} component={HomePage}/>
                  </Switch>
                </React.Suspense>
              </CSSTransition>
            </TransitionGroup>
          </div>
          <div style={{width:'100%', marginTop: 'auto'}}>
            <CopyRight />
          </div>
        </Container>
      </main>
    </div>
  );
}

export default AppLayout; //