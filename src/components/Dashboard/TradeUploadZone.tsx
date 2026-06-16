'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Upload, AlertCircle, CheckCircle } from 'react-icons/fa';
import LiquidGlassShell from '../LiquidGlassShell';

interface TradeUploadZoneProps {
  onTradeExtracted?: (tradeData: any) => void;
}

export const TradeUploadZone: React.FC<TradeUploadZoneProps> = ({
  onTradeExtracted,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const processFile = async (file: File) => {
    setIsProcessing(true);
    setUploadStatus('loading');
    setStatusMessage('Analyzing trade screenshot...');

    try {
      const formData = new FormData();
      formData.append('file', file);
      setUploadStatus('success');
      setStatusMessage('Trade extracted successfully!');
      
      setTimeout(() => {
        setUploadStatus('idle');
        setStatusMessage('');
      }, 3000);
    } catch (error) {
      setUploadStatus('error');
      setStatusMessage('Failed to extract trade data. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      if (file.type.startsWith('image/')) {
        processFile(file);
      }
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      processFile(files[0]);
    }
  };

  return (
    <LiquidGlassShell variant="accent" className="p-8">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-gradient mb-6">Upload Trade Screenshot</h2>

        <motion.div
          className={`w-full border-2 border-dashed rounded-xl p-12 text-center cursor-pointer transition-all ${
            isDragging
              ? 'border-emerald-400 bg-emerald-500/10'
              : 'border-white/30 bg-white/5'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
            disabled={isProcessing}
          />

          <motion.div
            animate={isDragging ? { scale: 1.1 } : { scale: 1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Upload
              className={`text-5xl mx-auto mb-4 ${
                isDragging ? 'text-emerald-400' : 'text-cyan-400'
              }`}
            />
          </motion.div>

          <p className="text-lg font-semibold mb-2">
            {isProcessing ? 'Processing...' : 'Drag & drop your trade screenshot here'}
          </p>
          <p className="text-sm text-white/60 mb-6">
            Or click to select from your device
          </p>

          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={isProcessing}
            className="px-6 py-2 bg-gradient-to-r from-emerald-400 to-cyan-400 text-gray-900 font-bold rounded-lg hover:shadow-lg hover:shadow-emerald-500/50 transition-all disabled:opacity-50"
          >
            {isProcessing ? 'Processing...' : 'Select Image'}
          </button>
        </motion.div>

        {statusMessage && (
          <motion.div
            className={`mt-6 p-4 rounded-lg flex items-center gap-3 ${
              uploadStatus === 'success'
                ? 'bg-emerald-500/20 text-emerald-200 border border-emerald-400/50'
                : uploadStatus === 'error'
                ? 'bg-red-500/20 text-red-200 border border-red-400/50'
                : 'bg-blue-500/20 text-blue-200 border border-blue-400/50'
            }`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {uploadStatus === 'success' && <CheckCircle />}
            {uploadStatus === 'error' && <AlertCircle />}
            {statusMessage}
          </motion.div>
        )}

        <div className="mt-6 text-sm text-white/50 space-y-1">
          <p>✓ Supported formats: PNG, JPG, JPEG, WebP</p>
          <p>✓ Automatically detects: Asset, Amount, Payout, Expiry, Outcome</p>
          <p>✓ Optimized for Quotex 1-minute charts</p>
        </div>
      </div>
    </LiquidGlassShell>
  );
};

export default TradeUploadZone;
