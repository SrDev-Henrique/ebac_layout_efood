import Skeleton from '@/components/Skeleton'
import { spacing } from '@/styles/tokens'
import styled from 'styled-components'

const Card = styled.article`
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
`

const Body = styled.div`
  padding: ${spacing.xs};
  display: flex;
  flex-direction: column;
  gap: ${spacing.xs};
  flex: 1;
`

const SkeletonFoodCard = () => (
  <Card>
    <Skeleton height="167px" />
    <Body>
      <Skeleton width="60%" height="14px" />
      <Skeleton height="12px" />
      <Skeleton width="85%" height="12px" />
      <Skeleton width="70%" height="12px" />
      <Skeleton height="28px" />
    </Body>
  </Card>
)

export default SkeletonFoodCard
