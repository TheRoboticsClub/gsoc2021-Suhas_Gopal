---
layout: single
title:  "Coding Period - Week 5"
---

This week I continued working on the composite block implementation. I took the task that was pending last week

- [x] Saving and loading of composite blocks
- [x] Demonstrate the composite block as a circuit

## Saving and loading of composite blocks
A composite block has 3 pieces of information:
1. Internal structure consisiting of other blocks
2. Block info (i.e Project info) - Meta information about name, author, description and icon
3. The external connections of composite block

The external connections are saved with the existing serialisation function because its similar to any other block. For the internal structure as well as project info, I added an extra logic to store these in a separate part of .vc file under 'dependencies'. To maintain uniqueness of the block, each composite block is given a unique type ID, which is also used as key for the dependencies. Under this, the structure looks as follows:
```json
"dependencies" : {
    "some-unique-id": {
        "package": {
            // Project Info
        },
        "design": {
            // Internal representation
        }
    }
```

## Demonstration

To implement a circuit, I migrated a few blocks from old vc format to the new format:
1. Blur
2. Edge Detector
3. Object Detector
4. Video Streamer
5. Screen

Based on these blocks, I re-implemented the Lane detection example similar to original example from VisualCircuit.

### Issues
While implementing it I faced an issue where the order of parameters did not remain same to original VC implementation. This was because the parameters are sorted based on the ID. But since the IDs are generated randomly, we cannot be sure of the order. 
In the previous version, the IDs of parameters (constant blocks) were manually set to increasing numbers. 
I have asked to discuss regarding this in the next meeting.

## Progress Video

{% include video id="2LOoEUpsJZ0" provider="youtube" %}