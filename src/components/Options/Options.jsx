import styles from "./Options.module.css";

const Options = ({ updateFeedback, totalFeedback }) => (
  <div className={styles.options}>
    <button onClick={() => updateFeedback("good")}>Good</button>
    <button onClick={() => updateFeedback("neutral")}>Neutral</button>
    <button onClick={() => updateFeedback("bad")}>Bad</button>
    {totalFeedback > 0 && (
      <button onClick={() => updateFeedback("reset")}>Reset</button>
    )}
  </div>
);

export default Options;
