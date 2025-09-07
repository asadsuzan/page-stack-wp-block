import { useBlockProps, } from "@wordpress/block-editor";
import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import Stack from '../Common/Stack';




const Edit = (props) => {
  const { attributes, setAttributes, clientId } = props;




  return (
    <>
      <Settings {...{ attributes, setAttributes }} />

      <div {...useBlockProps({
        draggable: false
      })}>
        <Style attributes={attributes} id={`block-${clientId}`} />

        <Stack {...{ attributes, setAttributes, clientId }} />

      </div >
    </>
  );
};
export default Edit;
