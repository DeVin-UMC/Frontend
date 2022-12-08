import dynamic from "next/dynamic";

const EditorWrapper = dynamic(() => import("react-quill"), {
  ssr: false,
});

export default EditorWrapper;
