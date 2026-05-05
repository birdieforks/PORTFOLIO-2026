// Filter function
function filter(category) {
  const items = document.querySelectorAll('.gallery-item');
  const buttons = document.querySelectorAll('.filter-btn');
  
  // Update active button
  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  
  // Filter items
  items.forEach(item => {
    if (category === 'all') {
      item.classList.remove('hidden');
    } else if (item.classList.contains(category)) {
      item.classList.remove('hidden');
    } else {
      item.classList.add('hidden');
    }
  });
}

// Toggle expand function
function toggleExpand(element) {
  const modal = document.getElementById('expandedModal');
  const expandedImage = document.getElementById('expandedImage');
  const img = element.querySelector('img');
  
  expandedImage.src = img.src;
  expandedImage.alt = img.alt;
  modal.classList.remove('hidden');
}

// Close expanded view
function closeExpanded() {
  const modal = document.getElementById('expandedModal');
  modal.classList.add('hidden');
}

// Close modal when clicking outside the image
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('expandedModal');
  if (modal) {
    modal.addEventListener('click', function(event) {
      if (event.target === this) {
        closeExpanded();
      }
    });
  }
});
