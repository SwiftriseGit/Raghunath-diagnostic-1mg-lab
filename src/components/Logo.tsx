interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  layout?: 'horizontal' | 'vertical';
  lightMode?: boolean;
}

export default function Logo({ size = 'md' }: LogoProps) {
  const dimensions = {
    sm: { iconWidth: 62, iconHeight: 62 },
    md: { iconWidth: 72, iconHeight: 72 },
    lg: { iconWidth: 110, iconHeight: 110 }
  }[size];

  return (
    <img
      src="/logo.png"
      alt="Raghunath Diagnostics"
      className="logo-svg"
      style={{
        width: 'auto',
        height: dimensions.iconHeight,
        objectFit: 'contain',
        filter: 'drop-shadow(0 2px 8px rgba(126, 30, 43, 0.12))'
      }}
    />
  );
}
