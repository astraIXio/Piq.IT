import React, { useState, useEffect } from 'react';
import piqitLogoWhite from '../assets/piqit-logo-white.png';
import heroBg from '../assets/hero-bg.png';

export interface PreloaderProps {
  onComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [isDone, setIsDone] = useState(() => {
    if (typeof window !== 'undefined') {
      return !!sessionStorage.getItem('piqit_intro_shown');
    }
    return false;
  });
  const [isReady, setIsReady] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // If already completed, nothing to do
    if (isDone) {
      onComplete?.();
      return;
    }

    let isCancelled = false;
    const startTime = Date.now();
    const minDisplayTime = 800; // Minimum time for smooth luxury animation

    const handleBannerLoaded = () => {
      if (isCancelled) return;
      const elapsed = Date.now() - startTime;
      const waitRemaining = Math.max(0, minDisplayTime - elapsed);

      setTimeout(() => {
        if (isCancelled) return;
        setIsReady(true);

        setTimeout(() => {
          if (isCancelled) return;
          setIsExiting(true);
          sessionStorage.setItem('piqit_intro_shown', 'true');

          setTimeout(() => {
            if (isCancelled) return;
            setIsDone(true);
            onComplete?.();
          }, 650);
        }, 220);
      }, waitRemaining);
    };

    // Load and GPU-decode hero background image before opening screen
    const img = new Image();
    img.src = heroBg;

    if (typeof img.decode === 'function') {
      img.decode()
        .then(() => {
          handleBannerLoaded();
        })
        .catch(() => {
          if (img.complete) {
            handleBannerLoaded();
          } else {
            img.onload = handleBannerLoaded;
            img.onerror = handleBannerLoaded;
          }
        });
    } else {
      if (img.complete) {
        handleBannerLoaded();
      } else {
        img.onload = handleBannerLoaded;
        img.onerror = handleBannerLoaded;
      }
    }

    // Safety fallback: only if connection drops completely (>12s)
    const safetyTimer = setTimeout(() => {
      handleBannerLoaded();
    }, 12000);

    return () => {
      isCancelled = true;
      clearTimeout(safetyTimer);
    };
  }, [onComplete]);

  if (isDone) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        backgroundColor: '#050202',
        backgroundImage:
          'radial-gradient(circle at 50% 48%, rgba(197, 66, 43, 0.15) 0%, rgba(5, 2, 2, 0.98) 72%, #050202 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: isExiting ? 0 : 1,
        transform: isExiting ? 'scale(1.025)' : 'scale(1)',
        filter: isExiting ? 'blur(4px)' : 'none',
        transition:
          'opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1), transform 0.65s cubic-bezier(0.16, 1, 0.3, 1), filter 0.65s ease',
        pointerEvents: isExiting ? 'none' : 'auto',
        userSelect: 'none',
      }}
    >
      <style>{`
        @keyframes piqitGlowPulse {
          0%, 100% {
            opacity: 0.35;
            transform: scale(0.92);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.12);
          }
        }
        @keyframes piqitLogoBreath {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.025);
          }
        }
        @keyframes piqitShimmerSweep {
          0% {
            transform: translateX(-150%) skewX(-20deg);
          }
          100% {
            transform: translateX(250%) skewX(-20deg);
          }
        }
        @keyframes piqitBeamSweep {
          0% {
            left: -35%;
            width: 35%;
          }
          50% {
            left: 30%;
            width: 55%;
          }
          100% {
            left: 105%;
            width: 35%;
          }
        }
      `}</style>

      {/* Ambient Red Glow Aura */}
      <div
        style={{
          position: 'absolute',
          width: '290px',
          height: '145px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #c5422b 0%, rgba(197,66,43,0) 70%)',
          filter: 'blur(35px)',
          pointerEvents: 'none',
          animation: 'piqitGlowPulse 2.8s ease-in-out infinite',
        }}
      />

      {/* Logo Container with Shimmer Effect */}
      <div
        style={{
          position: 'relative',
          width: '185px',
          height: '92px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          animation: 'piqitLogoBreath 3s ease-in-out infinite',
          overflow: 'hidden',
        }}
      >
        <img
          src={piqitLogoWhite}
          alt="PiqIt"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            display: 'block',
            filter: 'drop-shadow(0 0 16px rgba(197, 66, 43, 0.45))',
          }}
        />

        {/* Shimmer light sweep */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '60%',
            height: '100%',
            background:
              'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.4) 50%, transparent 100%)',
            pointerEvents: 'none',
            animation: 'piqitShimmerSweep 2.2s cubic-bezier(0.4, 0, 0.2, 1) infinite',
          }}
        />
      </div>

      {/* Luxury Progress Track */}
      <div
        style={{
          marginTop: '34px',
          width: '140px',
          height: '2px',
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
          borderRadius: '2px',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            height: '100%',
            borderRadius: '2px',
            background: 'linear-gradient(90deg, #c5422b 0%, #ff6b52 100%)',
            boxShadow: '0 0 10px rgba(197, 66, 43, 0.9)',
            ...(isReady
              ? {
                  left: 0,
                  width: '100%',
                  transition: 'all 0.25s ease-out',
                }
              : {
                  animation: 'piqitBeamSweep 1.8s cubic-bezier(0.4, 0, 0.2, 1) infinite',
                }),
          }}
        />
      </div>

      {/* Brand Tagline */}
      <p
        style={{
          marginTop: '22px',
          fontFamily: "'Montserrat', sans-serif",
          fontSize: '11px',
          fontWeight: 500,
          letterSpacing: '3px',
          textTransform: 'uppercase',
          color: 'rgba(255, 249, 240, 0.55)',
          margin: '22px 0 0 0',
          textAlign: 'center',
        }}
      >
        Unified Ecosystem · Infinite Possibilities
      </p>
    </div>
  );
};
