import Tag from '../Tag'
import type { Restaurant } from '@/types/restaurant'
import {
  Card,
  CardHeader,
  CoverImage,
  Description,
  Rating,
  StarIcon,
  StyledButton,
  Tags,
  Title
} from './styles'

type Props = Restaurant

const RestaurantCard = ({ description, image, title, rating, tags }: Props) => (
  <Card>
    <CoverImage src={image} alt={title} />
    <Tags>
      {tags.map((tag) => (
        <Tag key={tag.text}>{tag.text}</Tag>
      ))}
    </Tags>
    <CardHeader>
      <Title>{title}</Title>
      <Rating>
        {rating}
        <StarIcon src="/images/estrela.png" alt="" aria-hidden="true" />
      </Rating>
    </CardHeader>
    <Description>{description}</Description>
    <StyledButton type="button" aria-label={`Saiba mais sobre ${title}`}>
      Saiba mais
    </StyledButton>
  </Card>
)

export default RestaurantCard
