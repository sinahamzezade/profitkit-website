import { Costs } from "@/site/Costs";
import { Foot } from "@/site/Foot";
import { Hero } from "@/site/Hero";
import { Install } from "@/site/Install";
import { Ladder } from "@/site/Ladder";
import { Limits } from "@/site/Limits";
import { Mast } from "@/site/Mast";
import { Plans } from "@/site/Plans";
import { Rerank } from "@/site/Rerank";

/*
  Section order is locked by design-system/profitkit/pages/landing.md:
  masthead → hero → full-bleed product demo → costs → method → limits → pricing →
  install. The previous composition ran nine loosely-ordered sections including a
  trust strip, which that file explicitly rules out for this page.
*/
export function Site() {
  return (
    <div id="top" className="flex min-h-full flex-col">
      <Mast />
      <main className="flex-1">
        <Hero />
        <Rerank />
        <Costs />
        <Ladder />
        <Limits />
        <Plans />
        <Install />
      </main>
      <Foot />
    </div>
  );
}
