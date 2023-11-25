import React, { useState } from 'react'
import { Header } from '../Header'
import { Input } from '../Input'
import { Label } from '../Labels'
import { MainButton } from '../mainButton'
import './styleNote.css'

export const Note = ({active2, setActive2}) => {

    const [color, setColor] = useState('')
    const [owner, setOwner] = useState('')
    const [tags, setTags] = useState('')
    const [text, setText] = useState('')
    const [title, setTitle] = useState('')


    function showNote() {

        let user = {
            color: color,
            owner: owner,
            tags: tags,
            text: text,
            title: title
        }
        console.log(user)


        
        //console.log(`Color: ${color}, Owner: ${owner}, tags: ${tags}, text: ${text}, title:${title}`)
        setColor('')
        setOwner('')
        setTags('')
        setText('')
        setTitle('')
        
    }


    return (
        <div className={active2 ? 'note active' : 'note'} onClick={()=>setActive2(true)}>
            <Header />
            <Label name={'color'} value={'Color'} />
            <Input
                state={'text'}
                value1={'Enter color'}
                answer={'Color'}
                value={color}
                onChange={event => setColor(event.target.value)}
            />
            <Label name={'owner'} value={'Owner'} />
            <Input
                state={'text'}
                value1={'Who is owner?'}
                answer={'Owner'}
                value={owner}
                onChange={event => setOwner(event.target.value)}
            />
            <Label name={'tags'} value={'Tags'} />
            <Input
                state={'tags'}
                value1={'Enter your tags'}
                answer={'Tags'}
                value={tags}
                onChange={event => setTags(event.target.value)}
            />
            <Label name={'text'} value={'Text'} />
            <Input
                state={'text'}
                value1={'Enter your text'}
                answer={'Text'}
                value={text}
                onChange={event => setText(event.target.value)}
            />
            <Label name={'title'} value={'Title'} />
            <Input
                state={'title'}
                value1={'Enter your title'}
                answer={'Title'}
                value={title}
                onChange={event => setTitle(event.target.value)}
            />
            <MainButton text={'Add'} onClick={showNote} />

        </div>
    )
}