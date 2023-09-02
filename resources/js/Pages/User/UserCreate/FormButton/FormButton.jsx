// FormButton.jsx

import { Button } from "@material-tailwind/react";

const FormButton = ({ className, type, children, onClick, variant, size, disabled, color = "blue" }) => {
  return (
    <Button disabled={disabled} size={size} variant={variant} className={className} type={type === "submit" ? "submit" : "button"} onClick={onClick} color={color}>
      {children}
    </Button>
  );
};

export default FormButton;
