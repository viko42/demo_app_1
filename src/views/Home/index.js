import React from "react";

import { Testimonials } from "./styled";
import Sections from "./Sections";
import CardTestimonial from "../../components/Card/Testimonial";

import Layout from "../../components/Layout";
import Header from "../../components/Header";

function App() {
  return (
    <Layout>
      <Header></Header>
      <Testimonials>
        <CardTestimonial avatar="male"></CardTestimonial>
        <CardTestimonial avatar="female"></CardTestimonial>
      </Testimonials>
      <Sections>
        <Sections.Steps />
        <Sections.Features />
        <Sections.Jobs />
        <Sections.Solutions />
        <Sections.Schedule />
        <Sections.Story />
      </Sections>
    </Layout>
  );
}

export default App;
