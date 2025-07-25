import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Lightbulb, CheckCircle, XCircle } from "lucide-react";
import { Challenge } from "@/data/gameData";

interface CodeEditorProps {
  challenge: Challenge;
  onComplete: (success: boolean) => void;
}

export const CodeEditor = ({ challenge, onComplete }: CodeEditorProps) => {
  const [userCode, setUserCode] = useState(challenge.codeWithBugs);
  const [showHint, setShowHint] = useState(false);
  const [currentHintIndex, setCurrentHintIndex] = useState(0);
  const [testResult, setTestResult] = useState<'none' | 'success' | 'fail'>('none');

  const handleRunCode = () => {
    // Simple comparison for demonstration - in a real implementation, 
    // you'd want more sophisticated code analysis
    const normalizedUserCode = userCode.replace(/\s+/g, ' ').trim();
    const normalizedCorrectCode = challenge.correctCode.replace(/\s+/g, ' ').trim();
    
    if (normalizedUserCode === normalizedCorrectCode) {
      setTestResult('success');
      setTimeout(() => onComplete(true), 1500);
    } else {
      setTestResult('fail');
      setTimeout(() => setTestResult('none'), 2000);
    }
  };

  const handleShowHint = () => {
    setShowHint(true);
    if (currentHintIndex < challenge.hints.length - 1) {
      setCurrentHintIndex(prev => prev + 1);
    }
  };

  const getDifficultyColor = (difficulty: Challenge['difficulty']) => {
    switch (difficulty) {
      case 'easy': return 'bg-game-success text-white';
      case 'medium': return 'bg-game-warning text-white';
      case 'hard': return 'bg-game-error text-white';
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
      {/* Challenge Info */}
      <Card className="p-6 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{getTypeIcon(challenge.type)}</span>
            <div>
              <h2 className="text-xl font-bold">{challenge.title}</h2>
              <p className="text-muted-foreground">{challenge.description}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Badge className={getDifficultyColor(challenge.difficulty)}>
              {challenge.difficulty.toUpperCase()}
            </Badge>
            <Badge variant="outline">{challenge.points} pts</Badge>
          </div>
        </div>
      </Card>

      {/* Code Editor */}
      <Card className="overflow-hidden">
        <div className="bg-game-code-bg text-game-code-text p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Code Editor</h3>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleShowHint}
                className="bg-game-warning/10 border-game-warning text-game-warning hover:bg-game-warning hover:text-white"
              >
                <Lightbulb className="h-4 w-4 mr-1" />
                Hint ({currentHintIndex + 1}/{challenge.hints.length})
              </Button>
              <Button
                onClick={handleRunCode}
                size="sm"
                className="bg-game-success hover:bg-game-success/80"
              >
                <Play className="h-4 w-4 mr-1" />
                Run Code
              </Button>
            </div>
          </div>
          
          <textarea
            value={userCode}
            onChange={(e) => setUserCode(e.target.value)}
            className="w-full h-64 bg-game-code-bg text-game-code-text font-mono text-sm border border-border rounded p-3 resize-none focus:outline-none focus:ring-2 focus:ring-primary"
            spellCheck={false}
          />
        </div>
      </Card>

      {/* Hint Display */}
      {showHint && (
        <Card className="p-4 bg-game-warning/10 border-game-warning/20 animate-fade-in">
          <div className="flex items-start gap-2">
            <Lightbulb className="h-5 w-5 text-game-warning mt-0.5" />
            <div>
              <h4 className="font-semibold text-game-warning mb-1">Hint:</h4>
              <p className="text-sm">{challenge.hints[currentHintIndex]}</p>
            </div>
          </div>
        </Card>
      )}

      {/* Test Result */}
      {testResult !== 'none' && (
        <Card className={`p-4 animate-scale-in ${
          testResult === 'success' 
            ? 'bg-game-success/10 border-game-success/20' 
            : 'bg-game-error/10 border-game-error/20'
        }`}>
          <div className="flex items-center gap-2">
            {testResult === 'success' ? (
              <CheckCircle className="h-5 w-5 text-game-success" />
            ) : (
              <XCircle className="h-5 w-5 text-game-error" />
            )}
            <div>
              <h4 className={`font-semibold ${
                testResult === 'success' ? 'text-game-success' : 'text-game-error'
              }`}>
                {testResult === 'success' ? 'Bug Fixed! 🎉' : 'Bug Still Present 🐛'}
              </h4>
              <p className="text-sm">
                {testResult === 'success' 
                  ? `Great work! You earned ${challenge.points} points.`
                  : 'Keep trying! Check your syntax and logic carefully.'
                }
              </p>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};