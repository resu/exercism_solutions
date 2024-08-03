type TeamStats = {
  name: string;
  matchesPlayed: number;
  wins: number;
  draws: number;
  losses: number;
  points: number;
};

export class Tournament {
  public tally(input: string): string {
    const teams: Record<string, TeamStats> = {};

    const matches = input.split('\n').filter(Boolean);
    for (const match of matches) {
      const [team1, team2, result] = match.split(';');
      if (!teams[team1]) teams[team1] = this.createTeamStats(team1);
      if (!teams[team2]) teams[team2] = this.createTeamStats(team2);

      switch (result) {
        case 'win':
          this.updateStats(teams[team1], 'win');
          this.updateStats(teams[team2], 'loss');
          break;
        case 'loss':
          this.updateStats(teams[team1], 'loss');
          this.updateStats(teams[team2], 'win');
          break;
        case 'draw':
          this.updateStats(teams[team1], 'draw');
          this.updateStats(teams[team2], 'draw');
          break;
      }
    }

    const sortedTeams = Object.values(teams).sort((a, b) => {
      if (b.points !== a.points) return b.points - a.points;
      return a.name.localeCompare(b.name);
    });

    const header = 'Team                           | MP |  W |  D |  L |  P';
    const rows = sortedTeams.map(team => 
      `${team.name.padEnd(30)} | ${team.matchesPlayed.toString().padStart(2, ' ')} | ${team.wins.toString().padStart(2, ' ')} | ${team.draws.toString().padStart(2, ' ')} | ${team.losses.toString().padStart(2, ' ')} | ${team.points.toString().padStart(2, ' ')}`
    );

    return [header, ...rows].join('\n');
  }

  private createTeamStats(name: string): TeamStats {
    return {
      name,
      matchesPlayed: 0,
      wins: 0,
      draws: 0,
      losses: 0,
      points: 0,
    };
  }

  private updateStats(team: TeamStats, result: 'win' | 'loss' | 'draw'): void {
    team.matchesPlayed += 1;
    if (result === 'win') {
      team.wins += 1;
      team.points += 3;
    } else if (result === 'draw') {
      team.draws += 1;
      team.points += 1;
    } else if (result === 'loss') {
      team.losses += 1;
    }
  }
}