import React from "react";
import { Typography, Container, Box, Card } from "@mui/material";
import { styled } from "@mui/material/styles";

const About = () => {
  const mainPointList = [
    {
      title: "Privacy and Anonymity:",
      description: `
    We value your privacy above all else. With Your-TempMail, you can generate
    a temporary email address instantly, without revealing any personal
    information. This ensures that your identity remains hidden,
    protecting you from unsolicited emails and potential data breaches.`,
    },
    {
      title: " Quick and Convenient:",
      description: `
    Our platform is designed to be user-friendly and
        efficient. Creating a temporary email address takes just a few clicks,
        and you can start receiving emails immediately. No lengthy registration
        process or complex configurations are required.
    `,
    },
    {
      title: "Spam-Free Inbox:",
      description: `
    Tired
    of receiving endless promotional emails? Temp Mail has got you covered.
    Our service automatically filters out spam and unwanted messages,
    ensuring that your inbox remains clutter-free. You can focus on what
    matters while we handle the rest. 
    `,
    },
    {
      title: "Multiple Domains:",
      description: `
    To cater to your
    specific needs, Temp Mail offers a wide range of domain options for your
    temporary email address. Choose from a variety of domains to create an
    address that suits your preferences and requirements. 
    `,
    },
    {
      title: " Temporary Email for Business:",
      description: `
    Temp Mail isn't just for personal use; it's also an
        invaluable tool for businesses. Protect your company's email addresses
        from being flooded with unwanted messages by using temporary emails for
        online registrations, customer support, and more.
    `,
    },
  ];
  return (
    <Container maxWidth="md">
      <Card style={{ padding: "2rem" }}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Welcome to Your Temp Mail: Your Temporary Email Solution
        </Typography>
        <Typography variant="body1" component="h1" align="center" sx={{ mb: 6 }}>
          At Your Temp Mail, we understand the importance of online privacy and the
          need for a reliable and secure temporary email service. In today's
          digital age, it's crucial to protect your personal information from
          unwanted spam, marketing emails, and potential data breaches. That's
          why we created Temp Mail, a hassle-free and anonymous solution to keep
          your inbox clean and your identity secure.
        </Typography>
        <Typography variant="h5" component="h1" align="center" gutterBottom>
          Our Mission
        </Typography>
        <Typography variant="body1" component="h1" align="center" sx={{ mb: 6 }}>
          Our mission is to provide individuals and businesses with a temporary
          email service that is fast, easy to use, and highly effective. We aim
          to empower our users with the ability to control their online presence
          while safeguarding their privacy. Whether you need to sign up for a
          service, participate in online forums, or access exclusive content,
          Temp Mail is here to protect your identity and personal information.
        </Typography>
        <Typography variant="h5" component="h1" align="center" gutterBottom>
          Why Choose Your Temp Mail?
        </Typography>
        {mainPointList.map((point) => {
          return (
            <div style={{ marginBottom: 24 }}>
              <Typography
                variant="h6"
                component="h1"
                align="center"
                gutterBottom
              >
                {point.title}
              </Typography>
              <Typography
                variant="body1"
                component="h1"
                align="center"
                gutterBottom
              >
                {point.description}
              </Typography>
            </div>
          );
        })}

        <Typography variant="h5" component="h1" align="center" gutterBottom>
          Join the Temp Mail Community
        </Typography>
        <Typography
          variant="body1"
          component="h1"
          align="center"
          sx={{ mb: 6 }}
        >
          At Your Temp Mail, we're more than just a temporary email service; we're a
          community of individuals who value privacy and security. Join us in
          our mission to reclaim control over your inbox and protect your online
          identity. Start using Your Temp Mail today and experience the freedom of a
          clean, secure, and anonymous online presence.
        </Typography>
        <Typography variant="h5" component="h1" align="center" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" component="h1" align="center" gutterBottom>
          If you have any questions, suggestions, or concerns, our dedicated
          support team is here to assist you. Reach out to us through our
          contact page, and we'll respond promptly.
          <br />
          <br />
          Protect your privacy, control your online presence, and embrace the
          freedom of temporary email with Temp Mail - your reliable temporary
          email solution.
        </Typography>
        {/* <Box my={4}>
          <Typography variant="h4" component="h1" align="center" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body1" component="p" align="justify">
         */}
        {/* /</Box> */}
      </Card>
    </Container>
  );
};

export default About;
