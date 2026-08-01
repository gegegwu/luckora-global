export function ProgressBar({
  current,
  total,
}: {
  current: number;
  total: number;
}) {
  const progress = Math.round((current / total) * 100);

  return (
    <div className="progress-wrap">
      <div className="progress-meta">
        <span>
          Question {current} / {total}
        </span>
        <strong>{progress}%</strong>
      </div>
      <div className="progress-track" aria-label={`${progress}% complete`}>
        <span style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}
