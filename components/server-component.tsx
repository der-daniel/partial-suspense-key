import { Suspense } from "react";
import { get } from "./get";

export const ServerComponent = ({ nonce }: { nonce: string }) => {
  return (
    <div>
      <Suspense key={JSON.stringify(nonce)} fallback={<>loading...</>}>
        <ServerComponentAsync nonce={nonce} />
      </Suspense>
    </div>
  );
};

export const ServerComponentAsync = async ({ nonce }: { nonce: string }) => {
  const { key } = await get<{ key: string }>(
    `http://localhost:3000/api?key=${nonce}`
  );

  return <div>key: {key}</div>;
};
