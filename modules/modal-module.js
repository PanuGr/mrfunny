/**
 * Modal dialog module for displaying messages and collecting user input
 * @returns {Object} Modal interface with show/hide methods
 */
export function setupModal() {
  const modalElement = document.getElementById('modal');
  const closeButton = document.getElementById('close-modal');
  const okButton = document.getElementById('modal-ok');
  const modalTitle = document.getElementById('modal-title');
  const modalMessage = document.getElementById('modal-message');
  
  let currentCallback = null;
  
  // Close modal when clicking the X button
  closeButton.addEventListener('click', () => {
    hideModal();
  });
  
  // Close modal when clicking the OK button and execute callback if any
  okButton.addEventListener('click', () => {
    let inputValue = null;
    const inputElement = modalMessage.querySelector('.modal-input');
    if (inputElement) {
      inputValue = inputElement.value;
    }
    
    hideModal();
    
    if (typeof currentCallback === 'function') {
      currentCallback(inputValue);
      currentCallback = null;
    }
  });
  
  // Close modal when clicking outside of it
  window.addEventListener('click', (event) => {
    if (event.target === modalElement) {
      hideModal();
    }
  });
  
  // Close modal with Escape key
  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modalElement.hidden) {
      hideModal();
    }
  });
  
  /**
   * Show the modal with specified content
   * @param {Object} options - Modal options
   * @param {string} options.title - Modal title
   * @param {string} options.message - Modal message (can include HTML)
   * @param {boolean} options.showInput - Whether to include an input field
   * @param {Function} options.callback - Function to call when modal is closed
   */
  function showModal({ title = 'Message', message = '', showInput = false, callback = null }) {
    modalTitle.textContent = title;
    modalMessage.innerHTML = message;
    currentCallback = callback;
    
    // Focus first input element if any
    setTimeout(() => {
      const inputElement = modalMessage.querySelector('.modal-input');
      if (inputElement) {
        inputElement.focus();
      }
    }, 100);
    
    // Make modal visible
    modalElement.hidden = false;
    modalElement.setAttribute('aria-hidden', 'false');
    
    // Trap focus within modal
    trapFocus(modalElement);
  }
  
  /**
   * Hide the modal dialog
   */
  function hideModal() {
    modalElement.hidden = true;
    modalElement.setAttribute('aria-hidden', 'true');
  }
  
  /**
   * Trap keyboard focus inside the modal
   * @param {HTMLElement} element - Element to trap focus within
   */
  function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
      'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled])'
    );
    
    if (focusableElements.length === 0) return;
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    firstElement.focus();
    
    element.addEventListener('keydown', function(e) {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    });
  }
  
  // Return public interface
  return {
    show: showModal,
    hide: hideModal
  };
}
