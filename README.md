# TypeScript Blog: Type vs Interface এবং keyof

---

## ১. Type vs Interface এর পার্থক্য

### প্রধান পার্থক্যগুলো:

**Extending / Inheritance**  
- `interface` কে অন্য interface এর ওপর **extend** করা যায়।  
- `type` নিজে extend করা যায় না, তবে `&` (intersection) ব্যবহার করে মিলানো যায়।  

**Declaration Merging**  
- `interface` একাধিকবার declare করা যায়, এবং সব declaration মিলিয়ে একটি টাইপ তৈরি হয়।  
- `type` একাধিকবার declare করা যায় না।  

### কখন কোনটি ব্যবহার করা ভালো?

- Object এর জন্য → **interface** ব্যবহার করা ভালো।  
- Union, Tuple, Primitive এর জন্য → **type** ব্যবহার করা ভালো।  

---

## ২. keyof কীওয়ার্ডের ব্যবহার

`keyof` ব্যবহার করে আমরা **কোনো অবজেক্ট টাইপের সব property নাম নিয়ে নতুন একটি টাইপ** তৈরি করতে পারি।  
এটি **টাইপ-সেফ কোড** লিখতে সাহায্য করে।  

### কেন ব্যবহার করা দরকার?

1. নিশ্চিত করে যে শুধুমাত্র **বৈধ প্রপার্টি নাম ব্যবহার করা হচ্ছে**।  
2. Generic ফাংশন বা utility তৈরি করার সময় **ভুল key ব্যবহার করা থেকে রক্ষা করে**।  

### উদাহরণ

```ts
interface Person {
    name: string;
    age: number;
    email: string;
} 

type PersonKeys = keyof Person;

let key: PersonKeys;

key = "name";
key = "age"; 

