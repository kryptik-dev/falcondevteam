// Mobile Orientation and Fullscreen Handler for Storm Dash Preview
// This file should be included in the HTML or referenced externally

(function() {
    'use strict';
    
    // Check if device is mobile
    function isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
               (window.innerWidth <= 768 && window.innerHeight <= 1024);
    }
    
    // Check if device supports orientation lock
    function supportsOrientationLock() {
        return 'orientation' in screen && 'lock' in screen.orientation;
    }
    
    // Check if device supports fullscreen
    function supportsFullscreen() {
        return document.fullscreenEnabled || 
               document.webkitFullscreenEnabled || 
               document.mozFullScreenEnabled || 
               document.msFullscreenEnabled;
    }
    
    // Force landscape orientation
    function forceLandscape() {
        if (supportsOrientationLock()) {
            screen.orientation.lock('landscape').catch(function(error) {
                console.log('Orientation lock failed:', error);
            });
        } else {
            // Fallback for devices that don't support orientation lock
            if (window.innerHeight > window.innerWidth) {
                // Show rotation message
                showRotationMessage();
            }
        }
    }
    
    // Enter fullscreen mode
    function enterFullscreen() {
        if (!supportsFullscreen()) return;
        
        const elem = document.documentElement;
        
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
    }
    
    // Show rotation message for devices without orientation lock
    function showRotationMessage() {
        // Remove existing message if any
        const existingMessage = document.getElementById('rotation-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        const message = document.createElement('div');
        message.id = 'rotation-message';
        message.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            color: white;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 20px;
        `;
        
        message.innerHTML = `
            <div style="font-size: 24px; margin-bottom: 20px;">📱</div>
            <div style="font-size: 18px; margin-bottom: 15px;">Please rotate your device</div>
            <div style="font-size: 14px; color: #ccc;">Turn your phone to landscape mode for the best experience</div>
        `;
        
        document.body.appendChild(message);
        
        // Remove message when orientation changes to landscape
        const checkOrientation = () => {
            if (window.innerWidth > window.innerHeight) {
                message.remove();
                window.removeEventListener('resize', checkOrientation);
            }
        };
        
        window.addEventListener('resize', checkOrientation);
        
        // Auto-remove after 10 seconds
        setTimeout(() => {
            if (message.parentNode) {
                message.remove();
                window.removeEventListener('resize', checkOrientation);
            }
        }, 10000);
    }
    
    // Handle orientation change
    function handleOrientationChange() {
        if (window.innerHeight > window.innerWidth) {
            // Portrait mode - show rotation message
            showRotationMessage();
        } else {
            // Landscape mode - hide rotation message
            const message = document.getElementById('rotation-message');
            if (message) {
                message.remove();
            }
        }
    }
    
    // Initialize mobile features
    function initMobileFeatures() {
        if (!isMobile()) return;
        
        console.log('Mobile device detected, initializing orientation and fullscreen features');
        
        // Force landscape on load
        forceLandscape();
        
        // Enter fullscreen when user interacts
        let fullscreenRequested = false;
        const requestFullscreenOnInteraction = () => {
            if (!fullscreenRequested && supportsFullscreen()) {
                enterFullscreen();
                fullscreenRequested = true;
                // Remove event listeners after first interaction
                document.removeEventListener('touchstart', requestFullscreenOnInteraction);
                document.removeEventListener('click', requestFullscreenOnInteraction);
            }
        };
        
        // Listen for user interaction to request fullscreen
        document.addEventListener('touchstart', requestFullscreenOnInteraction);
        document.addEventListener('click', requestFullscreenOnInteraction);
        
        // Monitor orientation changes
        window.addEventListener('resize', handleOrientationChange);
        
        // Check orientation on load
        setTimeout(handleOrientationChange, 1000);
        
        // Add CSS to prevent zooming and ensure proper viewport
        const style = document.createElement('style');
        style.textContent = `
            @media screen and (max-width: 768px) {
                body {
                    -webkit-touch-callout: none;
                    -webkit-user-select: none;
                    -khtml-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                    touch-action: manipulation;
                }
                
                #rotation-message {
                    font-size: 16px;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMobileFeatures);
    } else {
        initMobileFeatures();
    }
    
    // Also initialize when window loads (for game files that load after DOMContentLoaded)
    window.addEventListener('load', initMobileFeatures);
    
})();
