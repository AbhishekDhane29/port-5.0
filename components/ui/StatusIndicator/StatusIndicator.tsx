import React from "react";
import "./StatusIndicator.css";

export interface StatusIndicatorProps {
  label?: string;
  className?: string;
}

/**
 * StatusIndicator
 *
 * The "Available for hire" indicator displayed in the header.
 * Shows a filled blue dot alongside a muted uppercase label.
 *
 * @example
 * <StatusIndicator label="Available for hire" />
 */
export const StatusIndicator: React.FC<StatusIndicatorProps> = ({
  label = "Available for hire",
  className = "",
}) => {
  return (
    <div className={`ds-status-indicator ${className}`.trim()} role="status">
      <span className="ds-status-indicator__dot" aria-hidden="true" />
      <span className="ds-status-indicator__label">{label}</span>
    </div>
  );
};

export default StatusIndicator;
