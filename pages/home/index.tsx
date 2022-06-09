import NavigationBottomComponent from "@/core/components/layouts/NavigationBottom";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <NavigationBottomComponent value={0}>
        <p>home page</p>
      </NavigationBottomComponent>
    </div>
  );
};

export default Home;
