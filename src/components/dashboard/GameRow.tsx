import { useState } from 'react';
import { ChevronRight, ChevronDown, Trophy, Clock, HelpCircle } from 'lucide-react';
import { Game, Target, getSegmentLabel, domains } from '@/data/mockData';
import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface GameRowProps {
  game: Game;
}

const FTRIndicator = ({ ftr, segment }: { ftr: number; segment: string }) => {
  const dotClass = {
    'emerging': 'ftr-dot-emerging',
    'developing': 'ftr-dot-developing',
    'age-appropriate': 'ftr-dot-age-appropriate',
  }[segment];

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="ftr-indicator cursor-help">
          <span className={cn('ftr-dot', dotClass)} />
          <span className="font-medium">{ftr}%</span>
        </div>
      </TooltipTrigger>
      <TooltipContent className="tooltip-content">
        <p className="font-medium">{getSegmentLabel(segment as any)}</p>
        <p className="text-muted-foreground mt-1">First Try Rate: {ftr}%</p>
      </TooltipContent>
    </Tooltip>
  );
};

const StatusBadge = ({ status, masteredOn }: { status: string; masteredOn: string | null }) => {
  const isMastered = status === 'mastered';

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          className={cn(
            'status-badge cursor-help',
            isMastered ? 'status-mastered' : 'status-in-progress'
          )}
        >
          {isMastered ? (
            <>
              <Trophy className="w-3 h-3" />
              <span>Mastered</span>
            </>
          ) : (
            <>
              <Clock className="w-3 h-3" />
              <span>In Progress</span>
            </>
          )}
        </div>
      </TooltipTrigger>
      <TooltipContent className="tooltip-content">
        {isMastered
          ? `Mastery achieved on ${masteredOn}`
          : 'Still working towards mastery'}
      </TooltipContent>
    </Tooltip>
  );
};

const MetricCell = ({ value, label }: { value: number; label: string }) => (
  <Tooltip>
    <TooltipTrigger asChild>
      <span className="cursor-help">{value}</span>
    </TooltipTrigger>
    <TooltipContent className="tooltip-content">
      {label}: {value}
    </TooltipContent>
  </Tooltip>
);

const TargetRow = ({ target }: { target: Target }) => (
  <tr className="nested-row animate-fade-in border-t border-border/50">
    <td className="py-3 px-4">
      <div className="flex items-center gap-3 pl-8">
        <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
        <span className="text-muted-foreground">{target.name}</span>
      </div>
    </td>
    <td className="py-3 px-4 text-muted-foreground">—</td>
    <td className="py-3 px-4 text-center">
      <MetricCell value={target.independent} label="Independent responses" />
    </td>
    <td className="py-3 px-4 text-center">
      <MetricCell value={target.prompted} label="Prompted responses" />
    </td>
    <td className="py-3 px-4 text-center">
      <FTRIndicator ftr={target.ftr} segment={target.segment} />
    </td>
    <td className="py-3 px-4 text-center text-muted-foreground">{target.daysPlayed}</td>
    <td className="py-3 px-4">
      <StatusBadge status={target.status} masteredOn={target.masteredOn} />
    </td>
    <td className="py-3 px-4 text-muted-foreground">
      {target.masteredOn || '—'}
    </td>
  </tr>
);

export const GameRow = ({ game }: GameRowProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const domain = domains.find((d) => d.id === game.domainId);

  return (
    <>
      <tr
        className="border-t border-border hover:bg-[hsl(var(--table-row-hover))] transition-colors cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <td className="py-4 px-4">
          <div className="flex items-center gap-3">
            <button
              className="expand-button"
              aria-label={isExpanded ? 'Collapse' : 'Expand'}
            >
              {isExpanded ? (
                <ChevronDown className="w-4 h-4 text-muted-foreground" />
              ) : (
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              )}
            </button>
            <span className="font-medium text-foreground">{game.name}</span>
          </div>
        </td>
        <td className="py-4 px-4">
          <span className="text-sm text-muted-foreground">
            {domain?.name || game.domainId}
          </span>
        </td>
        <td className="py-4 px-4 text-center">
          <MetricCell value={game.independent} label="Independent responses" />
        </td>
        <td className="py-4 px-4 text-center">
          <MetricCell value={game.prompted} label="Prompted responses" />
        </td>
        <td className="py-4 px-4 text-center">
          <FTRIndicator ftr={game.ftr} segment={game.segment} />
        </td>
        <td className="py-4 px-4 text-center">{game.daysPlayed}</td>
        <td className="py-4 px-4">
          <StatusBadge status={game.status} masteredOn={game.masteredOn} />
        </td>
        <td className="py-4 px-4 text-muted-foreground">
          {game.masteredOn || '—'}
        </td>
      </tr>
      {isExpanded &&
        game.targets.map((target) => (
          <TargetRow key={target.id} target={target} />
        ))}
    </>
  );
};
