# React useRender

## Did you ever tell yourself : ok react, I'm fed up with all these asynchronous setState, redux, context, prop drilling and company to update the reactive variables in the html.


## You know what ? just give me a render() function to update the HTML of a component and I'll be fine

```tsx
import { useRender } from './useRender';

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


## Want to render some component from anywhere in your app ? 

```tsx 
import { render, useRender } from './useRender';

const state = {
  someValue: 0,
}

// Use the state in some component
function LeftMenu() {
  
  // register LeftMenu for render call outside the component
  useRender("LeftMenu")
  
  return <>
    {state.someValue}
  </>
}

// Then somewere in your code, change the global state
state.someValue = 1
// Render the component you want
render("LeftMenu")


```