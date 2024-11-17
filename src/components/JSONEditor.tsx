import React from "react";

interface JSONEditorProps {
  value: string;
  onChange: (value: string) => void;
}

const JSONEditor: React.FC<JSONEditorProps> = ({ value, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">JSON Editor</h2>
      <textarea
        value={value}
        onChange={handleChange}
        className="w-full h-96 border rounded p-2 font-mono"
        placeholder="Paste your JSON schema here..."
      />
    </div>
  );
};

export default JSONEditor;
