import React, { useState } from 'react';
import useMobileGestures from '../hooks/useMobileGestures';

const PullToRefresh = ({ 
  children, 
  onRefresh, 
  disabled = false,
  threshold = 80,
  className = ''
}) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  
  const handleRefresh = async () => {
    if (disabled || isRefreshing) return;
    
    setIsRefreshing(true);
    try {
      await onRefresh();
    } catch (error) {
      console.error('Refresh failed:', error);
    } finally {
      // Add a small delay for better UX
      setTimeout(() => {
        setIsRefreshing(false);
      }, 500);
    }
  };

  const {
    elementRef,
    pullDistance,
    isPulling
  } = useMobileGestures({
    pullToRefreshThreshold: threshold,
    onPullToRefresh: handleRefresh,
    enabled: !disabled && !isRefreshing
  });

  const getRefreshText = () => {
    if (isRefreshing) return 'Refreshing...';
    if (pullDistance >= threshold) return 'Release to refresh';
    if (isPulling) return 'Pull to refresh';
    return '';
  };

  const getRefreshIcon = () => {
    if (isRefreshing) {
      return (
        <div className="refresh-spinner">
          <div className="spinner"></div>
        </div>
      );
    }
    
    if (pullDistance >= threshold) {
      return (
        <div className="refresh-icon ready">
          ↻
        </div>
      );
    }
    
    if (isPulling) {
      return (
        <div className="refresh-icon pulling">
          ↻
        </div>
      );
    }
    
    return null;
  };

  return (
    <div 
      ref={elementRef}
      className={`pull-to-refresh-container ${className}`}
    >
      {/* Pull to refresh indicator */}
      {(isPulling || isRefreshing) && (
        <div 
          className="pull-to-refresh-indicator"
          style={{
            transform: `translateY(${Math.min(pullDistance, threshold * 1.5)}px)`,
            opacity: isPulling ? Math.min(pullDistance / threshold, 1) : 1
          }}
        >
          {getRefreshIcon()}
          <span className="refresh-text">{getRefreshText()}</span>
        </div>
      )}
      
      {/* Main content */}
      <div className="pull-to-refresh-content">
        {children}
      </div>
    </div>
  );
};

export default PullToRefresh;
