<template>
  <div class="view-container">
    <h1><Briefcase class="view-header-icon" /> Our Services</h1>
    <div class="content-section">
      <div class="services-intro">
        <h2>What We Offer</h2>
        <p class="intro-text">
          We provide comprehensive solutions tailored to meet your business needs. From consulting
          to implementation, our expert team delivers excellence at every step.
        </p>
      </div>

      <div class="services-grid">
        <div class="service-card">
          <div class="service-icon">💼</div>
          <h3>Business Consulting</h3>
          <p class="service-description">
            Strategic guidance to help your business grow and adapt in today's competitive market.
            Our experts analyze your needs and provide actionable insights.
          </p>
          <ul class="service-features">
            <li>Market Analysis</li>
            <li>Strategic Planning</li>
            <li>Process Optimization</li>
            <li>Performance Metrics</li>
          </ul>
          <div class="service-price">Starting at $2,500/month</div>
        </div>

        <div class="service-card">
          <div class="service-icon">💻</div>
          <h3>Software Development</h3>
          <p class="service-description">
            Custom software solutions built with cutting-edge technology to streamline your
            operations and enhance productivity across your organization.
          </p>
          <ul class="service-features">
            <li>Web Applications</li>
            <li>Mobile Apps</li>
            <li>API Development</li>
            <li>Database Design</li>
          </ul>
          <div class="service-price">Starting at $5,000/project</div>
        </div>

        <div class="service-card">
          <div class="service-icon">☁️</div>
          <h3>Cloud Solutions</h3>
          <p class="service-description">
            Seamless migration to cloud infrastructure with enhanced security, scalability, and
            reliability. Reduce costs while improving performance.
          </p>
          <ul class="service-features">
            <li>Cloud Migration</li>
            <li>Infrastructure Setup</li>
            <li>Security Implementation</li>
            <li>24/7 Monitoring</li>
          </ul>
          <div class="service-price">Starting at $1,800/month</div>
        </div>

        <div class="service-card">
          <div class="service-icon">📊</div>
          <h3>Data Analytics</h3>
          <p class="service-description">
            Transform your data into actionable insights with advanced analytics, visualization, and
            reporting tools that drive informed decision-making.
          </p>
          <ul class="service-features">
            <li>Data Visualization</li>
            <li>Predictive Analytics</li>
            <li>Custom Dashboards</li>
            <li>Report Generation</li>
          </ul>
          <div class="service-price">Starting at $3,200/month</div>
        </div>

        <div class="service-card">
          <div class="service-icon">🛡️</div>
          <h3>Cybersecurity</h3>
          <p class="service-description">
            Comprehensive security solutions to protect your business from threats. From assessment
            to implementation, we ensure your data stays safe.
          </p>
          <ul class="service-features">
            <li>Security Audits</li>
            <li>Threat Detection</li>
            <li>Incident Response</li>
            <li>Compliance Management</li>
          </ul>
          <div class="service-price">Starting at $4,000/month</div>
        </div>

        <div class="service-card">
          <div class="service-icon">🎓</div>
          <h3>Training & Support</h3>
          <p class="service-description">
            Empower your team with comprehensive training programs and ongoing support to maximize
            the value of your technology investments.
          </p>
          <ul class="service-features">
            <li>Team Training</li>
            <li>Documentation</li>
            <li>Technical Support</li>
            <li>Best Practices</li>
          </ul>
          <div class="service-price">Starting at $1,500/month</div>
        </div>
      </div>

      <div class="process-section">
        <h2>Our Process</h2>
        <div class="process-steps">
          <div class="process-step">
            <div class="step-number">1</div>
            <h4>Discovery</h4>
            <p>We analyze your current situation and understand your goals.</p>
          </div>
          <div class="process-step">
            <div class="step-number">2</div>
            <h4>Planning</h4>
            <p>Create a detailed roadmap and timeline for your project.</p>
          </div>
          <div class="process-step">
            <div class="step-number">3</div>
            <h4>Implementation</h4>
            <p>Execute the plan with regular updates and quality checkpoints.</p>
          </div>
          <div class="process-step">
            <div class="step-number">4</div>
            <h4>Support</h4>
            <p>Provide ongoing support and optimization for continued success.</p>
          </div>
        </div>
      </div>

      <div class="cta-section">
        <h2>Ready to Get Started?</h2>
        <p>
          Contact us today for a free consultation and let's discuss how we can help your business
          grow.
        </p>
        <button class="cta-button">Schedule Consultation</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Briefcase } from 'lucide-vue-next'
</script>

<style scoped>
.services-intro {
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

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.service-card {
  background-color: var(--color-bg-primary);
  border: 1px solid var(--color-border-light);
  border-radius: 0.75rem;
  padding: 2rem;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
}

.service-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.service-card h3 {
  margin-bottom: 1rem;
  color: var(--color-text-primary);
}

.service-description {
  color: var(--color-text-secondary);
  line-height: 1.5;
  margin-bottom: 1.5rem;
}

.service-features {
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
}

.service-features li {
  padding: 0.25rem 0;
  color: var(--color-text-secondary);
  position: relative;
  padding-left: 1rem;
}

.service-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--color-accent);
  font-weight: bold;
}

.service-price {
  font-weight: 600;
  font-size: 1.1rem;
  color: var(--color-accent);
  text-align: center;
  padding: 0.75rem;
  background-color: var(--color-bg-secondary);
  border-radius: 0.5rem;
}

.process-section {
  margin-bottom: 4rem;
}

.process-section h2 {
  text-align: center;
  margin-bottom: 2rem;
}

.process-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.process-step {
  text-align: center;
  padding: 1.5rem;
}

.step-number {
  width: 3rem;
  height: 3rem;
  background-color: var(--color-accent);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
  margin: 0 auto 1rem;
}

.process-step h4 {
  margin-bottom: 0.5rem;
  color: var(--color-text-primary);
}

.process-step p {
  color: var(--color-text-secondary);
  line-height: 1.4;
}

.cta-section {
  text-align: center;
  padding: 3rem 2rem;
  background-color: var(--color-bg-primary);
  border-radius: 0.75rem;
  border: 1px solid var(--color-border-light);
}

.cta-section h2 {
  margin-bottom: 1rem;
  color: var(--color-text-primary);
}

.cta-section p {
  color: var(--color-text-secondary);
  margin-bottom: 2rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.cta-button {
  background-color: var(--color-accent);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    transform 0.2s ease;
}

.cta-button:hover {
  background-color: var(--color-accent-dark);
  transform: translateY(-2px);
}
</style>
