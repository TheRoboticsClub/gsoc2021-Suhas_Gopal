---
layout: single
title:  "Summary of work"
---

{% include video id="k0KEFBCWEQc" provider="youtube" %}

It has been exciting past couple of months. It was great to work on a really cool project and apply what I know in web development to a domain which I'm very much interested in, Robotics, and learn more about both along the way. I would like to thank Taha and Jose Maria for helping and guiding me all the way, making this possible. This blog post will be a quick summary of what I worked on during the GSOC period.

Compared to the proposal, there were a few differences which we discussed in the first week of community bonding. One was to rewrite the frontend from scratch using React, rather than trying to reuse from AngularJS (with JointJS). And another was to focus more on frontend with full functionality and migrating all the different blocks already developed for older version of VisualCircuit. 

During the community bonding period, I got familiar with the VisualCircuit tool and setup the [working repository](https://github.com/TheRoboticsClub/gsoc2021-Suhas_Gopal) for GSOC code and blog posts. After a brief consideration of Pros and Cons of [React Diagrams](https://github.com/projectstorm/react-diagrams) and [Beautiful React Diagrams](https://github.com/beautifulinteractions/beautiful-react-diagrams), I decided to proceed with React diagrams. To have an early start, I started coding the app implementing the basic VisualCircuit blocks. 

Once the coding period started, I continued working on implementing composite blocks and other features such as being able to save and load the application circuit, add project information and icon to create a custom block. I worked on migrating all the major blocks of older version of VisualCircuit to the new format. Around week 7, the project was in a stable enough state, that I was allowed to push the new changes to the official repo as new version (under new branch), [VisualCircuit3](https://github.com/JdeRobot/VisualCircuit/tree/VisualCircuit3) 

Once all the blocks were migrated to the new version I developed a teaser video to showcase the tool and another 2 videos as tutorials on how to use the new tool. Next, I worked on code documentation and installation instructions for the project. 

#### Blocks
![All blocks]({{ site.baseurl }}/assets/images/recap/blocks.png){: .align-center}

During the last week of coding period, I worked on a django based backend, that can accept a VisualCircuit file and synthesize a zipfile of python files that implements the application. This zipfile will be available for download on frontend and user can download it to run the application using single line `python main.py`

### Current state of the project

The new version of VisualCircuit on web has almost all the features of old version of tool. After constructing an application using the VisualCircuit, now the user can build and download the project as python package, that can be run locally.

There are still a few issues though, such as synchronisation between different python processes (since we use separate process for each block and pass messages among them, sometimes messages do not get shared at right time).

### Thoughts on future work

After GSOC, main work would be in making the backend stable and developing different example applications, such as Drone application (for which I have started the setup) and building more useful granular components that can be used in many applications.



## Summary of Github issues and pull-requests on official repository

### Issues
1. ROS Sensors and Control blocks for VisualCircuit3 [#86](https://github.com/JdeRobot/VisualCircuit/issues/86)
2. Contour Detector block - Index out of range error [#90](https://github.com/JdeRobot/VisualCircuit/issues/90)
3. Face Detector block - imshow fails when image is None [#91](https://github.com/JdeRobot/VisualCircuit/issues/91)
4. Odometer block - TypeError: buffer is too small for requested array [#92](https://github.com/JdeRobot/VisualCircuit/issues/92)
5. Documentation for VisualCircuit3 [#96](https://github.com/JdeRobot/VisualCircuit/issues/96)
6. Submit VC file to Django backend [#103](https://github.com/JdeRobot/VisualCircuit/issues/103)
7. Refactor Python synthesis to integrate with django [#105](https://github.com/JdeRobot/VisualCircuit/issues/105)


### Pull requests
1. VisualCircuit3 [#84](https://github.com/JdeRobot/VisualCircuit/pull/84) ![PR merged]({{ site.baseurl }}/assets/images/recap/git-merge.svg)
2. add ROS sensors and Control blocks [#89](https://github.com/JdeRobot/VisualCircuit/pull/89) ![PR merged]({{ site.baseurl }}/assets/images/recap/git-merge.svg) 
3. ContourDetector block error (fixes #90) [#93](https://github.com/JdeRobot/VisualCircuit/pull/93) ![PR merged]({{ site.baseurl }}/assets/images/recap/git-merge.svg) 
4. fix: Face Detector block (fixes #91) [#94](https://github.com/JdeRobot/VisualCircuit/pull/94) ![PR merged]({{ site.baseurl }}/assets/images/recap/git-merge.svg) 
5. fix: Odometer block (fixes #92) [#95](https://github.com/JdeRobot/VisualCircuit/pull/95) ![PR merged]({{ site.baseurl }}/assets/images/recap/git-merge.svg) 
6. Code docstrings [#97](https://github.com/JdeRobot/VisualCircuit/pull/97) ![PR merged]({{ site.baseurl }}/assets/images/recap/git-merge.svg) 
7. YouTube links to tutorials [#98](https://github.com/JdeRobot/VisualCircuit/pull/98) ![PR merged]({{ site.baseurl }}/assets/images/recap/git-merge.svg) 
9. Tutorial page for VisualCircuit3 [#99](https://github.com/JdeRobot/VisualCircuit/pull/99) ![PR merged]({{ site.baseurl }}/assets/images/recap/git-merge.svg) 
10. Submit VC model json from frontend [#104](https://github.com/JdeRobot/VisualCircuit/pull/104) ![PR merged]({{ site.baseurl }}/assets/images/recap/git-merge.svg) 
11. Generate Python application from VC file [#106](https://github.com/JdeRobot/VisualCircuit/pull/106) ![PR merged]({{ site.baseurl }}/assets/images/recap/git-merge.svg) 


### Other videos
1. VisualCircuit3 - [Teaser](https://youtu.be/cWnsCskuc7M)
2. Designing an application on VisualCircuit3 - [Tutorial](https://youtu.be/uK725Y-Y9_c)
3. Building a custom block on VisualCircuit3 - [Tutorial](https://youtu.be/haW_oEOjKh8)