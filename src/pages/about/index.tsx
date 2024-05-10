import { CSSProperties, FC } from "react";

const styles: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "1.2rem",
  textAlign: "center",
};
export const About: FC = () => {
  return (
    <div>
      <div style={styles} className="container">
        Данный сайт является пет проектом, за основу был взят дизайн сайта Додо
        пиццы
      </div>
    </div>
  );
};
