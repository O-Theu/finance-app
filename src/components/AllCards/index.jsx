import { CategoryCard } from "./components/CategoryCard";
import { NoCard } from "./components/NoCard";
import { Section } from "./style";

const DUMMY_DATA = [
    { id: 1, title: "essencial", amount: 400, percentage: 10 },
    { id: 2, title: "investimentos", amount: 2400, percentage: 20 },
    { id: 3, title: "pessoal", amount: 1000, percentage: 10 },
];


export const AllCards = () => {

    const cards = DUMMY_DATA.map(category => <CategoryCard key={category.id} data={category} />)

    return(
        <Section>
            {cards}
            <NoCard />
        </Section>
    )
}