<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer: B <br/>
In this Given code it declared an empty object name {greetign}. But  did't set it in any variable. And consol greeting. So it came up with an error message. If we want to run the code we can set greeting in any variable let or const. 
</b></summary>
<p>

#### Answer: ?

<i>Write your explanation here</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b> Answer: D  <br>
Because we know JavaScript can perform sum operations only if the value type is number. If we want to perform the addition operation between number and string, it will place the value of the parameter one after the another</b></summary>
<p>

#### Answer: ?

<i>Write your explanation here</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer: A <br/>
We can see in that given question It create an array containing 4 food  and set it in {food} variable.Then it create an {object}  info with a property favoriteFood that initially references the first element of the food. But in the console.log it call only food. so it will show the Array containing all food.
</b></summary>
<p>

#### Answer: ?

<i>Write your explanation here</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer: B <br/>
Because When we call the seyHi function we didn't set any parameter value. And we know if we do not set the parameter and call the function it will give us undefined. Now come to the function. We can see in that given function it return template string and set {hi there} and dynamically name. So When we call the function it will give us {`Hi there, undefined`}
</b></summary>
<p>

#### Answer: ?

<i>Write your explanation here</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer: C <br/>
In that given question It initialize count to 0 and create an array and set in nums variable .It uses forEach to iterate through each element in nums.For each element except 0 because it check truthy,falsy (which is falsy in JavaScript), it increments count.After the loop, count contains the count of truthy values, which is 3.
</b></summary>
<p>

#### Answer: ?

<i>Write your explanation here</i>

</p>
</details>
