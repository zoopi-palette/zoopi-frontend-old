import React, {ReactNode} from "react";

// ref: https://stackoverflow.com/questions/62432985/typescript-saying-a-string-is-invalid-even-though-its-in-the-union
type FlexDirection =
  | "column"
  | "inherit"
  | "-moz-initial"
  | "initial"
  | "revert"
  | "unset"
  | "column-reverse"
  | "row"
  | "row-reverse"
  | undefined;

export type StackProps = {
  children: ReactNode;
  direction?: FlexDirection;
  divider?: ReactNode;
  spacing: number | string;
};

// ref: https://stackoverflow.com/questions/49496906/react-mapping-children-of-a-parent-component
export const Stack = ({
  children,
  direction = "column",
  divider,
  spacing,
}: StackProps) => {
  return (
    <>
      {children && (
        <div
          css={{
            display: "flex",
            flexDirection: direction,
            width: 400,
            padding: 24,
            overflowY: "scroll",
          }}
        >
          {React.Children.map(children, (child) => {
            return (
              <div
                css={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {child}
                {divider}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};
