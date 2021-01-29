import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LoginStepper from '../LoginStepper/LoginStepper';
import AddressStepper from '../Address/AddressStepper';
import { useSelector } from 'react-redux';
import Review from '../Review/Review';
import Paper from '@material-ui/core/Paper';
import { useHistory } from 'react-router-dom'
import { useDispatch} from 'react-redux';
import {resetCartRequest,resetAddressRequest} from '../../../Redux'
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  completed: {
    display: 'inline-block',
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Login or Signup', 'Add or Choose Address', 'Payment'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <LoginStepper/>;
    case 1:
      return <AddressStepper/>;
    case 2:
      return <div><Review/></div>;
    default:
      return 'Unknown step';
  }
}

export default function MainStepper() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const steps = getSteps();
  const auth = useSelector((state) => state.auth);
  const address= useSelector(state=>state.addAddress);
  const order = useSelector(state=>state.placeorder);
  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };
  const history = useHistory();
  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    history.replace("/");
    dispatch(resetCartRequest());
    dispatch(resetAddressRequest());
    setActiveStep(0);
    setCompleted({});
  };
  if (auth.authenticated &&activeStep===0) {
    handleComplete();
  }
  if(address.selectedAddress&&activeStep===1){
    console.log(address.selectedAddress)
    handleComplete();
  }
  if(order.isOrderSuccess&&activeStep===2){
    handleComplete();
  }

  return (
    <div className={classes.root}>
    <main className={classes.layout}>
    <Paper className={classes.paper} elevation={3}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepButton onClick={handleStep(index)} completed={completed[index]}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <div>
            <Typography className={classes.instructions}>
              Payment Succesfull.
            </Typography>
            <Button color="primary" variant="contained" onClick={handleReset}>GO TO HOME PAGE</Button>
          </div>
        ) : (
          <div>
            <div className={classes.instructions}><div>{getStepContent(activeStep)}</div></div>
            <div>
              {activeStep !== steps.length &&
                (completed[activeStep] && (
                  <Typography variant="caption" className={classes.completed}>
                    Step {activeStep + 1} already completed
                  </Typography>
                ))}
            </div>
          </div>
        )}
      </div>
      </Paper>
      </main>
    </div>
  );
}
