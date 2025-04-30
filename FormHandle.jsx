import { useState } from "react";

export default function Form() {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [feedback, setFeedback] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Validation logic centralized
  const errors = {
    name: name.trim() === "",
    code: code.length < 6,
    feedback: feedback.length <= 9,
  };

  const isFormValid = !errors.name && !errors.code && !errors.feedback;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    console.log("Form submitted", { name, code, feedback });
    setFormSubmitted(true);


  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        {errors.name && <span style={{ color: "red" }}>Name is required.<br /></span>}

        <input
          type="password"
          placeholder="Password"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <br />
        {errors.code && <span style={{ color: "red" }}>Password must be at least 6 characters.<br /></span>}

        <input
          type="text"
          placeholder="Please enter Feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
        <br />
        {errors.feedback && <span style={{ color: "red" }}>Feedback must be more than 9 characters.<br /></span>}

        <button type="submit" disabled={!isFormValid}>
          Submit
        </button>
      </form>

      <br />
      {formSubmitted && <p style={{ color: "green" }}>Form Submitted!</p>}
    </div>
  );
}