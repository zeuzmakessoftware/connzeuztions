import ActionButton from "./ActionButton";
import SubmitButton from "./SubmitButton";

interface ActionButtonsProps {
  onClick: (type: string) => void;
  active: boolean;
}

const ActionButtons: React.FC<ActionButtonsProps> = ( {onClick, active} ) => {
  return (
    <div className="flex items-center justify-center">
      <ActionButton value={"Shuffle"} onClick={onClick} />
      <ActionButton value={"Deselect All"} onClick={onClick} />
      <SubmitButton value={"Submit"} onClick={onClick} active={active} />
    </div>
  );
}

export default ActionButtons;