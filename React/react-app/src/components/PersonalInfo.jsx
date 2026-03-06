import { useState } from "react";

const PersonalInfo = ({ data, onUpdate, onNext }) => {
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data.name.trim() || !data.email.trim()) {
      setError("Please fill in all fields.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(data.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <header className="form-header">
        <h2>Personal Information</h2>
      </header>
      <div className="form-group">
        <label className="label-class">Full Name</label>
        <input 
          type="text" className="input-group"
          value={data.name} 
          onChange={(e) => onUpdate({ name: e.target.value })} 
          placeholder="John Doe"
        />
      </div>
      <div className="form-group">
        <label className="label-class">Email Address</label>
        <input 
          type="email" className="input-group"
          value={data.email} 
          onChange={(e) => onUpdate({ email: e.target.value })} 
          placeholder="john@example.com"
        />
      </div>
      {error && <p className="error-text">{error}</p>}
      <div className="button-group">
        <button type="submit" className="button-class btn-primary">Next Step</button>
      </div>
    </form>
  );
};

export default PersonalInfo;