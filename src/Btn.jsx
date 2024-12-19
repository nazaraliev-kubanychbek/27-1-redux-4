import { useDispatch } from "react-redux";
import { incrementNum, decrementNum, setText, resetNum } from "./redux/reducer";
const Btn = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={()=>{
                dispatch(setText('Hello Geeks!'))
            }}>change</button>
            <br />
            <button onClick={()=>{
                dispatch(incrementNum())
            }}>+1</button>
            <button onClick={()=>{
                dispatch(decrementNum())
            }}>-1</button>
            <button onClick={()=>{
                dispatch(resetNum())
            }}>reset</button>

            <button>+5</button>
            <button>-5</button>
        </div>
    );
}

export default Btn;