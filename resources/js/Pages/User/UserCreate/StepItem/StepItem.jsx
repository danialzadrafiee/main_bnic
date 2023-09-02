// StepItem.jsx
import { CheckCircleOutline } from "@mui/icons-material";

const StepItem = ({title, describe, status}) => {
    return (
      <div className="flex gap-1 items-start">
        <CheckCircleOutline
          className={`mt-[1.5px] ${
            status === "done" ? "!fill-green-500" :
            status === "active" ? "!fill-blue-500" :
            status === "wait" ? "!fill-gray-500" : ""
          }`}
          fontSize="small"
        />
        <div className="grid">
          <h3 className="font-bold">{title}</h3>
          <p className="opacity-60">{describe}</p>
        </div>
      </div>
    );
  }

  export default StepItem;

