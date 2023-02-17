# Spec for Toolbar Component

## Description

A component for showing a Toolbar

## Checklist

This component should...

- (Rendering) Should render a Toolbar in the dom

## Usage

To install it...

> npm install @launchos/components

Add it to your project...

```
import * as React from 'react'
import { Toolbar } from '@launchos/components/ui`

export default () => (
  <Toolbar
    theme="dark"
    title="Toolbar Title"
    leftActionsGroup={[<div>One</div>, <div>Two</div>]}
    rightActionsGroup={[<div>Three</div>, <div>Four</div>]}
    ToolbarContent={[<div style={{ padding: 10 }}>Toolbar Content</div>]}
    style={{}}
  />
)
```

## Best Practices

To do: Add any Best Practices here

## Lifecycle Hooks

To do: Add any Lifecycle Hooks here

## Related Components

To do: Add any Related Components here
