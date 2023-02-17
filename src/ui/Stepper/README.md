# Spec for Stepper Component

## Description

A component for showing a Stepper

## Checklist

This component should...

- (Rendering) Should render a Stepper in the dom

## Usage

To install it...

> npm install @launchos/components

Add it to your project...

```
import * as React from 'react'
import Stepper from '@launchos/components/ui/Stepper`

export default () => (
  <Stepper activeStep={1}>
    <Step>
      <StepLabel>Choose Campaign</StepLabel>
    </Step>
    <Step>
      <StepLabel>Choose Page</StepLabel>
    </Step>
    <Step>
      <StepLabel>Success</StepLabel>
    </Step>
  </Stepper>
)
```

## Best Practices

To do: Add any Best Practices here

## Lifecycle Hooks

To do: Add any Lifecycle Hooks here

## Related Components

To do: Add any Related Components here
