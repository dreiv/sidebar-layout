<template>
  <div class="view-container">
    <h1><MessageSquare class="view-header-icon" /> Messages</h1>
    <div class="content-section">
      <div class="messages-header">
        <div class="search-bar">
          <input
            type="text"
            placeholder="Search conversations..."
            v-model="searchQuery"
            class="search-input"
          />
        </div>
        <button class="new-message-btn" @click="showNewMessage = !showNewMessage">
          New Message
        </button>
      </div>

      <div class="messages-layout">
        <div class="conversations-list">
          <h3>Conversations</h3>
          <div
            v-for="conversation in filteredConversations"
            :key="conversation.id"
            class="conversation-item"
            :class="{ active: selectedConversation?.id === conversation.id }"
            @click="selectConversation(conversation)"
          >
            <div class="conversation-avatar">{{ conversation.avatar }}</div>
            <div class="conversation-details">
              <h4>{{ conversation.name }}</h4>
              <p class="last-message">{{ conversation.lastMessage }}</p>
              <span class="message-time">{{ conversation.time }}</span>
            </div>
            <div v-if="conversation.unread > 0" class="unread-badge">
              {{ conversation.unread }}
            </div>
          </div>
        </div>

        <div class="message-area">
          <div v-if="selectedConversation" class="chat-container">
            <div class="chat-header">
              <div class="chat-user">
                <span class="user-avatar">{{ selectedConversation.avatar }}</span>
                <div>
                  <h4>{{ selectedConversation.name }}</h4>
                  <span class="user-status">{{ selectedConversation.status }}</span>
                </div>
              </div>
            </div>

            <div class="messages-container">
              <div
                v-for="message in selectedConversation.messages"
                :key="message.id"
                class="message"
                :class="{ 'own-message': message.isOwn }"
              >
                <div class="message-content">
                  <p>{{ message.text }}</p>
                  <span class="message-timestamp">{{ message.timestamp }}</span>
                </div>
              </div>
            </div>

            <div class="message-input-area">
              <input
                type="text"
                placeholder="Type a message..."
                v-model="newMessage"
                @keyup.enter="sendMessage"
                class="message-input"
              />
              <button @click="sendMessage" class="send-btn">Send</button>
            </div>
          </div>

          <div v-else class="no-conversation">
            <h3>Select a conversation to start messaging</h3>
            <p>Choose from your existing conversations or start a new one.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { MessageSquare } from 'lucide-vue-next'

const searchQuery = ref('')
const showNewMessage = ref(false)
const newMessage = ref('')
const selectedConversation = ref<any>(null)

const conversations = ref([
  {
    id: 1,
    name: 'Sarah Johnson',
    avatar: '👩‍💼',
    lastMessage: 'Thanks for the update on the project',
    time: '2 min ago',
    unread: 2,
    status: 'Online',
    messages: [
      { id: 1, text: 'Hey, how is the project going?', isOwn: false, timestamp: '10:30 AM' },
      {
        id: 2,
        text: "Going well! We're on track for the deadline",
        isOwn: true,
        timestamp: '10:32 AM',
      },
      { id: 3, text: 'Thanks for the update on the project', isOwn: false, timestamp: '10:35 AM' },
    ],
  },
  {
    id: 2,
    name: 'Development Team',
    avatar: '👥',
    lastMessage: 'Code review completed',
    time: '1 hour ago',
    unread: 0,
    status: 'Active',
    messages: [
      { id: 1, text: 'New PR is ready for review', isOwn: false, timestamp: '9:15 AM' },
      { id: 2, text: "I'll take a look now", isOwn: true, timestamp: '9:20 AM' },
      { id: 3, text: 'Code review completed', isOwn: false, timestamp: '9:45 AM' },
    ],
  },
  {
    id: 3,
    name: 'Mike Chen',
    avatar: '👨‍🎨',
    lastMessage: 'Design mockups are ready',
    time: '3 hours ago',
    unread: 1,
    status: 'Away',
    messages: [
      { id: 1, text: 'Working on the new designs', isOwn: false, timestamp: '8:00 AM' },
      { id: 2, text: 'Sounds good, let me know when ready', isOwn: true, timestamp: '8:05 AM' },
      { id: 3, text: 'Design mockups are ready', isOwn: false, timestamp: '8:30 AM' },
    ],
  },
  {
    id: 4,
    name: 'Client Support',
    avatar: '🎧',
    lastMessage: 'Issue has been resolved',
    time: '1 day ago',
    unread: 0,
    status: 'Offline',
    messages: [
      {
        id: 1,
        text: 'Customer reported a login issue',
        isOwn: false,
        timestamp: 'Yesterday 2:00 PM',
      },
      { id: 2, text: 'Looking into it now', isOwn: true, timestamp: 'Yesterday 2:05 PM' },
      { id: 3, text: 'Issue has been resolved', isOwn: false, timestamp: 'Yesterday 3:30 PM' },
    ],
  },
])

const filteredConversations = computed(() => {
  if (!searchQuery.value) return conversations.value

  return conversations.value.filter((conv) =>
    conv.name.toLowerCase().includes(searchQuery.value.toLowerCase()),
  )
})

const selectConversation = (conversation: any) => {
  selectedConversation.value = conversation
  // Mark as read
  conversation.unread = 0
}

const sendMessage = () => {
  if (!newMessage.value.trim() || !selectedConversation.value) return

  const message = {
    id: Date.now(),
    text: newMessage.value,
    isOwn: true,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  }

  selectedConversation.value.messages.push(message)
  selectedConversation.value.lastMessage = newMessage.value
  selectedConversation.value.time = 'Just now'

  newMessage.value = ''
}
</script>

<style scoped>
.messages-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  gap: 1rem;
}

.search-bar {
  flex: 1;
  max-width: 300px;
}

.search-input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--color-border-light);
  border-radius: 0.5rem;
  font-size: 0.9rem;
}

.new-message-btn {
  background-color: var(--color-accent);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: 600;
}

.messages-layout {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 2rem;
  height: 600px;
}

.conversations-list {
  border: 1px solid var(--color-border-light);
  border-radius: 0.5rem;
  overflow-y: auto;
}

.conversations-list h3 {
  padding: 1rem;
  margin: 0;
  border-bottom: 1px solid var(--color-border-light);
  background-color: var(--color-bg-secondary);
}

.conversation-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  border-bottom: 1px solid var(--color-border-light);
  cursor: pointer;
  transition: background-color 0.2s ease;
  position: relative;
}

.conversation-item:hover {
  background-color: var(--color-bg-secondary);
}

.conversation-item.active {
  background-color: var(--color-accent);
  color: white;
}

.conversation-avatar {
  font-size: 2rem;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-bg-tertiary);
  border-radius: 50%;
}

.conversation-details {
  flex: 1;
  min-width: 0;
}

.conversation-details h4 {
  margin: 0 0 0.25rem 0;
  font-size: 0.95rem;
}

.last-message {
  margin: 0 0 0.25rem 0;
  font-size: 0.85rem;
  color: var(--color-text-secondary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.message-time {
  font-size: 0.75rem;
  color: var(--color-text-tertiary);
}

.unread-badge {
  background-color: var(--color-accent);
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 600;
}

.message-area {
  border: 1px solid var(--color-border-light);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
}

.chat-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.chat-header {
  padding: 1rem;
  border-bottom: 1px solid var(--color-border-light);
  background-color: var(--color-bg-secondary);
}

.chat-user {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.user-avatar {
  font-size: 2rem;
}

.user-status {
  font-size: 0.8rem;
  color: var(--color-text-secondary);
}

.messages-container {
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.message {
  display: flex;
}

.message.own-message {
  justify-content: flex-end;
}

.message-content {
  max-width: 70%;
  padding: 0.75rem 1rem;
  border-radius: 1rem;
  background-color: var(--color-bg-secondary);
}

.own-message .message-content {
  background-color: var(--color-accent);
  color: white;
}

.message-timestamp {
  font-size: 0.7rem;
  opacity: 0.7;
  display: block;
  margin-top: 0.25rem;
}

.message-input-area {
  display: flex;
  gap: 0.5rem;
  padding: 1rem;
  border-top: 1px solid var(--color-border-light);
}

.message-input {
  flex: 1;
  padding: 0.75rem;
  border: 1px solid var(--color-border-light);
  border-radius: 0.5rem;
}

.send-btn {
  background-color: var(--color-accent);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
}

.no-conversation {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: var(--color-text-secondary);
}

@media (max-width: 768px) {
  .messages-layout {
    grid-template-columns: 1fr;
    grid-template-rows: 200px 1fr;
  }
}
</style>
