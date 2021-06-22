---
layout: single
title:  "Coding Period - Week 4"
---

After building a working circuit with simple blocks, this week the focus was to build components composed of the simple blocks. After the weekly meeting, the goals for the week were

- [x] Implement functionality for composite block.
- [x] Functionality to add name, version, author, description and icon to a composite block. - Project Info
- [ ] Saving and loading of composite blocks

## Composite block
A composite block is a block consisting one or more Constant and Code blocks. But the code blocks should be able to take inputs from  and also provide outputs outside the composite block. For this, I also implemented 'Input' and 'Output' blocks. All the input and output blocks of a composite block is exposed to the outside.

Another feature required is to be able to go inside the composite block and edit it. So this needs the data model to be recursive. A composite block also holds the data to represent itself as the whole model. The context switch from parent to child model is implemented using a stack. Every time a composite block is double clicked, it puts the current model and related info required, into the stack and the active data model is switched to the data model within the composite block. When we go back, the parent model is popped from the stack. 

I also implemented a 'lock' when we go inside a composite block so that its not editable right away. Only after unlocking is the model of composite block editable.

### Issues faced
Until now all the state of the application was either managed by the individual components or a simple TS class `Editor` which managed all the global data and used the underlying canvas engine of react-diagrams to modify the state of components. But to implement 'lock' and also to show the 'Back' button state needed to be maintained at global level and also this is not managed by react-diagrams canvas. So I used the Provider pattern in React to implement a global state and to update wherever relevant.


## Project Info
While creating the composite blocks, some meta info can be added such as Name, Version, Author, Description and Icon for the component. I implemented a simple dialog having all these fields using the same structure I had used for Constant and Code block dialogs.

## Conclusion
Since the development of these took longer than expected, I will continue on the remaining task in the next week.

## Progress Video

Please have a look at the video to have clearer understanding of composite block, 'Lock' and 'Back' buttons.

{% include video id="-ZohAwiZJqg" provider="youtube" %}