export class SessionManager {
  private static instance: SessionManager;
  private currentSessionId: string | null = null;

  private constructor() {}

  static getInstance(): SessionManager {
    if (!SessionManager.instance) {
      SessionManager.instance = new SessionManager();
    }
    return SessionManager.instance;
  }

  // Generate a new session ID
  generateSessionId(): string {
    const timestamp = Date.now();
    const randomString = Math.random().toString(36).substring(2, 15);
    return `session_${timestamp}_${randomString}`;
  }

  // Start a new session
  startNewSession(): string {
    this.currentSessionId = this.generateSessionId();
    return this.currentSessionId;
  }

  // Get current session ID
  getCurrentSessionId(): string | null {
    return this.currentSessionId;
  }

  // Get or create session ID
  getOrCreateSessionId(): string {
    if (!this.currentSessionId) {
      this.currentSessionId = this.generateSessionId();
    }
    return this.currentSessionId;
  }

  // Reset session
  resetSession(): void {
    this.currentSessionId = null;
  }

  // Check if session exists
  hasActiveSession(): boolean {
    return this.currentSessionId !== null;
  }
}

// Export singleton instance
export const sessionManager = SessionManager.getInstance();