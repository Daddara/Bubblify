import { GET_BUNDLES } from "../constants";

export default function (state = [], action) {
	switch (action.type) {
		case GET_BUNDLES: return action.payload;
		// case CREATE_BOSS: return {
		// 	...state,
		// 	bosses: [...state.bosses.data, action.payload]
		// };
		// case DELETE_BOSS: return {
		// 	bosses: state.bosses.data.filter(boss => boss != action.payload)
		// };
		// case EDIT_BOSS: return {
		// 	bosses: state.bosses.data.forEach(boss => {
		// 		if(boss.id == action.payload.id){
		// 			boss = action.payload;
		// 		}
		// 	})
		// };
		default: return state;
	}
}