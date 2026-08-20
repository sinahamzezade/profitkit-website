import Image from "next/image";
import { Face } from "@/site/Face";
import { FACES, SKUS } from "@/site/media";

export function DashMock() {
  return (
    <div className="lift relative rounded-2xl bg-white p-4 md:p-5">
      <div className="mb-4 flex items-center justify-between">
        <p className="font-display text-[0.95rem] font-bold">Contribution board</p>
        <span className="rounded-full bg-wash px-2.5 py-0.5 text-[0.7rem] font-semibold text-forest">
          Live
        </span>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <div className="rounded-xl bg-canvas p-3">
          <p className="text-[0.7rem] text-mute">Remainder</p>
          <p className="num mt-1 text-[1.15rem] font-semibold">$4,812</p>
        </div>
        <div className="rounded-xl bg-canvas p-3">
          <p className="text-[0.7rem] text-mute">Draining</p>
          <p className="num mt-1 text-[1.15rem] font-semibold">8 SKUs</p>
        </div>
        <div className="rounded-xl bg-canvas p-3">
          <p className="text-[0.7rem] text-mute">Window</p>
          <p className="num mt-1 text-[1.15rem] font-semibold">90d</p>
        </div>
      </div>
      <div className="mt-5 flex h-28 items-end gap-2">
        {[40, 70, 48, 92, 36, 80, 58, 74].map((h, i) => (
          <div
            key={i}
            className={`flex-1 rounded-t-md ${i === 3 || i === 5 ? "bg-spring" : "bg-ink/15"}`}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      <div className="mt-4 flex -space-x-2">
        {FACES.map((face) => (
          <Face key={face.src} src={face.src} alt={face.alt} size={32} className="ring-2 ring-white" />
        ))}
      </div>

      <div className="lift absolute -bottom-6 -left-4 hidden w-52 items-center gap-3 rounded-xl bg-white p-2 sm:flex">
        <Image
          src={SKUS.parka.src}
          alt={SKUS.parka.alt}
          width={48}
          height={48}
          className="size-12 rounded-lg object-cover"
        />
        <div>
          <p className="text-[0.7rem] text-mute">Worst this week</p>
          <p className="font-display text-[0.9rem] font-bold">Field Parka</p>
          <p className="num text-[0.8rem] font-medium text-[#C43C32]">−$428</p>
        </div>
      </div>
    </div>
  );
}
