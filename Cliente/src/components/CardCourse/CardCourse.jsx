import * as C from "./styled";
import img from "../../assets/JavaScriptLogo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import * as Btn from "../Buttons/Buttons";
export const CardCourse = (props) => {
  return (
    <>
      <C.CardConatiner>
        <div className="card-header">
          <div className="image-wrap">
            <img src={props.img} alt="" />
          </div>
        </div>
        <div className="card-body">
          <h1>{props.title}</h1>
        </div>
        <div className="card-footet">
          <div>
            <Btn.WatchButton>
              <button class="button-82-pushable" role="button">
                <span class="button-82-shadow"></span>
                <span class="button-82-edge"></span>
                <span class="button-82-front text">
                  Assistir
                  <FontAwesomeIcon icon={faPlay} id="icon" />
                </span>
              </button>
            </Btn.WatchButton>
          </div>
        </div>
      </C.CardConatiner>
    </>
  );
};
