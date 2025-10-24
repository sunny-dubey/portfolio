import { useState, useEffect, useRef, useCallback } from 'react';

const useMobileGestures = (options = {}) => {
  const {
    swipeThreshold = 50,
    pullToRefreshThreshold = 80,
    onSwipeLeft = null,
    onSwipeRight = null,
    onPullToRefresh = null,
    enabled = true,
  } = options;

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [pullDistance, setPullDistance] = useState(0);
  const [isPulling, setIsPulling] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const elementRef = useRef(null);
  const lastTouchY = useRef(0);
  const isAtTop = useRef(false);

  // Check if element is at the top
  const checkIfAtTop = () => {
    if (elementRef.current) {
      const scrollTop = elementRef.current.scrollTop || window.pageYOffset;
      isAtTop.current = scrollTop === 0;
    }
  };

  // Handle touch start
  const handleTouchStart = useCallback(
    e => {
      if (!enabled) return;

      checkIfAtTop();
      const touch = e.touches[0];
      setTouchStart({
        x: touch.clientX,
        y: touch.clientY,
        time: Date.now(),
      });
      setTouchEnd(null);
      lastTouchY.current = touch.clientY;
      setIsPulling(false);
      setPullDistance(0);
    },
    [enabled]
  );

  // Handle touch move
  const handleTouchMove = useCallback(
    e => {
      if (!enabled || !touchStart) return;

      const touch = e.touches[0];
      const deltaY = touch.clientY - touchStart.y;
      const deltaTime = Date.now() - touchStart.time;

      // Pull to refresh logic - only prevent default when actually pulling to refresh
      if (isAtTop.current && deltaY > 0 && deltaTime > 100) {
        setIsPulling(true);
        const distance = Math.min(deltaY * 0.5, pullToRefreshThreshold * 1.5);
        setPullDistance(distance);

        // Only prevent default when we're actually doing pull-to-refresh
        if (distance >= pullToRefreshThreshold && !isRefreshing) {
          e.preventDefault();
        }
      }

      setTouchEnd({
        x: touch.clientX,
        y: touch.clientY,
        time: Date.now(),
      });
    },
    [enabled, touchStart, pullToRefreshThreshold, isRefreshing]
  );

  // Handle touch end
  const handleTouchEnd = useCallback(
    e => {
      if (!enabled || !touchStart || !touchEnd) return;

      const deltaX = touchEnd.x - touchStart.x;
      const deltaTime = touchEnd.time - touchStart.time;
      const velocity = Math.abs(deltaX) / deltaTime;

      // Reset pull to refresh
      if (isPulling) {
        if (pullDistance >= pullToRefreshThreshold && onPullToRefresh) {
          setIsRefreshing(true);
          onPullToRefresh().finally(() => {
            setIsRefreshing(false);
          });
        }
        setIsPulling(false);
        setPullDistance(0);
      }

      // Swipe detection
      if (Math.abs(deltaX) > swipeThreshold && velocity > 0.1) {
        if (deltaX > 0 && onSwipeRight) {
          onSwipeRight();
        } else if (deltaX < 0 && onSwipeLeft) {
          onSwipeLeft();
        }
      }

      setTouchStart(null);
      setTouchEnd(null);
    },
    [
      enabled,
      touchStart,
      touchEnd,
      isPulling,
      pullDistance,
      pullToRefreshThreshold,
      onPullToRefresh,
      swipeThreshold,
      onSwipeRight,
      onSwipeLeft,
    ]
  );

  // Add event listeners
  useEffect(() => {
    const element = elementRef.current || document;

    if (enabled) {
      element.addEventListener('touchstart', handleTouchStart, {
        passive: true,
      });
      element.addEventListener('touchmove', handleTouchMove, {
        passive: false,
      });
      element.addEventListener('touchend', handleTouchEnd, { passive: true });
    }

    return () => {
      element.removeEventListener('touchstart', handleTouchStart);
      element.removeEventListener('touchmove', handleTouchMove);
      element.removeEventListener('touchend', handleTouchEnd);
    };
  }, [enabled, handleTouchStart, handleTouchMove, handleTouchEnd]);

  return {
    elementRef,
    pullDistance,
    isPulling,
    isRefreshing,
    swipeThreshold,
    pullToRefreshThreshold,
  };
};

export default useMobileGestures;
