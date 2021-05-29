---
layout: single
title:  "Community Bonding - Week 1"
---

I'm excited to be working with JdeRobot community on the VisualCircuit project!. Google Summer of Code starts off with a community bonding period where we get familiar with the community and also explore the project to get a better understanding.


We had a discussion at the beginning of the week about how to go about the project and the first steps to do.

### Tasks
- [x] Setup a blogging website to write about the progress of GSOC project.
- [x] Get more familiar with VisualCircuit by implementing the Lane Detection example.

This [repository](https://github.com/TheRoboticsClub/gsoc2021-Suhas_Gopal) will be used for all the code developed as well as the blog website. The blog website is written using jekyll based on the template 'minimal-mistakes'

To explore what could be used for the drawing nodes on front-end. I considered 2 libraries [react-diagrams](https://github.com/projectstorm/react-diagrams) and [beautiful-react-diagrams](https://github.com/beautifulinteractions/beautiful-react-diagrams). After implementing a basic diagram editor in both, what I have noticed is:

React Diagrams:


|-------------------------------------------------------------------------------------------------------+-----------------------|
| Pros                                                                                                  | Cons                  |
|-------------------------------------------------------------------------------------------------------|-----------------------|
| 1. It has a good separation of concern and well separated API for handling model data and the drawing.|1. It is more verbose. Needs more code to handle a block (because data model, factory as well widget needs to be written separately|
|-------------------------------------------------------------------------------------------------------------------------------|
| 2. It has extra features like Zoom, Locks (to prevent changes) and Serialisation/Deserialisation | 2. Does not have complete documentation |
|-------------------------------------------------------------------------------------------------------------------------------|
| 3. It has multiple example projects                                                                                           |
|-------------------------------------------------------------------------------------------------------------------------------|



Beautiful React Diagrams:

|-------------------------------------------------------------------------------------------+------------------------------------------------------------------|
| Pros                                                                                      | Cons                                                             |
|-------------------------------------------------------------------------------------------|------------------------------------------------------------------|
| 1. Its simple, since it only needs a schema object to render.                             | 1. It has many features missing (out-of-the box)
|-------------------------------------------------------------------------------------------|------------------------------------------------------------------|
| 2. It has a slightly better documentation than React Diagrams                             | 2. The drawing of node seems to be bound to the state change that needs to be propagated from any component that changes underlying data schema. <br/>This makes handling multiple levels of models complicated.                               |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------|


## Conclusions

I think the React Diagrams is a better option since it has more features and separate API for data model and drawing engine.