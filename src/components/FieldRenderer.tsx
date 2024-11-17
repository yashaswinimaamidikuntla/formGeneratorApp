import React from "react";
import { Field } from "../schema";

interface FieldRendererProps {
  field: Field;
}

const FieldRenderer: React.FC<FieldRendererProps> = ({ field }) => {
  switch (field.type) {
    case "text":
    case "email":
      return (
        <div className="mb-4">
          <label className="block mb-1">{field.label}</label>
          <input
            type={field.type}
            name={field.id}
            placeholder={field.placeholder}
            required={field.required}
            className="w-full border rounded p-2"
          />
        </div>
      );

    case "select":
      return (
        <div className="mb-4">
          <label className="block mb-1">{field.label}</label>
          <select
            name={field.id}
            required={field.required}
            className="w-full border rounded p-2"
          >
            {field.options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      );

    case "radio":
      return (
        <div className="mb-4">
          <label className="block mb-1">{field.label}</label>
          {field.options?.map((option) => (
            <label key={option.value} className="block">
              <input
                type="radio"
                name={field.id}
                value={option.value}
                required={field.required}
              />
              {option.label}
            </label>
          ))}
        </div>
      );

    case "textarea":
      return (
        <div className="mb-4">
          <label className="block mb-1">{field.label}</label>
          <textarea
            name={field.id}
            placeholder={field.placeholder}
            className="w-full border rounded p-2"
          />
        </div>
      );

    default:
      return null;
  }
};

export default FieldRenderer;
