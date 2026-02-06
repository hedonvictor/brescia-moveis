



import { Col } from "react-bootstrap";

type SelectImageLineProps = {
  src: string;
  alt: string;
  text: string;
  onClick: () => void;
};

export const SelectImageLine= ({
  src,
  alt,
  text,
  onClick,
}: SelectImageLineProps) => {
  return (
    <Col
      xs={6}
      md={6}
      lg={3}
      className="mb-4 mb-md-0 text-center grow-on-hover"
    >
      <div onClick={onClick}>
        <img src={src} alt={alt} className="img-rectangular mb-3" />
        <span className="fs-4 fw-bold">{text}</span>
      </div>
    </Col>
  );
};
