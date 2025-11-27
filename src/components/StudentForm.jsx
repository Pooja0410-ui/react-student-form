import { useState } from "react";
import "./StudentForm.css";

const StudentForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    course: "",
  });

  const [submitted, setSubmitted] = useState(null);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(formData);
  };

  return (
    <div className="container">
      {/* LEFT FORM */}
      <div className="form-card">
        <h2 className="title">Student Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              name="fullName"
              placeholder="Enter full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input
              name="phone"
              type="number"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>City</label>
            <input
              name="city"
              placeholder="Enter city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Course</label>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="BCA">BCA</option>
              <option value="BSc CS">BSc CS</option>
              <option value="BCS">BCS</option>
              <option value="MCA">MCA</option>
            </select>
          </div>

          <button className="submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>

      {/* RIGHT OUTPUT BOX */}
      {submitted && (
        <div className="output-card">
          <h3>Submitted Data</h3>
          <p>
            <strong>Name:</strong> {submitted.fullName}
          </p>
          <p>
            <strong>Email:</strong> {submitted.email}
          </p>
          <p>
            <strong>Phone:</strong> {submitted.phone}
          </p>
          <p>
            <strong>City:</strong> {submitted.city}
          </p>
          <p>
            <strong>Course:</strong> {submitted.course}
          </p>
        </div>
      )}
    </div>
  );
};

export default StudentForm;
