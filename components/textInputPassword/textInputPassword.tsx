import {useTheme} from "@emotion/react"
import {useState} from "react"
import {Icon} from "components/icon"
import {TextInput} from "components/textInput"
import {TextInputProps} from "components/textInput/textInput"

export type TextInputPasswordProps = TextInputProps & {
}

export const TextInputPassword = ({
  ...rest
}: TextInputPasswordProps) => {
  const theme = useTheme()

  const [type, setType] = useState<TextInputProps["type"]>("password")
  
  const handleEyeClick = ()=>{
    setType(prev => prev === "password" ? "text" : "password")
  }

  const label = rest.label === null ? undefined : (rest.label || "비밀번호")

  return (
    <TextInput
      label={label}
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