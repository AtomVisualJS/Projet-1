import React from "react";

// reactstrap components
import { Container} from "reactstrap";

// core components

function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:'url("https://media.lesechos.com/api/v1/images/view/5f689cf53e45467b7d018349/1280x720/319736-les-5-idees-a-retenir-de-cap-sur-l-ocean-bleu-web-tete-0301477758350.jpg")',
          width: "100%",
          height: "100%",
        }}
      >
        <div className="filter" />
            <Container>
                </Container>
        <div
          className="moving-clouds"
          style={{
            backgroundImage:'url("http://assets.stickpng.com/images/580b585b2edbce24c47b2639.png").default'
          }}
        />
        
       
      </div>
    </>
  );
}

export default IndexHeader;