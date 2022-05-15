import type {NextPage} from "next"
import {LayoutCenter} from "components/LayoutCenter"
import {ModalLinkSent} from "components/ModalLinkSent";
import {useModal} from "utils/modal";


const Test: NextPage = () => {
  const {toggleModal} = useModal(ModalLinkSent, {})
  
  return (
    <LayoutCenter>
      <button onClick={()=>toggleModal(true)}>open</button>
    </LayoutCenter>
  )
}

export default Test
