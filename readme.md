<div align="center">

# React Resizable Collapsible Grid

<br/>

 [👉 Try It Out  👈](https://philstenning.github.io/react-resizable-collapsible-grid/)

 </div>

React Resizable Collapsible Grid is a component for building apps where the user might need to resize and or collapse parts of the app. If you use apps like VS code you are already familiar with how this works.

The components work on desktop and mobile with touch events.

There are two components the ResizableHorizontalGrid and ResizableVerticalGrid, these can be nested within each other for any configuration you might need.

You can drag the Horizontal and Vertical handles to rearrange the layout to fit your content as needed, or pass in a boolean to hide various sections.

Included is a hook to save the current positions of the handles to localStorage, you can then restore state to the page when it is reloaded.

<hr/>

- [React Resizable Collapsible Grid](#react-resizable-collapsible-grid)
  - [How to Use](#how-to-use)
  - [ResizableHorizontalGrid](#resizablehorizontalgrid)
    - [Options](#options)
  - [ResizableVerticalGrid](#resizableverticalgrid)
    - [options:](#options-1)
  - [Styling with css](#styling-with-css)
  - [Hook](#hook)
  - [Nested example:](#nested-example)

<hr/>

## How to Use

```js
pnpm i react-resizable-collapsible-grid

npm install react-resizable-collapsible-grid
```

## ResizableHorizontalGrid

Takes __two__ or __three__ child elements

```jsx
import {
    ResizableHorizontalGrid,
} from 'react-resizable-collapsible-grid'

// add the css variables
import 'react-resizable-collapsible-grid/dist/resizableGrid.css'

function App(){
    <ResizableHorizontalGrid>
           <div>Content left</div>
           <div>Content Center</div>
           <div>Content Right</div>    {/* optional */}
       </ResizableHorizontalGrid>
}
```
### Options

```ts
type ResizableHorizontalGridProps = {
  children: React.ReactNode[]
  gridId?: number | string // for saving/restoring state
  minWidth?: number  // minimum width of left or right columns
  collapseLeft?: boolean // true collapses left
  collapseRight?: boolean // true collapses right
  initialWidths?: HorizontalGridWidths // {left:'20vw':right:300}
  getCurrentState?: ({ gridId, left, right }: HorizontalGridState) => void // function for returning current state of the component
}
```
```tsx
// your imports as above
import { isHorizontalGrid, GridState} from 'react-resizable-collapsible-grid'

function App(){
    // your function to save state of component.
    const getGridState = (gridState: GridState) => {
        if (isHorizontalGrid(gridState)) {
        // Resizable Horizontal Grid
        } else {
        // Resizable Vertical Grid
        }
    }
    <ResizableHorizontalGrid
        initialWidths={{left:'20vw',right:200}}
        getCurrentState={getGridState}
        gridId={5}
        collapseLeft={false}
        collapseRight={false}
    >
           <div>Content left</div>
           <div>Content Center</div>
           <div>Content Right</div>
       </ResizableHorizontalGrid>
}
```

## ResizableVerticalGrid

Takes __two__ child elements


```tsx
import {
    ResizableVerticalGrid,
} from 'react-resizable-collapsible-grid'

// add the css variables
import 'react-resizable-collapsible-grid/dist/resizableGrid.css'

function App(){
    <ResizableVerticalGrid>
        <div>Content Top</div>
        <div>Content Bottom</div>
    </ResizableVerticalGrid>
}
```
### options:

```ts
type ResizableVerticalGridProps = {
  children: React.ReactNode[]
  gridId?: number | string // for saving/restoring state
  minHeight?: number // either sections min height
  collapseTop?: boolean // true hides top
  collapseBottom?: boolean // true hides bottom
  initialHeight?: string | number  // any css size value
  getCurrentState?: ({ gridId, height }: VerticalGridState) => void // function for returning components current state
}

```
See example above for  ResizableHorizontalGrid with options for using getCurrentState.
```tsx
   <ResizableVerticalGrid
          gridId={6}
          initialHeight={'50%'}
          getCurrentState={getGridState} 
          collapseTop={false}
          collapseBottom={false}
        >
```


## Styling with css

The default exports from the library use css modules (component.module.css) so should work out of the box with vite.js and next.js. 


TODO: add support for non css modules usage.

All the components are using css variables so it is quite easy to override any setting.

__Important! You will need to add the css variables to your app through an import or add them to your own css variables. If you don't add one of these you get no styling!!!__
```ts
import 'react-resizable-collapsible-grid/dist/resizableGrid.css'
function App(){
    // your component 
}
```
or add to your css file

```css
body {
  --resizable-grid-final-scale: 1.8;
  --resizable-grid-track-color: var(--gray-8);
  --resizable-grid-track-color-hover: var(--gray-7);
  --resizable-grid-track-opacity: 0.2;
  --resizable-grid-track-opacity-hover: 0.5;
}

/* 
   only needed on children elements
   to contain content and alloy scrolling.
 */
.resizable-grid__content {
  overflow-y: auto;
  padding: 1rem;
}
```
## Hook

```ts
  const { getVerticalGridHeight, getHorizontalGridWidths, setResizeState } =
    useResizeGridLocalStorage()
```

The included hook just saves and retrieves component state to localStorage to see the code have a look in the [example using hooks](https://github.com/philstenning/react-resizable-collapsible-grid/blob/main/docs/src/App.tsx)

## Nested example:

```tsx
import {
    ResizableHorizontalGrid,
    ResizableVerticalGrid,
} from 'react-resizable-collapsible-grid'

function App(){
    <ResizableHorizontalGrid>
        <div>Content left</div>
        <ResizableVerticalGrid>
            <div>Content Top</div>
            <div>Content Bottom</div>
        </ResizableVerticalGrid>
        <div>Content Right</div>  
    </ResizableHorizontalGrid>
}
```
