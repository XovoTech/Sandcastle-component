# Spec for Tabs Component

## Description

A component for showing a Tabs

## Checklist

This component should...

- (Rendering) Should render a Tabs in the dom

## Usage

To install it...

> npm install @launchos/components

Add it to your project...

```
import * as React from 'react'
import { Tabs, Tab } from '@launchos/components/ui/Tabs`

export default () => (
  <Tabs transparent>
    <Tab active={tab === "first"} onClick={() => switchTab("first")}>
      First Tab
    </Tab>
    <Tab active={tab === "second"} onClick={() => switchTab("second")}>
      Second Tab
    </Tab>
    <Tab active={tab === "third"} onClick={() => switchTab("third")}>
      Third Tab
    </Tab>
  </Tabs>
)
```

## Best Practices

To do: Add any Best Practices here

## Lifecycle Hooks

To do: Add any Lifecycle Hooks here

## Related Components

To do: Add any Related Components here
