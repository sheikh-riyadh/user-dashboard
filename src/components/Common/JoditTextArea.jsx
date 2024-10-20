import PropTypes from "prop-types";
import { useRef, useMemo } from "react";
import JoditEditor from "jodit-react";

const JoditTextArea = ({ content, setContent }) => {
  const editor = useRef(null);

  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: "Start typings...",
    }),
    []
  );

  return (
    <JoditEditor
      ref={editor}
      value={content}
      config={config}
      tabIndex={1}
      onBlur={(newContent) => setContent(newContent)}
      onChange={() => {}}
    />
  );
};

JoditTextArea.propTypes = {
  content: PropTypes.string,
  setContent: PropTypes.func,
};
export default JoditTextArea;
