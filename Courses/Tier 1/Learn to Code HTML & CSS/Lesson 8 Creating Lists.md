<h4>Creating Lists</h4>

3 different types. 
-Unordered
-orderered
-description

Unordered
```
<ul>
    <li>Orange</li>
    <li>Green</li>
    <li>Blue</li>
</ul>
```

Ordered
```
<ol>
  <li>Head north on N Halsted St</li>
  <li>Turn right on W Diversey Pkwy</li>
  <li>Turn left on N Orchard St</li>
</ol>
```

Start Attribute
Starts List on certain number

```
<ol start="30">
  <li>Head north on N Halsted St</li>
  <li>Turn right on W Diversey Pkwy</li>
  <li>Turn left on N Orchard St</li>
</ol>
```

Description Lists
```
<dl>
  <dt>study</dt>
  <dd>The devotion of time and attention to acquiring knowledge on an academic subject, especially by means of books</dd>
  <dt>design</dt>
  <dd>A plan or drawing produced to show the look and function or workings of a building, garment, or other object before it is built or made</dd>
  <dd>Purpose, planning, or intention that exists or is thought to exist behind an action, fact, or material object</dd>
  <dt>business</dt>
  <dt>work</dt>
  <dd>A person's regular occupation, profession, or trade</dd>
</dl>
```

Nesting List
List placed within another list.
`<ul>` and `<ol>` can only contain `<li>`. `<li>` can hold anything but must be direct child of `<ul>` or `<ol>`.




Horizontally displaying lists.
In order to divide list into multiple colums and build navigation etc,


Displaying List.
Quickest way. 

Give `<li>` elements display property value of inline or inline-block. This places all the elements on a single line.
Better to use inline-block property, easier to add vertical margines.


If you need list iterm market than use floating list.
Set all `<li>` float to left and margin to 20px

```
li {
  float: left;
  margin: 0 20px;
}
```
