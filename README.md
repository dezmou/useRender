# React useRender

## Did you ever say : ok react, I'm fed up with all these asynchronous setState, redux, context and company to update the reactive variables in the html, just give me a render() function and I'll be fine

```tsx
import {useRender } from './render';

// Create your global state a simple as a damn object
const state = {
  buttonClicked: 0,
}

// Use the state in some component
function LeftMenu() {
  
  const render = useRender()
  
  return <>
    {state.buttonClicked}<br />
    <button onClick={() => {
      
      // change some of your global state values
      state.buttonClicked += 1;
      
      // Manual render !
      render()

    }}>click me</button>
  </>
}

```