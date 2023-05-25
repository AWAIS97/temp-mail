import React, { useState, useEffect } from "react";
import ReactHtmlParser from "react-html-parser";
import {
  Typography,
  Card,
  Container,
  CardActionArea,
  CardMedia,
  CardContent,
  Grid,
  Button,
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { blogList } from "../contants";

const Blog = (props) => {
  const { id } = useParams();
  const [blog, setBlog] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const blog = blogList.filter((b, index) => {
      return index === parseInt(id);
    });
    setBlog(blog[0]);
  }, [id]);
  const redirect = () => {
    navigate("/blog");
  };

  return (
    <Container maxWidth="md">
      <Card
        style={{
          padding: "2rem",
          marginBottom: "2rem",
          display: "flex",
          justifyContent: "space-between",
          flexWrap:'wrap',
          gap:'10px'
        }}
      >
        <Typography variant="h5">Blog:{blog?.title}</Typography>
        <Button variant="contained" onClick={redirect}>
          Go Back
        </Button>
      </Card>
      <Card>
        <CardActionArea>
          <CardMedia component="img" image={`../${blog?.image}`} height="500" />
          <CardContent>
            <Typography variant="body1">
              {ReactHtmlParser(blog?.description)}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
};

export default Blog;
