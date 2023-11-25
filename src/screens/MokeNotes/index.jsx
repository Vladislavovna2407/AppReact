import { useState } from "react";
import { Input } from "../../components/Input"
import { Label } from "../../components/Labels"
import { MainButton } from "../../components/mainButton"
import { ModalWindow } from "../../components/ModalWindow"
import './styleMoke.css'

export const ExampleNotes = () => {
    const [modalActive, setModalActive] = useState(false);
    
   
    let list = [
        { id: 1, title: "title1", text: "text1",  tags: ["tag1"], owner: "Samir" },
        { id: 2, title: "title2", text: "text2",  tags: ["tag2"], owner: "Samir" },
        { id: 3, title: "title3", text: "text3",  tags: ["tag3"], owner: "Samir" },
        { id: 4, title: "title4", text: "text4",  tags: ["tag4"], owner: "Samir" }
    ]



    let result = list.map(function (item) {
        return <div key={item.id} className="card" >
            <p><span>Title:</span> {item.title}</p>
            <p><span>Text:</span> {item.text}</p>
            <p><span>Owner:</span> {item.owner}</p>
            <p><span>Tags:</span> {item.tags}</p>
            <div className="wrapper">
            <MainButton onClick={() => setModalActive(true)} text={'Удалить'}/>
            <MainButton text={'Редактировать'}/>
            <ModalWindow
            value={'Удаление заметки'} 
            text={'Хотите удалить заметку???'} 
            onClick1={()=>setNoteActive(true)}
            text1={"Хочу"} 
            //onClick2 ={()=>}
            text2={"Не хочу"} 
            active={modalActive} 
            setActive={setModalActive}
            />
            </div>

        </div>
    })
    return (
        <div className="container">
            {result}
         
        </div>
    )
}

