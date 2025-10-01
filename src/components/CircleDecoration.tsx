interface CircleDecorationProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  opacity?: number;
}

export const CircleDecoration = ({ 
  className = "", 
  size = "md",
  opacity = 0.1 
}: CircleDecorationProps) => {
  const sizeClasses = {
    sm: "w-24 h-24",
    md: "w-48 h-48",
    lg: "w-72 h-72",
    xl: "w-96 h-96",
  };

  return (
    <div
      className={`absolute rounded-full bg-primary blur-3xl pointer-events-none ${sizeClasses[size]} ${className}`}
      style={{ opacity }}
    />
  );
};
