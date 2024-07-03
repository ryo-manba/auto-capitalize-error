"use client";

import { useDateField, useDateSegment, useLocale } from "react-aria";
import { useDateFieldState } from "react-stately";
import { createCalendar } from "@internationalized/date";
import React from "react";

export default function Home() {
  return <DateField label="Date" />;
}

function DateField(props) {
  let { locale } = useLocale();
  let state = useDateFieldState({
    ...props,
    locale,
    createCalendar,
  });

  let ref = React.useRef(null);
  let { labelProps, fieldProps } = useDateField(props, state, ref);

  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ccc",
        maxWidth: "300px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <span {...labelProps}>{props.label}</span>
      <div
        {...fieldProps}
        ref={ref}
        style={{
          display: "flex",
          gap: "5px",
          padding: "5px",
          border: "1px solid #ccc",
          backgroundColor: "white",
        }}
      >
        {state.segments.map((segment, i) => (
          <DateSegment key={i} segment={segment} state={state} />
        ))}
        {state.isInvalid && <span aria-hidden="true">🚫</span>}
      </div>
    </div>
  );
}

function DateSegment({ segment, state }) {
  let ref = React.useRef(null);
  let { segmentProps } = useDateSegment(segment, state, ref);

  return (
    <div {...segmentProps} ref={ref}>
      {segment.text}
    </div>
  );
}
