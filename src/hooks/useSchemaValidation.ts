import { useState } from "react";
import Ajv from "ajv";

const useSchemaValidation = () => {
  const [errors, setErrors] = useState<string | null>(null);

  const validateJSON = (json: string): boolean => {
    try {
      const parsed = JSON.parse(json);
      const ajv = new Ajv();
      const isValid = ajv.validateSchema(parsed);
      setErrors(isValid ? null : ajv.errorsText());
      return isValid;
    } catch (error) {
      setErrors("Invalid JSON format.");
      return false;
    }
  };

  return { validateJSON, errors };
};

export default useSchemaValidation;
