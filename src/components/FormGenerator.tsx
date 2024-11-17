import React, { useEffect, useState } from "react";
import { FormSchema } from "../schema";
import FieldRenderer from "./FieldRenderer";

interface FormGeneratorProps {
  schema: string;
}

const FormGenerator: React.FC<FormGeneratorProps> = ({ schema }) => {
  const [formSchema, setFormSchema] = useState<FormSchema | null>(null);

  useEffect(() => {
    try {
      const parsed = JSON.parse(schema) as FormSchema;
      setFormSchema(parsed);
    } catch {
      setFormSchema(null);
    }
  }, [schema]);

  if (!formSchema) {
    return <p className="text-gray-500">Invalid or empty JSON schema.</p>;
  }

  const handleSubmit = (data: Record<string, any>) => {
    console.log("Form Submitted:", data);
    alert("Form submitted successfully!");
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">{formSchema.formTitle}</h2>
      <p className="text-sm mb-4">{formSchema.formDescription}</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(Object.fromEntries(new FormData(e.currentTarget)));
        }}
      >
        {formSchema.fields.map((field) => (
          <FieldRenderer key={field.id} field={field} />
        ))}
        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormGenerator;
