<template>
  <div class="view-container">
    <h1><Info class="view-header-icon" /> About Us</h1>
    <div class="content-section">
      <div class="about-intro">
        <h2>Our Story</h2>
        <p class="intro-text">
          Founded with a vision to revolutionize the way businesses operate, we've been at the
          forefront of innovation for over a decade. Our team of passionate professionals is
          dedicated to creating solutions that make a real difference.
        </p>
      </div>

      <div class="mission-vision">
        <div class="mission">
          <h3>🎯 Our Mission</h3>
          <p>
            To empower businesses with cutting-edge technology solutions that drive growth,
            efficiency, and success in an ever-evolving digital landscape.
          </p>
        </div>
        <div class="vision">
          <h3>🔮 Our Vision</h3>
          <p>
            To be the global leader in innovative business solutions, creating a world where
            technology seamlessly enhances human potential and business capabilities.
          </p>
        </div>
      </div>

      <div class="team-section">
        <h2>Meet Our Team</h2>
        <div class="team-grid">
          <div class="team-member">
            <div class="member-avatar">👨‍💼</div>
            <h4>John Smith</h4>
            <p class="member-role">CEO & Founder</p>
            <p class="member-description">Visionary leader with 15+ years in tech innovation.</p>
          </div>
          <div class="team-member">
            <div class="member-avatar">👩‍💻</div>
            <h4>Sarah Johnson</h4>
            <p class="member-role">CTO</p>
            <p class="member-description">Technical expert driving our engineering excellence.</p>
          </div>
          <div class="team-member">
            <div class="member-avatar">👨‍🎨</div>
            <h4>Mike Chen</h4>
            <p class="member-role">Head of Design</p>
            <p class="member-description">Creative mind behind our intuitive user experiences.</p>
          </div>
          <div class="team-member">
            <div class="member-avatar">👩‍💼</div>
            <h4>Emily Davis</h4>
            <p class="member-role">Head of Operations</p>
            <p class="member-description">Operations expert ensuring seamless delivery.</p>
          </div>
        </div>
      </div>

      <div class="values-section">
        <h2>Our Values</h2>
        <div class="values-grid">
          <div class="value-card">
            <h4>Innovation</h4>
            <p>Constantly pushing boundaries to create breakthrough solutions.</p>
          </div>
          <div class="value-card">
            <h4>Integrity</h4>
            <p>Building trust through transparency and ethical business practices.</p>
          </div>
          <div class="value-card">
            <h4>Excellence</h4>
            <p>Delivering exceptional quality in everything we do.</p>
          </div>
          <div class="value-card">
            <h4>Collaboration</h4>
            <p>Working together to achieve extraordinary results.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Info } from 'lucide-vue-next'
</script>

<style scoped>
.about-intro {
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

.mission-vision {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.mission,
.vision {
  padding: 2rem;
  background-color: var(--color-bg-primary);
  border-radius: 0.5rem;
  border: 1px solid var(--color-border-light);
}

.mission h3,
.vision h3 {
  margin-bottom: 1rem;
  color: var(--color-text-primary);
}

.team-section {
  margin-bottom: 3rem;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.team-member {
  text-align: center;
  padding: 1.5rem;
  background-color: var(--color-bg-primary);
  border-radius: 0.5rem;
  border: 1px solid var(--color-border-light);
  transition: transform 0.2s ease;
}

.team-member:hover {
  transform: translateY(-4px);
}

.member-avatar {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.member-role {
  color: var(--color-accent);
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.member-description {
  color: var(--color-text-secondary);
  font-size: 0.9rem;
  line-height: 1.4;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.value-card {
  padding: 1.5rem;
  background-color: var(--color-bg-primary);
  border-radius: 0.5rem;
  border: 1px solid var(--color-border-light);
  text-align: center;
  transition: transform 0.2s ease;
}

.value-card:hover {
  transform: translateY(-2px);
}

.value-card h4 {
  color: var(--color-accent);
  margin-bottom: 0.75rem;
  font-size: 1.1rem;
}

.value-card p {
  color: var(--color-text-secondary);
  font-size: 0.9rem;
  line-height: 1.4;
}
</style>
