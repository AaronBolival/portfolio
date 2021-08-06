import React,{Component} from 'react';

import { makeStyles,ThemeProvider } from '@material-ui/core/styles';

import {Container,Grid,Toolbar,Box,Paper} from '@material-ui/core/';
import {Card,CardActionArea,CardActions,CardContent,CardMedia} from '@material-ui/core/';
import {ListItem,ListItemText} from '@material-ui/core/';
import { width,spacing ,flexbox,borders,positions,fontSize} from '@material-ui/system';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Image from 'material-ui-image';
import Chip from '@material-ui/core/Chip';


import zIndex from '@material-ui/core/styles/zIndex';
import TableContainer from '@material-ui/core/TableContainer';

import { FormControl,InputLabel,Input,FormHelperText } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  
    appbar:{
      backgroundColor:"rgba(0,0,0,0.5)",
      padding:"1rem",
      position:"fixed"
    },
    zIndex:{
      appbar:"1100"
    },
    root: {
      flexGrow: 1,
    },
  
    title: {
      flexGrow: 1,
      fontFamily: "Dancing Script",
      fontSize:"48px"
    },
    navlink:{
      color:"white",
    },
    centercontainer:{
      display:"flex",
      flexDirection:"row",
      // flexWrap:"wrap",
      justifyContent:"center",
      alignItems:"center",
      maxWidth:"100%",
      backgroundRepeat:"no-repeat",
      backgroundPosition:"center",
      backgroundAttachment:"fixed",
      backgroundSize:"cover",
      height:"auto",
      padding:"0",
      // backgroundColor:"rgba(0,0,0,.5)",
      // backgroundColor:"#e0f7fa",
      // backgroundImage: 
      // "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('./images/officedesk.jpg')",
      [theme.breakpoints.between('xs','sm','md')]: {
        flexDirection:"column",
      }, 
    },
    
      left:{
        backgroundColor:"rgba(0,0,0,0.5)",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        height:"100vh",
       width:"50%",
       [theme.breakpoints.between('xs','sm','md')]: {
        width:"100%"
        },
      },
      right:{
        height:"auto",
        width:"50%",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        height:"100vh",
        [theme.breakpoints.between('xs','sm','md')]: {
          width:"100%"
        },
      },
  
      whoamiContainer:{
        width:"50%",
        // borderLeft:"1px solid white",
        [theme.breakpoints.between('xs','sm','md')]: {
          width:"100%",
          border:"none"
        },
      },
      myname:{
        textAlign:"left",
        color:"white",
        fontFamily: "Dancing Script",
        [theme.breakpoints.between('xs','sm','md')]: {
          textAlign:"center"
          }, 
      },
      career1:{
        [theme.breakpoints.between('xs','sm','md')]: {
          textAlign:"center"
          },
      },
      career:{
        color:"white",
        [theme.breakpoints.between('xs','sm','md')]: {
          textAlign:"center"
          },
      },
      quote:{
        color:"white",
        fontSize:"50px",
        textAlign:"center",
        text:"center",
        wordWrap:"wrap",
        fontFamily: "Dancing Script",
  
        [theme.breakpoints.between('xs','sm','md')]: {
          fontSize:"40px",
          width:"100%",
        },
      },
      quoteContainer:{
        width:"50%",
        border:"1px solid white",
         [theme.breakpoints.between('xs','sm','md')]: {
          border:"0",
          height:"auto",
          
          width:"100%"
        },
      },
   
  
      //-------------------------------
      containerscontent:{
        backgroundColor:"rgba(255,255,255,1)",
        maxWidth:"100%",
        padding:"2rem",
        height:"100vh",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        [theme.breakpoints.between('xs','sm','md','lg')]: {
          height:"auto"
        },
      },
      containerscontentChild:{
        display:"flex",
        flexDirection:"row",
        [theme.breakpoints.between('xs','sm','md')]: {
          flexDirection:"column"
        },
      },
      headerContent:{
        textAlign:"center",
        padding:"1rem 0rem",
        width:"100%",
        color:"#ff8a80",
        borderBottom:"solid 1px #e0e0e0"
      },
      paragraph:{
        textAlign:"center",
        
        width:"100%",
      },
    
      projectsLeft:{
        width:"50%",
        // backgroundColor:"red",
        display:"flex",
        justifyContent:"center",
        [theme.breakpoints.between('xs','sm','md')]: {
          width:"100%"
        }
      },
     
      projectsPaper1:{
        display:"flex",
        justifyContent:"center",
        // padding:"2rem",
        flexDirection:"column",
        // backgroundColor:"red"
      },
      projectsPaper2:{
       
        padding:"2rem",
     
        flexDirection:"column",
      },
      projectsRight:{
        width:"50%",
        
      },
      projectsTypo:{
        width:"100%"
      },
      
      button:{
      width:"100px",
      
      },

    //   {/* ================below is skills container==================== */}
    parentSkillContainer:{
        maxWidth:"100%",
        backgroundColor:"#e0f7fa",
        padding:"2rem",
        height:"100vh",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        [theme.breakpoints.between('xs','sm','md')]: {
          height:"auto"
        },
    },
    childSkillContainer:{
        // border:"solid 1px green",
        [theme.breakpoints.between('xs','sm','md','lg')]: {
          height:"auto"
        }
    },
    langBox:{
        margin:"5px",
        padding:"1rem",
        backgroundColor:"white",
        boxShadow:"0px 1px 5px 0px #9e9e9e",
        [theme.breakpoints.between('xs','sm','md','lg')]: {
       
        }, 
    },
    progBox:{
      // boxShadow:"0px 1px 5px 0px #9e9e9e"
     
      width:"70px"
    },
    toolsBoxs:{
      // margin:"5px",
      padding:"1rem",
      backgroundColor:"white",
      // backgroundColor:"#e0f7fa",
      // backgroundColor:"transparent",
      // boxShadow:"0px 1px 5px 0px #9e9e9e",
      [theme.breakpoints.between('xs','sm','md','lg')]: {
     
      }, 
  },
  toolsBoxsCon:{
    display:"flex",flexDirection:"row",maxWidth:"100%",padding:"0",borderTop:"solid 1px #9e9e9e",
    [theme.breakpoints.between('xs','sm','md','lg')]: {
     flexDirection:"column"
    }, 
  },
  imageTitle:{
    fontSize:"10px"
  },
    //   {/* ================below is about container==================== */}
aboutContainer:{
  maxWidth:"100%",
  backgroundColor:"#fff",
  height:"100vh",
  display:"flex",
  flexDirection:"column",
  justifyContent:"center",
  [theme.breakpoints.between('xs','sm','md','lg')]: {
    height:"auto"
  },
},
profile:{
  [theme.breakpoints.between('xs','sm','md','lg')]: {
    width:"50px"
  },
},
buttonBox:{
  
  [theme.breakpoints.between('xs','sm','md')]: {
    display:"flex",
    justifyContent:"center"
    }, 
},
button:{
  width:"auto",
  
},
    //   {/* ================below is contact container==================== */}
    contactContainer:{
      maxWidth:"100%",
      backgroundColor:"white",
      // padding:"2rem",
      height:"100vh",
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      [theme.breakpoints.between('xs','sm','md','lg')]: {
        height:"auto"
      },
  },
  contactContainerChild:{
    padding:"1rem",
    // backgroundColor:"red",
    display:"flex",
    justifyContent:"center",
  },
  contactGrid:{
    // backgroundColor:"red",
    padding:"1rem",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between ",
    [theme.breakpoints.between('xs','sm','md','lg')]: {
     flexDirection:"column"
    },
  },
  phoneNumber:{
    display:"flex",
    flexDirection:"space-around",
    // justifyContent:"center",
    // backgroundColor:"red",
    padding:"1rem 0rem",
    width:"100%",
    // borderBottom:"solid 1px #bdbdbd"
    [theme.breakpoints.between('xs','sm','md','lg')]: {
    
      flexDirection:"column",
    
    },
  },
  chipContact:{
    // margin:"0px 12px",
    width:"50%",
    [theme.breakpoints.between('xs','sm','md','lg')]: {
    width:"100%",
    margin:"5px 0px",
    },
  },
  form:{
  
    // backgroundColor:"yellow",
    display:"flex",
    width:"80%",
    flexDirection:"column",
    [theme.breakpoints.between('xs','sm','md','lg')]: {
    width:"100%"
    },
  },
  div:{
    padding:"10px 0px",
    width:"49%",
    [theme.breakpoints.between('xs','sm','md','lg')]: {
      width:"100%"
     },
  },
  textField:{
    backgroundColor:"white",
    width:"100%"
  },

  textArea:{
    // backgroundColor:"red",
    width:"100%",border:"solid 1px #bdbdbd"
  },
  buttonCon:{
    padding:"1rem",
    display:"flex",
    flexDirection:"row",
    justifyContent:"flex-end",
  },
  button:{
    margin:"0px 5px"
  },
   //cerificate====================

   swiperContainer:{
    height:"100vh",
    maxWidth:"100%",
    backgroundColor:"#e0f7fa",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
  },
  swiperChildContainer:{
  //  backgroundColor:"yellow",
   height:"50%",
   display:"flex",
   
  },
  mySwiper:{
    [theme.breakpoints.between('xs','sm','md','lg')]: {
      width:"100%"
    },
  }
  }));
 



  export default useStyles;