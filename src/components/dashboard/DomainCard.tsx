import { Check, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { Domain, getSegmentLabel } from '@/data/mockData';
import { cn } from '@/lib/utils';

interface DomainCardProps {
  domain: Domain;
  isSelected: boolean;
  onClick: () => void;
}

export const DomainCard = ({ domain, isSelected, onClick }: DomainCardProps) => {
  const segmentClass = {
    'emerging': 'segment-emerging',
    'developing': 'segment-developing',
    'age-appropriate': 'segment-age-appropriate',
  }[domain.segment];

  const getTrendIcon = () => {
    if (domain.ftrChange > 0) {
      return <TrendingUp className="w-3 h-3 text-[hsl(var(--age-appropriate))]" />;
    } else if (domain.ftrChange < 0) {
      return <TrendingDown className="w-3 h-3 text-[hsl(var(--emerging))]" />;
    }
    return <Minus className="w-3 h-3 text-muted-foreground" />;
  };

  const getTrendColor = () => {
    if (domain.ftrChange > 0) return 'text-[hsl(var(--age-appropriate))]';
    if (domain.ftrChange < 0) return 'text-[hsl(var(--emerging))]';
    return 'text-muted-foreground';
  };

  return (
    <div
      className={cn('domain-card group', isSelected && 'selected')}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
    >
      {/* Selection indicator */}
      <div
        className={cn(
          'absolute top-2 right-2 w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all',
          isSelected
            ? 'bg-primary border-primary'
            : 'border-border group-hover:border-primary/50'
        )}
      >
        {isSelected && <Check className="w-2.5 h-2.5 text-primary-foreground" />}
      </div>

      {/* Domain name */}
      <h3 className="font-display font-semibold text-sm text-foreground pr-6 mb-1 line-clamp-2">
        {domain.name}
      </h3>

      {/* FTR percentage */}
      <div className="flex items-baseline gap-0.5 mb-2">
        <span className="text-2xl font-bold text-foreground">{domain.ftr}</span>
        <span className="text-sm text-muted-foreground">%</span>
        <span className="text-xs text-muted-foreground ml-1">FTR</span>
      </div>

      {/* Segment badge */}
      <div className={cn('segment-badge text-xs px-2 py-0.5', segmentClass)}>
        {getSegmentLabel(domain.segment)}
      </div>

      {/* 7-day FTR change */}
      <div className={cn('mt-2 flex items-center gap-1 text-xs', getTrendColor())}>
        {getTrendIcon()}
        <span className="font-medium">
          {domain.ftrChange > 0 ? '+' : ''}{domain.ftrChange}%
        </span>
        <span className="text-muted-foreground">7d</span>
      </div>
    </div>
  );
};
