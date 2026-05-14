import { Box } from '@chakra-ui/react';

type RegionClimateVisualVariant = 'hero' | 'strip';

interface RegionClimateVisualProps {
  readonly climate: string;
  readonly regionId: string;
  readonly variant?: RegionClimateVisualVariant;
  readonly zoomOnGroupHover?: boolean;
}

interface RegionLandscapeScene {
  readonly sky: string;
  readonly haze: string;
  readonly sun: string;
  readonly far: string;
  readonly mid: string;
  readonly near: string;
  readonly accent: string;
  readonly stroke: string;
}

const scenes: Record<string, RegionLandscapeScene> = {
  alpine: {
    sky: '#dceeff',
    haze: '#f7fbff',
    sun: '#fff4bf',
    far: '#9fc4df',
    mid: '#6d91ad',
    near: '#34566f',
    accent: '#ffffff',
    stroke: '#24435a',
  },
  coastal: {
    sky: '#d9f4f8',
    haze: '#eefcff',
    sun: '#fff0b8',
    far: '#7ec8d8',
    mid: '#2f93aa',
    near: '#176274',
    accent: '#f8ffff',
    stroke: '#125064',
  },
  desert: {
    sky: '#f9dfb8',
    haze: '#fff3d7',
    sun: '#f0a84b',
    far: '#d39b55',
    mid: '#bd7935',
    near: '#7d4b28',
    accent: '#f6c56e',
    stroke: '#6f3f23',
  },
  forest: {
    sky: '#dcefdc',
    haze: '#f2faef',
    sun: '#e6d98a',
    far: '#8fbe91',
    mid: '#4f8c61',
    near: '#1f5639',
    accent: '#c7e4ba',
    stroke: '#1c4631',
  },
  temperate: {
    sky: '#dff2ec',
    haze: '#f2fbf7',
    sun: '#f2dd94',
    far: '#94c9a5',
    mid: '#5d9c75',
    near: '#2d6547',
    accent: '#8fd2c6',
    stroke: '#24543e',
  },
};

const fallbackScene: RegionLandscapeScene = {
  sky: '#edf2f7',
  haze: '#ffffff',
  sun: '#e2e8f0',
  far: '#cbd5e0',
  mid: '#a0aec0',
  near: '#4a5568',
  accent: '#edf2f7',
  stroke: '#2d3748',
};

export function RegionClimateVisual({
  climate,
  regionId,
  variant = 'strip',
  zoomOnGroupHover = false,
}: RegionClimateVisualProps) {
  const normalizedClimate = climate.toLowerCase();
  const scene = scenes[normalizedClimate] ?? fallbackScene;
  const seed = hashRegion(regionId || normalizedClimate);
  const isHero = variant === 'hero';
  const sunX = 82 + (seed % 140);
  const sunY = 42 + (seed % 28);
  const horizon = 94 + (seed % 18);

  return (
    <Box
      aria-hidden="true"
      borderColor={scene.far}
      borderRadius={isHero ? 'md' : '0'}
      borderWidth={isHero ? '1px' : '0'}
      h={isHero ? { base: '120px', md: '160px' } : '72px'}
      minW="0"
      overflow="hidden"
      w="full"
    >
      <svg
        height="100%"
        preserveAspectRatio="xMidYMid slice"
        style={{
          transform: 'scale(1)',
          transformOrigin: 'center',
          transition: 'transform 180ms ease',
        }}
        {...(zoomOnGroupHover ? { className: 'region-card-visual' } : {})}
        viewBox="0 0 640 180"
        width="100%"
      >
        <rect fill={scene.sky} height="180" width="640" />
        <circle cx={sunX} cy={sunY} fill={scene.sun} opacity="0.88" r={isHero ? 30 : 24} />
        <path d={buildHazePath(horizon)} fill={scene.haze} opacity="0.62" />
        {renderLandscape(normalizedClimate, scene, seed, horizon)}
      </svg>
    </Box>
  );
}

function renderLandscape(
  climate: string,
  scene: RegionLandscapeScene,
  seed: number,
  horizon: number,
) {
  if (climate === 'alpine') return renderAlpine(scene, seed, horizon);
  if (climate === 'coastal') return renderCoastal(scene, seed, horizon);
  if (climate === 'desert') return renderDesert(scene, seed, horizon);
  if (climate === 'forest') return renderForest(scene, seed, horizon);
  if (climate === 'temperate') return renderTemperate(scene, seed, horizon);
  return renderTemperate(scene, seed, horizon);
}

function renderAlpine(scene: RegionLandscapeScene, seed: number, horizon: number) {
  const offset = seed % 26;
  return (
    <>
      <path d={`M0 180 L0 ${horizon + 26} L92 ${42 + offset} L178 ${132} L274 ${52 - offset / 2} L372 ${128} L470 ${48 + offset / 3} L640 ${136} L640 180 Z`} fill={scene.far} />
      <path d={`M80 ${60 + offset} L122 ${105} L102 ${100} Z M258 ${62 - offset / 2} L290 110 L270 104 Z M452 ${58 + offset / 3} L500 114 L468 106 Z`} fill={scene.accent} opacity="0.92" />
      <path d={`M0 180 L0 ${horizon + 48} C96 ${116 - offset / 2} 162 ${138} 246 ${116} C354 ${88} 434 ${142} 640 ${96} L640 180 Z`} fill={scene.near} />
      <path d="M0 158 C94 140 142 166 226 148 C338 124 432 164 640 132" fill="none" opacity="0.36" stroke={scene.stroke} strokeWidth="4" />
    </>
  );
}

function renderCoastal(scene: RegionLandscapeScene, seed: number, horizon: number) {
  const offset = seed % 24;
  return (
    <>
      <path d={`M0 ${horizon + 12} C98 ${horizon - 10} 184 ${horizon + 20} 292 ${horizon + 2} C412 ${horizon - 18} 514 ${horizon + 10} 640 ${horizon - 6} L640 180 L0 180 Z`} fill={scene.mid} />
      <path d={`M0 132 C90 ${118 + offset / 3} 170 ${145} 252 ${130} C350 ${110} 446 ${150} 640 ${118} L640 180 L0 180 Z`} fill={scene.far} opacity="0.88" />
      <path d={`M0 180 L0 148 C120 ${126} 226 ${178} 348 ${138} C446 ${106} 538 ${144} 640 128 L640 180 Z`} fill={scene.near} />
      <path d="M42 138 C88 128 126 128 170 138 M228 136 C270 126 316 126 360 136 M412 132 C468 122 526 122 584 132" fill="none" opacity="0.7" stroke={scene.accent} strokeLinecap="round" strokeWidth="5" />
      <path d={`M484 180 L532 ${92 + offset} L570 180 Z`} fill={scene.stroke} opacity="0.7" />
    </>
  );
}

function renderDesert(scene: RegionLandscapeScene, seed: number, horizon: number) {
  const offset = seed % 32;
  return (
    <>
      <path d={`M0 180 L0 ${horizon + 30} C84 ${92 + offset / 2} 172 ${126} 256 ${104} C376 ${70} 480 ${130} 640 ${88} L640 180 Z`} fill={scene.far} />
      <path d={`M0 180 L0 138 C104 ${98} 212 ${178} 332 ${128} C438 ${84} 532 ${138} 640 112 L640 180 Z`} fill={scene.mid} />
      <path d={`M0 180 L0 158 C112 ${132} 214 ${170} 322 ${148} C442 ${124} 526 ${166} 640 140 L640 180 Z`} fill={scene.near} />
      <path d="M56 146 C116 130 178 132 236 150 M292 138 C358 118 420 124 480 146 M496 158 C542 148 586 150 628 162" fill="none" opacity="0.56" stroke={scene.accent} strokeLinecap="round" strokeWidth="4" />
      <path d={`M104 180 L126 ${126 + offset / 3} L146 180 M504 180 L522 ${136 - offset / 4} L542 180`} fill="none" stroke={scene.stroke} strokeLinecap="round" strokeWidth="5" />
    </>
  );
}

function renderForest(scene: RegionLandscapeScene, seed: number, horizon: number) {
  const offset = seed % 18;
  return (
    <>
      <path d={`M0 180 L0 ${horizon + 34} C120 ${94 + offset} 226 ${118} 348 ${92} C472 ${66} 548 ${118} 640 ${86} L640 180 Z`} fill={scene.far} />
      {buildTrees(20, 14, scene.mid, 0.78, 94 + offset)}
      {buildTrees(14, 28, scene.near, 1, 112)}
      <path d="M0 168 C108 148 196 178 310 154 C430 130 512 164 640 144 L640 180 L0 180 Z" fill={scene.near} />
      <path d="M42 154 C108 138 178 154 238 142 M342 146 C424 128 494 146 596 130" fill="none" opacity="0.34" stroke={scene.accent} strokeLinecap="round" strokeWidth="5" />
    </>
  );
}

function renderTemperate(scene: RegionLandscapeScene, seed: number, horizon: number) {
  const offset = seed % 22;
  return (
    <>
      <path d={`M0 180 L0 ${horizon + 32} C100 ${88 + offset} 194 ${116} 300 ${94} C408 ${72} 512 ${114} 640 ${88} L640 180 Z`} fill={scene.far} />
      <path d={`M0 180 L0 130 C102 ${110} 188 ${150} 292 ${124} C404 ${96} 514 ${136} 640 104 L640 180 Z`} fill={scene.mid} />
      <path d={`M0 180 L0 152 C112 ${132} 206 ${166} 320 ${146} C436 ${126} 518 ${164} 640 138 L640 180 Z`} fill={scene.near} />
      <path d={`M76 180 C106 ${142 - offset / 3} 134 ${142 - offset / 3} 164 180 M402 180 C436 ${128 + offset / 4} 478 ${128 + offset / 4} 518 180`} fill={scene.accent} opacity="0.5" />
      <path d="M32 160 C96 146 150 164 218 150 M284 146 C364 130 438 150 520 136" fill="none" opacity="0.4" stroke={scene.accent} strokeLinecap="round" strokeWidth="4" />
    </>
  );
}

function buildTrees(
  count: number,
  spacing: number,
  fill: string,
  opacity: number,
  baseY: number,
) {
  return Array.from({ length: count }, (_, index) => {
    const x = index * spacing + (index % 2) * 7;
    const height = 34 + (index % 4) * 9;
    return (
      <path
        d={`M${x} ${baseY} L${x + 15} ${baseY - height} L${x + 30} ${baseY} Z`}
        fill={fill}
        key={`${fill}-${index}`}
        opacity={opacity}
      />
    );
  });
}

function buildHazePath(horizon: number): string {
  return `M0 ${horizon} C96 ${horizon - 18} 182 ${horizon + 10} 284 ${horizon - 8} C410 ${horizon - 30} 508 ${horizon + 12} 640 ${horizon - 16} L640 ${horizon + 42} C514 ${horizon + 58} 392 ${horizon + 28} 280 ${horizon + 48} C172 ${horizon + 66} 82 ${horizon + 30} 0 ${horizon + 48} Z`;
}

function hashRegion(value: string): number {
  return Array.from(value).reduce((hash, char) => (hash * 31 + (char.codePointAt(0) ?? 0)) % 997, 17);
}
