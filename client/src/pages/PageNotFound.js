import { Flex } from "rebass";
import Lottie from "lottie-react";
import pageNotFound from "../assets/animations/404.json";

export default function PageNotFound() {
  return (
    <Flex height={"90vh"} alignItems="center" justifyContent="center">
      <Lottie animationData={pageNotFound} loop={true} />
    </Flex>
  );
}
