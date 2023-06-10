import SkeletonElement from "./skeletonElement";

export default function SkeletonCard({}) {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton-card">
        <SkeletonElement type="avatar" />
      </div>
    </div>
  );
}
