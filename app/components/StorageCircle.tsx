import styles from './StorageCircle.module.scss';


export interface circleOptions {
  activeColor?: string,
  activeBackgroundColor?: string,
  colors: string[],
  children: React.ReactNode,
  className?: string
}
const StorageCircle = ({ className, activeColor, activeBackgroundColor, colors, children }: circleOptions) => {
  const radius = 170
  const centerX = 190
  const centerY = 190

  const arcCnt = colors.length; // 8
  const rotationAngle = -90 + arcCnt
  const arcAngle = 360 / arcCnt; // 45 
  const arcTermAngle = arcCnt; // Math.floor(arcAngle / 10) // 4
  const arcBarAngle = arcAngle - arcTermAngle // 41 

  const points: [number, number][] = []
  for (let i = 0; i < arcCnt; i++) {
    const seta = (arcBarAngle * i + arcTermAngle * i + rotationAngle) * Math.PI / 180;
    const px = centerX + radius * Math.cos(seta)
    const py = centerY + radius * Math.sin(seta)
    points.push([px, py])
    const seta1 = (arcBarAngle * (i + 1) + arcTermAngle * i + rotationAngle) * Math.PI / 180;
    const px1 = centerX + radius * Math.cos(seta1)
    const py1 = centerY + radius * Math.sin(seta1)
    points.push([px1, py1])
  }
  return <div className={`${styles.container} ${className}`}>
    <svg className={styles.loader} xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 380 380">
      <defs>
        <linearGradient id={`grad-${activeColor}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={activeBackgroundColor ?? "#5F5F5F"} stopOpacity="0.68" />
          <stop offset="50%" stopColor={activeColor ?? "white"} />
          <stop offset="100%" stopColor={activeBackgroundColor ?? "#5F5F5F"} stopOpacity="0.68" />
        </linearGradient>
      </defs>

      <circle cx={centerX} cy={centerY} r={radius + 15} stroke="#5F5F5F" fill='none' fillOpacity="0" strokeWidth='3' strokeOpacity="0.68" />
      <circle className={styles.ani} cx={centerX} cy={centerY} r={radius + 10} stroke={`url(#${`grad-${activeColor}`})`} fill='none' fillOpacity="0" strokeWidth='3' strokeOpacity='0' style={{ animationDelay: `${Math.random()}s` }} />

      {colors.map((color, i) =>
        <><path key={'path-border' + color} d={` M ${points[2 * i][0]} ${points[2 * i][1]} A ${centerX} ${centerY}, 0, 0, 1, ${points[2 * i + 1][0]} ${points[2 * i + 1][1]}`} stroke={'#ffffff80'} strokeWidth='10' fill="transparent" />
          <path key={'path' + color} d={` M ${points[2 * i][0]} ${points[2 * i][1]} A ${centerX} ${centerY}, 0, 0, 1, ${points[2 * i + 1][0]} ${points[2 * i + 1][1]}`}
            stroke={color} strokeWidth='8' fill="transparent" filter={`drop-shadow(0 0 5px ${color}99)`}
          />
        </>)}
    </svg>
    <div className={styles.children}>{children}</div>
  </div>
}

export default StorageCircle;