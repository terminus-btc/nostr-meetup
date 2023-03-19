import { Filter } from "nostr-tools";
import useSubscription from "~/hooks/useSubscription";

export default function Events() {
  const relays = [
    // "wss://nostr.terminus.money",
    // "wss://brb.io",
    // "wss://nostr.wine",
    // "wss://relay.snort.social",
    "wss://gratten.duckdns.org/nostrrelay/relay2",
  ];

  const filters: Filter = {
    // since: Math.floor(Date.now() / 1000),
    kinds: [1],
  };

  const notes = useSubscription(relays, [filters]);

  return (
    <div className="flex flex-col overflow-y-auto w-1/3 h-64 border border-white">
      {notes.map((note) => (
        <div style={{ overflow: "hidden", flexShrink: 0 }} key={note.id}>
          <span style={{ color: "orange" }}>{note.pubkey.slice(0, 10)}</span>
          <span>: {note.content}</span>
        </div>
      ))}
    </div>
  );
}