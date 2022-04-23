import {useTheme} from "@emotion/react"
import React, {ReactElement, SVGProps} from "react"

import ArrowBack from "../../public/icons/arrow-back.svg"
import ArrowRight from "../../public/icons/arrow-right.svg"
import CheckCircle from "../../public/icons/check-circle.svg"
import Circle from "../../public/icons/circle.svg"
import CloseCircle from "../../public/icons/close-circle.svg"
import Close from "../../public/icons/close.svg"
import Eye from "../../public/icons/eye.svg"
import Search from "../../public/icons/search.svg"

const nameIconMap = {
  "arrow-back": ArrowBack, 
  "arrow-right": ArrowRight, 
  "check-circle": CheckCircle, 
  "circle": Circle, 
  "close-circle": CloseCircle, 
  "close": Close, 
  "eye": Eye, 
  "search": Search, 
}

export type IconName = keyof typeof nameIconMap

export type IconProps = {
  name: IconName
  color?: string
  size?: number
}

export const Icon = ({
  color,
  size = 24,
  name,
}: IconProps) => {
  const theme = useTheme()
  
  const Icon = nameIconMap[name] as (props: SVGProps<SVGElement>) => ReactElement

  return (
    <span css={{
      color: color ? color : theme.colors["grey-90"],
      fontSize: 0,
    }}>
      <Icon width={size} height={size}/>
    </span>
  )
}
