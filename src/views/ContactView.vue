<template>
  <div class="view-container">
    <h1><Phone class="view-header-icon" /> Contact Us</h1>
    <div class="content-section">
      <div class="contact-intro">
        <h2>Get In Touch</h2>
        <p class="intro-text">
          We'd love to hear from you! Whether you have questions about our services, need support,
          or want to discuss a potential partnership, our team is here to help.
        </p>
      </div>

      <div class="contact-content">
        <div class="contact-info">
          <h3>Contact Information</h3>

          <div class="contact-item">
            <div class="contact-icon">📍</div>
            <div>
              <h4>Address</h4>
              <p>123 Business Street<br />Suite 100<br />City, ST 12345</p>
            </div>
          </div>

          <div class="contact-item">
            <div class="contact-icon">📞</div>
            <div>
              <h4>Phone</h4>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>

          <div class="contact-item">
            <div class="contact-icon">✉️</div>
            <div>
              <h4>Email</h4>
              <p>info@company.com</p>
            </div>
          </div>

          <div class="contact-item">
            <div class="contact-icon">🕒</div>
            <div>
              <h4>Business Hours</h4>
              <p>
                Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM<br />Sunday:
                Closed
              </p>
            </div>
          </div>
        </div>

        <div class="contact-form">
          <h3>Send us a Message</h3>
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="name">Full Name *</label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                required
                placeholder="Enter your full name"
              />
            </div>

            <div class="form-group">
              <label for="email">Email Address *</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                placeholder="Enter your email address"
              />
            </div>

            <div class="form-group">
              <label for="subject">Subject *</label>
              <input
                id="subject"
                v-model="form.subject"
                type="text"
                required
                placeholder="Enter the subject"
              />
            </div>

            <div class="form-group">
              <label for="message">Message *</label>
              <textarea
                id="message"
                v-model="form.message"
                required
                rows="5"
                placeholder="Enter your message"
              ></textarea>
            </div>

            <button type="submit" class="submit-btn" :disabled="isSubmitting">
              {{ isSubmitting ? 'Sending...' : 'Send Message' }}
            </button>
          </form>
        </div>
      </div>

      <div class="map-section">
        <h3>Find Us</h3>
        <div class="map-placeholder">
          <p>🗺️ Interactive Map Coming Soon</p>
          <p class="map-note">
            We're located in the heart of the business district, easily accessible by public
            transport.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { Phone } from 'lucide-vue-next'

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const isSubmitting = ref(false)

const submitForm = async () => {
  isSubmitting.value = true

  // Simulate form submission
  await new Promise((resolve) => setTimeout(resolve, 1000))

  alert("Thank you for your message! We'll get back to you soon.")

  // Reset form
  Object.assign(form, {
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  isSubmitting.value = false
}
</script>

<style scoped>
.contact-intro {
  text-align: center;
  margin-bottom: 3rem;
}

.intro-text {
  font-size: 1.1rem;
  color: var(--color-text-secondary);
  max-width: 700px;
  margin: 1rem auto;
  line-height: 1.6;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

.contact-info h3,
.contact-form h3 {
  margin-bottom: 1.5rem;
  color: var(--color-text-primary);
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.contact-icon {
  font-size: 1.5rem;
  min-width: 2rem;
}

.contact-item h4 {
  margin-bottom: 0.25rem;
  color: var(--color-text-primary);
}

.contact-item p {
  color: var(--color-text-secondary);
  line-height: 1.4;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--color-text-primary);
  font-weight: 500;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--color-border-light);
  border-radius: 0.25rem;
  font-family: inherit;
  transition: border-color 0.2s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-accent);
}

.submit-btn {
  background-color: var(--color-accent);
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 0.25rem;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.2s ease;
}

.submit-btn:hover:not(:disabled) {
  background-color: var(--color-accent-dark);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.map-section {
  margin-top: 3rem;
}

.map-section h3 {
  margin-bottom: 1rem;
  color: var(--color-text-primary);
}

.map-placeholder {
  background-color: var(--color-bg-primary);
  border: 2px dashed var(--color-border-light);
  border-radius: 0.5rem;
  padding: 3rem;
  text-align: center;
  color: var(--color-text-secondary);
}

.map-note {
  margin-top: 1rem;
  font-size: 0.9rem;
}
</style>
