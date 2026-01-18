import { Game, domains } from '@/data/mockData';
import { GameRow } from './GameRow';
import { HelpCircle, BookOpen } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface GamesTableProps {
  games: Game[];
  selectedDomains: string[];
}

const TableHeader = ({ label, tooltip }: { label: string; tooltip?: string }) => (
  <th className="py-3 px-4 text-left text-sm font-semibold text-foreground">
    <div className="flex items-center gap-1.5">
      {label}
      {tooltip && (
        <Tooltip>
          <TooltipTrigger asChild>
            <HelpCircle className="w-3.5 h-3.5 text-muted-foreground cursor-help" />
          </TooltipTrigger>
          <TooltipContent className="tooltip-content max-w-xs">
            {tooltip}
          </TooltipContent>
        </Tooltip>
      )}
    </div>
  </th>
);

export const GamesTable = ({ games, selectedDomains }: GamesTableProps) => {
  const filteredGames =
    selectedDomains.length === 0
      ? games
      : games.filter((game) => selectedDomains.includes(game.domainId));

  const selectedDomainNames = selectedDomains
    .map((id) => domains.find((d) => d.id === id)?.name)
    .filter(Boolean);

  return (
    <section className="dashboard-section">
      <div className="mb-6">
        <h2 className="font-display text-xl font-bold text-foreground">
          Games Performance
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          {selectedDomains.length === 0 ? (
            'Showing all games across all domains'
          ) : (
            <>
              Filtered by:{' '}
              <span className="text-foreground font-medium">
                {selectedDomainNames.join(', ')}
              </span>
            </>
          )}
        </p>
      </div>

      <div className="table-container overflow-x-auto">
        {filteredGames.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <BookOpen className="w-12 h-12 text-muted-foreground/50 mb-4" />
            <h3 className="font-display font-bold text-lg text-foreground mb-2">
              No games found
            </h3>
            <p className="text-sm text-muted-foreground max-w-sm">
              No games have been played in the selected domains yet. Try selecting different domains or wait for gameplay data.
            </p>
          </div>
        ) : (
          <table className="w-full min-w-[900px]">
            <thead className="sticky-header">
              <tr className="bg-[hsl(var(--table-header))]">
                <TableHeader label="Game Name" />
                <TableHeader label="Domain" />
                <TableHeader
                  label="Targets"
                  tooltip="Number of learning objectives or skills within this game"
                />
                <TableHeader
                  label="Independent"
                  tooltip="Responses completed without any prompts or hints"
                />
                <TableHeader
                  label="Prompted"
                  tooltip="Responses that required prompts or hints to complete"
                />
                <TableHeader
                  label="FTR %"
                  tooltip="First Try Rate - percentage of correct responses on the first attempt"
                />
                <TableHeader
                  label="Days"
                  tooltip="Number of unique days this game was played"
                />
                <TableHeader label="Status" />
                <TableHeader
                  label="Mastered On"
                  tooltip="Date when mastery criteria was achieved"
                />
              </tr>
            </thead>
            <tbody>
              {filteredGames.map((game) => (
                <GameRow key={game.id} game={game} />
              ))}
            </tbody>
          </table>
        )}
      </div>

      {filteredGames.length > 0 && (
        <p className="mt-4 text-sm text-muted-foreground">
          Showing {filteredGames.length} {filteredGames.length === 1 ? 'game' : 'games'}
          {' · '}Click a row to see individual targets
        </p>
      )}
    </section>
  );
};
