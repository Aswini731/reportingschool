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
          'absolute top-3 right-3 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all',
          isSelected
            ? 'bg-primary border-primary'
            : 'border-border group-hover:border-primary/50'
        )}
      >
        {isSelected && <Check className="w-3 h-3 text-primary-foreground" />}
      </div>

      {/* Domain name */}
      <h3 className="font-display font-bold text-lg text-foreground pr-8 mb-2">
        {domain.name}
      </h3>

      {/* FTR percentage */}
      <div className="flex items-baseline gap-1 mb-3">
        <span className="text-3xl font-bold text-foreground">{domain.ftr}</span>
        <span className="text-lg text-muted-foreground">%</span>
        <span className="text-sm text-muted-foreground ml-1">FTR</span>
      </div>

      {/* Segment badge */}
      <div className={cn('segment-badge', segmentClass)}>
        {getSegmentLabel(domain.segment)}
      </div>

      {/* Games count */}
      <p className="mt-3 text-sm text-muted-foreground">
        {domain.gamesCount} {domain.gamesCount === 1 ? 'game' : 'games'} played
      </p>
    </div>
  );
};
