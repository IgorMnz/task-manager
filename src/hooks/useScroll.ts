import {useState} from "react";

// Кaстомный хук по проверке высоты блока и добавления скролла к блоку
export const useScroll = () => {
    const [scroll, setScroll] = useState<boolean>(false)

    const scrollCheck = () => {
        const block: HTMLElement | null = document.getElementById('block')
        if (block !== null) {
            const isScroll: boolean = block.scrollHeight > block.clientHeight
            isScroll ? setScroll(true) : setScroll(false)
        }
    }
    return {scroll, scrollCheck}
}