---
layout: single
title:  "Coding Period - Week 6"
---

After demonstration and discussing about the parameter order issue I faced, I planned to do the following this week

- [x] To give partially deterministic IDs to constant blocks by prepending the ID with the count of blocks. So a block created first gets lower ID and is sorted first.
- [x] To improve the UI

## Parameter Order
I'm maintaining the order in which a block gets added by keeping a count. So when a basic block gets added, I increment the count and if its a constant block (used for parameters) this is used as a prefix for ID. Eg. If count = 1, the id of constant block becomes "0001-xxxxxxxxxxx..." where xxxxxx....is a randomly generated string.


## Improving UI

### Added labels to ports
Until now all the ports in a block were unnamed. In order to be able to better distinguish what each port is for, I added labels. In some cases where it is obvious what a port refers to, there will be no labels. For eg, the Constant block, Basic Input, Output blocks.

![labelled ports]({{ site.baseurl }}/assets/images/week-5/labelled-ports.png){: .align-center}

### Added validation

While creating basic blocks, we have dialogs that ask for relevant information. It was possible to click on 'Ok' without providing any data which would have either resulted in a silent error or a nameless block. So I added UI validation to ensure minimum data is provided.

![code block validation]({{ site.baseurl }}/assets/images/week-5/code-block-validation.png){: .align-center}

### Straight wires

I tried to implement, straight wires which could bend only at 90°. But there were some issues where the bent shape would be akward depending the block placement. Like so, where the starting of link is not right

![right angle link]({{ site.baseurl }}/assets/images/week-5/right-angle-link.png){: .align-center}

Since it is nice-to-have feature and the rendering in a nicer way will probably need a lot more effort, I have paused development on this feature.


