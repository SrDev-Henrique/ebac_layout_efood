import styled, { keyframes } from 'styled-components'

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
`

type SkeletonProps = {
  width?: string
  height?: string
}

export const SkeletonBox = styled.div<SkeletonProps>`
  width: ${({ width }) => width ?? '100%'};
  height: ${({ height }) => height ?? '16px'};
  background-color: #e0e0e0;
  border-radius: 4px;
  animation: ${pulse} 1.5s ease-in-out infinite;
`
