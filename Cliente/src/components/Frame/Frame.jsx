import * as C from "./styled";
import img from "../../assets/threads.jpg";
const Frame = (props) => {
  return (
    <>
      <C.Frame>
        <div className="box">
          <div className="ribbon">{props.active && <span>NEW!</span>}</div>
          <img src={props.img} alt="" />
        </div>
      </C.Frame>
    </>
  );
};

export default Frame;
