// resources/js/Components/Grid/Grid.jsx
import React, { useState } from "react";
const Grid = ({ props, children, className }) => {
    return (
        <div {...props} className={`grid ${className}`}>
            {children}
        </div>
    );
};

export default Grid;
