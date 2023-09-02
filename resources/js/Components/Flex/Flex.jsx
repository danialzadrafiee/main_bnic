// resources/js/Components/Flex/Flex.jsx
import React, { useState } from "react";
const Flex = ({ props, children , className }) => {
  return (
    <div {...props} className={`flex ${className}`}>
      {children}
    </div>
  );
};

export default Flex;
