import { useState } from "react";
import { ToggleButton } from "react-bootstrap";

const Toggle = ({ item, categoryType, isSelected, handleSelect }) => {
  const [checked, setChecked] = useState(isSelected);

  const toggleButton = (categoryType, item) => {
    handleSelect(categoryType, item);
    setChecked(!checked);
  };

  return (
    <ToggleButton
      className={`m-1 ${
        categoryType === "Colour"
          ? categoryType.toLowerCase() + "s"
          : categoryType.toLowerCase()
      }`}
      variant="outline-secondary"
      type="checkbox"
      checked={checked}
      onClick={() => toggleButton(categoryType, item)}
    >
      {item}
    </ToggleButton>
  );
};

export default Toggle;
