import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trophy, Lock, CheckCircle } from "lucide-react";
import { Challenge } from "@/data/gameData";

interface LevelSelectProps {
  challenges: Challenge[];
  completedChallenges: string[];
  onSelectChallenge: (challenge: Challenge) => void;
  currentScore: number;
}

export const LevelSelect = ({ 
  challenges, 
  completedChallenges, 
  onSelectChallenge,
  currentScore 
}: LevelSelectProps) => {
  const isUnlocked = (challenge: Challenge, index: number) => {
    if (index === 0) return true;
    return completedChallenges.includes(challenges[index - 1].id);
  };

  const getDifficultyColor = (difficulty: Challenge['difficulty']) => {
    switch (difficulty) {
      case 'easy': return 'bg-game-success';
      case 'medium': return 'bg-game-warning';
      case 'hard': return 'bg-game-error';
    }
  };

  const getTypeIcon = (type: Challenge['type']) => {
    switch (type) {
      case 'syntax': return '🔍';
      case 'logic': return '🧠';
      case 'optimization': return '⚡';
      case 'algorithm': return '🔄';
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">Select Your Mission</h2>
        <p className="text-muted-foreground">
          Choose a debugging challenge to test your skills
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {challenges.map((challenge, index) => {
          const completed = completedChallenges.includes(challenge.id);
          const unlocked = isUnlocked(challenge, index);
          
          return (
            <Card
              key={challenge.id}
              className={`p-6 transition-all duration-200 hover:shadow-lg ${
                completed 
                  ? 'bg-game-success/10 border-game-success/30 shadow-glow' 
                  : unlocked
                    ? 'hover:shadow-game cursor-pointer'
                    : 'opacity-50 cursor-not-allowed'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{getTypeIcon(challenge.type)}</span>
                  <div>
                    <h3 className="font-bold text-lg">{challenge.title}</h3>
                    <p className="text-sm text-muted-foreground capitalize">
                      {challenge.type} Challenge
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col items-end gap-2">
                  {completed && (
                    <CheckCircle className="h-6 w-6 text-game-success" />
                  )}
                  {!unlocked && (
                    <Lock className="h-6 w-6 text-muted-foreground" />
                  )}
                </div>
              </div>

              <p className="text-sm mb-4 line-clamp-2">
                {challenge.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <Badge 
                    className={`${getDifficultyColor(challenge.difficulty)} text-white`}
                  >
                    {challenge.difficulty}
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Trophy className="h-3 w-3" />
                    {challenge.points}
                  </Badge>
                </div>
                
                <Button
                  onClick={() => onSelectChallenge(challenge)}
                  disabled={!unlocked}
                  variant={completed ? "secondary" : "default"}
                  size="sm"
                  className={completed ? "bg-game-success/20 text-game-success hover:bg-game-success/30" : ""}
                >
                  {completed ? "Replay" : unlocked ? "Start" : "Locked"}
                </Button>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Progress Summary */}
      <Card className="p-6 bg-gradient-cyber border-0">
        <div className="text-center text-white">
          <h3 className="text-xl font-bold mb-2">Progress Summary</h3>
          <div className="flex justify-center gap-8">
            <div>
              <div className="text-2xl font-bold text-game-warning">
                {completedChallenges.length}
              </div>
              <div className="text-sm opacity-75">Challenges Completed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-game-success">
                {currentScore}
              </div>
              <div className="text-sm opacity-75">Total Points</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-game-info">
                {Math.floor(currentScore / 200) + 1}
              </div>
              <div className="text-sm opacity-75">Current Level</div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};