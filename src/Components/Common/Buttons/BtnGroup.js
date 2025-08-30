import MediaBtn from "./MediaBtn";
import MailBtn from "./MailBtn";
import Button from "./Button";

const BtnGroup = ({ buttons }) => {
  const BtnTypes = {
    regular: Button,
    media: MediaBtn,
    email: MailBtn,
  };

  return (
    <div className="ps_btn_group">
      {buttons?.map((btn, idx) => {
        const BtnType = BtnTypes[btn?.type] || Button;
        return <BtnType key={idx} {...{ btn }} />;
      })}
    </div>
  );
};

export default BtnGroup;
