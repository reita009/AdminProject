import { Balance } from "../../Balance/Balance";
import * as C from "./styled";
import Frame from "../../Frame/Frame";
import image from "../../../assets/threads.jpg";
import image2 from "../../../assets/BlueSky.jpg";
import image3 from "../../../assets/Ai.jpg";

export const NoticeStage = () => {
  return (
    <>
      <C.Container>
        <Balance subject="Notícias" />
        <C.CardNotice>
          <Frame img={image} active />
          <div className="right">
            <div className="headerCard">
              <h3>threads</h3>
              <span>22/10/2022 16h</span>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </C.CardNotice>

        <C.CardNotice>
          <Frame img={image2} active />
          <div className="right">
            <div className="headerCard">
              <h3>Blue sky</h3>
              <span>22/10/2022 16h</span>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </C.CardNotice>

        <C.CardNotice>
          <Frame img={image3} active />
          <div className="right">
            <div className="headerCard">
              <h3>Inteligencia Artificial</h3>
              <span>22/10/2022 16h</span>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </C.CardNotice>
      </C.Container>
    </>
  );
};
