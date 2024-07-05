import { Suspense } from "react";
import { get } from "./get";

export const TimeStamp = ({ nonce }: { nonce: string }) => {
  return (
    <div>
      <Suspense key={JSON.stringify(nonce)} fallback={<>loading...</>}>
        <TimeStampAsync nonce={nonce} />
      </Suspense>
    </div>
  );
};

export const TimeStampAsync = async ({ nonce }: { nonce: string }) => {
  const { key } = await get<{ key: string }>(
    `http://localhost:3000/api?key=${nonce}`
  );

  return <div>key: {key}</div>;
};
