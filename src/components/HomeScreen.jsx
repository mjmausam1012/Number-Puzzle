import React, { useState } from 'react';
import { soundManager } from '../utils/audio';
import { HowToPlayModal, CertificatesModal, QuitConfirmModal } from './Modals';
import bgImg from '../assets/bg-img.png';
import startImg from '../assets/start.png';
import nebuloidLogo from "../assets/nebuloid-vertical.png";

export const HomeScreen = ({ onPlayNow, isMuted, onToggleMute }) => {
  const [isHowToPlayOpen, setIsHowToPlayOpen] = useState(false);
  const [isCertificatesOpen, setIsCertificatesOpen] = useState(false);
  const [isQuitOpen, setIsQuitOpen] = useState(false);

  return (
    <div
      className="relative w-full h-screen min-h-[600px] overflow-hidden flex items-center justify-center select-none bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Subtle Darkening Overlay for Better Contrast */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none z-0" />

      {/* Floating Sound Control Button (Top-Right) */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-8 z-30">
        <button
          onClick={() => {
            soundManager.playClick();
            onToggleMute();
          }}
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-emerald-950/60 hover:bg-emerald-900/80 border border-white/30 backdrop-blur-md text-white flex items-center justify-center shadow-lg transition-all active:scale-95 cursor-pointer"
          title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
        >
          {!isMuted ? (
            <svg className="w-5 h-5 text-emerald-100" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M11 5L6 9H2v6h4l5 4V5z" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-red-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
            </svg>
          )}
        </button>
      </div>

      <div className="absolute top-6 left-6 z-30">
        <img src={nebuloidLogo} alt="" className='h-30' />
      </div>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* FROSTED GLASS CENTER MODAL / CONTAINER */}
      {/* ───────────────────────────────────────────────────────────── */}
      <div className="relative z-10 w-[94%] sm:w-[90%] max-w-5xl h-[88vh] max-h-[740px] min-h-[520px] rounded-[28px] sm:rounded-[36px] glass-start-card flex flex-col justify-between items-center py-6 sm:py-8 md:py-10 px-4 sm:px-8 text-center animate-fadeIn">
        {/* Top Header Section */}
        <div className="pt-2 sm:pt-4 space-y-1 sm:space-y-2">
          <div className="text-white/90 text-xs sm:text-sm md:text-base font-semibold tracking-[0.45em] sm:tracking-[0.6em] uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] select-none">
            W E L C O M E &nbsp; T O
          </div>
          <h1 className="font-sans font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-wider uppercase drop-shadow-[0_4px_14px_rgba(0,0,0,0.55)] select-none">
            NUMBER PUZZLE
          </h1>
        </div>

        {/* Center Circular START Button */}
        <div className="my-auto py-2 flex items-center justify-center">
          <button
            onClick={() => {
              soundManager.playClick();
              onPlayNow();
            }}
            className="group relative cursor-pointer outline-none focus:outline-none transition-transform duration-300 hover:scale-105 active:scale-95 select-none"
            title="Click to Start Game"
          >
            {/* Ambient Pulse Behind Button */}
            <div className="absolute inset-0 rounded-full bg-green-400/20 blur-2xl group-hover:bg-green-400/40 transition-all duration-300 pointer-events-none" />

            <img
              src={startImg}
              alt="START"
              className="w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 object-contain filter drop-shadow-[0_0_24px_rgba(74,222,128,0.55)] group-hover:drop-shadow-[0_0_40px_rgba(74,222,128,0.9)] transition-all duration-300"
            />
          </button>
        </div>

        {/* Bottom 3 Pill Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 pb-2 sm:pb-3 w-full">
          {/* Button 1: Cretificates */}
          <button
            onClick={() => {
              soundManager.playClick();
              setIsCertificatesOpen(true);
            }}
            className="btn-pill-green rounded-full px-5 py-2.5 sm:px-6 sm:py-2.5 flex items-center space-x-2 text-white font-medium text-xs sm:text-sm tracking-wide cursor-pointer"
          >
            {/* Certificate Icon with Star */}
            <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-amber-300 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              <polygon points="12,15 13,17 15,17 13.5,18.5 14,21 12,19.5 10,21 10.5,18.5 9,17 11,17" fill="#fcd34d" stroke="none" />
            </svg>
            <span>Cretificates</span>
          </button>

          {/* Button 2: How To Play */}
          <button
            onClick={() => {
              soundManager.playClick();
              setIsHowToPlayOpen(true);
            }}
            className="btn-pill-green rounded-full px-5 py-2.5 sm:px-6 sm:py-2.5 flex items-center space-x-2 text-white font-medium text-xs sm:text-sm tracking-wide cursor-pointer"
          >
            {/* Question Mark Icon */}
            <span className="w-4 h-4 rounded-full bg-white/20 text-white font-bold text-xs flex items-center justify-center">
              ?
            </span>
            <span>How To Play</span>
          </button>

          {/* Button 3: Quit To Home */}
          <button
            onClick={() => {
              soundManager.playClick();
              setIsQuitOpen(true);
            }}
            className="btn-pill-green rounded-full px-5 py-2.5 sm:px-6 sm:py-2.5 flex items-center space-x-2 text-white font-medium text-xs sm:text-sm tracking-wide cursor-pointer"
          >
            {/* Home Icon */}
            <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span>Quit To Home</span>
          </button>
        </div>
      </div>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* MODALS */}
      {/* ───────────────────────────────────────────────────────────── */}
      <HowToPlayModal
        isOpen={isHowToPlayOpen}
        onClose={() => setIsHowToPlayOpen(false)}
      />

      <CertificatesModal
        isOpen={isCertificatesOpen}
        onClose={() => setIsCertificatesOpen(false)}
      />

      <QuitConfirmModal
        isOpen={isQuitOpen}
        onClose={() => setIsQuitOpen(false)}
        onConfirm={() => {
          window.location.reload();
        }}
      />
    </div>
  );
};

export default HomeScreen;