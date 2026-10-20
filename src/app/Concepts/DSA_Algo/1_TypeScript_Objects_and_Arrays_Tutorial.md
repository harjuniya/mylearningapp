# TypeScript Objects & Arrays — Step-by-Step Learning Plan

**Goal:** Learn TypeScript objects and arrays from basic to advanced, then apply them to an Angular member form and API request.

**Project context:** Angular frontend + ASP.NET Core Web API for the CSP4U fintech application.

> Tutorial-first plan: understand the concepts and examples before moving to practice questions.

---

## Learning Checklist

- [ ] 1. Objects and property access
- [ ] 2. Arrays and indexing
- [ ] 3. Array methods: `forEach`, `map`, `filter`, `find`, `some`, `every`, and `reduce`
- [ ] 4. Interfaces and typed arrays
- [ ] 5. Nested objects and optional properties
- [ ] 6. Destructuring and spread syntax
- [ ] 7. Angular member form and API request

---

# 1. Objects and Property Access

An object stores related information using key-value pairs.

```typescript
const member = {
  name: "Rahul",
  age: 28,
  balance: 5000
};
```

### Read properties

```typescript
console.log(member.name);      // Rahul
console.log(member.balance);   // 5000
console.log(member["age"]);    // 28
```

- Dot notation: `member.name`
- Bracket notation: `member["name"]`

Bracket notation is useful when the property name is stored in a variable.

```typescript
const field = "name";
console.log(member[field]); // Rahul
```

### Update a property

```typescript
member.balance = 7000;
console.log(member.balance); // 7000
```

### Add and delete properties

```typescript
member.city = "Delhi";
delete member.city;
```

**Remember:** `const` prevents reassignment of the variable. It does not automatically prevent changes to an object's properties.

---

# 2. Arrays and Indexing

An array stores multiple values in an ordered list.

```typescript
const amounts: number[] = [100, 200, 300];
```

Array indexes start at `0`.

```typescript
console.log(amounts[0]);     // 100
console.log(amounts[1]);     // 200
console.log(amounts[2]);     // 300
console.log(amounts.length); // 3
```

### Update and add values

```typescript
const amounts: number[] = [100, 200, 300];

amounts[1] = 500;  // Update the second element
amounts.push(400); // Add to the end

console.log(amounts); // [100, 500, 300, 400]
```

### Common array operations

| Method | Purpose |
|---|---|
| `push()` | Add an element at the end |
| `pop()` | Remove the last element |
| `includes()` | Check whether a value exists |
| `indexOf()` | Find the index of a value |
| `slice()` | Copy a portion of an array |
| `splice()` | Insert or remove elements |

---

# 3. Array Methods

Use this sample array for the examples:

```typescript
const amounts: number[] = [100, 200, 300];
```

## 3.1 `forEach()` — Do something for each item

```typescript
amounts.forEach(amount => {
  console.log(amount);
});
```

Output:

```text
100
200
300
```

`forEach()` runs a callback for each element. It does not return a new transformed array.

## 3.2 `map()` — Transform each item

```typescript
const doubled = amounts.map(amount => amount * 2);

console.log(doubled); // [200, 400, 600]
```

`map()` returns a new array containing the transformed values.

## 3.3 `filter()` — Keep matching items

```typescript
const largeAmounts = amounts.filter(amount => amount >= 200);

console.log(largeAmounts); // [200, 300]
```

`filter()` returns a new array containing all matching items.

## 3.4 `find()` — Find the first matching item

```typescript
const result = amounts.find(amount => amount > 150);

console.log(result); // 200
```

`find()` returns the first matching element, or `undefined` if nothing matches.

## 3.5 `some()` — Does at least one item match?

```typescript
const hasLargeAmount = amounts.some(amount => amount > 250);

console.log(hasLargeAmount); // true
```

`some()` returns a boolean.

## 3.6 `every()` — Do all items match?

```typescript
const allPositive = amounts.every(amount => amount > 0);

console.log(allPositive); // true
```

`every()` returns `true` only if every element passes the condition. For an empty array, `every()` returns `true`.

## 3.7 `reduce()` — Combine items into one result

```typescript
const total = amounts.reduce((sum, amount) => sum + amount, 0);

console.log(total); // 600
```

The initial value is `0`. The callback adds each amount to the running total.

### Array method summary

| Method | Main purpose | Typical result |
|---|---|---|
| `forEach()` | Perform an action for each item | `undefined` |
| `map()` | Transform every item | New array |
| `filter()` | Keep matching items | New array |
| `find()` | Find first matching item | Item or `undefined` |
| `some()` | Check if any item matches | Boolean |
| `every()` | Check if all items match | Boolean |
| `reduce()` | Combine items into one result | Accumulated value |

---

# 4. Interfaces and Typed Arrays

An interface describes the expected properties and types of an object.

```typescript
interface Member {
  id: number;
  name: string;
  mobile: string;
  balance: number;
}
```

### Create one typed member

```typescript
const member: Member = {
  id: 1,
  name: "Rahul",
  mobile: "9876543210",
  balance: 5000
};
```

TypeScript checks that the object matches the interface.

### Create an array of typed members

```typescript
const members: Member[] = [
  { id: 1, name: "Rahul", mobile: "9876543210", balance: 5000 },
  { id: 2, name: "Amit", mobile: "9876543211", balance: 7000 },
  { id: 3, name: "Priya", mobile: "9876543212", balance: 3000 }
];
```

`Member[]` means an array of `Member` objects.

### Find a member

```typescript
const member = members.find(item => item.id === 2);

console.log(member?.name); // Amit
```

The `?.` optional chaining operator avoids accessing `.name` if `find()` returns `undefined`.

### Optional property

```typescript
interface Member {
  id: number;
  name: string;
  email?: string;
}
```

The `?` means `email` is optional. Reading it may produce `undefined`.

### Readonly property

```typescript
interface Member {
  readonly id: number;
  name: string;
}

const member: Member = { id: 1, name: "Rahul" };

member.name = "Amit"; // Allowed
// member.id = 2;     // TypeScript error
```

`readonly` prevents reassignment through this typed reference during compile-time checking. It does not deeply freeze an object at runtime.

---

# 5. Nested Objects and Optional Properties

A nested object is an object stored inside another object.

```typescript
interface Address {
  city: string;
  pinCode: string;
}

interface Member {
  id: number;
  name: string;
  address: Address;
  email?: string;
}
```

### Create a member with an address

```typescript
const member: Member = {
  id: 1,
  name: "Rahul",
  address: {
    city: "Delhi",
    pinCode: "110001"
  }
};
```

### Read nested properties

```typescript
console.log(member.address.city);     // Delhi
console.log(member.address.pinCode);  // 110001
console.log(member.email);            // undefined
```

The `address` object is required in this example. The `email` property is optional.

For a deeply nested object where a parent may be absent, optional chaining can help:

```typescript
const city = member.address?.city;
```

---

# 6. Destructuring and Spread Syntax

## 6.1 Object destructuring

Destructuring extracts properties into variables.

```typescript
const member = {
  id: 1,
  name: "Rahul",
  balance: 5000
};

const { name, balance } = member;

console.log(name);    // Rahul
console.log(balance); // 5000
```

## 6.2 Array destructuring

```typescript
const amounts = [100, 200, 300];

const [first, second] = amounts;

console.log(first);  // 100
console.log(second); // 200
```

## 6.3 Spread syntax with objects

Spread syntax (`...`) copies enumerable properties into a new object.

```typescript
const member = {
  id: 1,
  name: "Rahul",
  balance: 5000
};

const updatedMember = {
  ...member,
  balance: 7000
};

console.log(updatedMember.balance); // 7000
console.log(member.balance);        // 5000
```

The original object is unchanged. This is a shallow copy, so nested objects are not deeply cloned.

## 6.4 Spread syntax with arrays

```typescript
const amounts = [100, 200];

const updatedAmounts = [...amounts, 300];

console.log(updatedAmounts); // [100, 200, 300]
```

## 6.5 Remove an item without mutating the original array

```typescript
const members = [
  { id: 1, name: "Rahul" },
  { id: 2, name: "Amit" },
  { id: 3, name: "Priya" }
];

const updatedMembers = members.filter(member => member.id !== 2);
```

`updatedMembers` contains Rahul and Priya. The original array is unchanged.

## 6.6 Useful utility types

```typescript
interface Member {
  id: number;
  name: string;
  mobile: string;
}
```

`Partial<Member>` makes all properties optional:

```typescript
const changes: Partial<Member> = {
  mobile: "9999999999"
};
```

`Pick<Member, "id" | "name">` selects specific properties:

```typescript
type MemberSummary = Pick<Member, "id" | "name">;

const summary: MemberSummary = {
  id: 1,
  name: "Rahul"
};
```

These are useful for update operations and screens that need only part of a member record.

---

# 7. Apply Everything to an Angular Member Form and API Request

## 7.1 Define the form model

Create a file such as `member-form.model.ts`.

```typescript
export interface MemberFormModel {
  memberName: string;
  mobile: string;
  firmName: string;
  pinCode: string;
}
```

This interface describes the shape of the form's data.

## 7.2 Store the form values

In an Angular component:

```typescript
memberForm: MemberFormModel = {
  memberName: "",
  mobile: "",
  firmName: "",
  pinCode: ""
};
```

The object holds the current values for one member form.

## 7.3 Update values

```typescript
this.memberForm.memberName = "Rahul";
this.memberForm.mobile = "9876543210";
this.memberForm.firmName = "Rahul Traders";
this.memberForm.pinCode = "110001";
```

In a real form, these values would normally come from the user's input.

## 7.4 Define the API request type

Use the actual request contract expected by your ASP.NET Core API. For example:

```typescript
export interface CreateMemberRequest {
  memberName: string;
  mobile: string;
  firmName: string;
  pinCode: string;
}
```

The property names and types must match the backend's expected JSON contract.

## 7.5 Create a request object

```typescript
const request: CreateMemberRequest = {
  memberName: this.memberForm.memberName,
  mobile: this.memberForm.mobile,
  firmName: this.memberForm.firmName,
  pinCode: this.memberForm.pinCode
};
```

The `request` object is ready to pass to an Angular HTTP service that calls your API.

**Important:** TypeScript interfaces provide compile-time type checking. They do not validate data at runtime or guarantee that the API accepts it. Server-side validation is still necessary.

---

# Recommended Learning Order

## Fundamentals
- [ ] I can create an object and read its properties.
- [ ] I understand dot notation and bracket notation.
- [ ] I can update object properties.
- [ ] I understand array indexes and `.length`.
- [ ] I can add and remove array elements.

## Array methods
- [ ] I understand `forEach()`.
- [ ] I understand `map()`.
- [ ] I understand `filter()`.
- [ ] I understand `find()`.
- [ ] I understand `some()`.
- [ ] I understand `every()`.
- [ ] I understand `reduce()`.

## Type safety
- [ ] I can define an interface.
- [ ] I can create a typed object and typed array.
- [ ] I understand optional properties and `readonly`.
- [ ] I can work with nested objects.

## Advanced concepts
- [ ] I understand object and array destructuring.
- [ ] I understand spread syntax.
- [ ] I can create an updated copy without changing the original.
- [ ] I understand `Partial<T>` and `Pick<T, K>`.

## Angular integration
- [ ] I can define a member form model.
- [ ] I can store form values in a typed object.
- [ ] I can create a typed API request object.
- [ ] I understand that the request must match the ASP.NET Core API contract.

---

## Final Rule

**Object = one record. Array = a collection of records. Interface = the expected shape. Array methods = ways to process the collection.**

Use these concepts together to build reliable Angular forms and prepare data for your ASP.NET Core APIs.
