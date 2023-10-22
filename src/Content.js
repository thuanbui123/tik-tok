import { useContext } from "react";
import './App.css'
import { ThemeContext } from "./ThemeContext";

function Content () {
    const context = useContext(ThemeContext);
    return (
        <div className= {context.theme}>
            <p>
                Chúng tôi xin trân trọng gửi đến quý khách hàng lời chào trân trọng nhất. Chúng tôi hy vọng rằng quý khách và gia đình đều khỏe mạnh và hạnh phúc.
            </p>
        </div>
    )
}

export default Content;