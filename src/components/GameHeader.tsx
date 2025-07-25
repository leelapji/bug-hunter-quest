import { Trophy, Bug, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

interface GameHeaderProps {
  score: number;
  level: number;
  bugsFixed: number;
}

export const GameHeader = ({ score, level, bugsFixed }: GameHeaderProps) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div className="flex items-center gap-3">
        <div className="p-3 bg-gradient-primary rounded-lg shadow-glow">
          <Bug className="h-8 w-8 text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Bug Hunter
          </h1>
          <p className="text-muted-foreground text-sm">The Debugging Quest</p>
        </div>
      </div>
      
      <div className="flex gap-4">
        <Card className="px-4 py-2 bg-gradient-cyber border-0">
          <div className="flex items-center gap-2 text-white">
            <Trophy className="h-4 w-4 text-game-warning" />
            <span className="font-semibold">{score}</span>
            <span className="text-xs opacity-75">points</span>
          </div>
        </Card>
        
        <Card className="px-4 py-2 bg-game-info/10 border-game-info/20">
          <div className="flex items-center gap-2 text-game-info">
            <Zap className="h-4 w-4" />
            <span className="font-semibold">Level {level}</span>
          </div>
        </Card>
        
        <Card className="px-4 py-2 bg-game-success/10 border-game-success/20">
          <div className="flex items-center gap-2 text-game-success">
            <Bug className="h-4 w-4" />
            <span className="font-semibold">{bugsFixed}</span>
            <span className="text-xs opacity-75">bugs fixed</span>
          </div>
        </Card>
      </div>
    </div>
  );
};