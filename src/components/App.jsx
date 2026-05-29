import Emoji from "./Card";
import emojipedia from "../emojipedia";

function createEmoji(emojiEntry) {
  return (
    <Emoji
      key={emojiEntry.id}
      id={emojiEntry.id}
      emoji={emojiEntry.emoji}
      name={emojiEntry.name}
      meaning={emojiEntry.meaning}
    />
  )
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(createEmoji)}
      </dl>
    </div>);
}

export default App;
