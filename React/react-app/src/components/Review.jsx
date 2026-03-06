const Review = ({ data, onBack, onSubmit, onEdit }) => {
  const fields = [
    { label: "Name", value: data.name, step: 1 },
    { label: "Email", value: data.email, step: 1 },
    { label: "Username", value: data.username, step: 2 },
    { label: "Password", value: "********", step: 2 },
  ];

  return (
    <div>
      <header className="form-header">
        <h2>Review & Submit</h2>
      </header>
      
      {fields.map((field, index) => (
        <div key={index} className="review-row">
          <div className="label-class">
            {field.label}: {field.value}
          </div>
          <button type="button" className="btn-edit" onClick={() => onEdit(field.step)}>Edit</button>
        </div>
      ))}

      <div className="button-group">
        <button type="button" onClick={onBack} className="button-class btn-secondary">Back</button>
        <button type="button" onClick={onSubmit} className="button-class btn-primary">Submit</button>
      </div>
    </div>
  );
};

export default Review;