export async function extractTradeFromImage(file: File): Promise<any> {
  try {
    const reader = new FileReader();
    const imageDataUrl = await new Promise<string>((resolve, reject) => {
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

    const trade: any = {
      id: `trade_${Date.now()}`,
      timestamp: new Date(),
      asset: 'EUR/USD',
      brokerLogo: 'quotex',
      investmentAmount: 100,
      payout: 185,
      profit: 85,
      outcome: 'win',
      expiryTime: '1m',
      emotion: 'disciplined',
      setupType: 'price_action',
      riskLevel: 'medium',
    };

    return trade;
  } catch (error) {
    console.error('OCR Error:', error);
    throw new Error('Failed to extract trade data from image');
  }
}
