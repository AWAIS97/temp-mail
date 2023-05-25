import React from "react";
import { questionsList } from "../contants";
import { styled } from "@mui/material/styles";
import { Typography, Card, Container, CardContent } from "@mui/material";
import ReactHtmlParser from "react-html-parser";

const CustomCard = styled(Card)(({ theme }) => ({
  padding: "2rem",
}));

const QuestionsList = () => {
  return (
    <Container maxWidth="md">
      <CustomCard>
        <Typography variant="h5" component="h1" align="center">
          Popular Questions
        </Typography>
        <CardContent>
        {questionsList.map((data) => {
          return (
            <div style={{ marginBottom: "1rem" }}>
              <Typography
                variant="h6"
                component="h1"
                style={{ margin: "1rem 0rem" }}
              >
                {data.question}
              </Typography>

              <Typography variant="body2" component="p">
                {ReactHtmlParser(data.answer)}
              </Typography>

              {data.list &&
                data.list.map((item) => {
                  return (
                    <>
                      {item.title && (
                        <ul>
                          <li>
                            <Typography
                              variant={item.discription ? "h6" : "body2"}
                            >
                              {item.title}
                            </Typography>
                          </li>
                        </ul>
                      )}
                      <Typography variant="body2">
                        {item.discription}
                      </Typography>
                    </>
                  );
                })}
            </div>
          );
        })}
        </CardContent>
      </CustomCard>
    </Container>
  );
};

export default QuestionsList;
