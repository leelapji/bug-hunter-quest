import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { GameHeader } from "./GameHeader";
import { LevelSelect } from "./LevelSelect";
import { CodeEditor } from "./CodeEditor";
import { CompletionModal } from "./CompletionModal";
import { challenges, Challenge } from "@/data/gameData";
import { toast } from "sonner";

type GameState = 'menu' | 'playing';

export const BugHunterGame = () => {
  const [gameState, setGameState] = useState<GameState>('menu');
  const [currentChallenge, setCurrentChallenge] = useState<Challenge | null>(null);
  const [score, setScore] = useState(0);
  const [completedChallenges, setCompletedChallenges] = useState<string[]>([]);
  const [showCompletionModal, setShowCompletionModal] = useState(false);

  // Load game state from localStorage
  useEffect(() => {
    const savedScore = localStorage.getItem('bugHunter_score');
    const savedCompleted = localStorage.getItem('bugHunter_completed');
    
    if (savedScore) setScore(parseInt(savedScore));
    if (savedCompleted) setCompletedChallenges(JSON.parse(savedCompleted));
  }, []);

  // Save game state to localStorage
  useEffect(() => {
    localStorage.setItem('bugHunter_score', score.toString());
    localStorage.setItem('bugHunter_completed', JSON.stringify(completedChallenges));
  }, [score, completedChallenges]);

  const currentLevel = Math.floor(score / 200) + 1;
  const bugsFixed = completedChallenges.length;

  const handleSelectChallenge = (challenge: Challenge) => {
    setCurrentChallenge(challenge);
    setGameState('playing');
  };

  const handleCompleteChallenge = (success: boolean) => {
    if (success && currentChallenge) {
      const isAlreadyCompleted = completedChallenges.includes(currentChallenge.id);
      
      if (!isAlreadyCompleted) {
        setScore(prev => prev + currentChallenge.points);
        setCompletedChallenges(prev => [...prev, currentChallenge.id]);
        toast.success(`Bug fixed! +${currentChallenge.points} points`);
      } else {
        toast.success("Challenge completed again! Great practice!");
      }
      
      setShowCompletionModal(true);
    }
  };

  const handleNextChallenge = () => {
    const currentIndex = challenges.findIndex(c => c.id === currentChallenge?.id);
    const nextChallenge = challenges[currentIndex + 1];
    
    if (nextChallenge) {
      setCurrentChallenge(nextChallenge);
      setShowCompletionModal(false);
    }
  };

  const handleBackToMenu = () => {
    setGameState('menu');
    setCurrentChallenge(null);
    setShowCompletionModal(false);
  };

  const isLastChallenge = currentChallenge 
    ? challenges.findIndex(c => c.id === currentChallenge.id) === challenges.length - 1
    : false;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        <GameHeader 
          score={score} 
          level={currentLevel} 
          bugsFixed={bugsFixed} 
        />

        {gameState === 'menu' && (
          <LevelSelect
            challenges={challenges}
            completedChallenges={completedChallenges}
            onSelectChallenge={handleSelectChallenge}
            currentScore={score}
          />
        )}

        {gameState === 'playing' && currentChallenge && (
          <div className="space-y-4">
            <Button
              variant="outline"
              onClick={handleBackToMenu}
              className="mb-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Menu
            </Button>
            
            <CodeEditor
              challenge={currentChallenge}
              onComplete={handleCompleteChallenge}
            />
          </div>
        )}

        <CompletionModal
          isOpen={showCompletionModal}
          onClose={handleBackToMenu}
          challenge={currentChallenge!}
          onNextChallenge={handleNextChallenge}
          isLastChallenge={isLastChallenge}
        />
      </div>
    </div>
  );
};