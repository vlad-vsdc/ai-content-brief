const skeletonClass = "skeleton-shimmer rounded-xl bg-white/10";

export function BriefSkeleton() {
  return (
    <div className="mt-4 space-y-5">
      <div className={`${skeletonClass} h-7 w-2/3`} />

      <div className="grid gap-3 md:grid-cols-3">
        <div className={`${skeletonClass} h-20`} />
        <div className={`${skeletonClass} h-20`} />
        <div className={`${skeletonClass} h-20`} />
      </div>

      <div className="space-y-3">
        <div className={`${skeletonClass} h-4 w-full`} />
        <div className={`${skeletonClass} h-4 w-11/12`} />
        <div className={`${skeletonClass} h-4 w-4/5`} />
      </div>

      <div className="space-y-3">
        <div className={`${skeletonClass} h-24`} />
        <div className={`${skeletonClass} h-24`} />
      </div>
    </div>
  );
}
