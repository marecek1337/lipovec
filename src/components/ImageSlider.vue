<template>
  <div id="image-slider" class="image-container">
    <!-- Background (next) image -->
    <img class="image" :src="require('@/assets/' + images[nextImageIndex])" :alt="'Slide ' + (nextImageIndex + 1)" />

    <!-- Foreground (current) image with fading effect -->
    <img class="image" :src="require('@/assets/' + images[currentImageIndex])" :alt="'Slide ' + (currentImageIndex + 1)"
      :class="{ 'image--fade': isFading }" />

    <!-- Navigation buttons -->
    <button class="nav-button prev" @click="prevImage" aria-label="Previous">&#10094;</button>
    <button class="nav-button next" @click="nextImage" aria-label="Next">&#10095;</button>
  </div>
</template>

<script>
export default {
  name: "ImageSlider",
  data() {
    return {
      images: ["1.png", "2.png", "3.png", "4.png"],
      currentImageIndex: 0,
      isFading: false, // State to control the fading effect
    };
  },
  computed: {
    // Determine the index of the next image
    nextImageIndex() {
      return (this.currentImageIndex + 1) % this.images.length;
    },
  },
  methods: {
    nextImage() {
      this.isFading = true; // Start the fading effect
      // After the transition is complete, move to the next image
      setTimeout(() => {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
        this.isFading = false; // End the fading effect
      }, 1000); // This timeout should match the transition duration
    },
    prevImage() {
      this.isFading = true; // Start the fading effect
      // After the transition is complete, move to the previous image
      setTimeout(() => {
        this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
        this.isFading = false; // End the fading effect
      }, 1000); // This timeout should match the transition duration
    },
  },
  created() {
    this.interval = setInterval(this.nextImage, 10000); // Change image every 10 seconds
  },
  beforeUnmount() {
    clearInterval(this.interval); // Clear the interval when the component is destroyed
  },
};
</script>

<style scoped>
.image-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 50vh; /* Adjust the height as necessary */
}

.image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image--fade {
  transition: opacity 1.3s ease;
  opacity: 0;
}


.nav-button:hover {
  opacity: 0.5;
}

.nav-button.prev {
  left: 10px;
}

.nav-button.next {
  right: 10px;
}


/* Responsive adjustments */
@media (max-width: 1350px) { /* Tablet */
  .image-container {
  margin-top: 77px;
}
}

/* Responsive adjustments */
@media (max-width: 768px) { /* Tablet */
  .image-container {
    height: 30vh; /* Adjust for smaller screens */
  }

  .nav-button {
    padding: 8px; /* Smaller buttons */
  }
}

@media (max-width: 480px) { /* Mobile */
  .image-container {
    height: 20vh; /* Adjust for smaller screens */
  }

  .nav-button {
    padding: 5px; /* Even smaller buttons */
  }
}
</style>
