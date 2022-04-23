import {useTheme} from "@emotion/react"
import {ChangeEvent, ChangeEventHandler, FocusEventHandler, ReactNode, useCallback, useEffect, useMemo, useRef, useState} from "react"
import {Icon} from "components/icon"
import {Css, CssObject} from "styles/theme"

export type TextInputProps = {
  children?: ReactNode
  className?: string
  appearance?: ButtonAppearance
  value: string
  placeholder?: string
  onChange?: (value: string, event?: ChangeEvent<HTMLInputElement>)=>void
  onBlur?: FocusEventHandler<HTMLInputElement>
  onFocus?: FocusEventHandler<HTMLInputElement>
  label?: string
  autoFocus?: boolean
  type?: "email" | "password" | "text";
  clearDisabled?: boolean
  right?: ReactNode
}

export type ButtonAppearance = "filled" | "outline"

export const TextInput = ({
  children,
  appearance = "filled",
  onChange,
  onBlur,
  onFocus,
  value,
  label,
  clearDisabled = false,
  right,
  ...rest
}: TextInputProps) => {
  const theme = useTheme()

  const [localValue, setLocalValue] = useState("")
  
  const inputRef = useRef<HTMLInputElement>(null)

  const css: Css = useMemo(()=>{
    return ({
      fontSize: "1rem",
      color: theme.colors["grey-90"],
      borderWidth: 1,
      borderBottomStyle: "solid",
      borderColor: theme.colors["grey-40"],
      paddingBottom: "6px",
      "::placeholder": {
        padding: 0,
        color: theme.colors["grey-40"],
      },
      ":focus": {
        borderColor: theme.colors["grey-90"],
      },
    } as CssObject)
  },[theme])

  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback((event)=>{
    setLocalValue(event.currentTarget.value)
    onChange?.(event.currentTarget.value, event)
  },[onChange])

  const handleBlur: FocusEventHandler<HTMLInputElement> = useCallback((event)=>{
    onBlur?.(event)
  },[onBlur])

  const handleFocus: FocusEventHandler<HTMLInputElement> = useCallback((event)=>{
    onFocus?.(event)
  },[onFocus])

  const handleClearClick = useCallback(()=>{
    setLocalValue("")
    onChange?.("")
  },[onChange])
  
  return (
    <label css={{
      display: "inline-flex",
      flexDirection: "column",
      width: "100%",
      position: "relative"
    }}>
      <span css={theme => ({
        fontSize: "0.875rem",
        color: theme.colors["grey-50"],
        marginBottom: "7px"
      })}>{label}</span>
      <input
        ref={inputRef}
        type={"text"}
        {...rest}
        value={value || localValue}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        css={css}
      />
      <div css={{position: "absolute", right: 0, bottom: 6}}>
        {right}
        {clearDisabled ? null : (
          <span
            onClick={handleClearClick}
            css={{
              display: (value || localValue) ? "inline-flex" : "none",
              cursor: "pointer"
            }}
          >
            <Icon name={"close-circle"} color={theme.colors["grey-50"]}/>
          </span>
        )}
      </div>
    </label>
  )
}