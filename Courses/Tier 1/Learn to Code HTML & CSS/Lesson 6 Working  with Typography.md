<h4>Working with Typography

</h4>

In the past we were limited but now we can embed fonts. Unlimited font possibilities.

Typeface = what we see.

Font = file that contains a typeface. Font allows acces to typeface.

Change Font properties

Font-family

declare which font and fallback font to be used. 
contains multiple fonts all comma seperated.
- Two word fonts wrapped in ""

Font Variant
 - may need to set text in small capitals
 - normal , small-caps
 
 ```
 .firm {
 font-variant: small-caps;
 }
 ```
 
 Font Weight.
 - normal, bold, bolder, lighter and inherit.
 
Recommended to use normal and bold or better just use numeric values
100, 200, 300 etc. 900

some only come in 400 and 800 , normal and bold.
```
.daring {
font-weight: 600;
}
```

Line Height. 
Distance between two lines of text. 
cann use all types of values.

Best practice for legibility is to set line-height to 1.5x font-size.
 could be quickly accomplished by setting the line-height to 150%, or just 1.5.
``body {
line-height: 22px;
}
``

may also be used to vertically center a single line of text within an element.

``.btn {
height: 22px;
line-height: 22px;
}
``
Shorthand property values
font-style, font-variant, font-weight, font-size, line-height and font-family

``
html {
  font: italic small-caps bold 14px/22px "Helvetica Neue", Helvetica, Arial, sans-serif;
}
``

<b>Applying Text Properties</b>

Text Shadow
1) Horizontal Offset
2) Vertical offset
3) Blur Radius
4) Shadow Color
```
p {
text-shadow: 3px 6px 2px rgb(0,0,0,.3);
}
```

Box shadow works the same way.

Letter Spacing 
```
p {
letter-spacing: -.5em;
}
```
Word Spacing
```
p {
  word-spacing: .25em;
}
```

