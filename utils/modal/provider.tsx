import React, {createContext, FunctionComponent, ReactNode, useCallback, useContext, useEffect, useState} from "react";
import {Optional} from "utility-types"

export type ModalData<T extends FunctionComponent> = {
  id: string;
  component: T 
  props: Parameters<T>[0] | undefined
}

export type UpsertModalDataInput<T extends FunctionComponent> = Optional<ModalData<T>, "id">

type ModalContext = {
  modalDatas: ModalData<FunctionComponent<any>>[]
  removeModal: (id: string) => void
  upsertModal: (dataInput: UpsertModalDataInput<FunctionComponent<any>>) => void
}

export const useModalContext = () => {
  return useContext(ModalContext);
};

export const ModalContext = createContext<ModalContext>({
  modalDatas: [],
  removeModal: (id: string) => {},
  upsertModal: (dataInput: UpsertModalDataInput<FunctionComponent<any>>) => {},
});

export const ModalProvider = ({children}: {children: ReactNode}) => {
  const [modalDatas, setModalDatas] = useState<ModalData<FunctionComponent<any>>[]>([])

  useEffect(()=>{
    console.log("modalDatas: ", modalDatas); // TODO: remove 
  },[modalDatas])

  const removeModal = useCallback((id: string) => {
    setModalDatas(prev =>  [...prev].filter(item => item.id !== id))
  },[]);

  const upsertModal = useCallback((dataInput: UpsertModalDataInput<FunctionComponent<any>>) => {
    console.log("upsertModal")
    const getUpsertedModalDatas = (previousModalData: typeof modalDatas)=>{
      const modalIndex = previousModalData.findIndex(item => item.id === dataInput.id)

      if (modalIndex === -1) {
        
        const id = dataInput.id || dataInput.component.name
    
        const newModalData:ModalData<typeof dataInput.component> = {
          id,
          component: dataInput.component,
          props: dataInput.props,
        }
        return [...previousModalData, newModalData]
      } else {
        const newModalDatas = [...previousModalData];
        newModalDatas[modalIndex] = {...newModalDatas[modalIndex], ...dataInput};
  
        return newModalDatas
      }
    }
    
    setModalDatas(prev => getUpsertedModalDatas(prev));
  },[]);
  
  return (
    <ModalContext.Provider value={{
      modalDatas,
      removeModal,
      upsertModal,
    }}>
      {children}
      <section css={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        top: 0,
        left: 0,
        display: modalDatas.length < 1 ? "none" : "flex"
      }}>
        {modalDatas.map(item => (
          <div key={`modal-${item.id}`} css={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
            {item.component 
              ? (
                <item.component
                  id={item.id}
                  {...item.props}
                />
              ) 
              : null
            }
          </div>
        ))}
      </section>
    </ModalContext.Provider>
  );
};
