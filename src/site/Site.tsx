import { Costs } from "@/site/Costs";
import { DashPreview } from "@/site/DashPreview";
import { Foot } from "@/site/Foot";
import { Hero } from "@/site/Hero";
import { Install } from "@/site/Install";
import { Ladder } from "@/site/Ladder";
import { Limits } from "@/site/Limits";
import { Mast } from "@/site/Mast";
import { Operators } from "@/site/Operators";
import { Plans } from "@/site/Plans";
import { Rerank } from "@/site/Rerank";

/*
  Order follows design-system/redline/pages/landing.md, which now records ten
  sections rather than eight. Two were added deliberately and that file was updated
  to match — a locked list that no longer describes the page is worse than none.

  The spine is unchanged: demo early, limits before pricing, one closing ask.
  DashPreview is the second and deeper product look, after the re-rank chart has
  made the argument. Operators sits between method and limits, where a reader who
  now understands the method wants to know whether it is aimed at them.
*/
export function Site() {
  return (
    <div id="top" className="flex min-h-full flex-col">
      <Mast />
      <main className="flex-1">
        <Hero />
        <Rerank />
        <DashPreview />
        <Costs />
        <Ladder />
        <Operators />
        <Limits />
        <Plans />
        <Install />
      </main>
      <Foot />
    </div>
  );
}
