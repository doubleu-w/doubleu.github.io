import { Suspense } from "react";
import ClientPage from "./ClientPage";

export default function Page(){
  return (
    <Suspense fallback={<section className="container" style={{paddingTop:24}}>Loading…</section>}>
      <ClientPage/>
    </Suspense>
  );
}
