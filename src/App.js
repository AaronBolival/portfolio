import logo from './logo.svg';
import './App.css';
import emailjs from 'emailjs-com';

import React,{Component,useEffect,useRef, useState } from 'react';
import useStyles from "./design";

import { makeStyles,ThemeProvider } from '@material-ui/core/styles';

import {
  Container,Grid,Toolbar,Box,Paper,useMediaQuery,
  FormControl,InputLabel,Input,FormHelperText,FormGroup,TextareaAutosize,TextField,
  AppBar,Button,Typography,Chip,zIndex,Link, Icon
} from '@material-ui/core/';

import { width , spacing , flexbox , borders , positions , fontSize , palette ,shadows,typography} from '@material-ui/system';

import Image from 'material-ui-image';
//animation

import Aos from "aos";
import "aos/dist/aos.css";


// images
import aaron from "./icons/aaron.jpg";

import bootstrap from "./images/bootstrap.png";
import csharp from "./images/csharp.png";
import java from "./images/java.png";
import cssthree from "./images/cssthree.png";
import htmlfive from "./images/htmlfive.png";
import js from "./images/js.png";
import mysql from "./images/mysql.png";
import php from "./images/php.png";
import react from "./images/react.png";
import sass from "./images/sass.png";

import androidstudio from "./images/androidstudio.png";
import vstudio from "./images/vstudio.png";
import vscode from "./images/vscode.png";
import eclipse from "./images/eclipse.png";
import mui from "./images/mui.png";
import windows from "./images/windows.png";
import ubuntu from "./images/ubuntu.png";
import xampp from "./images/xampp.png";

import portfolioImg from "./images/portfolioImg.png";
import portfolioImg2 from "./images/portfolioImg2.png";
import portfolioImg3 from "./images/portfolioImg3.png";


//cert
import javaoop from "./cert/javaoop.jpg";
import javaprog from "./cert/javaprog.jpg";
import responsiveWeb from "./cert/responsiveWeb.jpg";
import softwaretesting from "./cert/softwaretesting.jpg";
import sql from "./cert/sql.jpg";

// icons
import CallSharpIcon from '@material-ui/icons/CallSharp';
import GetAppSharpIcon from '@material-ui/icons/GetAppSharp';
import OpenInNewSharpIcon from '@material-ui/icons/OpenInNewSharp';
import SendSharpIcon from '@material-ui/icons/SendSharp';

import MailOutlineSharpIcon from '@material-ui/icons/MailOutlineSharp';


// swiper js
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/effect-cube/effect-cube.min.css"

import "swiper/components/navigation/navigation.min.css";
import SwiperCore, {
  Autoplay,Pagination,Navigation,EffectCube
} from 'swiper/core';

SwiperCore.use([Autoplay,Pagination,Navigation,EffectCube]);

const osMaps =[
  {
    id:"1",
    name:"Linux (Ubuntu)",
    image:ubuntu
  },
  {
    id:"2",
    name:"Windows 8/10",
    image:windows
  }
];
const toolMaps=[
  {
    id:"1",
    name:"Android Studio",
    image:androidstudio
  },
  {
    id:"2",
    name:"Java Eclipse",
    image:eclipse
  },
  {
    id:"3",
    name:"Visual Code",
    image:vscode
  },
  {
    id:"4",
    name:"Visual Studio",
    image:vstudio
  },
  {
    id:"5",
    name:"XAMPP",
    image:xampp
  },
]
const webImages=[
  {
    id:"1",
    name:"HTML",
    image:htmlfive
  },
  {
    id:"2",
    name:"Bootstrap",
    image:bootstrap
  },
  {
    id:"3",
    name:"MaterialUI",
    image:mui
  },
  {
    id:"4",
    name:"CSS",
    image:cssthree

  },
  {
    id:"5",
    name:"SASS",
    image:sass
  },
  {
    id:"6",
    name:"PHP",
    image:php
  },
  {
    id:"7",
    name:"MySql",
    image:mysql
  },
  {
    id:"8",
    name:"ReactJS",
    image:react
  },
  {
    id:"9",
    name:"JavaScript",
    image:js
  }
]
const appImages=[
  {
    id:"1",
    name:"Java",
    image:java
  }
]
const softwareImages=[
  {
    id:"1",
    name:"C#",
    image:csharp
  }
]

function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm('service_hcjya3w', 'template_6ywsagd', e.target, 'user_5ZxOpS022ZLcSvAwxKIPS')
    .then((result) => {
        // console.log(result.text);
        alert('Your message has been sent');
        // <Alert severity="success">{result.text}</Alert>

    }, (error) => {
        // console.log(error.text);
        alert('failed to send your message');

    });
    e.target.reset()
}

const App = () => {
  const classes = useStyles();
  const formRef = React.useRef();

  useEffect(()=>{
    Aos.init({duration:2000});
  },[]);
  return (
    <div className="App">
      
      <AppBar className={classes.appbar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="white">
            Portfolio
          </Typography>
          {/* <Button  className={classes.navlink}>Home</Button> */}
          {/* <Button  className={classes.navlink}>About</Button> */}
        </Toolbar>
      </AppBar>
      <Container className={classes.centercontainer}>

        <Grid   className={classes.left}>
          <Container className={classes.whoamiContainer}>
              <Typography variant="h1" className={classes.myname} data-aos="fade-left"> Aaron John E Bolival</Typography>
              <hr/>
              <Typography className={classes.career1} color="secondary">Application | Web | Software</Typography>
              <Typography className={classes.career}>Software Engineer</Typography>
              <Typography className={classes.career}>Back End Programmer/Developer</Typography>
              <Typography className={classes.career}>Front End Programmer/Developer</Typography>
          </Container>
        </Grid>
        <Grid className={classes.right} >
         <Container className={classes.quoteContainer}>
              {/* <Typography variant="h2" className={classes.quote}>"Life is just a game You hold your own weight Make your own mistakes You only get one chance To show who you are."</Typography> */}
              <Typography variant="h2" className={classes.quote}>"Life is like a game , which is not always fair. however if you play with heart and give it your best shot. you are going to win in the end."</Typography>
        </Container>
        </Grid>

      </Container>
            {/* ================below is about container==================== */}

            <Container className={classes.aboutContainer}> 
        <Grid lg={12} container display="flex" direction="row"   justifyContent="center">  
          <Grid container display="flex" direction="column" data-aos="fade" lg={3} xs={8} md={4} className={classes.sss}>
               <Image src={aaron}  className={classes.profile}/>
          </Grid>
          <Grid container display="flex" direction="column" lg={5} xs={11} >
           
              <Typography item className={classes.headerContent} variant="h4">Who am I</Typography>
              <Box container p={5}>
                 <Typography item className={classes.sss} variant="body2">
                  Hi! I am Aaron John Bolival, A BSIT College graduate from STI College with background in programming and design(Web, Mobile Application and Software/Desktop ).
                </Typography> 
              </Box>
              <Box container p={5}>
                 <Typography item className={classes.sss} variant="body2">
                  I'm 22 years old residing in NCR, Caloocan and currently looking for a job.
                </Typography> 
              </Box>
              <Box  p={5} className={classes.buttonBox}>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  className={classes.button}
                  startIcon={<GetAppSharpIcon />}
                >
                  <Link href="https://drive.google.com/file/d/1UR7IuM7pNY4rhD_tq5vj5F1fL0DzVgDU/view?usp=sharing" target="_blank" color="inherit">Download my Resume</Link>
                </Button>
              </Box>
           
          </Grid>
       
        </Grid>
      </Container>
       {/* ================below is skills container==================== */}


       <Container className={classes.parentSkillContainer} container display="flex">
         
       <Typography className={classes.headerContent} variant="h4" width="100%">Technical Skills</Typography>
       <Typography className={classes.paragraph} variant="body1" width="100%">List of my current skills</Typography>
         <Grid lg="12" className={classes.childSkillContainer} container direction="row" justifyContent="center">
           <Grid container direction="column" lg={3} className={classes.langBox} boxShadow={2}>
             <Container>
               <Typography variant="h5" className={classes.headerContent} >Web</Typography>
             </Container>
             <Grid container direction="row" justifyContent="center" boxShadow={3} data-aos="fade">
               
             {webImages.map((webImage)=>(
                 <Box ml={1} mr={1} p={1}  display="flex" flexDirection="column" className={classes.progBox}>
                 <Typography align="center" className={classes.imageTitle} >{webImage.name}</Typography>
                 <Image src={webImage.image} className={classes.imga}/>
                </Box>
               ))}
             </Grid>
           </Grid>
    
           <Grid container direction="column" lg={3} className={classes.langBox} data-aos="fade">
             <Container>
               <Typography variant="h5" className={classes.headerContent} >Application</Typography>
             </Container>
             <Grid container direction="row" justifyContent="center">
              {appImages.map((appImage)=>(
                 <Box ml={1} mr={1} p={1}  display="flex" flexDirection="column" className={classes.progBox}>
                 <Typography align="center" className={classes.imageTitle} >{appImage.name}</Typography>
                 <Image src={appImage.image} className={classes.imga}/>
                </Box>
               ))}
             </Grid>
           </Grid>

           <Grid container direction="column" lg={3} className={classes.langBox} data-aos="fade">
             <Container>
               <Typography variant="h5" className={classes.headerContent} >Software</Typography>
             </Container>
             <Grid container direction="row"  justifyContent="center">
              {softwareImages.map((softwareImage)=>(
                 <Box ml={1} mr={1} p={1}  display="flex" flexDirection="column" className={classes.progBox}>
                 <Typography align="center" className={classes.imageTitle} >{softwareImage.name}</Typography>
                 <Image src={softwareImage.image} className={classes.imga}/>
                </Box>
               ))}
             </Grid>
           </Grid>

          
         </Grid>
         
      </Container>  

      {/* ===============below is projects container==================== */}
 
      <Container container className={classes.containerscontent}>
      <Typography className={classes.headerContent} variant="h4" width="100%">Projects</Typography>
      <Typography className={classes.paragraph} variant="body1" width="100%">List of Project / Tasks / Thesis I made</Typography>
      <hr/>
        <Container className={classes.containerscontentChild}>
          <Container className={classes.projectsLeft}>
            {/* <Container className={classes.projectsPaper1} data-aos="fade" container>  */}
            <Swiper effect={'cube'} grabCursor={true} cubeEffect={{
                "shadow": true,
                "slideShadows": true,
                "shadowOffset": 20,
                "shadowScale": 0.94
              }} pagination={true} className="mySwiper" data-aos="fade">
                  <SwiperSlide><img src={portfolioImg}  /></SwiperSlide>
                  <SwiperSlide><img src={portfolioImg2} /></SwiperSlide>
                  <SwiperSlide><img src={portfolioImg3} /></SwiperSlide>
            </Swiper>
            {/* <Image src={portfolioImg} className={classes.projectsImages}/> */}
            {/* </Container> */}
          
          </Container>
          <hr/>
          
          <Container className={classes.projectsRight2}>
            <Container className={classes.projectsPaper}>
              <Typography variant="h4" className={classes.projectsTypo} >Portfolio 2021</Typography>
              <Typography variant="body1" className={classes.projectsTypo} >This is my portfolio</Typography>
              <hr/>
              <Chip size="small" label="HTML" />
              <Chip size="small" label="Material UI" />
              <Chip size="small" label="CSS" />
              <Chip size="small" label="ReactJS" />
              <Chip size="small" label="CSS" />
              <Chip size="small" label="EmailJS" />
              <Chip size="small" label="SwiperJS" />


              <br/>   <hr/>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  className={classes.button}
                  startIcon={<OpenInNewSharpIcon />}
                >
                  <Link href="#" color="inherit" >View</Link> 
                </Button>
            </Container> 
          </Container>
        </Container>
        
        
        
      </Container>
     
      

      {/* ===================below is certificate */}
      <Container className={classes.swiperContainer} container  display="flex" justifyContent="center">
      <Typography className={classes.headerContent} variant="h4" >Certificates</Typography>
      <Typography className={classes.paragraph} variant="body1">List of certificates</Typography>
            <Container className={classes.swiperChildContainer}>
                <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
                  "delay": 5500,
                  "disableOnInteraction": false
                }} pagination={{
                  "clickable": true
                }} navigation={true} className={classes.mySwiper}>
                  <SwiperSlide><img src={javaoop} /></SwiperSlide>
                  <SwiperSlide><img src={javaprog} /></SwiperSlide>
                  <SwiperSlide><img src={responsiveWeb} /></SwiperSlide>
                  <SwiperSlide><img src={softwaretesting} /></SwiperSlide>
                  <SwiperSlide><img src={sql} /></SwiperSlide>
                  </Swiper>
            </Container>
      </Container>
        
         {/* ================below is Contact container==================== */}
    
      <Container className={classes.contactContainer} container display="flex" justifyContent="center" flexDirection="column">
        <Typography className={classes.headerContent} variant="h4" width="100%">Contact me</Typography>
        <Typography className={classes.paragraph} variant="body2" width="100%">If you have a question or you want to hire me just message me or call me</Typography>
      
        <Container className={classes.contactContainerChild} container>
          <form  autoComplete="off" container className={classes.form} onSubmit={sendEmail} >
          <input type="hidden" name="contact_number" />
          <Grid container className={classes.contactGrid}> 
          <Box className={classes.phoneNumber} container >
                  <Chip
                      icon={< CallSharpIcon/>}
                      label="Globe: | +63 995-406-0619"
                      color="primary"
                      variant="outlined"
                      className={classes.chipContact}/>
                  <Chip
                      icon={< MailOutlineSharpIcon/>}
                      label="aaronbolival@gmail.com"
                      color="primary"
                      variant="outlined"
                      className={classes.chipContact}/>
                      
                </Box>
             </Grid>
             <Grid container className={classes.contactGrid}> 
                <Box className={classes.div}>
                  <TextField id="outlined-basic" label="Name or Company Name" variant="outlined" className={classes.textField} type="text" name="from_name"  required={true}/>
                </Box>

                <Box className={classes.div}> 
                  <TextField id="outlined-basic" label="Your Email" variant="outlined" className={classes.textField} type="email" name="from_name" required={true} />
                </Box>
             </Grid>

             <Grid className={classes.contactGrid}>
                <TextareaAutosize aria-label="minimum height" minRows={20}  placeholder="Message (Minimum 25 rows)" className={classes.textArea} name="message" required={true} />
             </Grid>
             <Grid className={classes.contactGrid} container  >
                {/* <input type="submit" value="Send" size="large" variant="contained" color="secondary" className={classes.button} startIcon={<SendSharpIcon/>} /> */}
               
                <Box>
                <Button size="large" variant="contained" color="secondary" className={classes.button} type="submit" value="Send" required startIcon={<SendSharpIcon/>}>Send</Button>
                </Box>
             </Grid>
          </form>
        </Container>        
      </Container>

      {/* =================below is tools  */}
      {/* <Container className={classes.toolsBoxsCon} lg={12}>
      <Grid container direction="column" lg={12} className={classes.toolsBoxs} display="flex" justifyContent="center">
             <Container>
               <Typography variant="h5" className={classes.headerContent} >Tools</Typography>
              <Typography className={classes.paragraph} variant="body1" width="100%">List of IDE / Text editor I used for programming</Typography>

             </Container>
             <Grid container direction="row" justifyContent="center" data-aos="fade">
             {toolMaps.map((toolMap)=>(
                 <Box ml={1} mr={1} p={1}  display="flex" flexDirection="column" className={classes.progBox}>
                 <Typography align="center" className={classes.imageTitle} >{toolMap.name}</Typography>
                 <Image src={toolMap.image} className={classes.imga}/>
                </Box>
               ))}
             </Grid>
           </Grid>

           <Grid container direction="column" lg={12} className={classes.toolsBoxs} display="flex" justifyContent="center">
             <Container>
               <Typography variant="h5" className={classes.headerContent} >Operating System</Typography>
               <Typography className={classes.paragraph} variant="body1" width="100%">List of Operating System</Typography>
             </Container>
             <Grid container direction="row" justifyContent="center" data-aos="fade">
               {osMaps.map((osMap)=>(
                 <Box ml={1} mr={1} p={1}  display="flex" flexDirection="column" className={classes.progBox}>
                 <Typography align="center" >{osMap.name}</Typography>
                 <Image src={osMap.image} className={classes.imga}/>
                </Box>
               ))}
             </Grid>
           </Grid>
           </Container>
            */}
    </div>
  );
}

export default App;
