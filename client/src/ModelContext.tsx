// ModelContext.tsx
import React, { createContext, useContext, ReactNode, useState } from 'react';

type ModelContextType = {
  selectedModel: 'rivercast' | 'bidirectional';
  setSelectedModel: React.Dispatch<React.SetStateAction<'rivercast' | 'bidirectional'>>;
};

const ModelContext = createContext<ModelContextType | undefined>(undefined);

export const useModelContext = () => {
  const context = useContext(ModelContext);
  if (!context) {
    throw new Error('useModelContext must be used within a ModelProvider');
  }
  return context;
};

type ModelProviderProps = {
  children: ReactNode;
};

export const ModelProvider: React.FC<ModelProviderProps> = ({ children }) => {
  const [selectedModel, setSelectedModel] = useState<'rivercast' | 'bidirectional'>('rivercast');

  const value: ModelContextType = {
    selectedModel,
    setSelectedModel,
  };

  return <ModelContext.Provider value={value}>{children}</ModelContext.Provider>;
};
