import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddressForm from './AddressForm/AddressForm';
import Address from './Address/Address';
import './AddressStepper.css'
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ['Add Address', 'Choose Address'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm/>;
    case 1:
      return <Address/>;
    default:
      return 'Unknown step';
  }
}

export default function AddressStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(1);
  const steps = getSteps();

  const handleNext = () => {
      if(activeStep === steps.length - 1 ){
      }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className="login-stepper-container">
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                {activeStep === steps.length - 1 &&
                  <div><Button
                    disabled={activeStep === 0}
                    variant="contained"
                    color="secondary"
                    onClick={handleBack}
                    className="Login-Stepper-Button"
                  >
                  ADD NEW ADDRESS
                  </Button>
                 </div>}
                 {activeStep === 0 &&  <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                        className="Login-Stepper-Button"
                      >CHOOSE ADDRESS
                  </Button>}
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </div>
    </div>
  );
}
