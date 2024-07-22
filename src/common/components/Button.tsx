import React from "react";

interface buttonprops {
  className: string;
  title: string;
}
export default function Button(props: buttonprops) {
  return <button className={props?.className}>{props?.title}</button>;
}
