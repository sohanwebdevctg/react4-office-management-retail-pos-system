import { Helmet } from "react-helmet-async";


const Title = ({name}) => {
  return (
    <div>
      <Helmet>
        <title> POS | {name}</title>
      </Helmet>
    </div>
  );
};

export default Title;