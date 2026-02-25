import { useState } from "react"
import Button from "./Button"

export default function ShowHide(){
    const [isVisible,setVisible] = useState(true)
    const handler = () => {
        setVisible(!isVisible)
    }
    return(
        <div>
            {isVisible && <p>hello i am Visible</p>}
            <Button handler={handler} status={isVisible} />
        </div>
    )
}