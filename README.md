# SKN React Type Extension Library

<img width="150px" src="https://firebasestorage.googleapis.com/v0/b/skn-ultimate-project-la437.appspot.com/o/GitHub%20Library%2F08-TypeScript-SRT.svg?alt=media&token=5ada477b-a37e-4cdd-be35-19e1e89de649" alt="react" />

> TypeScript React

[![NPM Version](https://img.shields.io/npm/v/%40best-skn%2Freact-types)](https://www.npmjs.com/package/@best-skn/react-types) [![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/license/mit)

&nbsp;

## **_Introduction:_**

### This is a simple TypeScript Type Extension Library for React 18 & also for Next.js 14

### I made this library so that I can use it in all of my Next.js 14 projects without writing the same codes over and over again

&nbsp;

## **_Details:_**

### **`SC/SFC` Type**

- type `SC/SFC` both are for server components except for layout ones (layout.tsx in Next.js 14)
- type `SC/SFC` both take generic type of any kinds of props
- `SC` is used in asynchronous server components that returns a `Promise` of `React.JSX.Element | React.ReactNode`
- `SFC` is used in synchronous server components that returns `React.JSX.Element | React.ReactNode`
- For usage instruction, see `Usage` section

### **`Children` Type**

- An interface that has `children` property of type `React.JSX.Element | React.ReactNode`
- For usage instruction, see `Usage` section

### **`SLC/SFLC` Type**

- type `SLC/LSFC` both are for layout server components (layout.tsx in Next.js 14)
- type `SLC/SFLC` don't take any generics
- `SLC` is used in asynchronous layout server components that returns a `Promise`
  of `React.JSX.Element | React.ReactNode`
- `SFLC` is used in synchronous layout server components that returns `React.JSX.Element | React.ReactNode`
- For usage instruction, see `Usage` section

&nbsp;

## **_Use Case:_**

- React
- Next.js

&nbsp;

## **_Requirements:_**

### This library has peer dependency for React & React DOM of minimum 18.3.1. It may or may not work on 19.x

### This library is intended to be used in Next.js of minimum 14.2.3. It may or may not work on 15.x

- 💀 Minimum [react](https://www.npmjs.com/package/react) Version: `18.3.1`
- 💀 Minimum [@types/react](https://www.npmjs.com/package/@types/react) Version: `18.3.3`
- 💀 Minimum [react-dom](https://www.npmjs.com/package/react-dom) Version: `18.3.1`
- 💀 Minimum [@types/react-dom](https://www.npmjs.com/package/@types/react-dom) Version: `18.3.0`
- 💀 Minimum [next](https://www.npmjs.com/package/next) Version: `14.2.3`

&nbsp;

## **_Complementary Libraries:_**

- [@best-skn/next-types](https://www.npmjs.com/package/@best-skn/next-types)

&nbsp;

## **_Usage:_**

### To install the package, type the following in console

> ```zsh
> npm add -D @best-skn/react-types
> #or
> yarn add -D @best-skn/react-types
> #or
> pnpm add -D @best-skn/react-types
> #or
> bun add -D @best-skn/react-types
> ```

### Create a directory called `types` in the root location of your project, and create a file called `react.d.ts`, then do this

> ```typescript
> import "@best-skn/react-types";
> ```

### Check your `tsconfig.json` if `includes` property has `**/*.ts` or not otherwise the type definition file may not work

### Now Inside your Next.js 14 Project, use the package like this (Just an example)

#### **_`SC/SFC` Type:_**

#### For any `Server Components` except the `Layout Server Components`, do the following

> ##### **(a) Asynchronous:**
>
> ```typescript jsx
> // Location: app/page.tsx
> const Home: React.SC<unknown> = async () => {
>   return (
>     <div>something...</div>
>   );
> };
>
> export default Home;
> ```
>
> ##### **(b) Synchronous:**
>
> ```typescript jsx
> // Location: app/page.tsx
> const Home: React.SFC<unknown> = () => {
>   return (
>     <div>something...</div>
>   );
> };
>
> export default Home;
> ```

#### **_`Children` Type:_**

#### For any kinds of `Functional Component (Server or Client)`, you can use like this if it needs `children` props

> ##### **(a) Server:**
>
> ```typescript jsx
> import type { Children } from "react";
>
> const HomeComponent: React.SFC<Children> = (props) => {
>   const { children } = props;
>
>   return (
>     <div>something...</div>
>   );
> };
>
> export default HomeComponent;
> ```
>
> ##### **(b) Client:**
>
> ```typescript jsx
> "use client"
>
> import type { Children } from "react";
>
> const HomeComponent: React.FC<Children> = (props) => {
>   const { children } = props;
>
>   return (
>     <div>something...</div>
>   );
> };
>
> export default HomeComponent;
> ```

#### **_`SLC/SFLC` Type:_**

#### For any `Layout Server Components`, do the following

> ##### **(a) Asynchronous case:**
>
> ```typescript jsx
> // Location: app/layout.tsx
> const RootLayout: React.SLC = async (props) => {
>   const { children } = props;
>
>   return (
>     <html lang="en">
>       <body>{children}</body>
>     </html>
>   );
> };
>
> export default RootLayout;
> ```
>
> ##### **(a) Synchronous case:**
>
> ```typescript jsx
> // Location: app/layout.tsx
> const RootLayout: React.SFLC = (props) => {
>   const { children } = props;
>
>   return (
>     <html lang="en">
>       <body>{children}</body>
>     </html>
>   );
> };
>
> export default RootLayout;
> ```

&nbsp;

## **_Dedicated To:_**

- 👩‍🎨`Prodipta Das Logno` & 🧛‍♀️`Atoshi Sarker Prithula`: The two most special ladies of my life. I
  can't thank them
  enough for always treasuring me a lot. I am lucky that I met with these two amazing ladies. They
  have two special
  places in my heart and no other girl can ever replace them.
- 💯`My Parents`: The greatest treasures of my life ever.

&nbsp;

## **_License:_**

Copyright (C) 2024 SKN Shukhan

Licensed under the MIT License
