import Header from "../../common/Header/Header";
import FormPage from "./FormPage/FormPage";
import { Container } from "./HomePage.style";

const HomePage = () => {
  return (
    <Container>
      <Header title="Dior" />
      <FormPage />
    </Container>
  );
};

export default HomePage;
