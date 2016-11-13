import { FlowConstants } from '../actions/flow_actions';
import merge from 'lodash/merge';
const defaultState = {
  grid: [],
  lastMove: []
};

const FlowReducer = (state = defaultState, action) => {
  let newState = merge({}, state);
  switch(action.type) {
    case FlowConstants.CREATE_FLOW:
      newState.grid = action.flow;
      return newState;
    case FlowConstants.TOGGLE_BRIDGE:
      let setGrid = newState.grid;
      let [a, b] = action.coords;
      if ((!setGrid[a][b - 2] || !setGrid[a][b - 2][1]) &&
          (!setGrid[a][b + 2] || !setGrid[a][b + 2][1])) {
          newState.grid[a][b][1] = !newState.grid[a][b][1];
      }
      return newState;
    case FlowConstants.START_FLOW:
      let [i, j] = action.coords;
      newState.lastMove = [i, j, "forward"];
      return newState;
    case FlowConstants.CONTINUE_FLOW:
      let grid = newState.grid;
      let [x, y, move] = newState.lastMove;
      if (move === "forward") {
        if (grid[x - 1] && grid[x - 1][y][1]) {
          newState.grid[x - 1][y][0] = true;
          newState.lastMove = [x - 1, y, "down"];
        } else if (grid[x + 1] && grid[x + 1][y][1]) {
          newState.grid[x + 1][y][0] = true;
          newState.lastMove = [x + 1, y, "up"];
        } else {
          newState.grid[x][y + 1] = true;
          newState.lastMove = [x, y + 1, "forward"];
        }
      } else {
        if (move === "down") {
          if (grid[x - 1][y][1]) {
            newState.grid[x][y + 1] = true;
            newState.lastMove = [x, y + 1, "forward"];
          } else {
            newState.grid[x + 1][y] = true;
            newState.lastMove = [x + 1, y, "down"];
          }
        } else if (move === "up") {
          if (grid[x + 1][y][1]) {
            newState.grid[x][y + 1] = true;
            newState.lastMove = [x, y + 1, "forward"];
          } else {
            newState.grid[x - 1][y] = true;
            newState.lastMove = [x - 1, y, "down"];
          }
        }
      }
      return newState;
    default:
      return state;
  }
};

export default FlowReducer;
