import { useState } from "react";
import { MainButton } from "../../components/mainButton";
import { ModalWindow } from "../../components/ModalWindow";
import { Note } from "../../components/Note";



export const NotesScreen = () => {

    const [modalActive, setModalActive] = useState(false);
    const [noteActive, setNoteActive] = useState(false)

    return (
        <div >
            <MainButton onClick={() => setModalActive(true)} text={'+ Добавить заметку'} />
            <ModalWindow
                value={'Добавление заметки'}
                text={'Хотите добавить заметку???'}
                onClick1={() => setNoteActive(true)}
                text1={"Хочу"}
                //onClick2 ={()=>}
                text2={"Не хочу"}
                active={modalActive}
                setActive={setModalActive} />
            <Note
                active2={noteActive}
                setActive2={setNoteActive} />
        </div>
    )
}