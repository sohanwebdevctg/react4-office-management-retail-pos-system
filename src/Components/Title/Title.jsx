import { Helmet } from "react-helmet-async";


const Title = ({name}) => {
  return (
    <div>
      <Helmet>
        <title> urniter | {name}</title>
      </Helmet>
    </div>
  );
};

export default Title;