import React from "react";
import { blogList } from "../assets/contants";
import ReactHtmlParser from "react-html-parser";
import {
  Typography,
  Card,
  Container,
  CardActionArea,
  CardMedia,
  CardContent,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const BlogList = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md">
      <Card style={{ padding: "2rem", marginBottom: "2rem" }}>
        <Typography variant="h4">Popular Articles</Typography>
      </Card>
      <Grid container spacing={2}>
        {blogList.map((blog, index) => {
          return (
            <Grid item lg={6} md={6} wrap>
              <Card>
                <CardActionArea
                  onClick={() => {
                    navigate(`/blog/${index}`);
                  }}
                >
                  <CardMedia component="img" image={blog?.image} height="150" />
                  <CardContent>
                    <Typography variant="h5">{blog.title}</Typography>
                    <Typography variant="body2">
                      {ReactHtmlParser(blog.description.slice(0, 300))}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default BlogList;
