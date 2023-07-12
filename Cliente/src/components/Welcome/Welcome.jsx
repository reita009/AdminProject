import * as C from "./styled";

export const Welcome = () => {
  return (
    <>
      <C.Container>
        <div className="wrapper">
          <svg>
            <text x="50%" y="50%" dy=".35em" text-anchor="middle">
              Bem vindo!
            </text>
          </svg>
        </div>
      </C.Container>
    </>
  );
};
