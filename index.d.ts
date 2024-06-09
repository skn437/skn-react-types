import React from "react";

declare module "react" {
  interface Children {
    children: JSX.Element | React.ReactNode;
  }

  type SC<T> = (props: T) => Promise<JSX.Element | React.ReactNode>;

  type SFC<T> = (props: T) => JSX.Element | React.ReactNode;

  type SLC = (props: Children) => Promise<JSX.Element | React.ReactNode>;

  type SFLC = (props: Children) => JSX.Element | React.ReactNode;
}
