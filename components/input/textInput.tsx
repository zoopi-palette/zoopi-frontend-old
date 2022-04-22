import {useTheme} from "@emotion/react"
import {ChangeEventHandler, FocusEventHandler, MouseEventHandler, ReactNode, useCallback, useMemo} from "react"
import {Css, CssObject, Theme} from "styles/theme"

export type TextInputProps = {
  children?: ReactNode
  className?: string
  appearance?: ButtonAppearance
  onClick?: ChangeEventHandler<HTMLInputElement> 
  onBlur?: FocusEventHandler<HTMLInputElement>
  onFocus?: FocusEventHandler<HTMLInputElement>
  label?: string
}

export type ButtonAppearance = "filled" | "outline"

export const TextInput = ({
  children,
  appearance = "filled",
  onClick,
  label,
  ...rest
}: TextInputProps) => {
  const theme = useTheme()

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
    onClick?.(event)
  },[onClick])

  const handleBlur: FocusEventHandler<HTMLInputElement> = useCallback((event)=>{
    onClick?.(event)
  },[onClick])

  const handleFocus: FocusEventHandler<HTMLInputElement> = useCallback((event)=>{
    onClick?.(event)
  },[onClick])

  return (
    <label css={{
      display: "inline-flex",
      flexDirection: "column"
    }}>
      <span css={theme => ({
        fontSize: "0.875rem",
        color: theme.colors["grey-50"],
        marginBottom: "7px"
      })}>{label}</span>
      <input 
        type={"text"}
        {...rest}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        css={css}
      />
    </label>
  )
}