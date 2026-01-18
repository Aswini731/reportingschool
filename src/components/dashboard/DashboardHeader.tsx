import { GraduationCap, Calendar } from 'lucide-react';

interface DashboardHeaderProps {
  childName?: string;
}

export const DashboardHeader = ({ childName = 'Alex' }: DashboardHeaderProps) => {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <header className="mb-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
            <GraduationCap className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
              {childName}'s Learning Report
            </h1>
            <p className="text-muted-foreground text-sm">
              Track progress across all learning domains
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="w-4 h-4" />
          <span>{today}</span>
        </div>
      </div>
    </header>
  );
};
