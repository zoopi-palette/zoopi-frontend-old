import {useTheme} from "@emotion/react"
import React, {useCallback, MouseEventHandler, ReactNode, useRef} from "react"
import {Button} from "components/Button"
import {Icon} from "components/Icon"

export type ModalProps = {
  onClose: ()=>void
  // header
  title?: string
  // content
  children: ReactNode
  // footer
  cancel?: {
    children?: string
    onClick?: ()=>void
  }
  confirm?: {
    disabled?: boolean
    children?: string
    onClick?: ()=>void
  }
}

export const Modal = ({
  onClose,
  title,
  children,
  confirm,
  cancel,
}: ModalProps) => {
  const theme = useTheme()

  const modalRef = useRef<HTMLDivElement>(null)

  const handleClickOutside: MouseEventHandler<HTMLDivElement> = useCallback((event)=>{
    const isClickedInside = (event.target instanceof Node) && modalRef.current?.contains(event.target)

    if (isClickedInside) return;
    
    onClose()
  },[onClose])

  const handleClickClose: MouseEventHandler<HTMLDivElement> = useCallback((event)=>{
    onClose()
  },[onClose])

  return (
    <article 
      onClick={handleClickOutside}
      css={{
        display: "flex", 
        flexDirection:"column", 
        justifyContent: "center",
        alignItems: "center", 
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.6)",
      }}
    >
      <div 
        css={{
          display: "flex", 
          flexDirection:"column", 
          alignItems: "stretch",
          backgroundColor: theme.colors.white,
          width: "100%",
          maxWidth: "386px",
          height: "auto",
          borderRadius: "12px",
          padding: 16
        }}
      >
        <div
          ref={modalRef} 
          css={{
            width: "100%", 
            display: "flex", 
            justifyContent: "space-between",
            alignItems: "center", 
            marginBottom: 16,
          }}>
          <div css={{fontSize: "1.125rem", fontWeight: "bold"}}>
            {title}
          </div>
          <div onClick={handleClickClose} css={{cursor: "pointer"}}>
            <Icon name={"close"}/>
          </div>
        </div>
        <div 
          css={{
            width: "100%", 
            flexGrow: 1, 
            flexShrink: 1,
            marginBottom: 16
          }}
        >
          {children}
        </div>
        <div css={{width: "100%"}}>
          <div css={{margin: "-6px", flex: 1, display: "flex", alignItems: "center"}}>
            {cancel && (
              <div css={{flex: 1, padding: "6px"}}>
                <Button onClick={cancel.onClick}>
                  {cancel.children || "Cancel"}
                </Button>
              </div>
            )}
            {confirm && (
              <div css={{flex: 1, padding: "6px"}}>
                <Button color={"main"} disabled={confirm.disabled} onClick={confirm.onClick}>
                  {confirm.children || "Confirm"}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}