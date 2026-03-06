import { useState, useEffect } from "react";
import PersonalInfo from "./components/PersonalInfo";
import AccountDetails from "./components/AccountDetails";
import Review from "./components/Review";
import "./App.css";

const App = () => {
  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem("reg_data");
    return saved ? JSON.parse(saved) : { name: "", email: "", username: "", password: "" };
  });

  const [step, setStep] = useState(() => {
    const savedStep = localStorage.getItem("reg_step");
    return savedStep ? parseInt(savedStep) : 1;
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    localStorage.setItem("reg_data", JSON.stringify(formData));
    localStorage.setItem("reg_step", step);
  }, [formData, step]); 

  const handleUpdate = (newData) => setFormData(prev => ({ ...prev, ...newData }));
  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);
  const jumpToStep = (s) => setStep(s);

  const handleSubmit = () => {
    setIsSubmitting(true); 
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true); 
      localStorage.clear();
    }, 2000);
  };

  if (isSuccess) 
    return <div className="form-container"><h2>Registration Successful!!!</h2></div>;
  if (isSubmitting) 
    return <div className="form-container"><h2>Submitting...</h2></div>;

  return (
    <div className="form-container">
      
      {step === 1 && (
        <PersonalInfo data={formData} onUpdate={handleUpdate} onNext={nextStep} />
      )}
      {step === 2 && (
        <AccountDetails data={formData} onUpdate={handleUpdate} onNext={nextStep} onBack={prevStep} />
      )}
      {step === 3 && (
        <Review data={formData} onBack={prevStep} onSubmit={handleSubmit} onEdit={jumpToStep} />
      )}
    </div>
  );
};
export default App;