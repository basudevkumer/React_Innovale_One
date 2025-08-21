import Bannar from "../component/bannar/Bannar";
import Company from "../component/company/Company";
import Comment from "../component/customarComment/Comment";
import Digital from "../component/digital/Digital";
import WorkCount from "../component/workcount/WorkCount";

const Home = () => {
  return (
    <>
      <Bannar />
      <Digital/>
      <WorkCount/>
      <Company/>
      <Comment/>
    </>
  );
};

export default Home;
