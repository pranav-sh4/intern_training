import { useState } from "react";

const AccountDetails = ({ data, onUpdate, onNext, onBack }) => {
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data.username.trim() || !data.password.trim()) {
      setError("Username and password are required.");
      return;
    }
    if (data.password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }
    setError("");
    onNext();
  };

  return (
    <form onSubmit={handleSubmit}>
      <header className="form-header">
        <h2>Account Details</h2>
      </header>
      <div className="form-group">
        <label className="label-class">Username</label>
        <input 
          type="text" className="input-group"
          value={data.username} 
          placeholder="Username"
          onChange={(e) => onUpdate({ username: e.target.value })} 
        />
      </div>
      <div className="form-group">
        <label className="label-class">Password</label>
        <input 
          type="password" className="input-group"
          value={data.password} 
          placeholder="Minimum 8 characters"
          onChange={(e) => onUpdate({ password: e.target.value })} 
        />
      </div>
      {error && <p className="error-text">{error}</p>}
      <div className="button-group">
        <button type="button" onClick={onBack} className="button-class btn-secondary">Back</button>
        <button type="submit" className="button-class btn-primary">Next Step</button>
      </div>
    </form>
  );
};

export default AccountDetails;