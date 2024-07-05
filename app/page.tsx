import { Refresh } from "@/components/refresh";
import { ServerComponent } from "@/components/server-component";

export default function Home({
  searchParams: { key1, key2 },
}: {
  searchParams: { key1: string; key2: string };
}) {
  return (
    <div className="space-y-12">
      <div>
        <div>key 1: {key1}</div>
        <div>key 2: {key2}</div>
      </div>
      <div>
        <Refresh key1={key1} key2={key2} />
      </div>
      <div>
        <ServerComponent nonce={key1} />
      </div>
      <div>
        <ServerComponent nonce={key2} />
      </div>
    </div>
  );
}
