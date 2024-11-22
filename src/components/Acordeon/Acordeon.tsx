import Layout from "@/components/Layout";
import Heading from "@/components/SectionHeader/Heading";
import Button from "@/components/Button";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./Acordeon.css";

import React, { useState } from "react";

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Servicios: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <button
            className={`accordion-header ${
              activeIndex === index ? "active" : ""
            }`}
            onClick={() => toggleItem(index)}
          >
            {item.title}
          </button>
          <div
            className={`accordion-content ${
              activeIndex === index ? "open" : ""
            }`}
          >
            <p>{item.content}</p>
          </div>
          <hr className="hrAcor"/>
        </div>
      ))}
    </div>
  );
};

export default Servicios;
