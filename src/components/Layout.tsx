import React, { useState } from "react";
import JSONEditor from "./JSONEditor";
import FormGenerator from "./FormGenerator";

const Layout: React.FC = () => {
  const [jsonSchema, setJsonSchema] = useState<string>("");

  return (
    <div className="flex flex-col md:flex-row h-full">
      <div className="flex-1 p-4 border-r border-gray-300">
        <JSONEditor value={jsonSchema} onChange={setJsonSchema} />
      </div>
      <div className="flex-1 p-4">
        <FormGenerator schema={jsonSchema} />
      </div>
    </div>
  );
};

export default Layout;
