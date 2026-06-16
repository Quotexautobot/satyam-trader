import { create } from 'zustand';

interface TradeStore {
  trades: any[];
  addTrade: (trade: any) => void;
  removeTrade: (id: string) => void;
  updateTrade: (id: string, trade: any) => void;
  getTrades: () => any[];
}

export const useTradeStore = create<TradeStore>((set, get) => ({
  trades: typeof window !== 'undefined'
    ? JSON.parse(localStorage.getItem('satyam_trades') || '[]')
    : [],

  addTrade: (trade: any) =>
    set((state) => {
      const updatedTrades = [trade, ...state.trades];
      if (typeof window !== 'undefined') {
        localStorage.setItem('satyam_trades', JSON.stringify(updatedTrades));
      }
      return { trades: updatedTrades };
    }),

  removeTrade: (id: string) =>
    set((state) => {
      const updatedTrades = state.trades.filter((t) => t.id !== id);
      if (typeof window !== 'undefined') {
        localStorage.setItem('satyam_trades', JSON.stringify(updatedTrades));
      }
      return { trades: updatedTrades };
    }),

  updateTrade: (id: string, trade: any) =>
    set((state) => {
      const updatedTrades = state.trades.map((t) =>
        t.id === id ? { ...t, ...trade } : t
      );
      if (typeof window !== 'undefined') {
        localStorage.setItem('satyam_trades', JSON.stringify(updatedTrades));
      }
      return { trades: updatedTrades };
    }),

  getTrades: () => get().trades,
}));
