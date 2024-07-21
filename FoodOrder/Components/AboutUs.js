import { useThrottling } from "../utils/CustomHooks/useThrottling";

const AboutUs = () => {
  const getData = () => {
    console.log("Api calling here via using throlling logic...");
  };
  const apiCalling = useThrottling(getData, 500);

  return (
    <div> 
      <h1>About US</h1>
      <label for="throlling">Search </label>
      <input type="text" onChange={apiCalling} placeholder="throtlling method"  id="throlling"/>

    </div>
  );
};
export default AboutUs;
