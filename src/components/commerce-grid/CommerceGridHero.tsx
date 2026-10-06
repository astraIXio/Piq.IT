import React, { useState, useEffect } from 'react';
import heroBgDesktopWebp from '../../assets/commerce-grid-hero.webp';
import heroBgDesktopPng from '../../assets/commerce-grid-hero.png';
import heroBgMobileWebp from '../../assets/commerce-grid-hero-mobile.webp';
import heroBgMobilePng from '../../assets/commerce-grid-hero-mobile.png';
import amazonLogo from '../../assets/amazon-logo.png';
import myntraLogo from '../../assets/myntra-logo.png';
import { Navbar } from '../Navbar';

interface CommerceGridHeroProps {
  onNavigate?: (tabName: string) => void;
  onGetInTouch?: () => void;
}

export const CommerceGridHero: React.FC<CommerceGridHeroProps> = ({
  onNavigate,
  onGetInTouch,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 120);

    return () => {
      window.removeEventListener('resize', checkMobile);
      clearTimeout(timer);
    };
  }, []);

  const handleStartSelling = () => {
    if (onGetInTouch) {
      onGetInTouch();
      return;
    }
    const elem = document.getElementById('consultation-banner') || document.getElementById('book-consultation') || document.getElementById('core-capabilities');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="commerce-grid-hero"
      style={{
        position: 'relative',
        width: '100%',
        height: isMobile ? '826px' : '815px',
        minHeight: isMobile ? '826px' : '815px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
        backgroundColor: '#000000',
      }}
    >
      {!imageLoaded && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#050202',
            zIndex: 2,
          }}
        >
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              border: '3px solid rgba(197, 66, 43, 0.2)',
              borderTopColor: '#c5422b',
              animation: 'spin 0.7s linear infinite',
            }}
          />
        </div>
      )}
      <picture>
        <source
          type="image/webp"
          srcSet={isMobile ? heroBgMobileWebp : heroBgDesktopWebp}
        />
        <img
          src={isMobile ? heroBgMobilePng : heroBgDesktopPng}
          alt="Commerce Grid Hero - Model in car driving by the coast with smartphone commerce UI"
          fetchPriority="high"
          decoding="sync"
          onLoad={() => setImageLoaded(true)}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center center',
            pointerEvents: 'none',
            zIndex: 1,
            opacity: imageLoaded ? 1 : 0,
            transition: 'opacity 0.4s ease-out',
          }}
          draggable={false}
        />
      </picture>

      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: isMobile ? '93px' : '163px',
          background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0) 100%)',
          backdropFilter: 'blur(1px)',
          WebkitBackdropFilter: 'blur(1px)',
          zIndex: 3,
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: isMobile ? '344px' : '381px',
          background: isMobile
            ? 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.45) 45%, rgba(0, 0, 0, 0.9) 82%, #000000 100%)'
            : 'linear-gradient(177.66deg, rgba(0, 0, 0, 0) 0.72%, rgba(0, 0, 0, 0.45) 45%, rgba(0, 0, 0, 0.9) 82%, #000000 93.5%, #000000 100%)',
          backdropFilter: 'blur(1px)',
          WebkitBackdropFilter: 'blur(1px)',
          zIndex: 3,
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'relative', zIndex: 10, width: '100%' }}>
        <Navbar
          activeTab="Commerce Grid"
          onTabClick={onNavigate}
          onGetInTouchClick={onGetInTouch}
        />
      </div>

      {!isMobile && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            maxWidth: '1395px',
            margin: '0 auto',
            pointerEvents: 'none',
            zIndex: 2,
          }}
        >
          <div
            style={{
              position: 'absolute',
              left: '-97px',
              top: '602px',
              width: '343px',
              height: '87px',
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              boxShadow: '0px 1px 5.7px rgba(0, 0, 0, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 24px',
              boxSizing: 'border-box',
              userSelect: 'none',
              filter: 'blur(1.5px)',
              opacity: 0.92,
              transition:
                'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), filter 0.35s ease, opacity 0.35s ease, box-shadow 0.35s ease',
              pointerEvents: 'auto',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.filter = 'blur(0px)';
              e.currentTarget.style.opacity = '1';
              e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0px 8px 24px rgba(0, 0, 0, 0.35)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.filter = 'blur(1.5px)';
              e.currentTarget.style.opacity = '0.92';
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0px 1px 5.7px rgba(0, 0, 0, 0.25)';
            }}
          >
            <div style={{ width: '100px', height: '31px', display: 'flex', alignItems: 'center' }}>
              <img
                src={amazonLogo}
                alt="Amazon"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
            <div style={{ textAlign: 'right' }}>
              <div
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                  fontSize: '16px',
                  color: '#000000',
                  lineHeight: 1.2,
                }}
              >
                ₹ 999
              </div>
              <div
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 400,
                  fontSize: '14px',
                  color: '#000000',
                  lineHeight: 1.2,
                  marginTop: '2px',
                }}
              >
                Yoga Track Pant
              </div>
            </div>
          </div>

          <div
            style={{
              position: 'absolute',
              left: '1121px',
              top: '478px',
              width: '343px',
              height: '87px',
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              boxShadow: '0px 1px 7.5px rgba(0, 0, 0, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 24px',
              boxSizing: 'border-box',
              userSelect: 'none',
              filter: 'blur(1.5px)',
              opacity: 0.92,
              transition:
                'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), filter 0.35s ease, opacity 0.35s ease, box-shadow 0.35s ease',
              pointerEvents: 'auto',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.filter = 'blur(0px)';
              e.currentTarget.style.opacity = '1';
              e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0px 8px 24px rgba(0, 0, 0, 0.35)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.filter = 'blur(1.5px)';
              e.currentTarget.style.opacity = '0.92';
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0px 1px 7.5px rgba(0, 0, 0, 0.25)';
            }}
          >
            <div style={{ width: '100px', height: '31px', display: 'flex', alignItems: 'center' }}>
              <img
                src={amazonLogo}
                alt="Amazon"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
            <div style={{ textAlign: 'right' }}>
              <div
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                  fontSize: '16px',
                  color: '#000000',
                  lineHeight: 1.2,
                }}
              >
                ₹ 1,299
              </div>
              <div
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 400,
                  fontSize: '14px',
                  color: '#000000',
                  lineHeight: 1.2,
                  marginTop: '2px',
                }}
              >
                Black Formal Shirt
              </div>
            </div>
          </div>

          <div
            style={{
              position: 'absolute',
              left: '1326px',
              top: '599px',
              width: '343px',
              height: '87px',
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              boxShadow: '0px 1px 7.5px rgba(0, 0, 0, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 24px',
              boxSizing: 'border-box',
              userSelect: 'none',
              filter: 'blur(1.5px)',
              opacity: 0.92,
              transition:
                'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), filter 0.35s ease, opacity 0.35s ease, box-shadow 0.35s ease',
              pointerEvents: 'auto',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.filter = 'blur(0px)';
              e.currentTarget.style.opacity = '1';
              e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0px 8px 24px rgba(0, 0, 0, 0.35)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.filter = 'blur(1.5px)';
              e.currentTarget.style.opacity = '0.92';
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0px 1px 7.5px rgba(0, 0, 0, 0.25)';
            }}
          >
            <div style={{ width: '129px', height: '31px', display: 'flex', alignItems: 'center' }}>
              <img
                src={myntraLogo}
                alt="Myntra"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
            <div style={{ textAlign: 'right' }}>
              <div
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                  fontSize: '16px',
                  color: '#000000',
                  lineHeight: 1.2,
                }}
              >
                ₹ 2,000
              </div>
              <div
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 400,
                  fontSize: '14px',
                  color: '#000000',
                  lineHeight: 1.2,
                  marginTop: '2px',
                }}
              >
                Red Jacket
              </div>
            </div>
          </div>
        </div>
      )}

      <div
        style={{
          position: 'absolute',
          bottom: isMobile ? '76px' : '50px',
          left: 0,
          right: 0,
          zIndex: 5,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          padding: isMobile ? '0 20px' : '0 40px',
          boxSizing: 'border-box',
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <h1
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 600,
            fontSize: isMobile ? 'clamp(30px, 8.5vw, 36px)' : 'clamp(44px, 5.16vw, 72px)',
            lineHeight: 1.1,
            letterSpacing: isMobile ? '-1.5px' : '-2.3321px',
            color: '#ffffff',
            margin: 0,
            maxWidth: isMobile ? '340px' : '1200px',
            textShadow: '0 4px 24px rgba(0, 0, 0, 0.6)',
            textAlign: 'center',
          }}
        >
          {isMobile ? (
            <>
              Unified
              <br />
              Commerce
              <br />
              Built to Scale
            </>
          ) : (
            <>
              Unified Commerce
              <br />
              Built to Scale
            </>
          )}
        </h1>

        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 500,
            fontSize: isMobile ? '16px' : 'clamp(18px, 2.3vw, 32px)',
            lineHeight: isMobile ? 1.25 : 1.15,
            letterSpacing: isMobile ? '-1.5px' : '-2.3321px',
            color: '#ffffff',
            margin: isMobile ? '10px 0 0 0' : '14px 0 0 0',
            maxWidth: isMobile ? '275px' : '700px',
            textShadow: '0 2px 16px rgba(0, 0, 0, 0.6)',
            textAlign: 'center',
          }}
        >
          Connecting brands to every channel, every customer and every opportunity
        </p>

        <button
          onClick={handleStartSelling}
          style={{
            marginTop: isMobile ? '38px' : '45px',
            width: isMobile ? '170px' : '207px',
            height: isMobile ? '38px' : '49px',
            borderRadius: '74px',
            background: isMobile
              ? 'linear-gradient(to right, #b23b27 0%, #371615 132.94%)'
              : 'linear-gradient(90.08deg, rgb(178, 59, 39) 0%, rgb(55, 22, 21) 172.18%)',
            border: 'none',
            color: '#ffffff',
            fontFamily: "'Montserrat', sans-serif",
            fontSize: isMobile ? '16px' : '18px',
            fontWeight: isMobile ? 500 : 600,
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0px 10px 43.3px 0px rgba(0, 0, 0, 0.2)',
            transition: 'transform 0.25s ease, box-shadow 0.25s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0px 14px 48px 0px rgba(178, 59, 39, 0.45)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0px 10px 43.3px 0px rgba(0, 0, 0, 0.2)';
          }}
        >
          Start Selling
        </button>
      </div>
    </section>
  );
};
