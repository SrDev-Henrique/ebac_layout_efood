import Skeleton from '@/components/Skeleton'
import { layout, spacing } from '@/styles/tokens'
import styled from 'styled-components'

const Card = styled.article`
  max-width: ${layout.restaurantCardWidth};
  width: 100%;
  border: 1px solid #e0e0e0;
  background-color: #fff;
  margin-bottom: ${layout.restaurantCardSpacing};
`

const Body = styled.div`
  padding: ${spacing.xs};
  display: flex;
  flex-direction: column;
  gap: ${spacing.xs};
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const SkeletonRestaurantCard = () => (
  <Card>
    <Skeleton height="217px" />
    <Body>
      <Row>
        <Skeleton width="55%" height="14px" />
        <Skeleton width="30px" height="14px" />
      </Row>
      <Skeleton height="12px" />
      <Skeleton width="85%" height="12px" />
      <Skeleton width="70%" height="12px" />
      <Skeleton width="82px" height="28px" />
    </Body>
  </Card>
)

export default SkeletonRestaurantCard
