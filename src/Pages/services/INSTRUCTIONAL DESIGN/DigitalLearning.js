import React from "react";
import {
  Container,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  Stack,
  IconButton,
} from "@mui/material";
import logsignimg from "../../../assets/design/DESIGN_1.jpg";
import Footer from "../../../components/Footer";
import HomeHeader from "../../../components/HomeHeader";
import {
  LaptopChromebookOutlined,
  LightbulbOutlined,
  PlayCircleOutlineOutlined,
} from "@mui/icons-material";

function DigitalLearning() {
  return (
    <Stack
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Stack>
        <HomeHeader />
      </Stack>
      <Stack
        sx={{
          padding: {
            xs: "5rem 0 4rem 0",
            sm: "6rem 0 5rem 0",
            md: "8rem 0 5rem 7rem",
            lg: "14rem 0 8rem 14rem",
          },
          backgroundImage: `url(${logsignimg})`,
          alignItems: { xs: "center", md: "baseline" },
        }}
      >
        <Typography
          sx={{
            color: "#fff",
            fontSize: { xs: "2rem", sm: "2.25rem", md: "2.6rem", lg: "2.8rem" },
            fontFamily: "Young Serif",
            paddingBottom: "3rem",
            width: { md: "70%", lg: "55%" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          Make Informed Decisions with Effective Evaluation & Measurement
        </Typography>
      </Stack>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h4" component="h2" gutterBottom>
              Unlock the Power of Flexible and Engaging Digital Learning
            </Typography>
            <Typography variant="body1" gutterBottom>
              In today's fast-paced world, digital learning offers a convenient
              and effective way to acquire new skills and knowledge. Worldview
              Training and Consulting Service PLC provides a comprehensive suite
              of digital learning solutions designed to:
            </Typography>
            <List>
              <ListItem>
                <IconButton sx={{ mr: 1 }}>
                  <LightbulbOutlined color="primary" />
                </IconButton>
                <ListItemText primary="Empower Learners with Anytime, Anywhere Access" />
              </ListItem>
              <ListItem>
                <IconButton sx={{ mr: 1 }}>
                  <PlayCircleOutlineOutlined color="primary" />
                </IconButton>
                <ListItemText primary="Create Engaging and Interactive Learning Experiences" />
              </ListItem>
              <ListItem>
                <IconButton sx={{ mr: 1 }}>
                  <LaptopChromebookOutlined color="primary" />
                </IconButton>
                <ListItemText primary="Deliver Scalable Learning Solutions for Diverse Audiences" />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" component="h3" gutterBottom>
              Our Digital Learning Solutions
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="E-learning Course Development (SCORM Compliant)" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Microlearning Modules for On-the-Go Learning" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Interactive Simulations and Gamification" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Mobile Learning Apps for Continuous Learning" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Learning Management System (LMS) Implementation" />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" component="h3" gutterBottom>
              Benefits of Digital Learning
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Increased Learner Engagement and Retention" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Improved Learning Efficiency and Cost-Effectiveness" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Scalability to Reach a Wider Audience" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Flexibility for Personalized Learning Paths" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Data-Driven Insights to Track Learner Progress" />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
      <Stack
        sx={{
          background: "#212529",
          padding: {
            xs: "2rem 2.5rem 2rem 2.5rem",
            sm: "2.5rem 3rem 2.5rem 3rem",
            md: "3rem 8rem 3rem 8rem",
            lg: "4rem 10rem 5rem 10rem",
          },
        }}
        justifyContent={"center"}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            paddingBottom: "2rem",
            fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem", lg: "1.8rem" },
          }}
          variant="h4"
          component="h2"
          color={"#fff"}
        >
          Transform Learning and Development with Digital Solutions
        </Typography>

        <Stack alignItems={"center"}>
          <Button
            href="/contact"
            sx={{
              border: "solid 2px black",
              borderRadius: {
                sm: "0.7rem 0.7rem 0.7rem 0rem",
                md: "0.8rem 0.8rem 0.8rem 0rem",
                lg: "1rem 1rem 1rem 0rem",
              },
              textTransform: "capitalize",
              background: "#89fc00",
              fontSize: {
                xs: "0.9rem",
                md: "0.9rem",
                lg: "1rem",
              },
              padding: {
                xs: "0.1rem 1rem 0.1rem 1rem",
                sm: "0.15rem 1.25rem 0.15rem 1.25rem",
                md: "0.25rem 1.5rem 0.25rem 1.5rem",
                lg: "0.5rem 2rem 0.5rem 2rem",
              },
              "&:hover": {
                background: "#fff",
              },
            }}
          >
            Explore Digital Learning Solutions
          </Button>
        </Stack>
      </Stack>

      <Stack
        sx={{
          marginTop: "auto",
        }}
      >
        <Footer />
      </Stack>
    </Stack>
  );
}

export default DigitalLearning;
