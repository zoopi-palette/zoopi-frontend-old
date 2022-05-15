import React from "react"
import {ModalProps} from "components/Modal"
import {Modal} from "components/Modal"

export type ModalLinkSentProps = {
  onClose: ModalProps["onClose"]
  onConfirm?: ()=>void
}

export const ModalLinkSent = ({
  onClose,
  onConfirm,
}: ModalLinkSentProps) => {
  return (
    <Modal
      onClose={onClose}
      title={"링크 발송"}
      confirm={{children: "확인", onClick: onConfirm}}
    >
      {"가입하신 이메일로 링크를 발송했습니다. 인증확인 후 비밀번호를 변경하세요!"}
    </Modal>
  )
}