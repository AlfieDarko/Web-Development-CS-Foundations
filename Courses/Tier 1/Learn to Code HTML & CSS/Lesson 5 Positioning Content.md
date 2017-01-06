<h4>Positioning Content</h4>

<P>Different types of positioning</P>

<b>Positioning with Floats</b>

<p>float property is versatile.

Allows us to take an element, remove it from normal flow of a pag and position it to left or right of its parent.

All other elements on page will flow around floated element. 
for eg. text will write around it.

accepts few values, left and right
```
img {
    float:left
    }
```
</p>

When we float an element, we take it out of normal flow.
Causes width of element to default to width of content within it. 

SOmetimes when creating columns for a reuseable layout, this behaviour is not desired. Can be corrected by adding a fixed width property to each column.
to prevent floated elements touching, use margin propert to create space.

Floats May CHange an Elements Display Value.
Important to know element removed from normal flow, may change elements default display value. 
Float relies on element having display value of block. May alter an element's default display

ALL INALL.

float was never intended to be used for layouts and positioning.
- Margin and padding not inerpreted correctly
- elements taken out of normal flow of page.
- unwanted content gets wrapped around float

to prevent content wrapping, clear or contain floats.

```

div {
clear:left;
}

```
both will clear both
It is important that this clear be applied to an element appearing after the floated elements, not before, to return the page to its normal flow.

//////

Another option is to contain floats.
containing floats helps ensure all styles rendered correctly.

Floated elements must reside within parent element.
parent element act as container, leaving flow of document normal outside of it. 

Parent element = group class

```
.group:before,
.group:after {
content: "";
display: table;
}

.group:after {
clear:both;
}

.group {
clear:both;
*zoom: 1;
}
```
CSS is clearing any floated elements with group class and returning flow to nowmal.

:before and :after psuedo elements dynamically generated elements avobe and below element with group class.
Do not include any content, table level elements.

dynamically generated element after group class is clearing floats within group element, like clear. 

last element clears any floats avobe it.

looking at 2 column page layour, we wrap the section and aside elemnts with a parent element

HTML
``` 
<header> ... </header>
<div class="group">
<section> ... </section>
<aside>...</aside>
</div>
<footer>...</footer>
```

CSS
```
.group:before,
.group:after {
content: "";
display: table;
}

.group:after {
clear: both;
}

.group{
clear:both;
*zoom: 1;
}

section {
float: left;
margin: 0 1.5%;
width: 63%;
}

aside {
float: right;
margin:0 1.5%;
width: 30%;
}
```

This tech is caled clearfix.

Removing spaces between inline-block elements.

1) put open `<section>` tag on same line as closed `</section>`

```
<header>...</header>
<section>
...
</section><section>
...
</section><section>
...
</section>
```

Ensures space between block elements dont exist. No space when renderered.

2) open HTML comment directly after inline block element closing and close it.
Comments out any space

``` 
<header>...</header>
<section>
...
</section> <!--
--> <section>
...
</section> <!--
--><section>
...
</section>
<footer> ... </footer>
```

Creating Reusable layouts

Best to make modular styles you can reuse. 
Floats vs Inline Block elements (You chose)

Perhaps inline block to create grid and then float to wrap content.
new css coming out soon. Flex and grid.

```
.col-1-3,
.col-2-3 {
  display: inline-block;
  vertical-align: top;
}
```
by comma-seperating selectors, you can bind the same styles to multple selectors at one time.

<h5> Uniquely Positioning Elements</h5>

We may want to precisely position an element and floats or inline wont work.
Sometimes floats fuck shit up. Inline block elements can be awkward unless you have columns.

Every element position value is static by default. = exists in normal flow of document. doesnt accept any box offset properties.
Commonly overwritten with a relative or absolute value.

<b>Relative Positioning</b>

relative value for position property allows elements to appear within normal page flow. Leaving space  as intended while not letting other things to flow around it. 
Also allows an elements display position to be modified with box offset properties

```
<div>...</div>
<div class="offset">...</div>
<div>...</div>
```

```
div {
height: 100px;
width: 100px;
}

.offset {
left: 20px;
position: relative;
top: 20px;
}
```

offset means offset the postion by...

Second `<div>` with class of offset has position value of relative and two box offset properties left and top. No other elements can move into its space. left=right top=bottom.

<b>Absolute Positioning</b>
absolute value = space not reserved.
moved in relation to their closest relatively positioned parent element. 
if no parent, then position will be in relation to `<body>`.

``` 
<section>
<div class="offset">...</div>
</section>
```

```
section {
position:relative;
}

div {
position: absolute;
right: 20px;
top: 20px;
}
```

section element relatively position but doesnt include box offset properties. = its position doesnt change.
div element position in relation to section.