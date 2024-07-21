import { Outlet } from "react-router-dom";
import { useDebounse } from "../utils/CustomHooks/useDebounse";

const ContactUs = () => {
  // Dummy api call method
  const getData = () => {
    console.log(`Api calling here via using debouncing logic....`);
  };

  // Debouncing concept - The return function will execute if we have keystoke gap of 300 ms . If any
  //  Keystroke pressed it starts new timmer and clear the oldtimmer

  const ApiCalling = useDebounse(getData, 300);

  return (
    <div>
      <h1>Contact Us</h1>
      <label for="debouncing">
        Search{" "}
      </label>
      <input type="text" id="debouncing" onChange={ApiCalling}  placeholder="debouncing method"   />
      <Outlet />
    </div>
  );
};

export default ContactUs;
