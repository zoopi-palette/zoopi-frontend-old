import {FunctionComponent, useCallback, useEffect, useMemo, useState} from "react"
import shallowequal from "shallowequal";
import {Optional} from "utility-types";
import {useModalContext} from "./provider"

type Props<T extends FunctionComponent<any>> = Parameters<T>[0]

export const useModal = <T extends FunctionComponent<any>>(
  component: T,
  props: Optional<Props<T>, "onClose">, 
  id?: string
)=>{
  type ModalProps = Optional<Props<T>, "onClose">

  const {upsertModal, removeModal} = useModalContext()

  const [isOpened, setIsOpened] = useState(false)
  const [memoizedProps, setMemoizedProps] = useState<ModalProps>(props)

  useEffect(()=>{
    setMemoizedProps(prev => !shallowequal(props, prev) ? props : prev)  
  },[props])

  const modalId = useMemo(()=>id || component.name, [component.name, id])

  const renderModal = useCallback((newProps: Optional<Parameters<T>[0], "onClose">) =>{
    upsertModal({
      id: modalId,
      component,
      props: {
        ...newProps,
        onClose: ()=>{
          setIsOpened(false)
          newProps.onClose?.()
        },
      },
    })
  },[component, modalId, upsertModal])

  const toggleModal = useCallback((isOpened?: boolean) =>{
    if (isOpened){
      setIsOpened(isOpened)
    }
    else {
      setIsOpened(prev => !prev)
    }
  },[])

  useEffect(()=>{
    if (isOpened){
      renderModal({...memoizedProps})
    } else {
      removeModal(modalId)
    }
  },[isOpened, modalId, memoizedProps, removeModal, renderModal])

  // remove modal when current component is unmounted
  useEffect(()=>(()=>{
    removeModal(modalId)
  }),[modalId, removeModal])

  return useMemo(()=>({
    id: modalId,
    toggleModal,
  }), [modalId, toggleModal])
}