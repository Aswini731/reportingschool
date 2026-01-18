import { Check } from 'lucide-react';
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

      {/* Games count */}
      <p className="mt-2 text-xs text-muted-foreground">
        {domain.gamesCount} {domain.gamesCount === 1 ? 'game' : 'games'}
      </p>
    </div>
  );
};
