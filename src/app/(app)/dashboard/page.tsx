import ActionButton from "@/components/ActionButton";

export default function Dashboard() {
  return (
    <div className="stats stats-vertical md:stats-horizontal shadow-lg border">
      <div className="stat">
        <div className="stat-title">In</div>
        <div className="stat-value">
          <span className="countdown font-mono text-2xl">
            <span style={{ "--value": 0 }}>00</span>:
            <span style={{ "--value": 0 }}>00</span>:
            <span style={{ "--value": 0 }}>00</span>
          </span>
        </div>
        <div className="stat-desc">Hrs</div>
        <div className="stat-actions">
          <ActionButton name="Login" className="bg-green-200" />
        </div>
      </div>

      <div className="stat">
        <div className="stat-title">Out</div>
        <div className="stat-value">
          <span className="countdown font-mono text-2xl">
            <span style={{ "--value": 0 }}>00</span>:
            <span style={{ "--value": 0 }}>00</span>:
            <span style={{ "--value": 0 }}>00</span>
          </span>
        </div>
        <div className="stat-desc">Hrs</div>
        <div className="stat-actions flex gap-1">
          <ActionButton name="Break" className="bg-yellow-200" />
          <ActionButton name="Back" className="bg-blue-200" />
        </div>
      </div>

      <div className="stat">
        <div className="stat-title">Remaining</div>
        <div className="stat-value">
          <span className="countdown font-mono text-2xl">
            <span style={{ "--value": 0 }}>00</span>:
            <span style={{ "--value": 0 }}>00</span>:
            <span style={{ "--value": 0 }}>00</span>
          </span>
        </div>
        <div className="stat-desc">Hrs</div>
        <div className="stat-actions md:text-end">
          <ActionButton name="Logout" className="bg-red-200" />
        </div>
      </div>
    </div>
  );
}
