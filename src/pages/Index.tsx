import { useState } from 'react';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { DomainSummary } from '@/components/dashboard/DomainSummary';
import { GamesTable } from '@/components/dashboard/GamesTable';
import { domains, games } from '@/data/mockData';

const Index = () => {
  const [selectedDomains, setSelectedDomains] = useState<string[]>([]);

  const handleDomainToggle = (domainId: string) => {
    setSelectedDomains((prev) =>
      prev.includes(domainId)
        ? prev.filter((id) => id !== domainId)
        : [...prev, domainId]
    );
  };

  const handleSelectAll = () => {
    setSelectedDomains(domains.map((d) => d.id));
  };

  const handleClearAll = () => {
    setSelectedDomains([]);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <DashboardHeader childName="Alex" />

        <div className="space-y-6">
          <DomainSummary
            domains={domains}
            selectedDomains={selectedDomains}
            onDomainToggle={handleDomainToggle}
            onSelectAll={handleSelectAll}
            onClearAll={handleClearAll}
          />

          <GamesTable games={games} selectedDomains={selectedDomains} />
        </div>
      </div>
    </div>
  );
};

export default Index;
