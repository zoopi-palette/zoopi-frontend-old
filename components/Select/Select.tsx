import {ChangeEventHandler, ReactNode, useCallback} from "react";
import {Css, CssObject} from "styles/theme";

export type SelectProps = {
  children?: ReactNode;
  id: string;
  name: string;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
};

const Select = ({children, id, name, onChange, ...rest}: SelectProps) => {
  return (
    <div
      css={{
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: "22px",
        borderColor: "#E6E7E9",
        paddingTop: 12,
        paddingRight: 11,
        paddingBottom: 13,
        paddingLeft: 12,
      }}
    >
      <select
        id={id}
        onChange={onChange}
        {...rest}
        css={{border: 0, color: "#393939", fontSize: 13, paddingRight: 4}}
      >
        {children}
        <option value="">{name}</option>
      </select>
    </div>
  );
};

export default Select;
