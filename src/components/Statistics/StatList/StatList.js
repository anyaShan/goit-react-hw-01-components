export const StatList = ({ stats }) => {
  return (
    <ul class="stat-list">
      {stats.map(({ id, label, percentage }) => (
        <li key={id}>
          <span class="label">{label}</span>
          <span class="percentage">{percentage}%</span>
        </li>
      ))}
    </ul>
  );
};
