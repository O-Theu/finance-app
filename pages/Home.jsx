import { AllCards } from "../src/components/AllCards";
import { Container } from "../src/components/Container";
import { Header } from "../src/components/Header";

export default function Home() {
    return (
        <Container>
            <Header />
            <AllCards />
        </Container>
    )
  }