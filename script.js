function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  // appearance of modal form 
  document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("contactModal");
    const closeBtn = document.querySelector(".close-btn");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageTextarea = document.getElementById("message");
  
    // Show modal after 5 seconds
    setTimeout(() => {
      modal.style.display = "flex";
    }, 10000);
  
    // Close modal on clicking the close button
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    modal.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = nameInput.value;
      const email = emailInput.value;
      const message = messageTextarea.value;
  
      // Simulate saving the data
      alert(`Thank you for your feedback, ${name}!\n\nMessage received:\n${message}`);
      modal.messageTextarea.value = " ";
    });
  
    // Close modal when clicking outside the modal content
    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });


  
  