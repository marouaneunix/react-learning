import { Code } from "@mantine/core";
import ResettingAllStateWhenPropsChangeError from "./ResettingAllStateWhenPropsChangeError";
import ResettingAllStateWhenPropsChangeUseEffect from "./ResettingAllStateWhenPropsChangeUseEffect";
import ResettingAllStateWhenPropsChangeUsingKey from "./ResettingAllStateWhenPropsChangeUsingKey";




export const ResettingAllStateWhenPropsChange = () => {

  return (
    <>
      <ResettingAllStateWhenPropsChangeError />
      <h3>First Solution using useEffect</h3>
      <ResettingAllStateWhenPropsChangeUseEffect />
      <h3>Second solution using <Code>key</Code></h3>
      <ResettingAllStateWhenPropsChangeUsingKey />
    </>
  )
}

export default ResettingAllStateWhenPropsChange;