import { Box, Image } from '@chakra-ui/react';

import type { PreparedImageSlot } from 'src/shared/lib';
import { RegionClimateVisual } from '../RegionClimateVisual/RegionClimateVisual';

type RegionCoverVisualVariant = 'hero' | 'strip';

interface RegionCoverVisualProps {
  readonly climate: string;
  readonly image: PreparedImageSlot | null;
  readonly regionId: string;
  readonly variant?: RegionCoverVisualVariant;
  readonly zoomOnGroupHover?: boolean;
}

export function RegionCoverVisual({
  climate,
  image,
  regionId,
  variant = 'strip',
  zoomOnGroupHover = false,
}: RegionCoverVisualProps) {
  if (!image) {
    return (
      <RegionClimateVisual
        climate={climate}
        regionId={regionId}
        variant={variant}
        zoomOnGroupHover={zoomOnGroupHover}
      />
    );
  }

  const isHero = variant === 'hero';

  return (
    <Box
      bg="#071018"
      borderColor={isHero ? 'rgba(103, 232, 249, 0.28)' : 'transparent'}
      borderRadius={isHero ? 'md' : '0'}
      borderWidth={isHero ? '1px' : '0'}
      h={isHero ? { base: '220px', md: '320px' } : { base: '176px', md: '184px' }}
      minW="0"
      overflow="hidden"
      position="relative"
      w="full"
      _after={{
        bg: 'linear-gradient(180deg, rgba(2, 7, 13, 0) 42%, rgba(2, 7, 13, 0.52) 100%)',
        content: '""',
        inset: 0,
        pointerEvents: 'none',
        position: 'absolute',
      }}
    >
      <Image
        alt={image.alt}
        className={zoomOnGroupHover ? 'region-card-visual' : undefined}
        draggable={false}
        h="full"
        height={image.height}
        loading={image.loading}
        objectFit="cover"
        src={image.src}
        srcSet={image.srcSet}
        transformOrigin="center"
        transition="transform 180ms ease"
        w="full"
        width={image.width}
      />
    </Box>
  );
}
