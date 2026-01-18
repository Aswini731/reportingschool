import { Domain } from '@/data/mockData';
import { DomainCard } from './DomainCard';
import { Button } from '@/components/ui/button';
import { CheckSquare, XSquare } from 'lucide-react';

interface DomainSummaryProps {
  domains: Domain[];
  selectedDomains: string[];
  onDomainToggle: (domainId: string) => void;
  onSelectAll: () => void;
  onClearAll: () => void;
}

export const DomainSummary = ({
  domains,
  selectedDomains,
  onDomainToggle,
  onSelectAll,
  onClearAll,
}: DomainSummaryProps) => {
  const allSelected = selectedDomains.length === domains.length;
  const noneSelected = selectedDomains.length === 0;

  return (
    <section className="dashboard-section">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="font-display text-xl font-bold text-foreground">
            Domain Performance
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Select domains to filter the games table below
          </p>
        </div>

        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={onSelectAll}
            disabled={allSelected}
            className="gap-2"
          >
            <CheckSquare className="w-4 h-4" />
            Select All
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={onClearAll}
            disabled={noneSelected}
            className="gap-2"
          >
            <XSquare className="w-4 h-4" />
            Clear
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {domains.map((domain) => (
          <DomainCard
            key={domain.id}
            domain={domain}
            isSelected={selectedDomains.includes(domain.id)}
            onClick={() => onDomainToggle(domain.id)}
          />
        ))}
      </div>

      {selectedDomains.length > 0 && (
        <p className="mt-4 text-sm text-muted-foreground">
          {selectedDomains.length} {selectedDomains.length === 1 ? 'domain' : 'domains'} selected
        </p>
      )}
    </section>
  );
};
