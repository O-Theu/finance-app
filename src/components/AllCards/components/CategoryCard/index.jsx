import { useGetCurrency } from "../../../../hooks/useGetCurrency";

import { TbPencil } from 'react-icons/tb';

import { Card, Edit } from "./style";
import { CardMenu } from "../../../UI/CardMenu";

export const CategoryCard = ({ data }) => {
    const { title, amount, percentage } = data;

    const formatedAmount = useGetCurrency(amount);
 
    return(
        <Card>
            <Edit>
                <TbPencil className="icon hover"/>
                <CardMenu />
            </Edit>
            <h2>{title}</h2>
            <h3>{formatedAmount}</h3>
            <h4>{percentage}</h4>
        </Card>
    )
}