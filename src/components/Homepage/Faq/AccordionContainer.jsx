import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

const AccordionContainer = ({ items, className }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div
      className={`w-full flex-col gap-5 overflow-hidden mt-5 lg:mt-10 ${className}`}
    >
      {items.map((item, index) => (
        <AccordionItem
          key={item.id}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          index={index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default AccordionContainer;
