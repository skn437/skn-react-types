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

### **`Children` Type**

- An interface that has `children` property of type `JSX.Element | React.ReactNode`
- For usage instruction, see `Usage` section

### **`SC/SFC` Type**

- type `SC/SFC` both are for server components except for layout ones (layout.tsx in Next.js 14)
- type `SC/SFC` both take generic type of any kinds of props
- `SC` is used in asyncronous server components that returns a `Promise` of `JSX.Element | React.ReactNode`
- `SFC` is used in syncronous server components that returns `JSX.Element | React.ReactNode`
- For usage instruction, see `Usage` section

### **`SLC/SFLC` Type**

- type `SLC/LSFC` both are for layout server components (layout.tsx in Next.js 14)
- type `SLC/SFLC` don't take any generics
- `SLC` is used in asyncronous layout server components that returns a `Promise` of `JSX.Element | React.ReactNode`
- `SFLC` is used in syncronous layout server components that returns `JSX.Element | React.ReactNode`
- For usage instruction, see `Usage` section

&nbsp;

## **_Use Case:_**

- React
- Next.js

&nbsp;

## **_Requirements:_**

- 💀 Minimum React Version: `18`
- 💀 Minimum Next.js Version: `14`

&nbsp;

## **_Usage:_**

### To install the package, type the following in console

> ```zsh
> npm i -D @best-skn/react-types
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

#### (1) For any `Server Components` except the `Layout Server Components`, do the following

> ##### **(a) Asyncronous:**
>
> ```tsx
> // Location: app/page.tsx
> const Home: React.SC<unknown> = async () => {
>  return ();
> };
>
> export default Home;
> ```
>
> ##### **(b) Syncronous:**
>
> ```tsx
> // Location: app/page.tsx
> const Home: React.SFC<unknown> = () => {
>  return ();
> };
>
> export default Home;
> ```

#### (2) For any `Layout Server Components`, do the following

> ##### **(a) Asyncronous case:**
>
> ```tsx
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
> ##### **(a) Syncronous case:**
>
> ```tsx
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

#### (3) For any kinds of `Functional Component (Server or Client)`, you can use like this if it needs `children` props

> ##### **(a) Server:**
>
> ```tsx
> import type { Children } from "react;
>
> const HomeComponent: React.SFC<Children> = (props) => {
>   const { children } = props;
>
>   return ();
> };
>
> export default HomeComponent;
> ```
>
> ##### **(b) Client:**
>
> ```tsx
> "use client"
>
> import type { Children } from "react;
>
> const HomeComponent: React.FC<Children> = (props) => {
>   const { children } = props;
>
>   return ();
> };
>
> export default HomeComponent;
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
