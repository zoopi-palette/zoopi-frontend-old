import {useTheme} from "@emotion/react"
import React from "react"
import {ReactSVG} from "react-svg"

export type IconProps = {
  name: IconName
  color?: string
  size?: number
}

export type IconName = "arrow-back" | "arrow-right" | "check-circle" | "circle" | "close-circle" | "close" | "eye" | "search"

export const Icon = ({
  color,
  size = 24,
  name,
}: IconProps) => {
  const theme = useTheme()
  
  const handleBeforeInjection = (svg: SVGSVGElement) => {
    if (!svg) return;

    svg.setAttribute("width", size.toString());
    svg.setAttribute("height", size.toString());
  }

  const reactSvgStyle = {
    color: "inherit",
    fontSize: 0,
  }

  return (
    <span css={{
      color: color ? color : theme.colors["grey-90"],
    }}>
      <ReactSVG
        src={`/icons/${name}.svg`}
        beforeInjection={(handleBeforeInjection)}
        style={reactSvgStyle}
      />
    </span>
  )
}