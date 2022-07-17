import { Fragment } from "react";
import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";

const Meals = props => {
    return (
        <Fragment>
            <AvailableMeals />
            <MealsSummary />
        </Fragment>
    );
}
export default Meals;