"use client";
import Container from "@/components/layout/Container";

import React from "react";

import ContactForm from "./form/ContactForm";
import ContactFormCard from "./ContactFormCard";

function ContactFormSection() {
  return (
    <Container>
      <div className="py-10 xl:py-16 lg:grid lg:grid-cols-2 gap-10 xl:gap-[5vw] xl:min-h-[100vh] 2xl:items-center  mx-auto xl:grid-cols-5 items-center">
        <ContactForm />
        <ContactFormCard />
      </div>
    </Container>
  );
}

export default ContactFormSection;
