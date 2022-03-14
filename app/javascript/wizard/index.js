import React, { useState } from 'react';
import PersonalInfo from './steps/PersonalInfo';


const PERSONAL_INFO_STEP = 'PERSONAL_INFO_STEP';


const Wizard = ({
}) => {
  const [step, setStep] = useState(PERSONAL_INFO_STEP);

  const goTo = (step) => () => setStep(step);

  const props = {
    [PERSONAL_INFO_STEP]: {
      onNext: goTo(PERSONAL_INFO_STEP)
    }
  };

  const currentStep = {
    [PERSONAL_INFO_STEP]: () => <PersonalInfo {...props[step]}/>
  };

  return (
    <>
    <h2 className="text-center">Complete your order!</h2>
    <div className="row">
      <div className="col-md-3">
        <ul className="list-group">
          <li className={`list-group-item ${step === PERSONAL_INFO_STEP ? 'active' : ''}`}>Personal Information</li>
        </ul>
      </div>

      <div className="col-md-9">
        {currentStep[step]()}
      </div>
    </div>
    </>
  );
}

export default Wizard
