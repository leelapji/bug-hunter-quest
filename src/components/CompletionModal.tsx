import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trophy, Target, Lightbulb, ArrowRight } from "lucide-react";
import { Challenge } from "@/data/gameData";

interface CompletionModalProps {
  isOpen: boolean;
  onClose: () => void;
  challenge: Challenge;
  onNextChallenge: () => void;
  isLastChallenge: boolean;
}

export const CompletionModal = ({ 
  isOpen, 
  onClose, 
  challenge, 
  onNextChallenge,
  isLastChallenge 
}: CompletionModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <div className="text-center space-y-6 p-6">
          {/* Success Animation */}
          <div className="flex justify-center">
            <div className="p-6 bg-gradient-success rounded-full shadow-glow animate-pulse">
              <Trophy className="h-12 w-12 text-white" />
            </div>
          </div>

          {/* Title */}
          <div>
            <h2 className="text-3xl font-bold text-game-success mb-2">
              Bug Eliminated! 🎉
            </h2>
            <p className="text-muted-foreground">
              You successfully fixed the "{challenge.title}" challenge
            </p>
          </div>

          {/* Points Earned */}
          <Card className="p-4 bg-game-success/10 border-game-success/20">
            <div className="flex items-center justify-center gap-2">
              <Target className="h-5 w-5 text-game-success" />
              <span className="text-lg font-bold text-game-success">
                +{challenge.points} Points Earned
              </span>
            </div>
          </Card>

          {/* Explanation */}
          <Card className="p-4 text-left">
            <div className="flex items-start gap-3">
              <Lightbulb className="h-5 w-5 text-game-warning mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">What You Learned:</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {challenge.explanation}
                </p>
              </div>
            </div>
          </Card>

          {/* Action Buttons */}
          <div className="flex gap-3 justify-center">
            <Button
              variant="outline"
              onClick={onClose}
            >
              Back to Menu
            </Button>
            
            {!isLastChallenge && (
              <Button
                onClick={onNextChallenge}
                className="bg-gradient-primary hover:opacity-90"
              >
                Next Challenge
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            )}
            
            {isLastChallenge && (
              <Card className="p-4 bg-gradient-primary text-white">
                <div className="text-center">
                  <h3 className="font-bold mb-1">🏆 All Challenges Complete!</h3>
                  <p className="text-sm opacity-90">
                    You've mastered all debugging challenges. Great work, Bug Hunter!
                  </p>
                </div>
              </Card>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};