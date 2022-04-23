import {useTheme} from "@emotion/react"
import {ChangeEvent, FocusEventHandler, useState} from "react"
import {Icon} from "components/icon"
import {TextInput} from "components/textInput"
import {TextInputProps} from "components/textInput/textInput"

export type TextInputPasswordProps = {
  value: string
  onChange?: (value: string, event?: ChangeEvent<HTMLInputElement>)=>void
  onBlur?: FocusEventHandler<HTMLInputElement>
  onFocus?: FocusEventHandler<HTMLInputElement>
  clearDisabled?: boolean
}

export const TextInputPassword = ({
  ...rest
}: TextInputPasswordProps) => {
  const theme = useTheme()

  const [type, setType] = useState<TextInputProps["type"]>("password")
  
  const handleEyeClick = ()=>{
    setType(prev => prev === "password" ? "text" : "password")
  }

  return (
    <TextInput
      type={type}
      right={(
        <span css={{marginRight: 4, cursor: "pointer"}} onClick={handleEyeClick}>
          <Icon name={"eye"} color={theme.colors["grey-60"]}/>
        </span>
      )}
      {...rest}
    />
  )
}