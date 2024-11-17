Here’s a detailed `README.md` file for dynamic form generator project. This includes a description of the project, the logic, setup instructions, and usage details.

---

## **Dynamic Form Generator**

### **Description**
Dynamic Form Generator is a web application that generates a functional, styled form based on a JSON schema. The interface consists of two panels:
1. **JSON Editor**: Allows real-time editing of the JSON schema with syntax highlighting and validation.
2. **Form Preview**: Displays the generated form based on the provided JSON schema and updates in real-time.

The application is fully responsive and supports various field types, validations, and error states. It's built using React, TypeScript, Tailwind CSS, and React Hook Form for seamless form handling.

---

### **Features**
- Real-time JSON schema validation and form generation.
- Responsive split-screen layout for JSON editor and form preview.
- Support for multiple field types:
  - Text input
  - Email
  - Select dropdowns
  - Radio buttons
  - Textarea
- Form validation and error handling based on schema rules.
- Consistent styling using Tailwind CSS.
- Mobile-responsive design.
- Console logging of form submissions with success messages.

---

### **Logic**
1. **JSON Schema Input:**
   - The JSON schema defines the form structure, including field types, labels, placeholders, validation rules, and options for dropdowns and radio buttons.

2. **Real-Time Parsing and Validation:**
   - The JSON editor validates the schema in real-time using a JSON parser.
   - If the JSON is invalid, an error message is displayed without breaking the application.

3. **Dynamic Form Rendering:**
   - The parsed JSON schema is used to dynamically generate form fields with appropriate types, placeholders, and validation rules.
   - React Hook Form manages field validation, error states, and form submission.

4. **Form Submission:**
   - When the form is submitted, the data is validated and logged to the console.
   - If the submission is successful, a success message is displayed.

---

### **Technologies Used**
- **React 18+**: Component-based UI development.
- **TypeScript**: Strongly-typed development for reliability.
- **React Hook Form**: Simplified form handling and validation.
- **Tailwind CSS**: Utility-first styling for responsive and modern design.
- **Vite**: Lightning-fast development environment.

---

### **Setup Instructions**

#### **1. Install Dependencies**
```bash
npm install
```

#### **2. Run the Development Server**
```bash
npm run dev
```

#### **3. Open the Application**
Visit `http://localhost:5173` in your browser.

---

### **Usage**
1. **Edit the JSON Schema:**
   - On the left panel, modify the JSON schema. For example:
     ```json
     {
       "formTitle": "User Registration",
       "fields": [
         {
           "id": "username",
           "type": "text",
           "label": "Username",
           "required": true,
           "placeholder": "Enter your username"
         },
         {
           "id": "email",
           "type": "email",
           "label": "Email",
           "required": true,
           "placeholder": "you@example.com"
         }
       ]
     }
     ```

2. **Preview the Form:**
   - The right panel displays the form generated from the JSON schema in real-time.

3. **Submit the Form:**
   - Fill out the form and submit. Data is logged to the console, and a success message is displayed.

---

### **Example JSON Schema**
```json
{
  "formTitle": "Project Requirements Survey",
  "formDescription": "Please fill out this survey about your project needs",
  "fields": [
    {
      "id": "name",
      "type": "text",
      "label": "Full Name",
      "required": true,
      "placeholder": "Enter your full name"
    },
    {
      "id": "email",
      "type": "email",
      "label": "Email Address",
      "required": true,
      "placeholder": "you@example.com",
      "validation": {
        "pattern": "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
        "message": "Please enter a valid email address"
      }
    }
  ]
}
```

---


### **Deployment**
Try our App here: https://form-generator-app.vercel.app/

### **Future Enhancements**
- Add dark mode support.
- Export form submissions as JSON.
- Add schema validation previews.
- Enhance form styling with custom themes.

---
