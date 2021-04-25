import { combineReducers } from "redux";
import UserReducer from "./userReducer";
import ExperienceReducer from "./experienceReducer";
import ImageReducer from "./imageReducer";
import ProjectsReducer from "./projectReducer";

//this is the main object which is thrown inside the store
const allReducers = combineReducers({
    user: UserReducer,
    experiences: ExperienceReducer,
    images: ImageReducer,
    projects: ProjectsReducer,
});

export default allReducers;
