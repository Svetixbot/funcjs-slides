## Functional Programming

---

<!-- .slide: data-background="./img/mainstream.png" data-background-size="contain" -->

<!-- In the last few years people are talking about FP more and more and FP is becoming part of a mainstream comunity.
Without knowing about it, you probably already using some of FP practices. -->
---

<!-- .slide: data-background="./img/fp-langs.jpg" data-background-size="contain" -->

<!-- Even tho, there is always a cetain expecations that the "true"-FP is coming from true FP languages.
When people mention FP they talk about these languages.
But how often do we really use them? There is a tiny proportion of projects at TW which actually ever touched these techs.
Not using them and Not knowing them doesn't really help with accepting and adopting upcoming practices in our fav JS. -->

---

## What functional programming is about?

---

<!-- .slide: data-background="./img/monads.jpg" data-background-size="contain" -->

---

### Functional programming is just a programming
<!-- Set of design patterns and practices, which are in the foundation of Software design. -->

---

### Functions calling other functions

<!-- It is a banch of patterns using functions calling other functions, and gluing them together in working peaces. -->
<!-- It is all about functions. As the main biggest building block of your application. And the main smallest block. -->

---

### Why do people enjoy FP?

---

### It is all being happy

---

## We'll cover these:

 - What exactly makes us happy?
 - Foundation
 - Collection pipeline
 - How and why do I do FP on a client?
 - Currying
 - Pipe operator
 - Design patterns from FP world

---

## What makes us happy?

<!-- From Ken's talk, people have diff goals:
Product people want predictble enough way of delivering features, they don't care about tech.
Customers want working product, they want their expectations to be exceeded, they dont care about tech.
Leadership people want to run their business smoothly, ensure they can hire and support people.
Developers want to be proud, want maintanability, good experience, sleep well on Friday night after pusing to prod.

Somehow it all comes together with FP practices, as FP practices are just a collection of good engineering practices, which we will talk about.
At the core of these practices is readability. -->

---

## What is readability?

<!-- This is the foundation -->
<!-- It is not indentation, semicoloms, breakets or whatever makes your code pretty.
It all comes down to the ability to reason about your code. What does it mean? -> building assumptions about what your code is gonna do based on reading it.
It can be achieved without debugging, by putting just 2 principles in front: immutable data structures, no side-effects as no modification of state outside of a function scope. -->

 - Immutability
 - Side effects
 - Referential transparency

---

## Immutability

<!-- The idea of immutability is simple. Dissallow mutation of state. Why is it important? Move on to explaining side effects. -->

```js
let selectedRows = [1, 2, 3, 4];
selectedRows = selectedRows.push(5);
```

vs

```js
const selectedRows = [1, 2, 3, 4];
const appendedSelectedRows = selectedRows.append([5]);
```

---

## Side effects

<!-- Side effects is a bad word for what it is. These are just effects and we love them, these are the reason we write code.
Without effects our code would put some pressure on CPU, use some RAM and produce nothing.
We live for effects. -->

```js
submitForm(fields);
```

---

## Side effects are inevitable

<!-- Saving to DB, log, sending data over to another service.
Do side effects, avoid non-referencialy transparent expressions. -->

---

## Referential transparency

<!-- Here we should introduce a thing called referencial transparency.
if you can replace an explression with it's corresponding value and nothings is changed.
or 'an expression always evaluates to the same result in any context.' -->

```js
let total = 0
addTotal = (x) => total + x

addTotal(10);  // 10
addTotal(11);  // 21
```

vs

```js
addTotal = (total) => (x) => total + x
addTotal(0)(10);  // 10
addTotal(0)(11);  // 11
```

---

## Referential transparency is important

<!-- because this is how we reason about our code: we replace expressions with its corresponsing values. if the values are always different and depend on a context it makes it harder -->

---

<!-- just a recap -->

## Foundation of FP

 - Immutability
 - Side effects
 - Referential transparency

---

### Common patterns

 - Collection pipeline
 - Pipe operation
 - Currying

---

### Collection pipeline

---

### [When should we use FP](https://youtu.be/vpcKnqyNdSQ?t=825)

---

### 1. Should my team use FP?
 - Maybe
 - No

-------

### 2. Anti-patterns
 - Under the rug
 - Wizard Tower
 - Seagulls

---

### Pipe operation

---

### Currying

---

### Recap

---

### Other design patterns

---

### References

 - [Adopting FP: A Human-First Approach](https://www.youtube.com/watch?v=vpcKnqyNdSQ)
 - [Hardcode FP in JS cource](https://www.pluralsight.com/courses/hardcore-functional-programming-javascript)