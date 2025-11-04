//import HelloRedux from "./HelloRedux";
import CounterRedux from "./CounterRedux";
import AddRedux from "./AddRedux";
import Add from "../../Lab3/Add";
import { RootState } from "../store";
import HelloRedux from "./HelloRedux";
export default function ReduxExamples() {
  return (
    <div>
      <h2>Redux Examples</h2>
      <HelloRedux />
      <CounterRedux />
      <AddRedux />
    </div>
  );
}
