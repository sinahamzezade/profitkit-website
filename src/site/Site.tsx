import { Apart } from "@/site/Apart";
import { Ask } from "@/site/Ask";
import { Closer } from "@/site/Closer";
import { Connect } from "@/site/Connect";
import { Foot } from "@/site/Foot";
import { Lead } from "@/site/Lead";
import { Mast } from "@/site/Mast";
import { Ops } from "@/site/Ops";
import { Plans } from "@/site/Plans";
import { TrustStrip } from "@/site/TrustStrip";
import { WorkFlow } from "@/site/WorkFlow";

export function Site() {
  return (
    <div id="top" className="flex min-h-full flex-col">
      <Mast />
      <main className="flex-1">
        <Lead />
        <TrustStrip />
        <Apart />
        <WorkFlow />
        <Ops />
        <Connect />
        <Plans />
        <Ask />
        <Closer />
      </main>
      <Foot />
    </div>
  );
}
