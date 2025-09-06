import { useState } from "react";
import { motion } from "framer-motion";

export interface TerminalCommandProps {
  command: string;
  output?: string;
  delay?: number;
  onExecute?: () => void;
}

export const TerminalCommand = ({ command, output, delay = 0, onExecute }: TerminalCommandProps) => {
  const [isExecuted, setIsExecuted] = useState(false);

  const handleClick = () => {
    if (!isExecuted) {
      setIsExecuted(true);
      onExecute?.();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5 }}
      onClick={handleClick}
      className="bg-card/60 border border-border rounded-lg p-4 font-mono text-sm cursor-pointer hover:border-primary transition-colors"
    >
      <div className="flex items-center gap-2">
        <span className="text-primary">$</span>
        <motion.span
          initial={{ width: 0 }}
          animate={{ width: "auto" }}
          transition={{ delay: delay + 0.2, duration: 0.8 }}
          className="overflow-hidden whitespace-nowrap text-foreground"
        >
          {command}
        </motion.span>
        {!isExecuted && (
          <span
            aria-hidden
            className="inline-block ml-1 w-2 h-4 md:h-5 bg-primary rounded-[1px] align-middle animate-blink"
          />
        )}
      </div>
      {isExecuted && output && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ delay: 0.5, duration: 0.3 }}
          className="mt-2 text-muted-foreground border-l-2 border-primary pl-3"
        >
          {output}
        </motion.div>
      )}
    </motion.div>
  );
};
