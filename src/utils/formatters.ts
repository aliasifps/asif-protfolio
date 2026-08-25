/**
 * Currency and Number Formatting Utilities for Indian Rupee (INR - ₹)
 */

export const formatINR = (amount: number, options?: { showDecimals?: boolean; compact?: boolean }): string => {
  if (options?.compact) {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(2)} Cr`;
    }
    if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(2)} L`;
    }
    if (amount >= 1000) {
      return `₹${(amount / 1000).toFixed(1)}k`;
    }
    return `₹${amount.toLocaleString('en-IN')}`;
  }

  return `₹${amount.toLocaleString('en-IN', {
    maximumFractionDigits: options?.showDecimals ? 2 : 0,
    minimumFractionDigits: options?.showDecimals ? 2 : 0
  })}`;
};

export const formatINRLakhs = (amount: number): string => {
  if (amount >= 10000000) {
    return `₹${(amount / 10000000).toFixed(2)} Crore`;
  }
  if (amount >= 100000) {
    return `₹${(amount / 100000).toFixed(1)} Lakhs`;
  }
  return `₹${amount.toLocaleString('en-IN')}`;
};
