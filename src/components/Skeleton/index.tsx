import { SkeletonBox } from './styles'

type Props = {
  width?: string
  height?: string
}

const Skeleton = ({ width, height }: Props) => (
  <SkeletonBox width={width} height={height} />
)

export default Skeleton
