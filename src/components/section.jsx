import React from "react";

import "./Section.css";

export const FullpageSection = ({ id, className, children }) => {
  return (
    <section id={id} className={`fullpage-section ${className}`}>
      {children}
    </section>
  );
};

const Section = ({ id, className, children }) => {
  return (
    <section id={id} className={`section ${className}`}>
      {children}
    </section>
  );
};
export default Section;
