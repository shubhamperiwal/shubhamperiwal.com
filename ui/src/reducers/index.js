import { combineReducers } from "redux";
import UserReducer from "./userReducer";
import ExperienceReducer from "./experienceReducer";
import ImageReducer from "./imageReducer";
import AchievementReducer from "./achievementReducer";
import CurrentReducer from "./currentReducer";

//this is the main object which is thrown inside the store
const allReducers = combineReducers({
    user: UserReducer,
    experiences: ExperienceReducer,
    images: ImageReducer,
    achievements: AchievementReducer,
    current: CurrentReducer
});

export default allReducers;
