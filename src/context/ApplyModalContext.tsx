'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import ApplyModal from '@/components/ApplyModal';

interface ApplyModalContextType {
  openApplyModal: () => void;
  closeApplyModal: () => void;
}

const ApplyModalContext = createContext<ApplyModalContextType | undefined>(undefined);

export function useApplyModal() {
  const context = useContext(ApplyModalContext);
  if (!context) {
    throw new Error('useApplyModal must be used within ApplyModalProvider');
  }
  return context;
}

export function ApplyModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ApplyModalContext.Provider
      value={{
        openApplyModal: () => setIsOpen(true),
        closeApplyModal: () => setIsOpen(false),
      }}
    >
      {children}
      <ApplyModal open={isOpen} onOpenChange={setIsOpen} />
    </ApplyModalContext.Provider>
  );
}
