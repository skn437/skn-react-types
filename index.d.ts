import React from "react";

/**
 * SKN React Type Extension Library
 *
 * @author SKN Shukhan
 * @version 1.0.4
 * @since 2024-06-09
 */
declare module "react" {
  /**
   * React Server Component that returns a promise of JSX of type `React.JSX.Element | React.ReactNode`
   *
   * Example:
   *
   * ```typescript jsx
   * const Home: React.SC<unknown> = async () => {
   *   return (
   *     <div>something...</div>
   *   );
   * };
   *
   * export default Home;
   * ```
   *
   * @returns Promise<React.JSX.Element | React.ReactNode>
   * @since v1.0.0
   */
  type SC<T> = (props: T) => Promise<React.JSX.Element | React.ReactNode>;

  /**
   * React Server Functional Component that returns a JSX of type `React.JSX.Element | React.ReactNode`
   *
   * Example:
   *
   * ```typescript jsx
   * const Home: React.SFC<unknown> = () => {
   *   return (
   *     <div>something...</div>
   *   );
   * };
   *
   * export default Home;
   * ```
   *
   * @returns Promise<React.JSX.Element | React.ReactNode>
   * @since v1.0.0
   */
  type SFC<T> = (props: T) => React.JSX.Element | React.ReactNode;

  /**
   * An interface that has `children` property of type `React.JSX.Element | React.ReactNode`
   *
   * Example:
   *
   * (1) for server components,
   *
   * ```typescript jsx
   * import type { Children } from "react;
   *
   * const HomeComponent: React.SFC<Children> = (props) => {
   *   const { children } = props;
   *
   *   return (
   *     <div>something...</div>
   *   );
   * };
   *
   * export default HomeComponent;
   * ```
   *
   * (2) for client components,
   *
   * ```typescript jsx
   * "use client"
   *
   * import type { Children } from "react;
   *
   * const HomeComponent: React.FC<Children> = (props) => {
   *   const { children } = props;
   *
   *   return (
   *     <div>something...</div>
   *   );
   * };
   *
   * export default HomeComponent;
   * ```
   *
   * @since v1.0.0
   */
  interface Children {
    children: React.JSX.Element | React.ReactNode;
  }

  /**
   * Next.js Server Layout Component that returns a promise of JSX of type `React.JSX.Element | React.ReactNode`
   *
   * Example:
   *
   * ```typescript jsx
   * const RootLayout: React.SLC = async (props) => {
   *   const { children } = props;
   *
   *   return (
   *     <html lang="en">
   *       <body>{children}</body>
   *     </html>
   *   );
   * };
   *
   * export default RootLayout;
   * ```
   *
   * @returns Promise<React.JSX.Element | React.ReactNode>
   * @since v1.0.0
   */
  type SLC = (props: Children) => Promise<React.JSX.Element | React.ReactNode>;

  /**
   * Next.js Server Functional Layout Component that returns a JSX of type `React.JSX.Element | React.ReactNode`
   *
   * Example:
   *
   * ```typescript jsx
   * const RootLayout: React.SFLC = (props) => {
   *   const { children } = props;
   *
   *   return ();
   * };
   *
   * export default RootLayout;
   * ```
   *
   * @returns React.JSX.Element | React.ReactNode
   * @since v1.0.0
   */
  type SFLC = (props: Children) => React.JSX.Element | React.ReactNode;
}
