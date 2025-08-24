import { useBlockProps } from "@wordpress/block-editor";
import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import Stack from '../Common/Stack';

const Edit = (props) => {
  const { attributes, setAttributes, clientId } = props;

  return (
    <>
      <Settings {...{ attributes, setAttributes }} />

      <div {...useBlockProps()}>
        <Style attributes={attributes} id={`block-${clientId}`} />

        <Stack attributes={attributes} />
      </div>
    </>
  );
};
export default Edit;
